import {
  ArchitecturePanel,
  BuildQualityPrinciple,
  EnhancedProject,
  Experience,
  FeaturedSkill,
  SnapshotCard,
  TechnicalDepthCard,
} from '@/lib/types'

// Skill Icons
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
// ENGINEERING SNAPSHOT CARDS
// ----------------------
export const snapshotCards: SnapshotCard[] = [
  {
    label: 'Current Role',
    value: 'Graduate RegTech Engineer',
    sub: 'Suade Labs · 9 months',
    accentColor: '#14b8a6',
  },
  {
    label: 'Professional Experience',
    value: 'RegTech + Software Development',
    sub: 'Suade Labs + Ledger Migrator',
    accentColor: '#38bdf8',
  },
  {
    label: 'Strongest Technical Areas',
    value: 'Python · TypeScript · React · AI/ML',
    sub: 'Backend · FinTech · Full-stack',
    accentColor: '#a78bfa',
  },
  {
    label: 'Signature Project',
    value: 'Neural Network Stock Trading',
    sub: '86.3% dissertation grade',
    accentColor: '#34d399',
  },
]

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
      'Contributing to regulatory technology software used in financial reporting. My work involves Python development, regulatory calculation logic, structured financial data, testing, debugging, and translating SME requirements into reliable software behaviour.',
    responsibilities: [
      'Build and maintain Python-based regulatory calculation logic',
      'Investigate differences between expected and actual regulatory report outputs',
      'Write and update unit tests for financial reporting logic',
      'Work with structured banking and financial instrument data',
      'Debug exposure classifications, securities, deposits, liquidity, and capital calculations',
      'Use GitLab CI pipelines, pre-commit hooks, and Dockerized local environments',
      'Collaborate around SME guidance and regulatory expectations',
    ],
    demonstrates: [
      'Correctness under regulatory constraints',
      'Debugging complex report output differences',
      'Writing tests for financial calculation logic',
      'Working with structured banking data',
      'Translating SME requirements into software behaviour',
      'Maintaining production-quality Python logic',
    ],
    technologies: ['Python', 'Pytest', 'SQL', 'GitLab', 'Docker', 'PostgreSQL', 'Redis', 'CI/CD', 'Pre-commit'],
  },
  {
    company: 'Ledger Migrator',
    companyInitials: 'LM',
    role: 'Junior Software Developer',
    duration: '6 months',
    status: 'previous',
    summary:
      'Worked as a Junior Software Developer gaining practical experience with software development, data migration, structured records, validation, and business-critical system accuracy.',
    responsibilities: [
      'Supported software and data migration workflows',
      'Worked with structured data and validation processes',
      'Helped ensure accuracy when handling business-critical records',
      'Gained practical experience in development workflows and debugging',
      'Built habits around careful testing, data quality, and operational correctness',
    ],
    demonstrates: [
      'Data migration and validation',
      'Business-critical system accuracy',
      'Debugging and software maintenance',
      'Process reliability and attention to detail',
    ],
    technologies: ['Software Development', 'Data Migration', 'Data Validation', 'Debugging', 'Quality Checking'],
  },
]

