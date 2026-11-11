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
                {t.keyWork.length > 0 && (
                  <p className="thrust__key">
                    <strong>Key work</strong> · {t.keyWork.join(' · ')}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
