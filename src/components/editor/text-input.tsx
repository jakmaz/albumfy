import { cn } from "@/lib/utils";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextInput = ({ label, value, onChange, placeholder }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b-2 border-neutral-300 bg-transparent py-2 text-sm font-sans outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
      />
    </div>
  );
};