// ----------------------
// PROJECTS (rich case-study format)
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
    tags: ['AI/ML', 'FinTech', 'Data', 'Academic'],
    complexityBadges: ['AI/ML', 'FinTech', 'Data-heavy', 'Research'],
    shortDescription:
      'A full ML and backtesting pipeline using hybrid LSTM-CNN models, real historical stock data, technical indicators, sentiment features, trading rules, and benchmark comparison.',
    problem:
      'Can machine-learning models identify useful market signals from real stock data and improve simulated trading decisions?',
    whatIBuilt:
      'A complete pipeline from data collection through feature engineering, hybrid neural network training, confidence-aware trading rules, and custom backtesting simulator — with statistical evaluation against market benchmarks.',
    highlights: [
      'Hybrid LSTM-CNN models for weekly trend and daily low-price prediction',
      'Real OHLCV data from European and US stock markets',
      'Technical indicators and sentiment analysis as model features',
      'Dynamic position sizing and trailing stop-loss logic',
      'Custom backtesting simulator for trade evaluation',
      'Statistical comparison against Random Forest and market benchmarks',
    ],
    technicalDepth: [
      'Financial time-series modelling',
      'Feature engineering pipeline',
      'Custom backtesting methodology',
      'Risk management controls',
      'Model comparison and evaluation',
      'Avoiding evaluation leakage',
    ],
    learned:
      'How to build a complete ML system beyond prediction accuracy — including trading simulation, risk logic, benchmark comparison, and the discipline to avoid overclaiming results.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'LSTM', 'CNN', 'Random Forest', 'Backtesting', 'Sentiment Analysis'],
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
    tags: ['AI/ML', 'FinTech', 'Full-stack', 'Startup'],
    complexityBadges: ['AI/ML', 'FinTech', 'Full-stack', 'Startup'],
    shortDescription:
      'A stock market insight and investing education platform with transparent AI-assisted signals, watchlists, portfolio tracking, and explainable technical indicators.',
    problem:
      'Everyday investors lack access to clear, explainable market insights — most tools are either too simple or hide how signals are generated.',
    whatIBuilt:
      'An investing education platform with watchlist management, AI-assisted signal explanations, a Prediction Lab concept, and a deliberate explainability layer so users understand the reasoning behind any signal shown.',
    highlights: [
      'Watchlist and portfolio tracking with real data',
      'Transparent signal system with reasoning shown to users',
      'Prediction Lab for model-driven forecasts',
      'Technical indicator breakdowns for education',
      'Backtesting direction for signal performance',
      'Explainable AI approach — no black-box outputs',
    ],
    technicalDepth: [
      'Market data API integration',
      'Signal explainability design',
      'FinTech product architecture',
      'AI/ML prediction pipeline',
    ],
    learned:
      'How to design explainable AI products where user trust depends on transparency, not just accuracy.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Market Data APIs', 'Machine Learning'],
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
    tags: ['Full-stack', 'Backend', 'Startup'],
    complexityBadges: ['Full-stack', 'Backend', 'Production-style', 'Marketplace'],
    shortDescription:
      'A production-style marketplace where customers post jobs, tradesmen bid, and the awarded tradesman communicates and gets paid through the platform.',
    problem:
      'Finding trustworthy tradesmen is difficult. A reverse-auction model creates transparency and competition, giving customers better pricing and tradesmen qualified leads.',
    whatIBuilt:
      'A full marketplace architecture with job posting, bid management, job award, in-platform messaging, and Stripe escrow-style payment workflows — backed by Python/FastAPI, PostgreSQL, Redis, Celery, and MinIO.',
    highlights: [
      'Customer job posting with media upload',
      'Tradesman bidding and bid management',
      'Job award and in-platform chat',
      'Stripe escrow-style payment integration',
      'Review and rating system',
      'Production infrastructure: PostgreSQL, Redis, Docker, Celery, MinIO, Nginx',
    ],
    technicalDepth: [
      'Marketplace architecture design',
      'Multi-party workflow logic',
      'Background job processing',
      'Payment flow design',
      'Infrastructure planning',
    ],
    learned:
      'How to architect a multi-sided platform where reliability, trust, and workflow correctness are more important than features.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'MinIO', 'Stripe', 'React', 'Next.js'],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#a78bfa',
  },
  {
    id: 'dawkins',
    title: 'Dawkins Analytics',
    type: 'Analytics Platform · Next.js · Business Intelligence',
    status: 'current',
    statusLabel: 'Active',
    tags: ['Full-stack', 'Frontend', 'Analytics'],
    complexityBadges: ['Full-stack', 'Analytics', 'Frontend'],
    shortDescription:
      'A data analytics and insights platform built with Next.js, focused on data visualisation, reporting dashboards, and automated analytics workflows.',
    problem:
      'Businesses often struggle to make sense of their data without expensive BI tools or dedicated analyst time.',
    whatIBuilt:
      'A modern analytics platform with data visualisation components, reporting dashboards, and automated insight workflows designed for business users.',
    highlights: [
      'Clean analytics dashboard interface',
      'Data visualisation and reporting components',
      'Business-focused insight workflows',
      'Professional web application architecture',
    ],
    technicalDepth: ['Dashboard architecture', 'Data visualisation', 'Analytics product design'],
    learned: 'How to design data products that are useful without being overwhelming.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Data Visualisation', 'Analytics'],
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
    tags: ['AI/ML', 'Academic', 'NLP'],
    complexityBadges: ['AI/ML', 'NLP', 'Academic'],
    shortDescription:
      'An intelligent chatbot for natural-language travel queries, delay prediction, booking-style interactions, and accessible user-friendly travel assistance.',
    problem:
      'Travel information systems are often slow, confusing, or inaccessible. A conversational AI layer makes them more natural to use.',
    whatIBuilt:
      'A conversational travel assistant with NLP-driven query handling, delay prediction, booking flows, and accessibility-first design.',
    highlights: [
      'Natural language query handling',
      'Delay prediction and travel alerts',
      'Booking-style conversation flow',
      'Accessibility and usability focus',
      'Transport data API integration',
    ],
    technicalDepth: ['NLP pipeline', 'Conversational UX design', 'Transport data integration'],
    learned: 'How to design conversational interfaces that are genuinely useful rather than gimmicky.',
    techStack: ['NLP', 'Python', 'APIs', 'Conversational UI', 'UX Design'],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#fb923c',
  },
  {
    id: 'auction',
    title: 'Smart Auction Bidding Platform',
    type: 'Academic Duo Project · Full-Stack Web Application',
    status: 'completed',
    statusLabel: 'Completed 2025',
    tags: ['Full-stack', 'Academic'],
    complexityBadges: ['Full-stack', 'Academic'],
    shortDescription:
      'A full-stack auction platform with authentication, listing creation, auction lifecycle management, dynamic countdown timers, and mock payment flow.',
    problem:
      'Build a fully working eBay-style auction system as a rigorous academic software engineering project, covering the full lifecycle of an auction.',
    whatIBuilt:
      'A complete auction platform with user accounts, listing creation, real-time-style bidding, countdown timers, and mock payment integration — built as a duo project.',
    highlights: [
      'User authentication and account management',
      'Full auction lifecycle — create, bid, close',
      'Dynamic countdown timers',
      'Real-time-style bid updates',
      'Mock payment flow',
    ],
    technicalDepth: ['Full-stack architecture', 'Auction lifecycle logic', 'Authentication flows'],
    learned:
      'How to build a complete production-style feature (auction lifecycle) cleanly with a co-developer.',
    techStack: ['Next.js', 'Node.js', 'Tailwind CSS', 'Authentication', 'Full-stack Development'],
    githubLink: 'TODO_ADD_GITHUB_LINK',
    accentColor: '#f472b6',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    type: 'Personal Brand · Frontend Engineering',
    status: 'current',
    statusLabel: 'Current Build',
    tags: ['Full-stack', 'Frontend'],
    complexityBadges: ['Full-stack', 'Frontend'],
    shortDescription:
      'A modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS — designed to present engineering experience, projects, and technical depth clearly.',
    problem: 'Generic portfolio templates do not demonstrate the engineering depth behind the work.',
    whatIBuilt:
      'A custom-built portfolio with architecture showcases, case-study project cards, technical depth sections, project filtering, and accessible contact — no templates.',
    highlights: [
      'Architecture showcase diagrams',
      'Case-study project cards with expandable detail',
      'Project filtering by category',
      'Technical depth section',
      'Accessible contact form with server action',
      'Responsive and performance-focused',
    ],
    technicalDepth: ['Component architecture', 'Responsive design', 'Accessibility', 'Next.js App Router'],
    learned: 'How to present technical work clearly — showing thinking, not just outcomes.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    livePreview: 'TODO_ADD_LIVE_LINK',
    githubLink: 'https://github.com/JoshuaAllan21',
    accentColor: '#60a5fa',
  },
]

