interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export const ComparisonTable = ({ headers, rows }: ComparisonTableProps) => {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-card">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-5 py-3 font-bold text-foreground border-b border-border text-xs uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-card/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3 text-foreground/85 leading-relaxed">
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