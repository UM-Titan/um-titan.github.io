import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { People } from './components/People';
import { Teaching } from './components/Teaching';
import { Recognitions } from './components/Recognitions';
import { Service } from './components/Service';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import * as content from './data/content';

const navItems = [
  { id: 'research', label: 'Research' },
  { id: 'people', label: 'People' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'recognitions', label: 'Recognitions' },
  { id: 'service', label: 'Service' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const { profile } = content;
  return (
    <>
      <Nav
        brand={profile.labAcronym}
        brandSub={profile.shortName}
        items={navItems}
        cvUrl={profile.cvUrl}
      />
      <main>
        <Hero profile={profile} />
        <Research thrusts={content.research} />
        <People current={content.currentMembers} alumni={content.alumni} note={content.peopleNote} />
        <Teaching courses={content.courses} />
        <Recognitions items={content.recognitions} />
        <Service groups={content.serviceGroups} media={content.media} />
        <Publications
          items={content.publications}
          groupBefore={content.pubGroupBefore}
          scholarUrl={content.scholarUrl}
        />
      </main>
      <Contact contact={content.contact} labName={profile.labName} />
    </>
  );
}
