"use client";

import React, { useState, useEffect } from "react";

interface BlockOption {
  id: string;
  name: string;
  nominalSize: string;
  sqFt: number;
}

const BLOCK_SIZES: BlockOption[] = [
  { id: "8x8x16", name: '8"x8"x16" Standard', nominalSize: "8\" x 8\" x 16\"", sqFt: 0.8888 },
  { id: "4x8x16", name: '4"x8"x16" Slim', nominalSize: "4\" x 8\" x 16\"", sqFt: 0.4444 },
  { id: "6x8x16", name: '6"x8"x16" Medium', nominalSize: "6\" x 8\" x 16\"", sqFt: 0.6666 },
  { id: "12x8x16", name: '12"x8"x16" Heavy Structural', nominalSize: "12\" x 8\" x 16\"", sqFt: 1.3333 },
];

const WASTE_MARGINS = [
  { value: 0, label: "0%" },
  { value: 5, label: "5%" },
  { value: 10, label: "10%", recommended: true },
  { value: 15, label: "15%" },
];

export default function BlockCalculatorEngine() {
  // Inputs
  const [length, setLength] = useState<number>(20);
  const [height, setHeight] = useState<number>(8);
  const [selectedBlock, setSelectedBlock] = useState<string>("8x8x16");
  const [wastePct, setWastePct] = useState<number>(10);

  // UI state
  const [copied, setCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Prevent hydration mismatches by tracking mount state
  useEffect(() => {
    setMounted(true);
  }, []);

  const blockInfo = BLOCK_SIZES.find((b) => b.id === selectedBlock) || BLOCK_SIZES[0];
  const surfaceArea = length * height;
  const blocksRequired = Math.ceil((surfaceArea / blockInfo.sqFt) * (1 + wastePct / 100));

  const handleIncrementLength = () => setLength((prev) => prev + 0.5);
  const handleDecrementLength = () => setLength((prev) => Math.max(1, prev - 0.5));
  const handleIncrementHeight = () => setHeight((prev) => prev + 0.5);
  const handleDecrementHeight = () => setHeight((prev) => Math.max(1, prev - 0.5));

  const handleCopySummary = async () => {
    const text = `--- CONCRETE BLOCK WALL ESTIMATION REPORT ---
Wall Specifications:
  - Wall Length: ${length.toFixed(1)} ft
  - Wall Height: ${height.toFixed(1)} ft
  - Selected Block Size: ${blockInfo.name}
  - Surface Area Coverage per Block: ${blockInfo.sqFt.toFixed(4)} sq ft
  - Waste Margin: ${wastePct}% ${wastePct === 10 ? "(Recommended)" : ""}

Calculated Outputs:
  - Total Wall Surface Area: ${surfaceArea.toFixed(2)} sq ft
  - Total Concrete Blocks Required: ${blocksRequired.toLocaleString()} blocks

Report generated via blockwallcalculator.com
---------------------------------------------`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
      {/* Input controls (Left side card) */}
      <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-xl p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-50 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-masonry-brick rounded-full block"></span>
          Calculator Inputs
        </h2>

        <div className="space-y-6">
          {/* Wall Length Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="wall-length" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                Wall Length (Feet)
              </label>
              <span className="text-sm font-mono font-bold text-utility-action bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                {length.toFixed(1)} ft
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDecrementLength}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-xl rounded-xl transition-all active:scale-95 select-none cursor-pointer"
                aria-label="Decrease wall length"
              >
                −
              </button>
              <input
                id="wall-length"
                type="number"
                min="1"
                step="0.5"
                value={length}
                onChange={(e) => setLength(Math.max(1, parseFloat(e.target.value) || 1))}
                className="flex-1 h-12 text-center text-lg font-semibold bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-utility-action dark:text-zinc-50"
              />
              <button
                type="button"
                onClick={handleIncrementLength}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-xl rounded-xl transition-all active:scale-95 select-none cursor-pointer"
                aria-label="Increase wall length"
              >
                +
              </button>
            </div>
            {/* Range Slider for desktop convenience */}
            <input
              type="range"
              min="1"
              max="200"
              step="0.5"
              value={length}
              onChange={(e) => setLength(parseFloat(e.target.value))}
              className="w-full mt-4 accent-utility-action h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          {/* Wall Height Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="wall-height" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                Wall Height (Feet)
              </label>
              <span className="text-sm font-mono font-bold text-utility-action bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                {height.toFixed(1)} ft
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDecrementHeight}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-xl rounded-xl transition-all active:scale-95 select-none cursor-pointer"
                aria-label="Decrease wall height"
              >
                −
              </button>
              <input
                id="wall-height"
                type="number"
                min="1"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(Math.max(1, parseFloat(e.target.value) || 1))}
                className="flex-1 h-12 text-center text-lg font-semibold bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-utility-action dark:text-zinc-50"
              />
              <button
                type="button"
                onClick={handleIncrementHeight}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-xl rounded-xl transition-all active:scale-95 select-none cursor-pointer"
                aria-label="Increase wall height"
              >
                +
              </button>
            </div>
            {/* Range Slider */}
            <input
              type="range"
              min="1"
              max="50"
              step="0.5"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full mt-4 accent-utility-action h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          {/* Block Size Selector */}
          <div>
            <label htmlFor="block-size" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Block Size (Nominal Width × Height × Length)
            </label>
            <div className="relative">
              <select
                id="block-size"
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="w-full h-12 pl-4 pr-10 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-utility-action appearance-none cursor-pointer"
              >
                {BLOCK_SIZES.map((block) => (
                  <option key={block.id} value={block.id}>
                    {block.name} (covers {block.sqFt.toFixed(4)} sq ft)
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Waste Margin Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-3">
              Waste & Cutting Margin Buffer
            </label>
            <div className="grid grid-cols-4 gap-2">
              {WASTE_MARGINS.map((margin) => (
                <button
                  key={margin.value}
                  type="button"
                  onClick={() => setWastePct(margin.value)}
                  className={`relative py-3 rounded-xl border text-sm font-bold transition-all flex flex-col items-center justify-center select-none cursor-pointer ${
                    wastePct === margin.value
                      ? "bg-utility-action text-white border-utility-action shadow-md scale-105"
                      : "bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  {margin.label}
                  {margin.recommended && (
                    <span
                      className={`absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                        wastePct === margin.value
                          ? "bg-masonry-brick text-white shadow-sm"
                          : "bg-slate-200 dark:bg-zinc-700 text-slate-800 dark:text-zinc-300"
                      }`}
                    >
                      Recommended
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results panel (Right side dark card) */}
      <div className="lg:col-span-5 lg:sticky lg:top-8 bg-masonry-dark text-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 min-h-[460px]">
        <div>
          <h2 className="text-xl font-bold mb-6 tracking-wide text-slate-250 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-utility-action rounded-full block"></span>
            Estimation Results
          </h2>

          <div className="space-y-6">
            {/* Wall Surface Area Output */}
            <div className="border-b border-slate-700/50 pb-4">
              <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Total Wall Surface Area
              </span>
              <div className="text-3xl font-extrabold tracking-tight mt-1">
                {surfaceArea.toFixed(2)}{" "}
                <span className="text-lg font-medium text-slate-400">sq ft</span>
              </div>
            </div>

            {/* Total Concrete Blocks Output */}
            <div className="border-b border-slate-700/50 pb-4">
              <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Concrete Blocks Required
              </span>
              <div className="text-5xl font-black text-white tracking-tight mt-1 drop-shadow-sm select-all">
                {mounted ? blocksRequired.toLocaleString() : "..."}
                <span className="text-xl font-bold text-slate-300 ml-2">blocks</span>
              </div>
            </div>

            {/* Waste Buffer Details */}
            <div className="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-4">
              <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider block mb-2">
                Calculation Breakdown
              </span>
              <ul className="text-sm space-y-2 text-slate-300">
                <li className="flex justify-between">
                  <span>Net Blocks (exact area):</span>
                  <span className="font-mono">
                    {mounted ? Math.ceil(surfaceArea / blockInfo.sqFt).toLocaleString() : "..."}
                  </span>
                </li>
                <li className="flex justify-between border-t border-slate-700/40 pt-2 text-sky-300 font-semibold">
                  <span>Buffer Margin ({wastePct}%):</span>
                  <span className="font-mono">
                    +{mounted ? Math.ceil((surfaceArea / blockInfo.sqFt) * (wastePct / 100)).toLocaleString() : "..."}
                  </span>
                </li>
                <li className="flex justify-between border-t border-slate-700/40 pt-2 text-slate-300 font-semibold">
                  <span>Standard size covers:</span>
                  <span>{blockInfo.sqFt.toFixed(4)} sq ft</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleCopySummary}
            className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
              copied
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-masonry-brick hover:bg-[#c24f38] text-white hover:scale-[1.02] active:scale-98 shadow-md"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Summary Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                Copy Contractor Summary
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
