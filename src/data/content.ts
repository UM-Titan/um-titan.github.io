/**
 * All site content lives here. Edit this file to update the website.
 * Sources: Mizzou faculty profile, NSF award #2045786, Mizzou Engineering news,
 * Google Scholar, OpenAlex/Crossref (DOIs). Items marked TODO need confirmation.
 */
import type {
  Alum,
  Contact,
  Course,
  MediaItem,
  Person,
  Profile,
  Publication,
  Recognition,
  ResearchThrust,
  ServiceItem,
} from '../types';

export const scholarUrl = 'https://scholar.google.com/citations?user=-C5LLqQAAAAJ';

export const profile: Profile = {
  name: 'Yaw Adu-Gyamfi, PhD',
  shortName: 'Yaw Adu-Gyamfi, PhD',
  labName: 'Titan Lab',
  labAcronym: 'TITAN',
  eyebrow: 'Civil & Environmental Engineering · University of Missouri',
  headline: 'Interactive, explainable AI for',
  headlineAccent: 'safer, smarter transportation',
  intro:
    'Yaw Adu-Gyamfi, PhD, is an Associate Professor of Civil and Environmental Engineering at the University of Missouri. ' +
    'The Titan Lab builds computer vision, sensor fusion, and big-data analytics that turn cameras, LiDAR, and ' +
    'connected-vehicle data into decisions — making roads, work zones, and pavements safer, more resilient, and more efficient.',
  photo: `${import.meta.env.BASE_URL}photo.jpg`,
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
};

export const research: ResearchThrust[] = [
  {
    title: 'AI and computer vision for pavement and infrastructure condition',
    summary:
      'Automated detection and pixel-level segmentation of cracks and potholes; PaveSAM, which adapts foundation models to ' +
      'pavement distress with low-cost labels; diffusion models that remove complex shadows from pavement imagery; ' +
      'vision-language models that explain condition ratings; and LiDAR/NeRF methods for ADA-compliant sidewalk assessment.',
    keyWork: [
      'Construction and Building Materials (2020)',
      'Road Materials and Pavement Design (2024)',
      'Automation in Construction (2025)',
      'Transportation Research Record (2025, 2026)',
    ],
  },
  {
    title: 'LiDAR–camera fusion and high-resolution traffic sensing',
    summary:
      'Fusing low-cost LiDAR with cameras for omnidirectional depth perception, 3D object detection, and high-resolution ' +
      'traffic parameter extraction; automated FHWA vehicle classification; and camera-based prediction of traffic sign ' +
      'retroreflectivity — affordable sensing that agencies can deploy at scale.',
    keyWork: [
      'J. Transportation Engineering, Part A (2025)',
      'Transportation Research Record (2023, 2026)',
      'TRB Young Scholar Award (2025)',
    ],
  },
  {
    title: 'Work zone and road-user safety',
    summary:
      'A camera-and-LiDAR audible alarm for truck-mounted attenuators that warns intruding drivers, delivered to MoDOT for ' +
      'deployment; work zone data exchange for automated driving systems in St. Charles County; and intersection analytics ' +
      'that track pedestrians, cyclists, and conflicts from CCTV and fisheye cameras.',
    keyWork: ['AI (2024)', 'ICCV Workshops (2025)', 'CVPR Workshops (2023)'],
  },
  {
    title: 'Big data, connected vehicles, and explainable AI',
    summary:
      'GPU pipelines that conflate a full day of statewide connected-vehicle data in minutes instead of days; real-time crash ' +
      'risk and network-wide traffic state estimation; the TITAN visual-analytics platform; and — the focus of an NSF CAREER ' +
      'award — LLM-powered assistants that let engineers query transportation data without writing code.',
    keyWork: [
      'J. Traffic and Transportation Engineering (2026)',
      'Sustainability (2022)',
      'Transp. Research Interdisciplinary Perspectives (2024)',
    ],
  },
];

// TODO: add expected-graduation years if desired.
export const currentMembers: Person[] = [
  { name: 'Tanner Wambui Muturi', detail: 'PhD, generative AI for pavement imagery & crack segmentation' },
  { name: 'Elizabeth Arthur', detail: 'PhD, vehicle detection, classification & active learning' },
  { name: 'Hang Du', detail: 'PhD, 3D reconstruction' },
  { name: 'Arthur Mukwaya', detail: 'PhD, connected & autonomous vehicles' },
  { name: 'David Kesse', detail: 'AI & intelligent transportation systems' },
];

