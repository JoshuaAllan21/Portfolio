import { Capability, EducationModule, EnhancedProject, Experience } from '@/lib/types'

// Skill Icons (kept for any future use)
import JavaScriptIcon from '../assets/icons/javascript.svg'
import TypescriptIcon from '../assets/icons/typescript.svg'
import PythonIcon from '../assets/icons/python.svg'
import SQLIcon from '../assets/icons/sql.svg'
import JavaIcon from '../assets/icons/java.svg'
import FSharpIcon from '../assets/icons/fsharp.svg'
import HTMLIcon from '../assets/icons/html.svg'
import CSSIcon from '../assets/icons/css.svg'
import ReactIcon from '../assets/icons/react.svg'
import NextjsIcon from '../assets/icons/nextjs.svg'
import NodejsIcon from '../assets/icons/nodejs.svg'
import ExpressIcon from '../assets/icons/express.svg'
import TailwindIcon from '../assets/icons/tailwind.svg'
import SocketIOIcon from '../assets/icons/socketio.svg'
import TensorFlowJSIcon from '../assets/icons/tensorflowjs.svg'
import GitHubIcon from '../assets/icons/github.svg'
import NetlifyIcon from '../assets/icons/netlify.svg'
import VSCodeIcon from '../assets/icons/vscode.svg'
import NPMIcon from '../assets/icons/npm.svg'
import LinuxIcon from '../assets/icons/linux.svg'
import JupyterIcon from '../assets/icons/jupyter.svg'
import PostgreSQLIcon from '../assets/icons/postgresql.svg'
import MySQLIcon from '../assets/icons/mysql.svg'
import SQLiteIcon from '../assets/icons/sqlite.svg'
import TensorFlowIcon from '../assets/icons/tensorflow.svg'
import SklearnIcon from '../assets/icons/sklearn.svg'
import PyTorchIcon from '../assets/icons/pytorch.svg'
import PandasIcon from '../assets/icons/pandas.svg'
import NumpyIcon from '../assets/icons/numpy.svg'
import MatplotlibIcon from '../assets/icons/matplotlib.svg'
import NeuralNetIcon from '../assets/icons/neuralnet.svg'
import SentimentIcon from '../assets/icons/sentiment.svg'
import KerasIcon from '../assets/icons/keras.svg'
import TimeSeriesIcon from '../assets/icons/timeseries.svg'
import BacktestIcon from '@/assets/icons/backtest.svg'
import EvaluationIcon from '../assets/icons/evaluation.svg'
import DataCleanIcon from '../assets/icons/dataclean.svg'
import StatisticsIcon from '../assets/icons/statistics.svg'

// ----------------------
// SKILL ICON GROUPS (icon-based, for visual display)
// ----------------------
export const groupedSkills = {
  Languages: [
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'SQL', icon: SQLIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'F#', icon: FSharpIcon },
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
  ],
  Frameworks: [
    { name: 'React.js', icon: ReactIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Socket.io', icon: SocketIOIcon },
    { name: 'TensorFlow.js', icon: TensorFlowJSIcon },
  ],
  Tools: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Netlify', icon: NetlifyIcon },
    { name: 'VS Code', icon: VSCodeIcon },
    { name: 'NPM', icon: NPMIcon },
    { name: 'Linux CLI', icon: LinuxIcon },
    { name: 'Jupyter Notebooks', icon: JupyterIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
    { name: 'MySQL', icon: MySQLIcon },
    { name: 'SQLite', icon: SQLiteIcon },
  ],
  'AI/ML & Data': [
    { name: 'TensorFlow', icon: TensorFlowIcon },
    { name: 'Scikit-learn', icon: SklearnIcon },
    { name: 'PyTorch', icon: PyTorchIcon },
    { name: 'Pandas', icon: PandasIcon },
    { name: 'NumPy', icon: NumpyIcon },
    { name: 'Matplotlib', icon: MatplotlibIcon },
    { name: 'Neural Networks', icon: NeuralNetIcon },
    { name: 'Keras', icon: KerasIcon },
    { name: 'Sentiment Analysis', icon: SentimentIcon },
  ],
  Techniques: [
    { name: 'Time Series Forecasting', icon: TimeSeriesIcon },
    { name: 'Backtesting', icon: BacktestIcon },
    { name: 'Model Evaluation', icon: EvaluationIcon },
    { name: 'Data Preprocessing', icon: DataCleanIcon },
    { name: 'Statistical Testing', icon: StatisticsIcon },
  ],
}

