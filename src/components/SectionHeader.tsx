interface Props {
  title: string;
  kicker?: string;
}

export function SectionHeader({ title, kicker }: Props) {
  return (
    <header className="section-header">
      {kicker && <span className="eyebrow">{kicker}</span>}
      <div className="section-header__row">
        <h2>{title}</h2>
        <span className="section-header__rule" aria-hidden="true" />
      </div>
    </header>
  );
}
