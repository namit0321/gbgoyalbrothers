import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by product name or brand..."
        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-white
          py-4
          pl-14
          pr-5
          text-base
          shadow-sm
          transition-all
          duration-300
          placeholder:text-slate-400
          focus:border-blue-700
          focus:ring-4
          focus:ring-blue-100
          focus:outline-none
        "
      />

    </div>
  );
}