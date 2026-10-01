export const profile = {
  name: 'Héctor Pablo González Espinosa',
  shortName: 'Héctor Pablo González',
  role: 'Computer Science & Technology student',
  tagline: 'I build software and AI systems — from on-device ML and AI agents to multi-agent simulations and full-stack apps.',
  location: 'Monterrey, NL, Mexico',
  email: 'hepagoes@gmail.com',
  phone: '+52 811 553 7503',
  linkedin: 'https://www.linkedin.com/in/hector-pablo-gonzalez-espinosa-764121294/',
  github: 'https://github.com/hectorpablogzz',
  photo: '/pfp.jpeg',
  availability: 'Open to internship opportunities',
}

export const stats = [
  { value: '2', label: 'Internships at CEMEX' },
  { value: '4', label: 'Languages spoken' },
]

export const about = [
  'I study Computer Science and Technology at Tecnológico de Monterrey, and recently completed an exchange program at Kyoto University, where I took artificial intelligence courses. Much of my work has been software that people in the field use day to day, from cement plant staff to coffee technicians.',
  'My background spans full-stack development, applied machine learning and generative AI, AI agent tooling, and multi-agent simulation, built through corporate internships, hackathons, and industry-partnered projects. I am especially interested in computer architecture and AI systems.',
]

export const experience = [
  {
    company: 'CEMEX México · Soltek',
    role: 'Soltek Implant Intern — Process Automation',
    period: 'Jan 2026 – Mar 2026',
    location: 'Monterrey, Mexico',
    highlights: ['Worked as a Soltek implant intern within CEMEX, developing AI-focused process automation tools.'],
    projects: ['CRETAMail'],
  },
  {
    company: 'CEMEX México',
    role: 'Digital Center Intern',
    period: 'Jan 2025 – Jul 2025',
    location: 'Monterrey, Mexico',
    metric: { value: '2–3 h → 5 min', label: 'operations response time' },
    highlights: [
      'Helped create the Digital Center, a technology innovation hub for the CEMEX construction department.',
      'Worked with a cross-disciplinary team on digital transformation projects across 100+ locations nationwide.',
      'Automated operational reporting across those locations, cutting the operations team’s response time from 2–3 hours to about 5 minutes.',
      'Onboarded and trained plant managers and staff on a new checklist system, gathering requirements from stakeholders and writing user documentation.',
    ],
    projects: ['CRETA'],
  },
]

export const projectCategories = ['All', 'AI / ML', 'Mobile', 'Systems', 'Networking', 'IoT']