export const projectFilterTags = ['All', 'AI/ML', 'FinTech', 'Full-stack', 'Backend', 'Frontend', 'Academic', 'Startup', 'Analytics', 'NLP', 'Data']

// ----------------------
// TECHNICAL DEPTH CARDS
// ----------------------
export const technicalDepthData: TechnicalDepthCard[] = [
  {
    id: 'backend',
    code: 'BE',
    title: 'Backend Engineering',
    description:
      'Building reliable, tested server-side systems. Python and Node.js APIs, database-backed applications, background jobs, validation logic, and correct data flows.',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'Authentication', 'Background Jobs', 'Testing'],
    accentColor: '#14b8a6',
  },
  {
    id: 'frontend',
    code: 'FE',
    title: 'Frontend Engineering',
    description:
      'Responsive, accessible interfaces built with modern tooling. Dashboards, data-heavy views, component architecture, and clean user-focused product design.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Accessibility', 'Dashboards'],
    accentColor: '#38bdf8',
  },
  {
    id: 'aiml',
    code: 'AI',
    title: 'AI/ML and Data',
    description:
      'End-to-end ML pipelines — from feature engineering and model training through backtesting, evaluation, and explainable outputs. Real data, not toy datasets.',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'LSTM', 'CNN', 'Random Forest', 'Feature Engineering', 'Backtesting'],
    accentColor: '#a78bfa',
  },
  {
    id: 'fintech',
    code: 'FT',
    title: 'FinTech and RegTech',
    description:
      'Regulatory reporting logic, structured financial data, calculation correctness, and domain knowledge built through real production work at Suade Labs.',
    skills: ['LCR', 'NSFR', 'COREP', 'FINREP', 'BCAR', 'Regulatory Reporting', 'Financial Instruments', 'Report Validation'],
    accentColor: '#34d399',
  },
  {
    id: 'infra',
    code: 'DV',
    title: 'Infrastructure and Tooling',
    description:
      'Local and production-ready development environments. Docker, CI pipelines, test automation, database management, and deployment workflows.',
    skills: ['Docker', 'GitLab', 'GitHub', 'CI/CD', 'Pre-commit', 'Pytest', 'PostgreSQL', 'Redis', 'Netlify'],
    accentColor: '#fb923c',
  },
  {
    id: 'product',
    code: 'PE',
    title: 'Product Engineering',
    description:
      'Building software around real users and real workflows. Marketplace platforms, investing tools, dashboards, explainable prediction systems, and business-focused applications.',
    skills: ['User Flows', 'Marketplace Logic', 'Dashboards', 'Explainable AI', 'Business Systems', 'UX Thinking'],
    accentColor: '#f472b6',
  },
]

