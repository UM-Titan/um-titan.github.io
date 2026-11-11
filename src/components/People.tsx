import type { Alum, Person } from '../types';
import { SectionHeader } from './SectionHeader';

interface Props {
  current: Person[];
  alumni: Alum[];
  note?: string;
}

export function People({ current, alumni, note }: Props) {
  return (
    <section id="people" className="section section--tint">
      <div className="container">
        <SectionHeader title="People" />
        <div className="two-col">
          <div>
            <h4 className="eyebrow">Current group</h4>
            <ul className="list-rows">
              {current.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong> <span className="muted">— {p.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow">Alumni &amp; placements</h4>
            <ul className="list-rows">
              {alumni.map((a) => (
                <li key={a.name + a.degree}>
                  <strong>{a.name}</strong>{' '}
                  <span className="muted">
                    — {a.degree}
                    {a.placement && <> → {a.placement}</>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {note && <p className="callout">{note}</p>}
      </div>
    </section>
  );
}
