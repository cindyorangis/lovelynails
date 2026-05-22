# Supabase Setup

## 1) Environment variables
Create `.env.local` in project root:

```bash
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Do not expose it in `NEXT_PUBLIC_` vars.

## 2) Create table
Run `supabase/schema.sql` in Supabase SQL editor.

## 3) Booking flow
- Frontend submits to `POST /api/bookings`
- Next.js route validates data
- Route inserts into `public.bookings`
- Record is created with `reminder_status='pending'` and `next_reminder_at` set to 24h before appointment

## 4) SMS reminder path (next step)
When ready, add a scheduled job (Supabase cron, Edge Function, or external worker) that:
1. Queries rows where `reminder_status='pending'` and `next_reminder_at <= now()`
2. Sends SMS via Twilio
3. Updates `reminder_status='sent'`, `reminder_sent_at`, `reminder_message_id`

## 5) Suggested future columns
If needed later:
- `timezone` (default `America/Toronto`)
- `appointment_time` (time)
- `sms_provider` (e.g., twilio)