// ----------------------
// ARCHITECTURE SHOWCASES
// ----------------------
export const architectureShowcases: ArchitecturePanel[] = [
  {
    id: 'dissertation',
    title: 'Neural Network Trading System',
    subtitle: 'Dissertation · AI/ML · FinTech',
    context:
      'A complete ML pipeline from raw market data through trained models, trading rules, and backtested portfolio evaluation.',
    accentColor: '#14b8a6',
    stages: [
      { step: 1, label: 'Market Data Ingestion', desc: 'Real OHLCV data' },
      { step: 2, label: 'Feature Engineering', desc: 'Technical indicators' },
      { step: 3, label: 'Model Training', desc: 'LSTM-CNN hybrid' },
      { step: 4, label: 'Prediction Generation', desc: 'Trend + low-price' },
      { step: 5, label: 'Trading Simulator', desc: 'Risk controls + sizing' },
      { step: 6, label: 'Performance Evaluation', desc: 'vs benchmarks' },
    ],
  },
  {
    id: 'cleartrade',
    title: 'Clear Trade Platform Vision',
    subtitle: 'Personal FinTech Product · AI/ML',
    context:
      'An explainable investing platform where every signal shown to users is backed by traceable model reasoning.',
    accentColor: '#38bdf8',
    stages: [
      { step: 1, label: 'Watchlist Data', desc: 'User portfolio' },
      { step: 2, label: 'Market Data APIs', desc: 'Live + historical' },
      { step: 3, label: 'Indicator Engine', desc: 'Technical analysis' },
      { step: 4, label: 'Prediction Lab', desc: 'Model forecasts' },
      { step: 5, label: 'Explainability Layer', desc: 'Signal reasoning' },
      { step: 6, label: 'User Dashboard', desc: 'Insights + alerts' },
    ],
  },
  {
    id: 'tradesmen',
    title: 'Tradesmen Marketplace System',
    subtitle: 'Startup Project · Full-stack · Backend',
    context:
      'A multi-sided marketplace with trust-first design — escrow payments, verified job flows, and in-platform communication.',
    accentColor: '#a78bfa',
    stages: [
      { step: 1, label: 'Customer Job Post', desc: 'Photos + details' },
      { step: 2, label: 'Tradesman Bids', desc: 'Competitive quotes' },
      { step: 3, label: 'Job Award', desc: 'Customer selects bid' },
      { step: 4, label: 'Communication', desc: 'In-platform chat' },
      { step: 5, label: 'Stripe Payment', desc: 'Escrow-style flow' },
      { step: 6, label: 'Reviews', desc: 'Verified ratings' },
    ],
  },
]

