import SectionHeading from '../SectionHeading/SectionHeading'

const atAGlance = [
  { label: 'Grade', value: '86.3%' },
  { label: 'Domain', value: 'AI/ML and Finance' },
  { label: 'Data', value: 'Real OHLCV market data' },
  { label: 'Models', value: 'LSTM, CNN, Random Forest' },
  { label: 'Evaluation', value: 'Backtesting + stats tests' },
  { label: 'Risk logic', value: 'Position sizing + stop-loss' },
]

const researchSkills = [
  'Financial time-series modelling',
  'Feature engineering pipeline',
  'Backtesting methodology',
  'Risk management logic',
  'Model evaluation and comparison',
  'Statistical significance testing',
  'Avoiding evaluation leakage',
  'Responsible AI — not overclaiming results',
]

const systemStages = [
  { step: 1, label: 'Real Stock Data', desc: 'OHLCV, multi-market' },
  { step: 2, label: 'Data Cleaning', desc: 'Missing values, alignment' },
  { step: 3, label: 'Feature Engineering', desc: 'Technical indicators' },
  { step: 4, label: 'Sentiment Analysis', desc: 'News-based signals' },
  { step: 5, label: 'Model Training', desc: 'LSTM-CNN hybrid' },
  { step: 6, label: 'Backtesting', desc: 'Simulated trading + eval' },
]

const models = [
  {
    title: 'Hybrid LSTM-CNN',
    desc: 'CNN captures local price patterns. LSTM learns sequential market behaviour. Combined for weekly trend and daily low-price prediction.',
    role: 'Primary model',
    accentColor: '#14b8a6',
  },
  {
    title: 'Random Forest',
    desc: 'Ensemble baseline model. Used to compare prediction quality and validate whether the neural network offered real improvement.',
    role: 'Baseline comparison',
    accentColor: '#38bdf8',
  },
  {
    title: 'Market Benchmark',
    desc: 'Buy-and-hold market return used as the ultimate comparison. The only meaningful test: does the system beat doing nothing?',
    role: 'Performance baseline',
    accentColor: '#a78bfa',
  },
]

const DissertationSection = () => {
  return (
    <section id="dissertation" className="mx-auto my-14 max-w-[1200px] px-4">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          title="Dissertation Deep Dive"
          subtitle="Neural Network Stock Trading System — a complete ML pipeline graded 86.3%."
        />
        <div className="border-accent/30 bg-accent/10 flex-shrink-0 rounded-xl border px-5 py-3 text-center">
          <p className="text-accent text-2xl font-bold">86.3%</p>
          <p className="text-tertiary-content text-xs">Dissertation Grade</p>
        </div>
      </div>

      {/* At a glance */}
      <div className="bg-secondary border-border mb-6 rounded-xl border p-5">
        <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">At a Glance</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {atAGlance.map(({ label, value }) => (
            <div key={label} className="bg-primary rounded-lg p-3 text-center">
              <p className="text-accent text-xs font-semibold">{value}</p>
              <p className="text-tertiary-content mt-0.5 text-[10px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Problem + Approach */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-accent mb-2 text-xs font-semibold uppercase tracking-wider">Problem</p>
          <p className="text-neutral text-sm leading-relaxed">
            Can machine-learning models identify useful trading signals from real stock market data and improve
            simulated trading decisions when evaluated through a custom backtesting simulator?
          </p>
        </div>
        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-accent mb-2 text-xs font-semibold uppercase tracking-wider">Approach</p>
          <p className="text-neutral text-sm leading-relaxed">
            A complete pipeline from real market data through feature engineering, hybrid neural network training,
            confidence-aware trading rules, custom backtesting, and statistical evaluation against benchmarks.
          </p>
        </div>
      </div>

      {/* System flow */}
      <div className="bg-secondary border-border mb-6 rounded-xl border p-5">
        <p className="text-primary-content mb-4 text-xs font-semibold uppercase tracking-wider">System Flow</p>
        <div className="relative">
          <div className="border-border absolute top-[1.125rem] left-0 right-0 hidden border-t border-dashed md:block" />
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-2">
            {systemStages.map((stage) => (
              <div key={stage.step} className="flex flex-col items-center gap-2">
                <div className="border-accent bg-accent/20 relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold text-accent">
                  {stage.step}
                </div>
                <p className="text-neutral text-center text-[11px] font-medium leading-tight">{stage.label}</p>
                <p className="text-tertiary-content text-center text-[10px] leading-tight">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Comparison */}
      <div className="mb-6">
        <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">Model Comparison</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="bg-secondary border-border rounded-xl border p-4"
              style={{ borderTopColor: model.accentColor, borderTopWidth: '3px' }}>
              <div className="mb-1 flex items-center justify-between">
                <h4 className="text-neutral text-sm font-semibold">{model.title}</h4>
                <span
                  className="rounded text-[10px] px-1.5 py-0.5 font-medium"
                  style={{ color: model.accentColor, backgroundColor: `${model.accentColor}15` }}>
                  {model.role}
                </span>
              </div>
              <p className="text-neutral text-xs leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research skills + Tech stack */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            Research Skills Demonstrated
          </p>
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {researchSkills.map((skill) => (
              <div key={skill} className="flex items-start gap-2 text-xs text-neutral leading-relaxed">
                <span className="bg-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy',
              'Matplotlib', 'LSTM', 'CNN', 'Random Forest', 'LightGBM',
              'Backtesting', 'Sentiment Analysis', 'Technical Indicators', 'Statistical Testing',
            ].map((tech) => (
              <span
                key={tech}
                className="bg-primary border-border text-tertiary-content rounded-md border px-2 py-0.5 text-[10px]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DissertationSection
