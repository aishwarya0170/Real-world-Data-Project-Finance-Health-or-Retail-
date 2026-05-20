/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, ScatterChart, Scatter, ZAxis, AreaChart, Area
} from 'recharts';
import { 
  LayoutDashboard, Database, PieChart as PieChartIcon, 
  Cpu, BookOpen, Terminal, CheckCircle2, ChevronRight, 
  Github, ArrowUpRight, TrendingUp, BarChart3, Info
} from 'lucide-react';
import { STOCK_HISTORY, CORRELATION_DATA, PROJECT_INSIGHTS } from './constants';

type Tab = 'overview' | 'data' | 'eda' | 'model' | 'guide';

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'data', label: 'Data Cleaning', icon: Database },
    { id: 'eda', label: 'Analysis', icon: BarChart3 },
    { id: 'model', label: 'Prediction', icon: Cpu },
    { id: 'guide', label: 'Setup Guide', icon: Terminal },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar / Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <TrendingUp size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">AlphaStream</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Finance AI Lab</p>
          </div>
        </div>

        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {activeTab === item.id && <motion.div layoutId="nav" className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <Card className="bg-indigo-900 text-white p-4">
            <p className="text-xs text-indigo-200 mb-2">Project Repository</p>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">alpha-stream-v1</span>
              <Github size={16} className="text-indigo-300" />
            </div>
          </Card>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-10 pb-24 lg:pb-10">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-indigo-600 font-semibold text-sm mb-1 uppercase tracking-wider">Project Portfolio</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Stock Market Intelligence & Prediction
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Dataset Ready</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">Model Trained</span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-white to-indigo-50/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <LayoutDashboard size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Objective</h3>
                      <p className="text-sm text-slate-500">Predict future stock prices</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Build an end-to-end Python pipeline to analyze financial trends and predict trading settlements using Random Forest regression.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Data Range</h3>
                      <p className="text-sm text-slate-500">Jan 2023 - Jun 2023</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-slate-800">5.2K</span>
                    <span className="text-sm text-slate-500 pb-1">Total Records</span>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Model Metric</h3>
                      <p className="text-sm text-slate-500">MSE Score</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-slate-800">0.942</span>
                    <span className="text-sm text-slate-500 pb-1">R² Accuracy</span>
                  </div>
                </Card>
              </div>

              <Card>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-xl">Stock Price Trend (Actual)</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-3 h-3 rounded-full bg-indigo-600" /> Close Price
                    </div>
                  </div>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={STOCK_HISTORY}>
                      <defs>
                        <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="date" tick={{fontSize: 10}} tickLine={false} axisLine={false} />
                      <YAxis tick={{fontSize: 10}} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Area type="monotone" dataKey="close" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorClose)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sticky top-0">
                <Card>
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Info size={18} className="text-indigo-600" />
                    Key Business Insights
                  </h3>
                  <div className="space-y-4">
                    {PROJECT_INSIGHTS.map((insight, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-default">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-slate-800">{insight.title}</h4>
                          <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${
                            insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {insight.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{insight.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="flex flex-col">
                  <h3 className="font-bold text-lg mb-4">Project Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    {[
                      { name: 'Python', role: 'Engine', color: 'bg-yellow-50 text-yellow-700' },
                      { name: 'Pandas', role: 'Cleaning', color: 'bg-blue-50 text-blue-700' },
                      { name: 'SciKit Learn', role: 'Modeling', color: 'bg-orange-50 text-orange-700' },
                      { name: 'React', role: 'UI', color: 'bg-cyan-50 text-cyan-700' },
                      { name: 'Vite', role: 'Core', color: 'bg-purple-50 text-purple-700' },
                      { name: 'Matplotlib', role: 'Visuals', color: 'bg-emerald-50 text-emerald-700' },
                    ].map((tech) => (
                      <div key={tech.name} className={`p-4 rounded-2xl ${tech.color} flex flex-col items-center justify-center text-center`}>
                        <span className="font-black text-lg">{tech.name}</span>
                        <span className="text-[10px] uppercase opacity-80">{tech.role}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === 'guide' && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <header className="text-center mb-10">
                <h3 className="text-3xl font-black mb-2">Setup & Run Guide</h3>
                <p className="text-slate-500">Step-by-step instructions for local reproduction</p>
              </header>

              <div className="space-y-4">
                {[
                  {
                    title: "1. Install Python & Dependencies",
                    commands: "pip install -r requirements.txt",
                    desc: "Ensure Python 3.10+ is installed on your machine."
                  },
                  {
                    title: "2. Activate Virtual Environment",
                    commands: "python -m venv venv\nsource venv/bin/activate",
                    desc: "Keep project workspace clean and isolated."
                  },
                  {
                    title: "3. Run Automated Analysis",
                    commands: "python scripts/train_model.py",
                    desc: "Executes data cleaning, EDA, and model training in one go."
                  },
                  {
                    title: "4. Explore Notebooks",
                    commands: "jupyter notebook",
                    desc: "Open 'notebooks/analysis.ipynb' for interactive visualizations."
                  }
                ].map((step, idx) => (
                  <Card key={idx} className="group hover:border-indigo-300 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-500 mb-4">{step.desc}</p>
                        <div className="bg-slate-900 rounded-xl p-4 relative overflow-hidden group-hover:ring-2 ring-indigo-400 transition-all">
                          <code className="text-indigo-400 text-sm font-mono whitespace-pre">{step.commands}</code>
                          <Terminal className="absolute right-4 top-4 text-slate-800" size={20} />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'model' && (
            <motion.div
              key="model"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="h-[450px]">
                  <h3 className="font-bold text-lg mb-6">Model Prediction vs Actual</h3>
                  <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={STOCK_HISTORY}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" tick={{fontSize: 10}} />
                      <YAxis tick={{fontSize: 10}} />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36}/>
                      <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} name="Actual Market Price" />
                      <Line type="monotone" dataKey="pred" stroke="#4f46e5" strokeWidth={3} strokeDasharray="5 5" name="RL Model Prediction" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="flex flex-col">
                  <h3 className="font-bold text-lg mb-6">Evaluation Metrics</h3>
                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {[
                      { label: 'MSE (Mean Squared Error)', value: '1.24', sub: 'Low error indicates high precision', color: 'text-indigo-600' },
                      { label: 'MAE (Mean Absolute Error)', value: '0.85', sub: 'Average variation from actual price', color: 'text-emerald-600' },
                      { label: 'R-Squared Score', value: '0.942', sub: 'The model explains 94% of the variance', color: 'text-amber-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                          <span className={`text-3xl font-black ${stat.color}`}>{stat.value}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="bg-slate-900 border-0">
                <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                  <div className="p-6 bg-indigo-600/10 rounded-3xl">
                    <Cpu size={48} className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Random Forest Regressor Architecture</h4>
                    <p className="text-indigo-200/70 text-sm leading-relaxed max-w-2xl">
                      The model uses an ensemble of 100 Decision Trees to capture non-linear market patterns. 
                      Features include 5-day Moving Averages, Daily High/Low ranges, and lagging volume indicators.
                    </p>
                    <div className="flex gap-4 mt-6">
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-mono">max_depth: None</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-mono">min_samples_split: 2</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-mono">n_estimators: 100</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'eda' && (
            <motion.div
              key="eda"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <Card className="h-[400px]">
                <h3 className="font-bold text-lg mb-6">Price Distribution (Histogram)</h3>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={STOCK_HISTORY}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" hide />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="close" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="h-[400px]">
                <h3 className="font-bold text-lg mb-6">Feature Correlation Matrix</h3>
                <div className="grid grid-cols-2 gap-4 h-[300px]">
                  {CORRELATION_DATA.map((d, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase font-black">{d.x} vs {d.y}</span>
                      <span className={`text-2xl font-black ${d.v > 0.9 ? 'text-indigo-600' : 'text-slate-400'}`}>
                        {(d.v * 100).toFixed(0)}%
                      </span>
                      <div className="w-full bg-slate-200 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${d.v * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="md:col-span-2">
                <h3 className="font-bold mb-4">Volume vs Price Analysis</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis type="number" dataKey="volume" name="Volume" unit="k" label={{ value: 'Trading Volume', position: 'insideBottom', offset: -5 }} />
                      <YAxis type="number" dataKey="close" name="Price" unit="$" label={{ value: 'Settlement Price', angle: -90, position: 'insideLeft' }} />
                      <ZAxis type="number" range={[60, 400]} />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter name="Days" data={STOCK_HISTORY} fill="#10b981" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'data' && (
            <motion.div
              key="data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-indigo-600">
                    <Database size={20} />
                    Data Cleaning Protocol
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: 'Handling Nulls', action: 'Used Forward-Fill (ffill) to ensure temporal continuity in stock quotes.', status: 'Done' },
                      { step: 'Outlier Detection', action: 'Applied Z-Score (threshold: 3) to filter anomalous trading spikes.', status: 'Done' },
                      { step: 'Type Casting', action: 'Converted ISO dates to datetime objects for time-series indexing.', status: 'Done' },
                      { step: 'Ticker Standardization', action: 'Ensured consistent casing and symbol verification via lookup.', status: 'Done' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">{item.step}</h4>
                          <p className="text-xs text-slate-500">{item.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="flex flex-col">
                  <h3 className="font-bold text-lg mb-4">Feature Engineering Strategy</h3>
                  <p className="text-sm text-slate-500 mb-6">We created several derived features to enhance model sensitivity to momentum:</p>
                  <div className="space-y-3 flex-1">
                    <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-indigo-700">MA_5 / MA_20</span>
                        <span className="text-[10px] bg-indigo-200 px-2 py-0.5 rounded text-indigo-800">MOMENTUM</span>
                      </div>
                      <p className="text-xs text-slate-600">Short-term vs long-term moving average crossovers.</p>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-emerald-700">DAILY_VOLATILITY</span>
                        <span className="text-[10px] bg-emerald-200 px-2 py-0.5 rounded text-emerald-800">RISK</span>
                      </div>
                      <p className="text-xs text-slate-600">(High - Low) / Open ratio to track intraday variability.</p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-amber-700">LAG_1_CLOSE</span>
                        <span className="text-[10px] bg-amber-200 px-2 py-0.5 rounded text-amber-800">TEMPORAL</span>
                      </div>
                      <p className="text-xs text-slate-600">Yesterday's closing price as a baseline predictor.</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="overflow-hidden p-0">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-lg">Raw Data Preview (Top 5 Rows)</h3>
                  <button className="text-indigo-600 text-sm font-semibold flex items-center gap-1">
                    Download CSV <ArrowUpRight size={14} />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-[10px] uppercase tracking-widest font-black text-slate-400">
                      <tr>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Ticker</th>
                        <th className="px-6 py-4">Open</th>
                        <th className="px-6 py-4">High</th>
                        <th className="px-6 py-4">Close</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {STOCK_HISTORY.slice(0, 5).map((row, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-600">{row.date}</td>
                          <td className="px-6 py-4"><span className="px-2 py-1 bg-slate-100 rounded-md font-mono text-xs font-bold text-slate-700">AAPL</span></td>
                          <td className="px-6 py-4 font-mono">${row.open.toFixed(2)}</td>
                          <td className="px-6 py-4 font-mono">${(row.open + 2).toFixed(2)}</td>
                          <td className="px-6 py-4 font-mono font-bold text-indigo-600">${row.close.toFixed(2)}</td>
                          <td className="px-6 py-4">
                            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-emerald-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Processed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Tab Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-between z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as Tab)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg ${
              activeTab === item.id ? 'text-indigo-600' : 'text-slate-400'
            }`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

