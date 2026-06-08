export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export const container = "mx-auto w-[min(1100px,92vw)]";

export const pageStack = "grid gap-[1.4rem] pt-12 pb-16";

export const card =
  "rounded-[0.9rem] border border-[var(--border)] bg-[var(--surface)] p-4";

export const cardGrid =
  "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4";

export const button =
  "inline-block rounded-[0.6rem] border border-[var(--border)] px-4 py-[0.72rem] font-bold";

export const buttonPrimary = cn(
  button,
  "border-[var(--primary)] bg-[var(--primary)] text-white hover:bg-[var(--primary-deep)]",
);

export const buttonSecondary = cn(button, "bg-white");

export const ctaRow = "mt-[1.3rem] flex flex-wrap gap-[0.8rem]";

export const inlineLink =
  "text-sm text-inherit underline underline-offset-[3px] opacity-70 transition-opacity hover:opacity-100";

export const mutedNote = "m-0 text-[0.88rem] text-[var(--muted)]";
