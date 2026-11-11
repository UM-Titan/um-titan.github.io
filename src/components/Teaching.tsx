import type { Course } from '../types';
import { SectionHeader } from './SectionHeader';

export function Teaching({ courses }: { courses: Course[] }) {
  return (
    <section id="teaching" className="section">
      <div className="container">
        <SectionHeader title="Teaching" />
        <div className="cards">
          {courses.map((c) => (
            <article key={c.code} className="card">
              <span className="card__code">{c.code}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