// ----------------------
// SKILL GROUPS (text-based, for the detailed skills grid)
// ----------------------
export const skillGroups: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'F#', 'HTML', 'CSS'],
  Frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Responsive Design',
    'Component Architecture',
    'Accessibility',
    'UI/UX Implementation',
    'Forms & Validation',
    'Dashboards',
    'Data Visualisation',
  ],
  Backend: [
    'Python',
    'FastAPI',
    'Node.js',
    'Express',
    'REST APIs',
    'Authentication',
    'Database-backed Applications',
    'Background Jobs',
    'Scheduled Workflows',
    'API Integrations',
  ],
  'Data & Databases': [
    'SQL',
    'PostgreSQL',
    'Redis',
    'SQLite',
    'Pandas',
    'NumPy',
    'Data Validation',
    'Data Modelling',
    'Structured Financial Data',
    'Data Migration',
  ],
  'AI & ML': [
    'TensorFlow',
    'Keras',
    'Scikit-learn',
    'PyTorch',
    'LSTM',
    'CNN',
    'Hybrid Neural Networks',
    'Random Forest',
    'LightGBM',
    'Sentiment Analysis',
    'Feature Engineering',
    'Technical Indicators',
    'Model Evaluation',
    'Backtesting',
    'Explainable AI',
  ],
  'Tools & Workflow': [
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'CI/CD',
    'Pre-commit Hooks',
    'Pytest',
    'Netlify',
    'VS Code',
    'Jupyter Notebooks',
    'Linux CLI',
  ],
  'FinTech & RegTech': [
    'LCR',
    'NSFR',
    'COREP',
    'FINREP',
    'BCAR',
    'Regulatory Reporting',
    'Financial Instruments',
    'Exposure Classification',
    'Report Validation',
    'Calculation Testing',
    'Financial Data Models',
  ],
  Techniques: [
    'Unit Testing',
    'Integration Testing',
    'Debugging',
    'Software Architecture',
    'Clean Code',
    'Agile Development',
    'Performance Optimisation',
    'Financial Modelling',
    'Time Series Forecasting',
    'Statistical Testing',
    'Product Thinking',
  ],
}