export const alumni: Alum[] = [
  { name: 'Neema Jakisa Owor', degree: 'PhD', placement: 'Postdoc, University of Maryland, College Park' },
  { name: 'Armstrong Aboah', degree: 'PhD', placement: 'Assistant Professor, North Dakota State University' },
  { name: 'Maged Shoman', degree: 'PhD', placement: 'Research Assistant Professor, UT Chattanooga' },
  { name: 'Abdul Rashid Musah', degree: 'PhD', placement: 'Data Scientist' },
  { name: 'Linlin Zhang', degree: 'PhD 2024', placement: 'Postdoc, University of Missouri' },
  { name: 'Hamed Majidifard', degree: 'Postdoc', placement: 'Co-founder, Tiger Eye Engineering' },
];

export const peopleNote =
  'Through the NSF CAREER program alone, the lab has trained about 20 graduate and 26 undergraduate researchers, ' +
  'and runs a summer AI boot camp for high-school students with MoDOT and the FHWA National Summer Transportation Institute.';

// TODO: add course numbers/titles you teach. "CVENG 8160" comes from the lab GitHub; confirm its title.
export const courses: Course[] = [
  {
    code: 'CV_ENG 3100',
    title: 'Fundamentals of Transportation Engineering',
    description:
      'The core undergraduate introduction to transportation engineering: traffic flow and capacity, geometric design, ' +
      'intersection control, travel demand, and safety — the foundation for planning and operating modern road networks.',
  },
  {
    code: 'NEW',
    title: 'Urban Transportation Data Science',
    description:
      'A permanent course developed through the NSF CAREER program, teaching students to collect, process, and model ' +
      'large-scale transportation data with modern machine learning tools.',
  },
  {
    code: 'CVENG 8160',
    title: 'Graduate course (title to confirm)',
    description:
      'Graduate coursework in AI and data analytics for transportation, with hands-on projects published on the lab GitHub.',
  },
];

export const recognitions: Recognition[] = [
  { year: '2026', title: 'Senior Faculty Excellence in Research Award, Mizzou College of Engineering' },
  { year: '2025', title: 'TRB Young Scholar Award (lab students Zhang & Arthur)' },
  { year: '2025', title: '4th place worldwide, AI City Challenge track (lab team)' },
  { year: '2024', title: '2nd place, TRB Transportation Forecasting Competition (lab team)' },
  { year: '2023', title: 'Second runner-up, TRB AI Competition (lab team)' },
  { year: '2022', title: 'NSF I-Corps Spirit Award — Tiger Eye Engineering' },
  { year: '2021', title: 'National Science Foundation CAREER Award' },
];

export const serviceGroups: { heading: string; items: ServiceItem[] }[] = [
  {
    heading: 'Organizing & leadership',
    items: [
      { role: 'Organizing Committee', org: 'Data Science for Pavements Symposium (FHWA · MCTI · UNH)' },
      { role: 'Lead, Student Data Competition', org: 'Data Science for Pavements Symposium · 32 teams in 2024' },
      { role: 'Session Presider, Future of AI in Transportation', org: 'Transportation Research Board Annual Meeting · 2023' },
    ],
  },
  {
    heading: 'Partnerships & translation',
    items: [
      { role: 'Co-founder', org: 'Tiger Eye Engineering, LLC — AI pavement condition assessment' },
      { role: 'Project lead, $1.5M regional traffic management system', org: 'MoDOT · St. Charles County · East-West Gateway' },
      { role: 'PI, Work zone data exchange for automated driving', org: 'Federal Highway Administration · St. Charles County' },
    ],
  },
];

export const media: MediaItem[] = [
  {
    outlet: 'Mizzou Engineering',
    title: 'Researchers using lidar and AI to advance transportation engineering and safety',
    url: 'https://engineering.missouri.edu/2025/researchers-using-lidar-and-ai-to-advance-transportation-engineering-and-safety/',
  },
  {
    outlet: 'Mizzou Engineering',
    title: 'Engineering team develops autonomous alarm system for work zone vehicles',
    url: 'https://engineering.missouri.edu/2023/engineering-team-develops-autonomous-alarm-system-for-work-zone-vehicles/',
  },
  {
    outlet: 'Show Me Mizzou',
    title: 'Smart traffic: MU engineers awarded $1.5 million to improve safety and reduce congestion',
    url: 'https://showme.missouri.edu/2020/smart-traffic-mu-engineers-awarded-1-5-million-to-improve-traffic-safety-reduce-congestion/',
  },
  {
    outlet: 'Mizzou Engineering',
    title: 'Researchers keep their eyes on Missouri’s roads',
    url: 'https://engineering.missouri.edu/2025/researchers-keep-their-eyes-on-missouris-roads/',
  },
];

