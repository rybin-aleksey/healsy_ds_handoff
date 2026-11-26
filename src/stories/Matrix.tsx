import type { CSSProperties, ReactNode } from 'react';

/** Variant grid in the style of the Figma showcase: purple property labels, dashed frame */
const label: CSSProperties = { font: '400 11px/14px Inter, sans-serif', color: '#9747ff', whiteSpace: 'nowrap' };

export function Matrix({ cols, rows, render, cellWidth }: {
  cols: string[];
  rows?: string[];
  render: (col: number, row: number) => ReactNode;
  cellWidth?: number;
}) {
  const r = rows ?? [''];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${rows ? 'auto ' : ''}repeat(${cols.length}, ${cellWidth ? cellWidth + 'px' : 'auto'})`, gap: 16, alignItems: 'center' }}>
      {rows && <span />}
      {cols.map((c) => <span key={c} style={{ ...label, textAlign: 'center' }}>{c}</span>)}
      {r.map((rowName, ri) => [
        rows ? <span key={`l${ri}`} style={label}>{rowName}</span> : null,
        ...cols.map((_, ci) => (
          <div key={`${ri}-${ci}`} style={{ outline: '1px dashed #9747ff', outlineOffset: 8, display: 'flex', justifyContent: 'center' }}>
            {render(ci, ri)}
          </div>
        )),
      ])}
    </div>
  );
}

/** Mobile-width frame to check adaptation 393…440 */
export function Phone({ width = 393, children, background = '#ffffff', padding = 24 }: { width?: number; children: ReactNode; background?: string; padding?: number }) {
  return (
    <div style={{ width, background, padding, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 0 0 1px #e4e7e7' }}>
      {children}
    </div>
  );
}

export const figma = (nodeId: string, text?: string) => ({
  docs: {
    description: {
      component: `Figma: [${nodeId}](https://www.figma.com/design/6sKLERpyny3kZzIBYMr1Zd/Healsy-%E2%80%93-Startup-MVP?node-id=${nodeId.replace(':', '-')})${text ? `. ${text}` : ''}`,
    },
  },
});
