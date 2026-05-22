# Supabase Setup

## 1) Environment variables

Create `.env.local` in project root:

```bash
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
RESEND_API_KEY=YOUR_RESEND_API_KEY
BOOKING_FROM_EMAIL=bookings@yourdomain.com
```

Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Do not expose it in `NEXT_PUBLIC_` vars.

## 2) Create table

Run `supabase/schema.sql` in Supabase SQL editor.

If your table already exists, run `supabase/migration_add_booking_email_time_offer.sql`.

## 3) Booking flow

- Frontend submits to `POST /api/bookings`
- Next.js route validates data (name, phone, email, service, date, time)
- Route inserts into `public.bookings`
- If offer is selected, `claimed_offer=true` is stored
- Confirmation email is sent via Resend when env vars are configured
- Record is created with `reminder_status='pending'` and `next_reminder_at` set to 24h before appointment

## 4) SMS reminder path (next step)

When ready, add a scheduled job (Supabase cron, Edge Function, or external worker) that:

1. Queries rows where `reminder_status='pending'` and `next_reminder_at <= now()`
2. Sends SMS via Twilio
3. Updates `reminder_status='sent'`, `reminder_sent_at`, `reminder_message_id`
