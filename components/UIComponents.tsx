import React from 'react';

// Industrial Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "font-mono font-bold text-sm uppercase px-6 py-3 border-2 border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none";

  const variants = {
    primary: "bg-industrial-accent text-white shadow-hard hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-industrial-black text-white shadow-hard",
    outline: "bg-transparent text-black shadow-hard hover:bg-gray-100",
    danger: "bg-red-600 text-white shadow-hard border-red-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Industrial Card
export const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white border-2 border-black shadow-hard p-6 ${className}`}>
      {title && (
        <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-center">
          <h3 className="font-sans font-black text-xl uppercase tracking-tighter">{title}</h3>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-industrial-accent"></div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

// Data Badge
export const Badge: React.FC<{ children: React.ReactNode; color?: 'gray' | 'orange' | 'green' | 'black' }> = ({ children, color = 'gray' }) => {
  const colors = {
    gray: "bg-gray-200 text-black",
    orange: "bg-orange-200 text-orange-900",
    green: "bg-green-200 text-green-900",
    black: "bg-black text-white"
  };
  return (
    <span className={`${colors[color]} border border-black font-mono text-xs px-2 py-1 uppercase whitespace-nowrap`}>
      {children}
    </span>
  );
};

// Table Component
export const Table: React.FC<{ headers: string[]; children: React.ReactNode }> = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto border-2 border-black shadow-hard-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-industrial-black text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 font-mono text-xs md:text-sm uppercase tracking-wider border-r border-gray-600 last:border-r-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-black font-mono text-xs md:text-sm">
          {children}
        </tbody>
      </table>
    </div>
  );
};

// Tabs Component
export const Tabs: React.FC<{ tabs: string[]; activeTab: number; onChange: (i: number) => void }> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 border-b-2 border-black pb-4 mb-6">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`font-mono text-xs md:text-sm font-bold uppercase px-4 py-2 border-2 border-black transition-all ${activeTab === i
              ? 'bg-industrial-accent text-white shadow-hard -translate-y-1'
              : 'bg-white text-black hover:bg-gray-100'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
