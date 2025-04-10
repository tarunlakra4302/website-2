"use client";

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="px-6 py-2 font-medium text-sm uppercase tracking-widest border-t border-b border-gray-200">
        {title}
      </div>
    </div>
  );
}
