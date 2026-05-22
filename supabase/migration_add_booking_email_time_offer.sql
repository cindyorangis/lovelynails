alter table public.bookings add column if not exists customer_email text;
alter table public.bookings add column if not exists requested_time time;
alter table public.bookings add column if not exists claimed_offer boolean not null default false;

update public.bookings
set customer_email = coalesce(customer_email, 'unknown@example.com')
where customer_email is null;

alter table public.bookings alter column customer_email set not null;