create extension if not exists pgcrypto;

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  customer_phone text not null,
  requested_service text not null,
  requested_date date not null,
  status text not null default 'new',
  sms_opt_in boolean not null default true,
  reminder_status text not null default 'pending',
  next_reminder_at timestamptz,
  reminder_sent_at timestamptz,
  reminder_message_id text
);

alter table public.bookings enable row level security;

-- Public insert via server endpoint only (recommended).
-- If you later use anon client-side inserts, add an explicit policy for authenticated/anon roles.

create index if not exists idx_bookings_requested_date on public.bookings (requested_date);
create index if not exists idx_bookings_reminder_status on public.bookings (reminder_status, next_reminder_at);