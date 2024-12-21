interface DateInputFieldProps {
  label: string;
}

export function DateInputField({ label }: DateInputFieldProps) {
  return (
    <div className="bg-white/95 rounded grid grid-cols-2 items-start justify-start gap-1 p-1">
      <p className="text-xs font-medium text-[#4A1515]">{label}</p>
      <input
        type="text"
        className="w-full border-none focus:ring-0 p-0 bg-transparent text-xs text-[#4A1515]"
        placeholder="__/__/____"
      />
    </div>
  );
}
