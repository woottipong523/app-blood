/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Users, Sparkles } from 'lucide-react';

export default function App() {
  const [targetCC, setTargetCC] = useState<number>(10000);
  const [currentCC, setCurrentCC] = useState<number>(4500);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const percentage = targetCC > 0 ? Math.min(100, Math.max(0, (currentCC / targetCC) * 100)) : 0;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8 font-sans text-white overflow-x-hidden relative selection:bg-rose-500/30">

      {/* --- Ambient Glowing Background --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-rose-600/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-blue-600/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* === Left Side: Blood Container Graphic === */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-12">

          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-b from-rose-500/40 via-purple-500/20 to-indigo-600/40 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            {/* Top Hanger Structure */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-10 border-[4px] border-slate-700/80 rounded-t-2xl border-b-0 backdrop-blur-sm z-10 drop-shadow-xl"></div>
              <div className="w-8 h-4 bg-slate-800 border border-slate-600 rounded-md z-10 shadow-lg flex items-center justify-center">
                <div className="w-4 h-1 bg-slate-600 rounded-full"></div>
              </div>
            </div>

            {/* The Main Bag Container */}
            <div className="relative w-72 md:w-80 h-[480px] border border-white/10 rounded-[3rem] bg-slate-900/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] flex flex-col justify-end z-20">

              {/* Glass Reflections */}
              <div className="absolute top-0 left-0 w-full h-full rounded-[3rem] pointer-events-none z-40" style={{ boxShadow: 'inset 0 20px 40px rgba(255,255,255,0.1)' }}></div>
              <div className="absolute top-6 left-4 w-4 h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-full blur-[2px] pointer-events-none z-40 transform -skew-x-6 opacity-60"></div>
              <div className="absolute top-10 right-6 w-2 h-[25%] bg-gradient-to-b from-white/20 to-transparent rounded-full blur-[1px] pointer-events-none z-40 transform -skew-x-6 opacity-40"></div>

              {/* Liquid Level */}
              <div
                className="relative w-full bg-gradient-to-t from-rose-800 via-rose-600 to-rose-400 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-start rounded-b-[2.8rem]"
                style={{ height: `${percentage}%` }}
              >
                {/* Surface Wave Effect */}
                {percentage > 0 && percentage < 100 && (
                  <>
                    <div className="absolute top-0 left-0 w-[200%] h-16 -mt-14 opacity-80 animate-wave"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M 0 10 Q 25 20 50 10 T 100 10 L 100 20 L 0 20 Z\' fill=\'%23fb7185\'/%3E%3C/svg%3E")',
                        backgroundSize: '50% 100%'
                      }}>
                    </div>
                    <div className="absolute top-0 left-0 w-[200%] h-16 -mt-16 opacity-40 animate-wave"
                      style={{
                        animationDirection: 'reverse',
                        animationDuration: '7s',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M 0 10 Q 25 20 50 10 T 100 10 L 100 20 L 0 20 Z\' fill=\'%23f43f5e\'/%3E%3C/svg%3E")',
                        backgroundSize: '50% 100%'
                      }}>
                    </div>
                  </>
                )}

                {/* Subtle Inner Glow in Liquid */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none rounded-b-[2.8rem]"></div>

                {/* Rising Bubbles */}
                {percentage > 5 && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-b-[2.8rem]">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bottom-[-20px] bg-white/30 rounded-full animate-bubble backdrop-blur-sm"
                        style={{
                          left: `${5 + Math.random() * 90}%`,
                          width: `${3 + Math.random() * 6}px`,
                          height: `${3 + Math.random() * 6}px`,
                          animationDelay: `${Math.random() * 4}s`,
                          animationDuration: `${2 + Math.random() * 3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Center Status Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-luminosity">
                <div className="w-48 h-48 bg-slate-950/60 backdrop-blur-xl rounded-full border border-white/10 flex flex-col items-center justify-center px-4 py-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group-hover:bg-slate-950/40 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent"></div>
                  <Heart className={`w-12 h-12 mb-2 transition-transform duration-500 group-hover:scale-110 ${percentage >= 100 ? 'text-rose-400 fill-rose-500 animate-pulse' : 'text-rose-400 fill-rose-500/80 shadow-rose-500 drop-shadow-lg'}`} />
                  <span className="text-5xl font-black tracking-tighter text-white drop-shadow-lg tabular-nums">
                    {percentage.toFixed(0)}<span className="text-2xl text-rose-400 ml-1">%</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mt-2">บรรลุเป้าหมาย</span>
                </div>
              </div>
            </div>

            {/* Bottom Input Tube — blood flows UP into bag */}
            <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-10 h-28 z-10">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-800 border border-slate-600 rounded-lg shadow-lg"></div>
              <svg className="w-full h-full pb-3 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]" viewBox="0 0 10 100" preserveAspectRatio="none">
                <path d="M 5 100 L 5 0" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" />
                {currentCC > 0 && percentage < 100 && (
                  <path d="M 5 100 L 5 0" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" strokeDasharray="15 15" className="animate-flow" />
                )}
                {percentage >= 100 && (
                  <path d="M 5 100 L 5 0" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
                )}
              </svg>
            </div>

          </div>
        </div>

        {/* === Right Side: Interactive Dashboard === */}
        <div className="lg:col-span-7 flex flex-col space-y-8 lg:space-y-10 pl-0 lg:pl-10 relative z-20">

          {/* Header Title Section */}
          <div className="space-y-4 relative">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-rose-500/20 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-rose-500/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-rose-300 backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              ติดตามการบริจาคเลือด · สดๆ
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm flex items-center gap-4">
              บริจาคเลือด
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
              ทุกหยดมีความหมาย ช่วยกันให้ถึงเป้าหมายและช่วยชีวิตคนในชุมชนของเรา
            </p>
          </div>

          {/* Interactive Controls (Glass Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-30">

            {/* Target Input Card */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-b from-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl blur transition duration-500 pointer-events-none"></div>
              <div className="relative flex flex-col space-y-3 bg-slate-900/60 p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center pointer-events-none">
                    <Activity className="w-5 h-5 text-indigo-400" />
                  </div>
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 cursor-pointer">
                    เป้าหมาย (ซีซี)
                  </label>
                </div>
                <div className="relative mt-2">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-lg pointer-events-none">CC</span>
                  <input
                    type="number"
                    value={targetCC || ''}
                    onChange={(e) => setTargetCC(Number(e.target.value))}
                    className="w-full bg-slate-950/50 border border-slate-700/50 rounded-2xl pl-16 pr-6 py-5 text-3xl font-black text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all text-right tabular-nums shadow-inner relative z-40"
                    min="1"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Current Input Card */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-b from-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl blur transition duration-500 pointer-events-none"></div>
              <div className="relative flex flex-col space-y-3 bg-slate-900/60 p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/5 hover:border-rose-500/30 transition-all duration-300 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center pointer-events-none">
                    <Droplet className="w-5 h-5 text-rose-400 fill-rose-400/30" />
                  </div>
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 cursor-pointer">
                    เลือดที่บริจาคแล้ว (ซีซี)
                  </label>
                </div>
                <div className="relative mt-2">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-lg pointer-events-none">CC</span>
                  <input
                    type="number"
                    value={currentCC || ''}
                    onChange={(e) => setCurrentCC(Number(e.target.value))}
                    className="w-full bg-slate-950/50 border border-slate-700/50 rounded-2xl pl-16 pr-6 py-5 text-3xl font-black text-rose-100 placeholder-slate-600 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all text-right tabular-nums shadow-inner relative z-40"
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Stats Summary Panel */}
          <div className="mt-4 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {/* Stat 1 */}
              <div className="flex flex-col space-y-2">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" /> ผู้บริจาคโดยประมาณ
                </span>
                <div className="text-3xl md:text-4xl font-black text-white tabular-nums tracking-tight">
                  {Math.ceil(currentCC / 450).toLocaleString()}
                </div>
                <span className="text-slate-500 text-sm font-medium">~450 ซีซี / คน</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col space-y-2">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> ยังขาดอีก
                </span>
                <div className="text-3xl md:text-4xl font-black text-white tabular-nums tracking-tight">
                  {Math.max(0, targetCC - currentCC).toLocaleString()}
                </div>
                <span className="text-slate-500 text-sm font-medium">ซีซี ที่ยังต้องการ</span>
              </div>

              {/* Stat 3 (Status) */}
              <div className="flex flex-col space-y-2 col-span-2 md:col-span-1">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  สถานะ
                </span>
                <div className={`text-xl font-bold flex flex-col justify-center h-full ${percentage >= 100 ? 'text-emerald-400' : percentage >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {percentage >= 100 ? 'บรรลุเป้าหมายแล้ว! 🎉' : percentage >= 50 ? 'ครึ่งทางแล้ว! ไปต่อ!' : 'เพิ่งเริ่มต้น เราต้องการคุณ!'}
                </div>
              </div>
            </div>

            {/* Progress Bar under stats */}
            <div className="w-full h-1.5 bg-slate-800/80 rounded-full mt-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-600 via-rose-400 to-indigo-500 transition-all duration-1000 relative"
                style={{ width: `${percentage}%` }}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Developer Credit Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4 pointer-events-none">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse flex-shrink-0" />
          <span className="text-slate-400 text-xs font-medium">พัฒนาโดย</span>
          <span className="text-white text-xs font-bold">นายวุฒิพงศ์ คงสิบ</span>
          <span className="w-px h-3.5 bg-white/20 flex-shrink-0"></span>
          <a
            href="mailto:woottipong523@psru.ac.th"
            className="text-rose-400 hover:text-rose-300 text-xs font-medium transition-colors duration-200 hover:underline"
          >
            woottipong523@psru.ac.th
          </a>
        </div>
      </div>
    </div>
  );
}
