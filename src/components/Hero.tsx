import type { Profile } from '../types';

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--gold">{profile.eyebrow}</span>
          <h1>
            {profile.headline}{' '}
            <em>{profile.headlineAccent}</em>
            {profile.headlineTail ? ` ${profile.headlineTail}` : ''}
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a href="#research" className="btn btn--gold">
              Explore the research
            </a>
            <a href="#publications" className="btn btn--ghost">
              Publications ↓
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          {profile.photo ? (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          ) : (
            <div className="hero__placeholder" aria-label="Photo placeholder">
              <span>{profile.labAcronym}</span>
              <small>Add a portrait at public/photo.jpg</small>
            </div>
          )}
          <figcaption>
            {profile.name}
            <span>Director, {profile.labName}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
