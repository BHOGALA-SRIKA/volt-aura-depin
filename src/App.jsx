import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Battery, Zap, TrendingUp, Activity, ShieldCheck, Globe } from 'lucide-react';
import { calculateTrade } from './logic/arbitrageEngine';

function App() {
  const [history, setHistory] = useState([]);
  const [battery, setBattery] = useState(85);
  const [profit, setProfit] = useState(142.50);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = parseFloat((Math.random() * 8 + 2).toFixed(2));
      const newTime = new Date().toLocaleTimeString().slice(0, 5);
      const decision = calculateTrade(newPrice, battery);

      if (decision.action === 'BUY') {
        setBattery(prev => Math.min(100, prev + 5));
        setProfit(prev => prev - (newPrice * 0.05));
      } else if (decision.action === 'SELL') {
        setBattery(prev => Math.max(0, prev - 5));
        setProfit(prev => prev + (newPrice * 0.4));
      }

      if (decision.action !== 'IDLE') {
        setLogs(prev => [{time: newTime, ...decision, price: newPrice}, ...prev].slice(0, 6));
      }
      setHistory(prev => [...prev, { time: newTime, price: newPrice }].slice(-12));
    }, 3000);
    return () => clearInterval(interval);
  }, [battery]);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-slate-950 text-slate-100">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-pink-600 p-1.5 rounded-lg"><Globe size={20}/></div>
            <h1 className="text-2xl font-bold tracking-tight">Volt-Aura</h1>
          </div>
          <p className="text-slate-400 text-sm italic">Empowering women through decentralized energy arbitrage.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 bg-slate-900/50 p-3 rounded-xl border border-slate-800 backdrop-blur-sm">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Household Profit</p>
            <p className="text-2xl font-mono text-green-400">${profit.toFixed(2)}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="text-pink-400" size={20} />
                <h2 className="text-lg font-semibold">Live DePIN Energy Market</h2>
              </div>
              <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Local Micro-grid Live
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={history}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px'}} />
                  <Line type="monotone" dataKey="price" stroke="#ec4899" strokeWidth={3} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-slate-500 mb-4 flex items-center gap-2"><ShieldCheck size={16}/> AUTO-TRADING STATUS</h3>
              <div className="space-y-3">
                {logs.length === 0 && <p className="text-slate-600 text-xs italic">Analyzing market patterns...</p>}
                {logs.map((log, i) => (
                  <div key={i} className={`text-[11px] p-2.5 rounded-lg border flex justify-between items-center ${log.action === 'BUY' ? 'bg-blue-900/10 border-blue-500/20 text-blue-300' : 'bg-pink-900/10 border-pink-500/20 text-pink-300'}`}>
                    <span><span className="opacity-50 font-mono mr-2">{log.time}</span> {log.message}</span>
                    <span className="font-bold font-mono">${log.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
               <TrendingUp className="text-pink-500 mb-2" size={32}/>
               <h3 className="font-bold text-lg italic">"Turning Volatility into Opportunity"</h3>
               <p className="text-xs text-slate-400 mt-2 px-4">Our agent identifies low-cost energy windows to ensure 100% passive income for the modern home.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Storage Capacity</p>
                <h3 className="text-2xl font-bold flex items-center gap-2 mt-1"><Battery className={battery < 20 ? "text-red-500" : "text-yellow-400"} /> {battery}%</h3>
              </div>
              <Zap className={battery > 80 ? "text-yellow-400 animate-pulse" : "text-slate-700"} size={24}/>
            </div>
            <div className="w-full bg-slate-800 h-6 rounded-lg p-1 border border-slate-700">
              <div 
                className={`h-full rounded-md transition-all duration-1000 ${battery < 20 ? 'bg-red-500' : 'bg-gradient-to-r from-yellow-500 to-yellow-300'}`}
                style={{ width: `${battery}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-4 leading-relaxed uppercase tracking-tighter text-center">Connected to Helium Energy Node #492-X</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;