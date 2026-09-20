"use client";

import React, { useState, useSyncExternalStore } from "react";

interface BlockOption {
  id: string;
  name: string;
  nominalSize: string;
  sqFt: number;
  coreVolume: number; // in cubic feet
}

const BLOCK_SIZES: BlockOption[] = [
  { id: "8x8x16", name: '8"x8"x16" Standard', nominalSize: "8\" x 8\" x 16\"", sqFt: 0.8888, coreVolume: 0.25 },
  { id: "4x8x16", name: '4"x8"x16" Slim Partition', nominalSize: "4\" x 8\" x 16\"", sqFt: 0.8888, coreVolume: 0.0 }, // 4" partition blocks cover 8x16 face
  { id: "6x8x16", name: '6"x8"x16" Medium Structural', nominalSize: "6\" x 8\" x 16\"", sqFt: 0.8888, coreVolume: 0.17 },
  { id: "12x8x16", name: '12"x8"x16" Heavy Foundation', nominalSize: "12\" x 8\" x 16\"", sqFt: 0.8888, coreVolume: 0.39 },
];

const CORE_SPACING_OPTIONS = [
  { id: "none", name: "No Grout (Empty cores)", factor: 0.0, label: "None" },
  { id: "solid", name: "Solid Grouted (All cells)", factor: 1.0, label: "Solid" },
  { id: "16oc", name: "16\" on-center (every block cell)", factor: 0.5, label: "16\" o.c." },
  { id: "24oc", name: "24\" on-center", factor: 0.33, label: "24\" o.c." },
  { id: "32oc", name: "32\" on-center (every 2nd block)", factor: 0.25, label: "32\" o.c." },
  { id: "48oc", name: "48\" on-center (every 3rd block)", factor: 0.17, label: "48\" o.c." },
];

const WASTE_MARGINS = [
  { value: 0, label: "0%" },
  { value: 5, label: "5%" },
  { value: 10, label: "10%", recommended: true },
  { value: 15, label: "15%" },
];

interface BlockCalculatorProps {
  defaultBlock?: string;
  defaultCoreSpacing?: string;
  defaultEnableCost?: boolean;
}

