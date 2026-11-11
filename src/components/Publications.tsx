import { useMemo, useState } from 'react';
import type { Publication } from '../types';
import { SectionHeader } from './SectionHeader';

interface Props {
  items: Publication[];
  /** Years older than this are grouped into one "earlier" filter. */
  groupBefore: number;
  scholarUrl?: string;
}

export function Publications({ items, groupBefore, scholarUrl }: Props) {
  const sorted = useMemo(() => [...items].sort((a, b) => b.year - a.year), [items]);
  const minYear = sorted.length ? sorted[sorted.length - 1].year : groupBefore;

  const filters = useMemo(() => {
    const years = [...new Set(sorted.map((p) => p.year))].filter((y) => y >= groupBefore);
    const f = ['All', 'Featured', ...years.map(String)];
    if (minYear < groupBefore) f.push(`${minYear}–${groupBefore - 1}`);
    return f;
  }, [sorted, groupBefore, minYear]);

  const [filter, setFilter] = useState('All');

  const shown = sorted.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    if (filter.includes('–')) return p.year < groupBefore;
    return String(p.year) === filter;
  });

  return (
    <section id="publications" className="section section--tint">
      <div className="container">
        <SectionHeader title="Publications" />
        <p className="pub-count">
          {shown.length} of {sorted.length} shown
          {scholarUrl && (
            <>
              {' · '}
              <a href={scholarUrl} target="_blank" rel="noreferrer">
                Full list on Google Scholar ↗
              </a>
            </>
          )}
        </p>

        <div className="chips" role="tablist" aria-label="Filter publications">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`chip${filter === f ? ' is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="pubs">
          {shown.map((p) => (
            <li key={p.title} className="pub">
              <span className="pub__year">{p.year}</span>
              <div>
                <h3 className="pub__title">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="pub__meta">
                  {p.authors} · <em>{p.venue}</em>
                  {p.featured && <span className="tag">featured</span>}
                  {p.type === 'conference' && <span className="tag tag--plain">conference</span>}
                  {p.type === 'report' && <span className="tag tag--plain">report</span>}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
