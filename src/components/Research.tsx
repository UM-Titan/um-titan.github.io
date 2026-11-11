import type { ResearchThrust } from '../types';
import { SectionHeader } from './SectionHeader';

export function Research({ thrusts }: { thrusts: ResearchThrust[] }) {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeader title="Research thrusts" />
        <ol className="thrusts">
          {thrusts.map((t, i) => (
            <li key={t.title} className="thrust">
              <span className="thrust__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
              </div>
              {t.keyWork.length > 0 && (
                <aside className="thrust__key">
                  <h4 className="eyebrow">Key work</h4>
                  <ul>
                    {t.keyWork.map((k) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                </aside>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
