type BadgeProps = {
  children: React.ReactNode;
  variant?: "sage" | "gold" | "forest" | "champagne";
  className?: string;
};

export function Badge({ children, variant = "sage", className = "" }: BadgeProps) {
  const variants = {
    sage: "bg-[#A9B7A4]/20 text-[#243C32] border border-[#A9B7A4]/30",
    gold: "bg-[#B69A65]/15 text-[#B69A65] border border-[#B69A65]/30",
    forest: "bg-[#243C32]/10 text-[#243C32] border border-[#243C32]/20",
    champagne: "bg-[#E8DCCB] text-[#262622] border border-[#E8DCCB]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-body font-medium tracking-widest uppercase rounded-none ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
