-- ─────────────────────────────────────────────────────────────────
-- Lovely Nails — bookings table
-- Run in: Supabase dashboard → SQL Editor, or via `supabase db push`
-- ─────────────────────────────────────────────────────────────────

create table if not exists public.bookings (
  id            uuid primary key default gen_random_uuid(),

  -- Client info
  name          text not null,
  phone         text not null,
  email         text not null,

  -- Appointment
  preferred_date  date not null,
  preferred_time  time not null,

  -- Services is a text array — each element is "Category|Service Name"
  -- e.g. '{"Manicure|Manicure Shellac","Pedicure|Deluxe Pedicure"}'
  services      text[] not null default '{}',

  -- Promotions
  coupon_code   text,

  -- Status lifecycle: pending → confirmed → completed | cancelled
  status        text not null default 'pending'
                check (status in ('pending', 'confirmed', 'completed', 'cancelled')),

  -- Metadata
  notes         text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Auto-update updated_at on any row change
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger bookings_updated_at
  before update on public.bookings
  for each row execute procedure public.set_updated_at();

-- Indexes useful for the admin dashboard (filter by date, status)
create index if not exists bookings_preferred_date_idx on public.bookings (preferred_date);
create index if not exists bookings_status_idx         on public.bookings (status);
create index if not exists bookings_email_idx          on public.bookings (email);

-- ── Row-Level Security ───────────────────────────────────────────
-- The booking form hits /api/bookings (server-side) using the
-- SERVICE_ROLE key, which bypasses RLS. Public anon users cannot
-- read or write bookings directly from the client.

alter table public.bookings enable row level security;

-- No public policies — all access goes through the server route.
-- Add an admin policy here if you build a Supabase Auth–based dashboard:
--
-- create policy "Admin full access"
--   on public.bookings for all
--   using (auth.role() = 'service_role');