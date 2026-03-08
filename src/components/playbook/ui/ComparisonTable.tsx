interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export const ComparisonTable = ({ headers, rows }: ComparisonTableProps) => {
  return (
    <div className="my-6 overflow-x-auto clay-card overflow-hidden">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="bg-accent">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-5 py-3.5 font-display text-foreground border-b border-border">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-accent/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-foreground/80 leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};