import { useEffect, useState } from 'react';
import type { NavItem } from '../types';

interface Props {
  brand: string;
  brandSub: string;
  items: NavItem[];
  cvUrl?: string;
}

export function Nav({ brand, brandSub, items, cvUrl }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            {brand}
          </span>
          <span className="nav__brand-sub">{brandSub}</span>
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <ul id="nav-links" className={`nav__links${open ? ' is-open' : ''}`}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {cvUrl && (
            <li>
              <a href={cvUrl} className="nav__cv" target="_blank" rel="noreferrer">
                CV ↗
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
