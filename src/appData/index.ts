// Skill Icons (Languages, Frameworks, Tools, AI/ML, Techniques)
import JavaScriptIcon from '../assets/icons/javascript.svg?url'
import TypescriptIcon from '../assets/icons/typescript.svg?url'
import PythonIcon from '../assets/icons/python.svg?url'
import SQLIcon from '../assets/icons/sql.svg?url'
import JavaIcon from '../assets/icons/java.svg?url'
import FSharpIcon from '../assets/icons/fsharp.svg?url'
import HTMLIcon from '../assets/icons/html.svg?url'
import CSSIcon from '../assets/icons/css.svg?url'

import ReactIcon from '../assets/icons/react.svg?url'
import NextjsIcon from '../assets/icons/nextjs.svg?url'
import NodejsIcon from '../assets/icons/nodejs.svg?url'
import ExpressIcon from '../assets/icons/express.svg?url'
import TailwindIcon from '../assets/icons/tailwind.svg?url'
import SocketIOIcon from '../assets/icons/socketio.svg?url'
import TensorFlowJSIcon from '../assets/icons/tensorflowjs.svg?url'

import GitHubIcon from '../assets/icons/github.svg?url'
import NetlifyIcon from '../assets/icons/netlify.svg?url'
import VSCodeIcon from '../assets/icons/vscode.svg?url'
import NPMIcon from '../assets/icons/npm.svg?url'
import LinuxIcon from '../assets/icons/linux.svg?url'
import JupyterIcon from '../assets/icons/jupyter.svg?url'
import PostgreSQLIcon from '../assets/icons/postgresql.svg?url'
import MySQLIcon from '../assets/icons/mysql.svg?url'
import SQLiteIcon from '../assets/icons/sqlite.svg?url'

import TensorFlowIcon from '../assets/icons/tensorflow.svg?url'
import SklearnIcon from '../assets/icons/sklearn.svg?url'
import PyTorchIcon from '../assets/icons/pytorch.svg?url'
import PandasIcon from '../assets/icons/pandas.svg?url'
import NumpyIcon from '../assets/icons/numpy.svg?url'
import MatplotlibIcon from '../assets/icons/matplotlib.svg?url'
import NeuralNetIcon from '../assets/icons/neuralnet.svg?url'
import SentimentIcon from '../assets/icons/sentiment.svg?url'
import KerasIcon from '../assets/icons/keras.svg?url'

import TimeSeriesIcon from '../assets/icons/timeseries.svg?url'
import BacktestIcon from '@/assets/icons/backtest.svg?url'
import EvaluationIcon from '../assets/icons/evaluation.svg?url'
import DataCleanIcon from '../assets/icons/dataclean.svg?url'
import StatisticsIcon from '../assets/icons/statistics.svg?url'

import ueaLogo from '@/assets/images/uea-logo.png'

// -----------------------------
// Skill Groups
// -----------------------------

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
  'AI/ML': [
    { name: 'TensorFlow', icon: TensorFlowIcon },
    { name: 'Scikit-learn', icon: SklearnIcon },
    { name: 'PyTorch', icon: PyTorchIcon },
    { name: 'Pandas', icon: PandasIcon },
    { name: 'NumPy', icon: NumpyIcon },
    { name: 'Matplotlib', icon: MatplotlibIcon },
    { name: 'Neural Networks', icon: NeuralNetIcon },
    { name: 'Sentiment Analysis', icon: SentimentIcon },
    { name: 'Keras', icon: KerasIcon },
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
// PROJECTS
// ----------------------
export const projects = [
  {
    priority: 1,
    title: "Neural Network Stock Trading Dissertation",
    shortDescription:
        "Dissertation (86.3%) — Developed an advanced neural network-based trading bot for predicting trends and low price movements in European and US stock markets. Combined LSTM and CNN architectures to model time series data, trained and validated on multi-year yfinance data. Implemented dynamic position sizing, trailing stop loss, news sentiment analysis, and a fully interactive backtesting simulator for portfolio optimization. Compared performance to market averages and alternative models (Random Forest, baseline NNs) using statistical tests and real-world trading metrics.",
    cover: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80",
    livePreview: "",
    type: "Academic Dissertation 📈",
    siteAge: "Completed 2025",
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
        'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover: 'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
        'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic.',
    cover: 'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
        'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan.',
    cover: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// ----------------------
// MODULES / COURSES
// ----------------------
export const serviceData = [
  { icon: ueaLogo, title: "Advanced Web Development", shortDescription: "UEA — Year 3" },
  { icon: ueaLogo, title: "Architectures & Operating Systems", shortDescription: "UEA — Year 2" },
  { icon: ueaLogo, title: "Artificial Intelligence", shortDescription: "UEA — Year 3" },
  { icon: ueaLogo, title: "Data Structures & Algorithms", shortDescription: "UEA — Year 2" },
  { icon: ueaLogo, title: "Database Systems", shortDescription: "UEA — Year 1" },
  { icon: ueaLogo, title: "Developing Secure Software", shortDescription: "UEA — Year 3" },
  { icon: ueaLogo, title: "Information Retrieval", shortDescription: "UEA — Year 2" },
  { icon: ueaLogo, title: "Advanced Programming F#", shortDescription: "UEA — Year 3" },
  { icon: ueaLogo, title: "Mathematics for Computing", shortDescription: "UEA — Year 1" },
  { icon: ueaLogo, title: "Programming", shortDescription: "UEA — Year 1 & 2" },
  { icon: ueaLogo, title: "Software Engineering", shortDescription: "UEA — Year 2" },
  { icon: ueaLogo, title: "Systems Development", shortDescription: "UEA — Year 1" },
  { icon: ueaLogo, title: "Web Development", shortDescription: "UEA — Year 1" },
]



// ----------------------
// FOOTER NAVIGATION
// ----------------------
export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Services', href: '#services' },
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