export const projects = [
  {
    title: 'CRETA',
    subtitle: 'GPS truck monitoring & alert system',
    context: 'CEMEX Digital Center internship',
    status: 'Still in use at CEMEX today',
    date: '2025',
    categories: ['Systems'],
    featured: true,
    metric: { value: '170+', label: 'cement trucks monitored' },
    summary:
      'An automated alert system that uses GPS data to oversee cement truck ETAs and routes, improving how the operations team monitors the fleet.',
    highlights: [
      'Built the system with a Python and Pandas data layer, a SQLite database, and REST APIs.',
      'Developed the web interface in HTML, CSS, and JavaScript.',
    ],
    tags: ['Python', 'Pandas', 'SQLite', 'REST APIs', 'JavaScript', 'HTML / CSS'],
  },
  {
    title: 'CRETAMail',
    subtitle: 'AI agent for operational reporting',
    context: 'Soltek internship at CEMEX',
    date: '2026',
    categories: ['AI / ML'],
    featured: true,
    summary: 'An AI-powered agent that automates operational reporting, built with Node.js, LangChain, and Ollama.',
    highlights: [
      'Developed the agent in Node.js, using LangChain for orchestration and Ollama to run the language model.',
      'Registered and configured the app in Microsoft Entra ID (Azure AD), setting up API permissions, OAuth scopes, and Microsoft Graph API access.',
    ],
    tags: ['Node.js', 'LangChain', 'Ollama', 'Entra ID', 'Microsoft Graph'],
  },
  {
    title: 'Bancoach',
    subtitle: 'AI financial assistant',
    context: 'HackMTY 2025 · built in under 36 hours',
    date: 'Oct 2025',
    categories: ['AI / ML'],
    featured: true,
    summary:
      'A three-layer AI financial assistant that gives natural-language access to personal financial data and Mexican economic indicators.',
    highlights: [
      'Built an MCP server letting LLMs call financial tools: transactions, credit, savings, exchange rates, and Banxico inflation data.',
      'Full stack with FastAPI, Next.js, Supabase and OpenRouter, containerized with Docker.',
    ],
    tags: ['Python', 'FastAPI', 'MCP', 'Next.js', 'Supabase', 'Docker'],
  },
  {
    title: 'PearCo (CaféCare)',
    subtitle: 'AI-powered coffee farming iOS app',
    context: 'Industry partner Kaapeh México · 6-person team',
    date: 'Oct 2025',
    categories: ['Mobile', 'AI / ML'],
    featured: true,
    metric: { value: '~467', label: 'farming families served' },
    summary:
      'An iOS app for coffee technicians in Chiapas that detects crop diseases like “broca del café” with an on-device Core ML classifier and a hands-free voice assistant.',
    highlights: [
      'Built the Caficultores (farmer management) and Reports modules full stack, SwiftUI front end to Flask API.',
      'Administered GitHub Projects for the team’s Scrum workflow across 3 sprints.',
      'Wrote unit tests across the app and researched Apple MLX for the classification pipeline.',
      'Flask REST API on Render backed by Supabase (PostgreSQL); MVC API and MVVM iOS architecture.',
    ],
    tags: ['Swift', 'SwiftUI', 'Core ML', 'Flask', 'Supabase'],
  },
  {
    title: 'Tráfico',
    subtitle: 'Multi-agent traffic simulation',
    context: 'Industry partner SEMEX · 6-person team',
    date: 'Dec 2025',
    categories: ['AI / ML', 'Systems'],
    featured: true,
    metric: { value: '2,372', label: 'vehicles / hour simulated' },
    summary:
      'Simulation of vehicles and adaptive traffic lights at two real Monterrey intersections, built from field-collected traffic data.',
    highlights: [
      'Directed graphs with Floyd-Warshall routing and queue-based heuristics that prioritize high-demand directions.',
      'Compared control strategies, including Q-learning, then chose a queue heuristic for performance and scaling without pre-training.',
      'Agents modeled in AgentPy and visualized in Unity.',
    ],
    tags: ['Python', 'AgentPy', 'Unity', 'Graphs', 'Q-learning'],
  },
  {
    title: 'SME Network Infrastructure',
    subtitle: 'Corporate network design',
    context: 'Industry partner Ikusi · awarded outstanding project',
    date: 'Jun 2025',
    categories: ['Networking'],
    metric: { value: '40', label: 'remote sites connected' },
    summary:
      'Complete WAN/LAN infrastructure for a 250-employee retailer with headquarters and 40 points of sale across Mexico, simulated in Cisco Packet Tracer.',
    highlights: [
      'VLAN and subnetting scheme for 17 departments plus 40 remote-site subnets, with inter-VLAN routing.',
      'Configured DHCP, internal DNS, HSRP redundancy, and SSH remote administration.',
      'Selected and cost-justified all hardware across three budget tiers for the vendor proposal.',
    ],
    tags: ['Cisco', 'VLANs', 'HSRP', 'DHCP / DNS', 'SSH'],
  },
  {
    title: 'Reptilia',
    subtitle: 'Smart IoT reptile habitat',
    context: 'ExpoIngenierías 2024 finalist',
    date: 'Fall 2024',
    categories: ['IoT', 'Systems'],
    summary:
      'A physical smart-habitat prototype that automates species-specific reptile care with sensors and actuators on NodeMCU (ESP8266) boards.',
    highlights: [
      'Logged temperature, humidity, food and water intake, and movement to a cloud MySQL database.',
      'Fed a monitoring dashboard and predictive analysis from the collected indicators.',
    ],
    tags: ['ESP8266', 'IoT', 'MySQL', 'Embedded'],
  },
  {
    title: 'Whirlpool Staff Training',
    subtitle: 'Web prototype',
    context: 'Agile team project for Whirlpool Corporation',
    date: '',
    categories: ['Systems'],
    summary: 'A web prototype for training Whirlpool staff, built by an Agile team with a web front end, Python and MySQL, using Microsoft Azure.',
    highlights: [],
    tags: ['JavaScript', 'Bootstrap', 'MySQL', 'Python', 'Azure'],
  },
]

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'HTML / CSS', 'Java', 'JavaScript', 'SQL', 'Swift'] },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'RNN / LSTM / Transformers', 'LangChain', 'Ollama', 'MCP', 'Computer Vision', 'Generative AI'],
  },
  { group: 'Mobile / iOS', items: ['SwiftUI', 'SwiftData', 'Core ML', 'Create ML', 'Apple Foundation Models', 'MLX'] },
  { group: 'Data & Backend', items: ['Node.js', 'Flask', 'FastAPI', 'REST APIs', 'Supabase (PostgreSQL)', 'SQLite', 'Pandas'] },
  { group: 'Networking', items: ['TCP/IP', 'VLANs & subnetting', 'DNS / DHCP', 'Routing & switching', 'HSRP', 'SSH', 'Cisco Packet Tracer'] },
  {
    group: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Linux', 'Bash', 'Microsoft Azure', 'Entra ID', 'Microsoft Graph', 'Render', 'Jira', 'GitHub Projects'],
  },
]

export const education = [
  {
    school: 'Tecnológico de Monterrey',
    degree: 'B.S. Computer Science and Technology',
    period: 'Aug 2023 – Present',
    location: 'Monterrey, Mexico',
    highlights: [],
  },
  {
    school: 'Kyoto University',
    degree: 'KUINEP Exchange Program',
    period: 'Apr 2026 – Aug 2026',
    location: 'Kyoto, Japan',
    highlights: [
      'Completed the Fundamentals of Artificial Intelligence and Multimodal Artificial Intelligence courses',
      'Applied PyTorch and scikit-learn to machine learning, computer vision, and generative AI tasks using public datasets',
      'Implemented RNN, LSTM, and Transformer models in PyTorch, and fine-tuned pretrained models on audio / speech data',
    ],
  },
]

export const recognition = [
  {
    title: 'Peer Mentor, 3rd consecutive year',
    detail: 'Guiding first-year students through their transition to university. Completed the year-long Peer Mentoring Diploma.',
  },
  {
    title: 'Gala Borrego 2025 — two awards',
    detail: 'Most Outstanding Student in Peer Program Mentorship, and Best GPA among Gala award winners.',
  },
  {
    title: 'Ikusi – Velatia outstanding project certificate',
    detail: 'For the SME network infrastructure design in the Device Interconnection course.',
  },
  {
    title: 'IB Computer Science Honors Diploma',
    detail: 'Graduated high school with honorific mention, focused on object-oriented programming in Java.',
  },
  {
    title: 'Competitions',
    detail: '2023 ICPC Competitive Programming Grand Prize, 2023 Tec GameJam, and HackMTY 2025.',
  },
  {
    title: 'Hi! Tec external logistics coordinator',
    detail: 'Coordinated external logistics for Tec de Monterrey’s welcoming ceremony.',
  },
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'Japanese', level: 'Fluent' },
  { name: 'French', level: 'B1' },
]
