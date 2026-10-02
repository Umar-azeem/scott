// app/loan-programs/layout.tsx
"use client";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LoanProgramsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </div>
    </div>
  );
}