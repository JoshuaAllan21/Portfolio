import SectionHeading from '../SectionHeading/SectionHeading'

const pipelineSteps = [
  { label: 'Real Stock Data', sub: 'OHLCV, multi-market' },
  { label: 'Data Cleaning', sub: 'Missing values, alignment' },
  { label: 'Feature Engineering', sub: 'Technical indicators' },
  { label: 'Sentiment Analysis', sub: 'News-based signals' },
  { label: 'ML-Ready Dataset', sub: 'Normalised, split' },
]

const modelSteps = [
  { label: 'OHLCV Sequences', sub: 'Time-series input' },
  { label: 'CNN Layers', sub: 'Local pattern extraction' },
  { label: 'LSTM Layers', sub: 'Sequential learning' },
  { label: 'Dense Layers', sub: 'Output transformation' },
  { label: 'Predictions', sub: 'Trend / Low-price' },
]

const tradingSteps = [
  { label: 'Prediction', sub: 'Model output' },
  { label: 'Confidence Check', sub: 'Risk filter' },
  { label: 'Position Sizing', sub: 'Dynamic allocation' },
  { label: 'Entry / Exit', sub: 'Trade decision' },
  { label: 'Trailing Stop-Loss', sub: 'Risk management' },
  { label: 'Portfolio Update', sub: 'Benchmark compare' },
]

const evalSteps = [
  { label: 'Model Output', sub: 'Signal generation' },
  { label: 'Backtest', sub: 'Simulated trading' },
  { label: 'vs Market Return', sub: 'Benchmark compare' },
  { label: 'vs Random Forest', sub: 'Model comparison' },
  { label: 'Statistical Tests', sub: 'Significance testing' },
  { label: 'Final Analysis', sub: 'Conclusions' },
]

interface FlowDiagramProps {
  steps: { label: string; sub: string }[]
  accentColor?: string
}

const FlowDiagram = ({ steps, accentColor = '#14b8a6' }: FlowDiagramProps) => (
  <div className="flex flex-wrap items-center gap-1">
    {steps.map((step, i) => (
      <div key={step.label} className="flex items-center gap-1">
        <div
          className="bg-primary border-border flex min-w-[90px] flex-col items-center rounded-lg border px-2 py-2 text-center"
          style={{ borderTopColor: accentColor, borderTopWidth: '2px' }}>
          <span className="text-neutral text-xs font-medium leading-tight">{step.label}</span>
          <span className="text-tertiary-content mt-0.5 text-[10px] leading-tight">{step.sub}</span>
        </div>
        {i < steps.length - 1 && (
          <span className="text-accent flex-shrink-0 text-sm">→</span>
        )}
      </div>
    ))}
  </div>
)

const DissertationSection = () => {
  return (
    <section id="dissertation" className="mx-auto my-14 max-w-[1200px] px-4">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          title="Dissertation Deep Dive"
          subtitle="Neural Network Stock Trading System — a First-Class AI/ML finance project graded 86.3%."
        />
        <div className="border-accent/30 bg-accent/10 flex-shrink-0 rounded-xl border px-4 py-3 text-center">
          <p className="text-accent text-2xl font-bold">86.3%</p>
          <p className="text-tertiary-content text-xs">Dissertation Grade</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Problem */}
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">Problem</h3>
          <p className="text-neutral text-sm leading-relaxed">
            Financial markets are noisy, non-linear, and difficult to predict. My dissertation explored whether
            neural-network models could identify useful trading signals from real stock market data and whether those
            signals could improve trading decisions when tested through a backtesting simulator.
          </p>
        </div>

        {/* Approach */}
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">Approach</h3>
          <p className="text-neutral text-sm leading-relaxed">
            I built a complete ML pipeline that moved beyond isolated prediction accuracy. The system collected real
            market data, engineered features, trained neural-network models, generated trading signals, and evaluated
            the results inside a custom backtesting simulator.
          </p>
        </div>

        {/* Model Architecture */}
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">Model Architecture</h3>
          <p className="text-neutral mb-3 text-sm leading-relaxed">
            The system used hybrid LSTM-CNN modelling. The CNN component captured local price-pattern features, while
            the LSTM component learned sequential behaviour in financial time-series data. The system produced
            predictions for weekly trend direction and daily low-price opportunities.
          </p>
        </div>

        {/* Trading Logic */}
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">Trading Logic</h3>
          <p className="text-neutral text-sm leading-relaxed">
            Predictions were connected to trading rules including confidence-aware decisions, dynamic position sizing,
            and trailing stop-loss logic. This allowed the project to evaluate how model predictions might behave in a
            more realistic trading strategy rather than only as standalone forecasts.
          </p>
        </div>
      </div>

      {/* Evaluation + Learnings */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">Evaluation</h3>
          <p className="text-neutral text-sm leading-relaxed">
            The system compared model-driven trading behaviour against market returns and alternative models such as
            Random Forest. The evaluation considered prediction quality, simulated trading performance, and statistical
            testing.
          </p>
        </div>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-2 font-semibold">What I Learned</h3>
          <p className="text-neutral text-sm leading-relaxed">
            This project strengthened my understanding of machine learning, financial data, feature engineering,
            backtesting, evaluation leakage, trading simulation, model comparison, and the difficulty of building
            trustworthy predictive systems.
          </p>
        </div>
      </div>

      {/* Pipeline Diagrams */}
      <div className="mt-8 space-y-6">
        <h3 className="text-primary-content text-lg font-semibold">System Pipelines</h3>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-tertiary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            1. Data Collection Pipeline
          </p>
          <div className="overflow-x-auto">
            <FlowDiagram steps={pipelineSteps} accentColor="#14b8a6" />
          </div>
        </div>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-tertiary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            2. Model Architecture
          </p>
          <div className="overflow-x-auto">
            <FlowDiagram steps={modelSteps} accentColor="#38bdf8" />
          </div>
        </div>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-tertiary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            3. Trading Simulator
          </p>
          <div className="overflow-x-auto">
            <FlowDiagram steps={tradingSteps} accentColor="#a78bfa" />
          </div>
        </div>

        <div className="bg-secondary border-border rounded-xl border p-5">
          <p className="text-tertiary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            4. Evaluation Framework
          </p>
          <div className="overflow-x-auto">
            <FlowDiagram steps={evalSteps} accentColor="#34d399" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-secondary border-border mt-6 rounded-xl border p-5">
        <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">
          Technologies Used
        </p>
        <div className="flex flex-wrap gap-2">
          {[
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
            'LightGBM',
            'Backtesting',
            'Sentiment Analysis',
            'Technical Indicators',
            'Statistical Testing',
          ].map((tech) => (
            <span
              key={tech}
              className="bg-primary border-border text-tertiary-content rounded-md border px-2 py-0.5 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DissertationSection
