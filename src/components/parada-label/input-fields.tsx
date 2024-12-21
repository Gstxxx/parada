import { DateInputField } from "./date-input-field";

export function InputFields() {
  return (
    <div className="flex-1 space-y-1">
      <div className="bg-white/95 rounded grid grid-cols-2 items-start justify-start gap-1 w-full p-1">
        <p className="text-xs font-medium text-[#4A1515]">Sabor:</p>
        <input
          type="text"
          className="w-full border-none focus:ring-0 p-0 bg-transparent text-xs"
          placeholder=""
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <DateInputField label="FAB." />
        <DateInputField label="VAL." />
      </div>
    </div>
  );
}