export default function BlockCalculatorEngine({
  defaultBlock = "8x8x16",
  defaultCoreSpacing = "none",
  defaultEnableCost = false,
}: BlockCalculatorProps = {}) {
  // Inputs
  const [length, setLength] = useState<number>(20);
  const [height, setHeight] = useState<number>(8);
  const [selectedBlock, setSelectedBlock] = useState<string>(defaultBlock);
  const [wastePct, setWastePct] = useState<number>(10);
  const [coreSpacing, setCoreSpacing] = useState<string>(defaultCoreSpacing);
  const [enableCost, setEnableCost] = useState<boolean>(defaultEnableCost);
  const [costPerBlock, setCostPerBlock] = useState<number>(2.50);
  const [costPerMortarBag, setCostPerMortarBag] = useState<number>(8.00);
  const [costPerGroutBag, setCostPerGroutBag] = useState<number>(9.00);

  // UI state
  const [copied, setCopied] = useState<boolean>(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const blockInfo = BLOCK_SIZES.find((b) => b.id === selectedBlock) || BLOCK_SIZES[0];
  const surfaceArea = length * height;
  const blocksRequired = Math.ceil((surfaceArea / blockInfo.sqFt) * (1 + wastePct / 100));

  // Grout Calculations
  const selectedSpacing = CORE_SPACING_OPTIONS.find((s) => s.id === coreSpacing) || CORE_SPACING_OPTIONS[0];
  const groutVolumeCuFt = blocksRequired * blockInfo.coreVolume * selectedSpacing.factor * 1.10; // includes 10% grout waste
  const groutVolumeCuYd = groutVolumeCuFt / 27;
  const groutBagsRequired = Math.ceil(groutVolumeCuFt / 0.6); // 80lb bag yields 0.6 cu ft

  // Mortar Calculations
  const mortarBagsRequired = Math.ceil((blocksRequired / 100) * 3.5); // 3.5 bags per 100 blocks

  // Cost Calculations
  const blocksCost = blocksRequired * costPerBlock;
  const mortarCost = mortarBagsRequired * costPerMortarBag;
  const groutCost = selectedSpacing.id !== "none" ? groutBagsRequired * costPerGroutBag : 0;
  const totalCost = blocksCost + mortarCost + groutCost;

  const handleIncrementLength = () => setLength((prev) => prev + 0.5);
  const handleDecrementLength = () => setLength((prev) => Math.max(1, prev - 0.5));
  const handleIncrementHeight = () => setHeight((prev) => prev + 0.5);
  const handleDecrementHeight = () => setHeight((prev) => Math.max(1, prev - 0.5));

  const handleCopySummary = async () => {
    let text = `--- CONCRETE BLOCK WALL ESTIMATION REPORT ---
Wall Specifications:
  - Wall Length: ${length.toFixed(1)} ft
  - Wall Height: ${height.toFixed(1)} ft
  - Selected Block Size: ${blockInfo.name}
  - Surface Area Coverage per Block: ${blockInfo.sqFt.toFixed(4)} sq ft
  - Waste Margin: ${wastePct}% ${wastePct === 10 ? "(Recommended)" : ""}

Calculated Outputs:
  - Total Wall Surface Area: ${surfaceArea.toFixed(2)} sq ft
  - Total Concrete Blocks Required: ${blocksRequired.toLocaleString()} blocks
  - Estimated Mortar Mix Bags (80lb): ${mortarBagsRequired} bags`;

    if (selectedSpacing.id !== "none") {
      text += `
  - Core Fill Spacing: ${selectedSpacing.name}
  - Estimated Grout Volume: ${groutVolumeCuYd.toFixed(2)} cu yd (${groutVolumeCuFt.toFixed(1)} cu ft)
  - Estimated Grout Bags (80lb): ${groutBagsRequired} bags`;
    }

    if (enableCost) {
      text += `

Cost Estimation:
  - Blocks Cost (${blocksRequired} @ $${costPerBlock.toFixed(2)}): $${blocksCost.toFixed(2)}
  - Mortar Cost (${mortarBagsRequired} @ $${costPerMortarBag.toFixed(2)}): $${mortarCost.toFixed(2)}`;
      if (selectedSpacing.id !== "none") {
        text += `
  - Grout Cost (${groutBagsRequired} @ $${costPerGroutBag.toFixed(2)}): $${groutCost.toFixed(2)}`;
      }
      text += `
  - Total Estimated Materials Cost: $${totalCost.toFixed(2)}`;
    }

    text += `

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

  const handleDownloadPdf = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const reportContent = `
      <html>
        <head>
          <title>Block Wall Estimation Report</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              padding: 40px;
              color: #1e293b;
              line-height: 1.6;
            }
            .header {
              border-bottom: 2px solid #d85d44;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .title {
              font-size: 24px;
              font-weight: 800;
              color: #0f172a;
              margin: 0;
            }
            .subtitle {
              font-size: 14px;
              color: #64748b;
              margin-top: 5px;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #475569;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 5px;
              margin-bottom: 15px;
            }
            .grid {
              display: grid;
              grid-template-cols: 1fr 1fr;
              gap: 15px;
            }
            .item {
              font-size: 14px;
            }
            .label {
              font-weight: 600;
              color: #475569;
            }
            .value {
              font-family: monospace;
              font-weight: 700;
              color: #0f172a;
            }
            .highlight {
              font-size: 18px;
              color: #d85d44;
              font-weight: 800;
            }
            .footer {
              border-top: 1px solid #e2e8f0;
              padding-top: 20px;
              margin-top: 40px;
              font-size: 12px;
              color: #94a3b8;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">CONCRETE BLOCK WALL ESTIMATION REPORT</h1>
            <div class="subtitle">Generated on ${new Date().toLocaleDateString()} via blockwallcalculator.com</div>
          </div>
          
          <div class="section">
            <div class="section-title">Wall Specifications</div>
            <div class="grid">
              <div class="item"><span class="label">Wall Length:</span> <span class="value">${length.toFixed(1)} ft</span></div>
              <div class="item"><span class="label">Wall Height:</span> <span class="value">${height.toFixed(1)} ft</span></div>
              <div class="item"><span class="label">Block Size:</span> <span class="value">${blockInfo.name}</span></div>
              <div class="item"><span class="label">Block Coverage:</span> <span class="value">${blockInfo.sqFt.toFixed(4)} sq ft</span></div>
              <div class="item"><span class="label">Waste Margin:</span> <span class="value">${wastePct}%</span></div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Material Quantities</div>
            <div class="grid">
              <div class="item"><span class="label">Total Surface Area:</span> <span class="value">${surfaceArea.toFixed(2)} sq ft</span></div>
              <div class="item"><span class="label">Total Blocks Required:</span> <span class="value highlight">${blocksRequired.toLocaleString()} blocks</span></div>
              <div class="item"><span class="label">Mortar Mix Bags (80lb):</span> <span class="value">${mortarBagsRequired} bags</span></div>
            </div>
          </div>
          
          ${selectedSpacing.id !== "none" ? `
          <div class="section">
            <div class="section-title">Grout & Core Fill Estimates</div>
            <div class="grid">
              <div class="item"><span class="label">Core Spacing:</span> <span class="value">${selectedSpacing.name}</span></div>
              <div class="item"><span class="label">Grout Volume:</span> <span class="value">${groutVolumeCuYd.toFixed(2)} cu yd (${groutVolumeCuFt.toFixed(1)} cu ft)</span></div>
              <div class="item"><span class="label">80lb Grout Bags:</span> <span class="value">${groutBagsRequired} bags</span></div>
            </div>
          </div>
          ` : ""}
          
          ${enableCost ? `
          <div class="section">
            <div class="section-title">Cost & Budget Breakdown</div>
            <div class="grid">
              <div class="item"><span class="label">Blocks Cost:</span> <span class="value">$${blocksCost.toFixed(2)}</span></div>
              <div class="item"><span class="label">Mortar Cost:</span> <span class="value">$${mortarCost.toFixed(2)}</span></div>
              ${selectedSpacing.id !== "none" ? `<div class="item"><span class="label">Grout Cost:</span> <span class="value">$${groutCost.toFixed(2)}</span></div>` : ""}
              <div class="item"><span class="label">Total Estimated Cost:</span> <span class="value highlight">$${totalCost.toFixed(2)}</span></div>
            </div>
          </div>
          ` : ""}
          
          <div class="footer">
            © ${new Date().getFullYear()} blockwallcalculator.com. All rights reserved.
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(reportContent);
    printWindow.document.close();
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

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-zinc-800 my-6"></div>

          {/* Grout & Core Fill Panel */}
          <div className="space-y-4">
            <h3 className="text-md font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-masonry-brick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Core Fill & Grout (Optional)
            </h3>
            <div>
              <label htmlFor="core-spacing" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
                Vertical Core Spacing Spillage Buffer
              </label>
              <div className="relative">
                <select
                  id="core-spacing"
                  value={coreSpacing}
                  onChange={(e) => setCoreSpacing(e.target.value)}
                  className="w-full h-12 pl-4 pr-10 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-utility-action appearance-none cursor-pointer"
                >
                  {CORE_SPACING_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {blockInfo.id === "4x8x16" && coreSpacing !== "none" && (
                <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                  Note: Slim 4" blocks are typically solid and do not have cores to fill. Core volume is estimated at 0.
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-zinc-800 my-6"></div>

          {/* Material Cost Estimation Panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-masonry-brick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Material Cost Estimator (Optional)
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableCost}
                  onChange={(e) => setEnableCost(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-400 dark:bg-zinc-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-700 dark:peer-checked:bg-blue-800"></div>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor="cost-block" className="block text-xs font-semibold text-slate-700 dark:text-zinc-400 mb-1">
                  Cost per Block ($)
                </label>
                <input
                  id="cost-block"
                  type="number"
                  min="0"
                  step="0.01"
                  value={costPerBlock}
                  onChange={(e) => setCostPerBlock(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full h-11 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-utility-action dark:text-zinc-50"
                />
              </div>
              <div>
                <label htmlFor="cost-mortar" className="block text-xs font-semibold text-slate-700 dark:text-zinc-400 mb-1">
                  Cost per Mortar Bag ($)
                </label>
                <input
                  id="cost-mortar"
                  type="number"
                  min="0"
                  step="0.01"
                  value={costPerMortarBag}
                  onChange={(e) => setCostPerMortarBag(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full h-11 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-utility-action dark:text-zinc-50"
                />
              </div>
              {selectedSpacing.id !== "none" && (
                <div className="sm:col-span-2">
                  <label htmlFor="cost-grout" className="block text-xs font-semibold text-slate-700 dark:text-zinc-400 mb-1">
                    Cost per Grout Bag ($)
                  </label>
                  <input
                    id="cost-grout"
                    type="number"
                    min="0"
                    step="0.01"
                    value={costPerGroutBag}
                    onChange={(e) => setCostPerGroutBag(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full h-11 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-utility-action dark:text-zinc-50"
                  />
                </div>
              )}
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

            {/* Grout Details (Conditional) */}
            {selectedSpacing.id !== "none" && (
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-4">
                <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider block mb-2">
                  Grout & Core Fill Estimates
                </span>
                <ul className="text-sm space-y-2 text-slate-350">
                  <li className="flex justify-between">
                    <span>Grout Volume:</span>
                    <span className="font-mono font-bold">
                      {mounted ? `${groutVolumeCuYd.toFixed(2)} cu yd` : "..."}
                      <span className="text-xs font-normal text-slate-400 ml-1">
                        ({mounted ? groutVolumeCuFt.toFixed(1) : "..."} cu ft)
                      </span>
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>80lb Grout Bags:</span>
                    <span className="font-mono font-bold">
                      {mounted ? `${groutBagsRequired.toLocaleString()} bags` : "..."}
                    </span>
                  </li>
                  <li className="flex justify-between border-t border-slate-700/40 pt-2 text-slate-400">
                    <span>Core Spacing:</span>
                    <span className="text-xs font-medium">{selectedSpacing.name}</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Cost Breakdown Details (Conditional) */}
            {enableCost && (
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-2xl p-4">
                <span className="text-xs uppercase font-semibold text-slate-300 tracking-wider block mb-2">
                  Material Budget Estimates
                </span>
                <ul className="text-sm space-y-2 text-slate-350">
                  <li className="flex justify-between">
                    <span>Blocks Cost:</span>
                    <span className="font-mono">
                      ${mounted ? blocksCost.toFixed(2) : "..."}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mortar ({mortarBagsRequired} bags):</span>
                    <span className="font-mono">
                      ${mounted ? mortarCost.toFixed(2) : "..."}
                    </span>
                  </li>
                  {selectedSpacing.id !== "none" && (
                    <li className="flex justify-between">
                      <span>Grout ({groutBagsRequired} bags):</span>
                      <span className="font-mono">
                        ${mounted ? groutCost.toFixed(2) : "..."}
                      </span>
                    </li>
                  )}
                  <li className="flex justify-between border-t border-slate-700/40 pt-2 text-green-400 font-extrabold text-base">
                    <span>Total Cost:</span>
                    <span className="font-mono">
                      ${mounted ? totalCost.toFixed(2) : "..."}
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
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

          <button
            type="button"
            onClick={handleDownloadPdf}
            className="w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2.5 bg-masonry-brick hover:bg-[#c24f38] text-white transition-all hover:scale-[1.02] active:scale-98 shadow-md cursor-pointer select-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Report
          </button>
        </div>
      </div>
    </div>
  );
}