// ----------------------
// BUILD QUALITY PRINCIPLES
// ----------------------
export const buildQualityPrinciples: BuildQualityPrinciple[] = [
  {
    number: '01',
    title: 'Tested',
    description:
      'I value unit tests, integration checks, and validating behaviour against expected outcomes. At Suade Labs, correctness in tests is not optional — it is the standard.',
  },
  {
    number: '02',
    title: 'Explainable',
    description:
      'I prefer systems where decisions and outputs can be understood, traced, and challenged. My dissertation applied this to AI outputs; Clear Trade applies it to investing signals.',
  },
  {
    number: '03',
    title: 'Maintainable',
    description:
      'I care about clean component structure, reusable logic, readable code, and clear data models. Code should be as easy to change as it was to write.',
  },
  {
    number: '04',
    title: 'Practical',
    description:
      'I build products around real users, real workflows, and real constraints — not hypothetical features. Every design decision should solve an actual problem.',
  },
  {
    number: '05',
    title: 'Data-Driven',
    description:
      'I use evidence, backtesting, metrics, and validation rather than assumptions. Whether debugging a financial report or evaluating an ML model, data guides the decision.',
  },
  {
    number: '06',
    title: 'Production-Minded',
    description:
      'I think about deployment, error handling, performance, security, and future maintenance from the start — not as an afterthought once features are working.',
  },
]

