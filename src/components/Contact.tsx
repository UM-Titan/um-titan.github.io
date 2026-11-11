import type { Contact as ContactInfo } from '../types';

interface Props {
  contact: ContactInfo;
  labName: string;
}

export function Contact({ contact, labName }: Props) {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title">
          Contact <em>&amp; join us</em>
        </h2>
        <div className="contact__grid">
          <div>
            <h4 className="eyebrow eyebrow--gold">Email</h4>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {contact.phone && (
              <>
                <h4 className="eyebrow eyebrow--gold">Office</h4>
                <p>{contact.phone}</p>
              </>
            )}
          </div>
          <div>
            <h4 className="eyebrow eyebrow--gold">Address</h4>
            <address>
              {contact.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
          <div>
            <h4 className="eyebrow eyebrow--gold">Elsewhere</h4>
            <ul className="contact__links">
              {contact.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="contact__fine">
          © {new Date().getFullYear()} {labName} · University of Missouri
        </p>
      </div>
    </footer>
  );
}
