"use client";

type LanguageSelectProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  selectClassName?: string;
  chevronClassName?: string;
};

export default function LanguageSelect({
  id = "language",
  value = "en",
  onChange,
  className = "",
  selectClassName = "",
  chevronClassName = "",
}: LanguageSelectProps) {
  return (
    <div className={`relative ${className}`}>
      <label className="sr-only" htmlFor={id}>
        Language
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className={`h-9 appearance-none rounded-full border border-border bg-bg px-4 pr-9 text-[13px] font-medium text-secondary transition focus:outline-none focus:ring-2 focus:ring-accent/30 ${selectClassName}`}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
      <span
        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted ${chevronClassName}`}
      >
        ▾
      </span>
    </div>
  );
}