// ----------------------
// FEATURED SKILLS WITH CONTEXT
// ----------------------
export const featuredSkills: FeaturedSkill[] = [
  {
    name: 'Python',
    tag: 'Production',
    context:
      'Used daily at Suade Labs for regulatory calculation logic, debugging, and testing. Also central to the dissertation ML pipeline and backend API development.',
    tools: ['FastAPI', 'Pytest', 'Pandas', 'NumPy', 'TensorFlow', 'Keras'],
  },
  {
    name: 'TypeScript / React / Next.js',
    tag: 'Full-stack',
    context:
      'Core stack for portfolio, Clear Trade, Dawkins Analytics, the auction platform, and marketplace frontend work.',
    tools: ['Next.js 15', 'React 19', 'Tailwind CSS', 'App Router', 'Server Actions'],
  },
  {
    name: 'AI/ML',
    tag: 'Research',
    context:
      'Dissertation used hybrid LSTM-CNN models, Random Forest comparison, sentiment analysis, feature engineering, and backtesting.',
    tools: ['TensorFlow', 'Keras', 'Scikit-learn', 'LSTM', 'CNN', 'LightGBM'],
  },
  {
    name: 'SQL / PostgreSQL',
    tag: 'Backend',
    context:
      'Used for structured financial data at Suade Labs, application database design, and backend data modelling across personal projects.',
    tools: ['PostgreSQL', 'SQLite', 'Redis', 'Data modelling', 'Migrations'],
  },
  {
    name: 'Docker / GitLab / CI/CD',
    tag: 'Engineering',
    context:
      'Used in production development workflow at Suade Labs — CI pipelines, Dockerized environments, pre-commit hooks, and automated test runs.',
    tools: ['Docker', 'GitLab CI', 'Pre-commit', 'Pytest', 'Netlify'],
  },
  {
    name: 'FinTech / RegTech Domain',
    tag: 'Domain',
    context:
      'Built through 9 months at Suade Labs: regulatory reporting frameworks, structured banking data, financial instrument classification, and report validation.',
    tools: ['LCR', 'NSFR', 'COREP', 'FINREP', 'BCAR', 'Financial data models'],
  },
]

// ----------------------
// PROOF OF WORK ITEMS
// ----------------------
export const proofOfWorkItems = [
  { value: '9 months', label: 'Graduate RegTech Engineer', sub: 'Suade Labs' },
  { value: '6 months', label: 'Junior Software Developer', sub: 'Ledger Migrator' },
  { value: '1st Class', label: 'BSc Computer Science', sub: 'University of East Anglia' },
  { value: '86.3%', label: 'AI/ML Finance Dissertation', sub: 'LSTM-CNN · Backtesting · RegTech' },
  { value: '7+', label: 'Projects Built', sub: 'FinTech · AI/ML · Marketplaces · Analytics' },
  { value: 'Current', label: 'FinTech / RegTech Focus', sub: 'Data-heavy · Production engineering' },
]

// ----------------------
// SKILL ICON GROUPS (for visual marquee/tabs)
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
// SKILL GROUPS (text chips for tabbed view)
// ----------------------
export const skillGroups: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'F#', 'HTML', 'CSS'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'Component Architecture', 'Accessibility', 'Dashboards', 'Data Visualisation'],
  Backend: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'Authentication', 'Background Jobs', 'API Integrations'],
  'Data & Databases': ['SQL', 'PostgreSQL', 'Redis', 'SQLite', 'Pandas', 'NumPy', 'Data Validation', 'Data Modelling', 'Financial Data'],
  'AI & ML': ['TensorFlow', 'Keras', 'Scikit-learn', 'PyTorch', 'LSTM', 'CNN', 'Random Forest', 'Sentiment Analysis', 'Feature Engineering', 'Backtesting'],
  'Tools & Workflow': ['Git', 'GitHub', 'GitLab', 'Docker', 'CI/CD', 'Pre-commit', 'Pytest', 'Netlify', 'Linux CLI'],
  'FinTech & RegTech': ['LCR', 'NSFR', 'COREP', 'FINREP', 'BCAR', 'Regulatory Reporting', 'Financial Instruments', 'Report Validation', 'Calculation Testing'],
  Techniques: ['Unit Testing', 'Integration Testing', 'Debugging', 'Software Architecture', 'Agile', 'Time Series', 'Statistical Testing', 'Product Thinking'],
}

// ----------------------
// EDUCATION MODULES
// ----------------------
import { EducationModule } from '@/lib/types'

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
// CAREER FOCUS ROLES
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
  { name: 'Light', colors: ['#fff', '#2d4dad', '#dbe3f7', '#22469d', '#5565e8'] },
  { name: 'Dark', colors: ['#044070', '#7293b2', '#20459d', '#5a6bff', '#18f2e5'] },
  { name: 'Aqua', colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'] },
  { name: 'Retro', colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'] },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
