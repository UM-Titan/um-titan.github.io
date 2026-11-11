import type { MediaItem, ServiceItem } from '../types';
import { SectionHeader } from './SectionHeader';

interface ServiceGroup {
  heading: string;
  items: ServiceItem[];
}

interface Props {
  groups: ServiceGroup[];
  media: MediaItem[];
}

function ServiceList({ heading, items }: { heading: string; items: ServiceItem[] }) {
  return (
    <div>
      <h4 className="eyebrow">{heading}</h4>
      <ul className="service-list">
        {items.map((s) => (
          <li key={s.role + s.org}>
            <strong>{s.role}</strong>
            <span className="muted">{s.org}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Service({ groups, media }: Props) {
  return (
    <section id="service" className="section">
      <div className="container">
        <SectionHeader title="Service & outreach" />
        <div className="two-col">
          {groups.map((g) => (
            <ServiceList key={g.heading} heading={g.heading} items={g.items} />
          ))}
        </div>

        {media.length > 0 && (
          <>
            <h4 className="eyebrow media-heading">In the news</h4>
            <div className="media">
              {media.map((m) => (
                <a key={m.url} href={m.url} target="_blank" rel="noreferrer" className="media__item">
                  <span className="media__outlet">{m.outlet} ↗</span>
                  <span>{m.title}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
