import type { Recognition } from '../types';
import { SectionHeader } from './SectionHeader';

export function Recognitions({ items }: { items: Recognition[] }) {
  return (
    <section id="recognitions" className="section section--dark">
      <div className="container">
        <SectionHeader title="Recognitions" />
        <ul className="awards">
          {items.map((r) => (
            <li key={r.year + r.title}>
              <span className="awards__year">{r.year}</span>
              <span className="awards__title">{r.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