// ----------------------
// PROFESSIONAL EXPERIENCE
// ----------------------
export const experienceData: Experience[] = [
  {
    company: 'Suade Labs',
    companyInitials: 'SL',
    role: 'Graduate RegTech Engineer',
    duration: '9 months',
    status: 'current',
    summary:
      'Currently working as a Graduate RegTech Engineer at Suade Labs, contributing to software used in regulatory technology and financial reporting. My work involves Python development, regulatory calculation logic, structured financial data, testing, debugging, report validation, and translating regulatory or SME requirements into reliable software behaviour.',
    responsibilities: [
      'Build and maintain Python-based regulatory calculation logic',
      'Work with financial reporting frameworks including LCR, NSFR, COREP, FINREP, and BCAR at a high level',
      'Investigate differences between expected and actual regulatory report outputs',
      'Write and update unit tests for financial reporting logic',
      'Work with structured banking and financial instrument data',
      'Debug row mappings, exposure classifications, securities, deposits, CRM, liquidity, and capital-related calculations',
      'Use GitLab workflows, CI pipelines, pre-commit hooks, Dockerized environments, and automated tests',
      'Collaborate around SME guidance and regulatory expectations',
      'Focus on correctness, reliability, and explainability in financial software',
    ],
    technologies: [
      'Python',
      'Pytest',
      'SQL',
      'GitLab',
      'Docker',
      'PostgreSQL',
      'Redis',
      'CI/CD',
      'Pre-commit',
      'Regulatory Reporting',
    ],
  },
  {
    company: 'Ledger Migrator',
    companyInitials: 'LM',
    role: 'Junior Software Developer',
    duration: '6 months',
    status: 'previous',
    summary:
      'Worked as a Junior Software Developer at Ledger Migrator, gaining practical experience with software development, data migration, structured records, validation, and business-critical system accuracy. This role helped build strong habits around attention to detail, debugging, and understanding how software supports operational and financial processes.',
    responsibilities: [
      'Supported software and data migration workflows',
      'Worked with structured data and validation processes',
      'Helped ensure accuracy and reliability when handling business-critical records',
      'Gained practical experience in development workflows, debugging, and system maintenance',
      'Built stronger habits around careful testing, data quality, and operational correctness',
    ],
    technologies: [
      'Software Development',
      'Data Migration',
      'Data Validation',
      'Debugging',
      'Business Systems',
      'Quality Checking',
    ],
  },
]

