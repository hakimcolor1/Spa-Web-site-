type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-body font-medium tracking-[0.25em] uppercase mb-4 ${
        light ? "text-[#A9B7A4]" : "text-[#B69A65]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