/** Filters show one chip per year from this year onward; earlier years are grouped. */
export const pubGroupBefore = 2023;

export const publications: Publication[] = [
  {
    year: 2026,
    title:
      'Multi-modal deep learning approach for comprehensive pavement condition evaluation using vision-language models',
    authors: 'Owor, N. J., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981261485241',
    featured: true,
  },
  {
    year: 2026,
    title: 'Automated FHWA vehicle classification system via LiDAR and camera data fusion',
    authors: 'Arthur, E., Zhang, L., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981261429868',
  },
  {
    year: 2026,
    title: 'A novel low-cost Double U-Net model for predicting traffic sign retro-intensity from camera data',
    authors: 'Zhang, L., Arachchilage, P. R., Yu, X., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981261433863',
  },
  {
    year: 2026,
    title:
      'A novel approach for accelerated and accurate spatial conflation of connected vehicle data on GPUs and its application to real-time statewide traffic state estimation',
    authors: 'Amo-Boateng, M., & Adu-Gyamfi, Y.',
    venue: 'Journal of Traffic and Transportation Engineering (English Edition)',
    url: 'https://doi.org/10.1016/j.jtte.2025.09.005',
  },
  {
    year: 2025,
    title:
      'Three-dimensional object detection and high-resolution traffic parameter extraction using low-resolution LiDAR data',
    authors: 'Zhang, L., Yu, X., Aboah, A., & Adu-Gyamfi, Y.',
    venue: 'Journal of Transportation Engineering, Part A: Systems',
    url: 'https://doi.org/10.1061/JTEPBS.TEENG-8662',
    featured: true,
  },
  {
    year: 2025,
    title:
      'Generative adversarial network for real-time identification and pixel-level annotation of highway pavement distresses',
    authors: 'Amo-Boateng, M., & Adu-Gyamfi, Y.',
    venue: 'Automation in Construction',
    url: 'https://doi.org/10.1016/j.autcon.2025.106122',
  },
  {
    year: 2025,
    title: 'Complex shadow removal in pavement imagery: Leveraging diffusion models for advanced solutions',
    authors: 'Muturi, T. W., Adu-Gyamfi, Y., & Kesse, D.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981251346165',
  },
  {
    year: 2025,
    title:
      "Enhanced crack segmentation using Meta's Segment Anything Model with low-cost ground truths and multimodal prompts",
    authors: 'Muturi, T., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981251322484',
  },
  {
    year: 2025,
    title: 'A unified detection pipeline for robust object detection in fisheye-based traffic surveillance',
    authors:
      'Owor, N. J., Asamoah, J. K., Muturi, T., Owor, A. J., Kyem, B. A., Danyo, A., Adu-Gyamfi, Y., & Aboah, A.',
    venue: 'ICCV Workshops',
    url: 'https://doi.org/10.1109/ICCVW69036.2025.00554',
    type: 'conference',
  },
  {
    year: 2025,
    title: 'Task-specific dual-model framework for comprehensive traffic safety video description and analysis',
    authors:
      'Kyem, B. A., Owor, N. J., Danyo, A., Asamoah, J. K., Denteh, E., Muturi, T., Dontoh, A., & Adu-Gyamfi, Y.',
    venue: 'ICCV Workshops',
    url: 'https://doi.org/10.1109/ICCVW69036.2025.00562',
    type: 'conference',
  },
  {
    year: 2025,
    title:
      'Evaluating neural radiance fields for ADA-compliant sidewalk assessments: A comparative study with LiDAR and manual methods',
    authors: 'Du, H., Wang, S., Zhang, L., Amo-Boateng, M., & Adu-Gyamfi, Y.',
    venue: 'Infrastructures',
    url: 'https://doi.org/10.3390/infrastructures10080191',
  },
  {
    year: 2025,
    title:
      'Feasibility and reliability assessment of inexpensive solid-state lidar for rutting measurement in asphalt pavement',
    authors: 'Behzadian, A., Zhang, L., Adu-Gyamfi, Y., & Buttlar, W. G.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981251336131',
  },
  {
    year: 2024,
    title: 'PaveSAM – Segment anything for pavement distress',
    authors: 'Owor, N. J., Adu-Gyamfi, Y., Aboah, A., & Amo-Boateng, M.',
    venue: 'Road Materials and Pavement Design',
    url: 'https://doi.org/10.1080/14680629.2024.2374863',
    featured: true,
  },
  {
    year: 2024,
    title: 'Automated audible truck-mounted attenuator alerts: Vision system development and evaluation',
    authors: 'Owor, N. J., Adu-Gyamfi, Y., Zhang, L., & Sun, C.',
    venue: 'AI',
    url: 'https://doi.org/10.3390/ai5040090',
    featured: true,
  },
  {
    year: 2024,
    title: 'Training vehicle detection and classification models with less data: An active learning approach',
    authors: 'Arthur, E., Muturi, T., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981241247046',
  },
  {
    year: 2024,
    title:
      'Extracting driving volatility from connected vehicle data in exploring space-time relationships with crashes in the city of Saint Louis',
    authors: 'Mussah, A. R., & Adu-Gyamfi, Y.',
    venue: 'Transportation Research Interdisciplinary Perspectives',
    url: 'https://doi.org/10.1016/j.trip.2024.101051',
  },
  {
    year: 2023,
    title: 'Real-time multi-class helmet violation detection using few-shot data sampling technique and YOLOv8',
    authors: 'Aboah, A., Wang, B., Bagci, U., & Adu-Gyamfi, Y.',
    venue: 'CVPR Workshops',
    url: 'https://doi.org/10.1109/CVPRW59228.2023.00564',
    featured: true,
    type: 'conference',
  },
  {
    year: 2023,
    title: 'Spatio-temporal fusion of LiDAR and camera data for omnidirectional depth perception',
    authors: 'Zhang, L., Yu, X., Adu-Gyamfi, Y., & Sun, C.',
    venue: 'Transportation Research Record',
    url: 'https://doi.org/10.1177/03611981231184187',
  },
  {
    year: 2022,
    title: 'Machine learning framework for real-time assessment of traffic safety utilizing connected vehicle data',
    authors: 'Mussah, A. R., & Adu-Gyamfi, Y.',
    venue: 'Sustainability',
    url: 'https://doi.org/10.3390/su142215348',
  },
  {
    year: 2021,
    title: 'A survey on driver behavior analysis from in-vehicle cameras',
    authors: 'Wang, et al. (incl. Adu-Gyamfi, Y.)', // TODO: full author list
    venue: 'IEEE Transactions on Intelligent Transportation Systems',
    url: 'https://doi.org/10.1109/TITS.2021.3126231',
  },
  {
    year: 2021,
    title: 'A vision-based system for traffic anomaly detection using deep learning and decision trees',
    authors: 'Aboah, A., et al. (incl. Adu-Gyamfi, Y.)', // TODO: full author list
    venue: 'CVPR Workshops',
    url: 'https://doi.org/10.1109/CVPRW53098.2021.00475',
    type: 'conference',
  },
  {
    year: 2020,
    title: 'Artificial intelligence-enabled traffic monitoring system',
    authors: 'Mandal, V., Mussah, A. R., Jin, P., & Adu-Gyamfi, Y.',
    venue: 'Sustainability',
    url: 'https://doi.org/10.3390/su12219177',
  },
  {
    year: 2020,
    title: 'Deep machine learning approach to develop a new asphalt pavement condition index',
    authors: 'Majidifard, H., Adu-Gyamfi, Y., & Buttlar, W. G.',
    venue: 'Construction and Building Materials',
    url: 'https://doi.org/10.1016/j.conbuildmat.2020.118513',
    featured: true,
  },
];

export const contact: Contact = {
  email: 'adugyamfiy@missouri.edu',
  phone: '+1 573-882-7546',
  address: ['E3504 Lafferre Hall', 'University of Missouri', 'Columbia, MO 65211, USA'],
  links: [
    { label: 'Google Scholar', url: scholarUrl },
    { label: 'Mizzou faculty profile', url: 'https://engineering.missouri.edu/?p=3345' },
    { label: 'Lab GitHub', url: 'https://github.com/UM-Titan' },
    { label: 'ORCID', url: 'https://orcid.org/0000-0002-1924-9792' },
  ],
};