// ----------------------
// PROJECTS
// ----------------------
export const enhancedProjects: EnhancedProject[] = [
  {
    id: 'dissertation',
    title: 'Neural Network Stock Trading Dissertation',
    type: 'BSc Dissertation · FinTech · AI/ML',
    status: 'completed',
    statusLabel: 'Completed 2025',
    grade: '86.3%',
    featured: true,
    shortDescription:
      'Developed a neural-network-based stock trading and prediction system using real historical market data from European and US stock markets. The system predicted weekly stock trends and daily low-price opportunities, then evaluated those predictions through a custom backtesting simulator.',
    highlights: [
      'Built hybrid LSTM-CNN models for financial time-series prediction',
      'Created separate prediction logic for weekly trend direction and daily low-price opportunities',
      'Used real OHLCV market data rather than simulated prices',
      'Engineered technical indicators and model features',
      'Added sentiment analysis as part of the wider prediction pipeline',
      'Implemented dynamic position sizing and trailing stop-loss logic',
      'Built a custom backtesting simulator to evaluate trading decisions',
      'Compared results against market returns and alternative models (Random Forest)',
      'Used statistical testing and performance analysis to evaluate model value',
    ],
    techStack: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'LSTM',
      'CNN',
      'Random Forest',
      'Backtesting',
      'Sentiment Analysis',
    ],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#14b8a6',
  },
  {
    id: 'cleartrade',
    title: 'Clear Trade',
    type: 'Personal FinTech Product · AI Investing Platform',
    status: 'current',
    statusLabel: 'Ongoing',
    featured: true,
    shortDescription:
      'Clear Trade is my ongoing stock market insight and investing education platform. The aim is to help users track watchlists and portfolios, understand technical and market signals, and receive transparent AI-assisted stock insights in a way that is easier for everyday investors to understand.',
    highlights: [
      'Watchlist and portfolio tracking concept',
      'Transparent buy/hold/sell style insights with signal explanations',
      'Prediction Lab concept for model-driven forecasts',
      'Technical indicator explanations for user education',
      'Stock detail pages with market context',
      'Backtesting direction for measuring model performance',
      'Future-facing news sentiment integration',
      'Explainable AI approach — users understand why a signal is shown',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Market Data APIs',
      'Machine Learning',
      'Backtesting',
    ],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    disclaimer: 'Built for education and research, not financial advice.',
    accentColor: '#38bdf8',
  },
  {
    id: 'tradesmen',
    title: 'Reverse-Auction Tradesmen Marketplace',
    type: 'Personal Startup Project · Full-Stack Marketplace',
    status: 'in-development',
    statusLabel: 'In Development',
    shortDescription:
      'A production-style marketplace concept where customers can post trade jobs with photos or videos, tradesmen can bid for work, and the winning tradesman can communicate with the customer through the platform. Includes reviews, job management, and Stripe-based escrow-style payment workflows.',
    highlights: [
      'Job posting with media upload concept',
      'Tradesmen bidding workflow',
      'Customer accepts a bid to award the job',
      'In-platform chat after job award',
      'Reviews and ratings system',
      'Stripe payment integration concept',
      'Escrow-style payment flow for trust and security',
      'Backend designed with Python/FastAPI',
      'Infrastructure: PostgreSQL, Redis, Docker Compose, Celery, MinIO, Nginx',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Celery',
      'MinIO',
      'Stripe',
      'Nginx',
      'React',
      'Next.js',
      'Authentication',
    ],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#a78bfa',
  },
  {
    id: 'dawkins',
    title: 'Dawkins Analytics',
    type: 'Analytics Platform · Next.js · Business Intelligence',
    status: 'current',
    statusLabel: 'Active',
    shortDescription:
      'Dawkins Analytics is a data analytics and insights platform built with Next.js. It focuses on data visualisation, reporting, and automated analytics workflows that help businesses understand their data and make better decisions.',
    highlights: [
      'Modern analytics interface and reporting dashboards',
      'Business intelligence focus with data visualisation components',
      'Automated insight workflows',
      'Built as a professional web application',
      'Clean dashboard UI for presenting complex data clearly',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Data Visualisation', 'Analytics', 'Reporting'],
    livePreview: 'TODO_ADD_LIVE_LINK',
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#34d399',
  },
  {
    id: 'chatbot',
    title: 'AI Train Chatbot Assistant',
    type: 'University Project · NLP · Transport Tech',
    status: 'completed',
    statusLabel: 'Completed 2025',
    shortDescription:
      'Developed an intelligent train chatbot that supports natural-language travel queries, delay prediction, booking-style interactions, and user-friendly travel assistance. The project focused on natural language processing, accessibility, user experience, and transport-data-style integration.',
    highlights: [
      'Conversational UI for natural travel queries',
      'NLP-driven interaction flow',
      'Delay prediction concept',
      'Ticket-booking style conversation flow',
      'Transport-data-style API integration',
      'Designed around accessibility and usability',
    ],
    techStack: ['NLP', 'Python', 'APIs', 'Conversational UI', 'Transport Data', 'UX Design'],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#fb923c',
  },
  {
    id: 'auction',
    title: 'Smart Auction Bidding Platform',
    type: 'Academic Duo Project · Full-Stack Web Application',
    status: 'completed',
    statusLabel: 'Completed 2025',
    shortDescription:
      'Built a full-stack auction platform inspired by eBay, allowing users to create listings, place bids, manage auctions, and interact with a modern web interface. The system focused on authentication, auction lifecycle logic, dynamic countdown timers, and reliable user experience.',
    highlights: [
      'User authentication and account management',
      'Listing creation with image upload',
      'Full auction lifecycle management',
      'Dynamic countdown timers',
      'Real-time-style bidding behaviour',
      'Mock payment flow',
      'Modern responsive UI',
      'Built as a duo academic project',
    ],
    techStack: [
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Authentication',
      'Auction Logic',
      'Dynamic Timers',
      'Full-stack Development',
    ],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#f472b6',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    type: 'Personal Brand · Frontend Engineering',
    status: 'current',
    statusLabel: 'Current Build',
    shortDescription:
      'A modern developer portfolio designed to present software engineering experience, projects, education, and technical skills in a clean, recruiter-friendly format.',
    highlights: [
      'Responsive design across all screen sizes',
      'Modern Next.js and TypeScript architecture',
      'Reusable component structure',
      'Accessible contact form with server action',
      'Project case studies with technical depth',
      'CV-style experience timeline',
      'Performance-focused frontend',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Accessibility'],
    livePreview: 'TODO_ADD_LIVE_LINK',
    githubLink: 'https://github.com/JoshuaAllan21',
    accentColor: '#60a5fa',
  },
]

// ----------------------
// EDUCATION MODULES
// ----------------------
export const educationModules: EducationModule[] = [
  { title: 'Advanced Web Development', year: 'Year 3', group: 'Web & Product' },
  { title: 'Artificial Intelligence', year: 'Year 3', group: 'AI & Data' },
  { title: 'Developing Secure Software', year: 'Year 3', group: 'Systems & Security' },
  { title: 'Advanced Programming F#', year: 'Year 3', group: 'Software Engineering' },
  { title: 'Information Retrieval', year: 'Year 2', group: 'AI & Data' },
  { title: 'Architectures & Operating Systems', year: 'Year 2', group: 'Systems & Security' },
  { title: 'Data Structures & Algorithms', year: 'Year 2', group: 'Software Engineering' },
  { title: 'Computer Graphics', year: 'Year 2', group: 'Systems & Security' },
  { title: 'Software Engineering', year: 'Year 2', group: 'Software Engineering' },
  { title: 'Database Systems', year: 'Year 1', group: 'AI & Data' },
  { title: 'Mathematics for Computing', year: 'Year 1', group: 'Maths & Foundations' },
  { title: 'Programming', year: 'Year 1 & 2', group: 'Software Engineering' },
  { title: 'Systems Development', year: 'Year 1', group: 'Systems & Security' },
  { title: 'Web Development', year: 'Year 1', group: 'Web & Product' },
]

// ----------------------
// CAPABILITIES (What I Can Build)
// ----------------------
export const capabilitiesData: Capability[] = [
  {
    title: 'Full-Stack Web Applications',
    description:
      'Modern applications using React, Next.js, TypeScript, APIs, authentication, and databases — from concept to production.',
  },
  {
    title: 'FinTech & Data Dashboards',
    description:
      'Financial data interfaces, portfolio tools, reporting dashboards, investing education tools, and analytics products.',
  },
  {
    title: 'AI/ML Prototypes',
    description:
      'Prediction systems, backtesting tools, model evaluation pipelines, and explainable AI outputs for real-world data.',
  },
  {
    title: 'Backend APIs & Automation',
    description:
      'Python or Node.js APIs, database workflows, scheduled tasks, background workers, and third-party integrations.',
  },
  {
    title: 'Marketplace Platforms',
    description:
      'Job posting, bidding, messaging, reviews, payments, and admin-style workflows for multi-sided platforms.',
  },
  {
    title: 'Portfolio & Business Websites',
    description:
      'Professional websites for personal brands, businesses, and service providers — clean, fast, and accessible.',
  },
  {
    title: 'Data Visualisation Tools',
    description:
      'Charts, reports, dashboards, and interfaces that make complex data understandable and actionable.',
  },
  {
    title: 'RegTech-Style Calculation Tools',
    description:
      'Structured calculation logic, validation workflows, and report-style data outputs with a focus on correctness.',
  },
]

// ----------------------
// CAREER FOCUS
// ----------------------
export const careerFocusRoles = [
  'Graduate Software Engineer',
  'Junior Software Developer',
  'Junior Backend Engineer',
  'Full-Stack Developer',
  'FinTech Developer',
  'RegTech Engineer',
  'AI/ML Engineer (Graduate / Junior)',
  'Data-Focused Software Engineer',
  'Product-Minded Software Engineer',
]

// ----------------------
// FOOTER NAVIGATION
// ----------------------
export const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Education', href: '#education' },
  { title: 'Contact', href: '#contact' },
]

// ----------------------
// THEMES
// ----------------------
export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#2d4dad', '#dbe3f7', '#22469d', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#044070', '#7293b2', '#20459d', '#5a6bff', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

// ----------------------
// LANGUAGES
// ----------------------
export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
