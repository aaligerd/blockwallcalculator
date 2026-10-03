"use client";

import React, { useState, useSyncExternalStore } from "react";

export type UnitSystem = "imperial" | "metric";

export interface BlockOption {
  id: string;
  name: string;
  nominalSize: string;
  sqFt: number; // Face area in sq ft
  sqM: number;  // Face area in sq meters
  coreVolumeCuFt: number; // core volume in cu ft
  coreVolumeCuM: number;  // core volume in cu meters
  unitSystem: UnitSystem;
}

export const ALL_BLOCK_SIZES: BlockOption[] = [
  // US Imperial CMU & Cinder Blocks
  { id: "8x8x16", name: '8" × 8" × 16" Standard (US CMU)', nominalSize: "8\" × 8\" × 16\"", sqFt: 0.8888, sqM: 0.08258, coreVolumeCuFt: 0.25, coreVolumeCuM: 0.00708, unitSystem: "imperial" },
  { id: "4x8x16", name: '4" × 8" × 16" Slim Partition (US)', nominalSize: "4\" × 8\" × 16\"", sqFt: 0.8888, sqM: 0.08258, coreVolumeCuFt: 0.0, coreVolumeCuM: 0.0, unitSystem: "imperial" },
  { id: "6x8x16", name: '6" × 8" × 16" Medium Structural (US)', nominalSize: "6\" × 8\" × 16\"", sqFt: 0.8888, sqM: 0.08258, coreVolumeCuFt: 0.17, coreVolumeCuM: 0.00481, unitSystem: "imperial" },
  { id: "12x8x16", name: '12" × 8" × 16" Heavy Foundation (US)', nominalSize: "12\" × 8\" × 16\"", sqFt: 0.8888, sqM: 0.08258, coreVolumeCuFt: 0.39, coreVolumeCuM: 0.01104, unitSystem: "imperial" },
  { id: "retaining-16x6x12", name: '16" × 6" × 12" Retaining Wall Block', nominalSize: "16\" × 6\" × 12\"", sqFt: 0.6667, sqM: 0.06193, coreVolumeCuFt: 0.0, coreVolumeCuM: 0.0, unitSystem: "imperial" },
  
  // UK & European Breeze Blocks (Standard 440 x 215 face = 10 blocks per m2)
  { id: "uk-440x215x100", name: "440mm × 215mm × 100mm Standard Breeze Block (UK)", nominalSize: "440 × 215 × 100 mm", sqFt: 1.076, sqM: 0.100, coreVolumeCuFt: 0.0, coreVolumeCuM: 0.0, unitSystem: "metric" },
  { id: "uk-440x215x140", name: "440mm × 215mm × 140mm Structural Breeze Block (UK)", nominalSize: "440 × 215 × 140 mm", sqFt: 1.076, sqM: 0.100, coreVolumeCuFt: 0.0, coreVolumeCuM: 0.0, unitSystem: "metric" },
  
  // Australia / NZ Besser Blocks (Standard 390 x 190 face = 12.5 blocks per m2)
  { id: "au-390x190x190", name: "390mm × 190mm × 190mm 200 Series Besser Block (AU/NZ)", nominalSize: "390 × 190 × 190 mm", sqFt: 0.861, sqM: 0.080, coreVolumeCuFt: 0.22, coreVolumeCuM: 0.00623, unitSystem: "metric" },
  
  // International Metric Hollow Blocks (CHB / Global)
  { id: "metric-400x200x200", name: "400mm × 200mm × 200mm Hollow Block (Global)", nominalSize: "400 × 200 × 200 mm", sqFt: 0.861, sqM: 0.080, coreVolumeCuFt: 0.24, coreVolumeCuM: 0.00680, unitSystem: "metric" },
  { id: "metric-400x200x150", name: "400mm × 200mm × 150mm Medium Hollow Block (Global)", nominalSize: "400 × 200 × 150 mm", sqFt: 0.861, sqM: 0.080, coreVolumeCuFt: 0.18, coreVolumeCuM: 0.00510, unitSystem: "metric" },
  { id: "metric-400x200x100", name: "400mm × 200mm × 100mm Partition Block (Global)", nominalSize: "400 × 200 × 100 mm", sqFt: 0.861, sqM: 0.080, coreVolumeCuFt: 0.0, coreVolumeCuM: 0.0, unitSystem: "metric" },
];

const CORE_SPACING_OPTIONS = [
  { id: "none", name: "No Grout (Empty cores)", factor: 0.0, label: "None" },
  { id: "solid", name: "Solid Grouted (All cells)", factor: 1.0, label: "Solid" },
  { id: "16oc", name: "16\" / 400mm on-center (every core)", factor: 0.5, label: "16\" / 400mm o.c." },
  { id: "24oc", name: "24\" / 600mm on-center", factor: 0.33, label: "24\" / 600mm o.c." },
  { id: "32oc", name: "32\" / 800mm on-center (every 2nd block)", factor: 0.25, label: "32\" / 800mm o.c." },
  { id: "48oc", name: "48\" / 1200mm on-center (every 3rd block)", factor: 0.17, label: "48\" / 1200mm o.c." },
];

const WASTE_MARGINS = [
  { value: 0, label: "0%" },
  { value: 5, label: "5%" },
  { value: 10, label: "10%", recommended: true },
  { value: 15, label: "15%" },
];

export interface BlockCalculatorProps {
  defaultBlock?: string;
  defaultCoreSpacing?: string;
  defaultEnableCost?: boolean;
  defaultUnit?: UnitSystem;
  isRetainingWall?: boolean;
  isBreezeBlock?: boolean;
  isMortarFocused?: boolean;
}

export default function BlockCalculatorEngine({
  defaultBlock = "8x8x16",
  defaultCoreSpacing = "none",
  defaultEnableCost = false,
  defaultUnit = "imperial",
  isRetainingWall = false,
  isBreezeBlock = false,
  isMortarFocused = false,
}: BlockCalculatorProps = {}) {
  // Unit System
  const [unit, setUnit] = useState<UnitSystem>(defaultUnit);

  // Inputs
  const [length, setLength] = useState<number>(unit === "imperial" ? 20 : 6.0); // ft or meters
  const [height, setHeight] = useState<number>(unit === "imperial" ? 8 : 2.4);  // ft or meters
  const [selectedBlock, setSelectedBlock] = useState<string>(
    isBreezeBlock ? "uk-440x215x100" : isRetainingWall ? "retaining-16x6x12" : defaultBlock
  );
  const [wastePct, setWastePct] = useState<number>(10);
  const [coreSpacing, setCoreSpacing] = useState<string>(defaultCoreSpacing);
  
  // Retaining Wall Extra Inputs
  const [includeCaps, setIncludeCaps] = useState<boolean>(isRetainingWall);
  const [includeGravel, setIncludeGravel] = useState<boolean>(isRetainingWall);
  const [gravelTrenchDepth, setGravelTrenchDepth] = useState<number>(unit === "imperial" ? 12 : 30); // inches or cm

  // Cost Inputs
  const [enableCost, setEnableCost] = useState<boolean>(defaultEnableCost);
  const [costPerBlock, setCostPerBlock] = useState<number>(unit === "imperial" ? 2.50 : 2.20);
  const [costPerMortarBag, setCostPerMortarBag] = useState<number>(unit === "imperial" ? 8.00 : 7.50);
  const [costPerGroutBag, setCostPerGroutBag] = useState<number>(unit === "imperial" ? 9.00 : 8.50);

  // UI state
  const [copied, setCopied] = useState<boolean>(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Switch units handler
  const handleUnitChange = (newUnit: UnitSystem) => {
    if (newUnit === unit) return;
    setUnit(newUnit);
    if (newUnit === "metric") {
      setLength((prev) => parseFloat((prev * 0.3048).toFixed(1)));
      setHeight((prev) => parseFloat((prev * 0.3048).toFixed(1)));
      setGravelTrenchDepth(30); // 30 cm
      // switch to metric block if imperial was selected
      if (selectedBlock === "8x8x16") {
        setSelectedBlock(isBreezeBlock ? "uk-440x215x100" : "metric-400x200x200");
      }
    } else {
      setLength((prev) => parseFloat((prev / 0.3048).toFixed(1)));
      setHeight((prev) => parseFloat((prev / 0.3048).toFixed(1)));
      setGravelTrenchDepth(12); // 12 in
      // switch to imperial block if metric was selected
      if (selectedBlock.startsWith("uk-") || selectedBlock.startsWith("metric-") || selectedBlock.startsWith("au-")) {
        setSelectedBlock("8x8x16");
      }
    }
  };

  const blockInfo = ALL_BLOCK_SIZES.find((b) => b.id === selectedBlock) || ALL_BLOCK_SIZES[0];
  
  // Area & Quantity Calculations
  const surfaceAreaSqFt = unit === "imperial" ? length * height : (length * 3.28084) * (height * 3.28084);
  const surfaceAreaSqM = unit === "metric" ? length * height : (length * 0.3048) * (height * 0.3048);
  
  // Block calculation based on active unit
  const activeArea = unit === "imperial" ? surfaceAreaSqFt : surfaceAreaSqM;
  const activeBlockCoverage = unit === "imperial" ? blockInfo.sqFt : blockInfo.sqM;
  const netBlocks = Math.ceil(activeArea / activeBlockCoverage);
  const blocksRequired = Math.ceil(netBlocks * (1 + wastePct / 100));

  // Pallet Estimation (approx 108 standard 8x8x16 blocks or 72 UK breeze blocks per pallet)
  const blocksPerPallet = blockInfo.id.startsWith("uk-") ? 72 : blockInfo.id === "12x8x16" ? 60 : 108;
  const palletsRequired = Math.ceil(blocksRequired / blocksPerPallet);

  // Grout Calculations
  const selectedSpacing = CORE_SPACING_OPTIONS.find((s) => s.id === coreSpacing) || CORE_SPACING_OPTIONS[0];
  const groutVolumeCuFt = blocksRequired * blockInfo.coreVolumeCuFt * selectedSpacing.factor * 1.10; // 10% grout waste
  const groutVolumeCuYd = groutVolumeCuFt / 27;
  const groutVolumeCuM = blocksRequired * blockInfo.coreVolumeCuM * selectedSpacing.factor * 1.10;
  const groutBagsRequired = unit === "imperial"
    ? Math.ceil(groutVolumeCuFt / 0.6) // 80lb bag yields 0.6 cu ft
    : Math.ceil(groutVolumeCuM / 0.013); // 25kg bag yields ~0.013 m3

  // Mortar Calculations
  // Standard rule: ~3.5 to 4 bags (80 lb) of prepared mortar per 100 standard CMU blocks
  // In metric: ~3 bags (25kg) per 100 standard blocks or ~1 bag per 30 breeze blocks
  const mortarBags80lb = Math.ceil((blocksRequired / 100) * 3.5);
  const mortarBags25kg = Math.ceil((blocksRequired / 100) * 3.0);
  const activeMortarBags = unit === "imperial" ? mortarBags80lb : mortarBags25kg;

  // Retaining Wall Specifics (Caps & Gravel Backfill)
  const capStoneLength = unit === "imperial" ? 1.33 : 0.40; // 16 inches or 400mm
  const capStonesRequired = includeCaps ? Math.ceil((length / capStoneLength) * 1.05) : 0;
  
  // Gravel Backfill volume: 1 ft (0.3m) thick drainage zone behind wall
  const gravelVolumeCuFt = includeGravel ? length * height * (gravelTrenchDepth / 12) : 0;
  const gravelVolumeCuYd = gravelVolumeCuFt / 27;
  const gravelVolumeCuM = includeGravel ? length * height * (gravelTrenchDepth / 100) : 0;
  const gravelTons = unit === "imperial" ? gravelVolumeCuYd * 1.4 : gravelVolumeCuM * 1.6;

  // Cost Calculations
  const blocksCost = blocksRequired * costPerBlock;
  const mortarCost = activeMortarBags * costPerMortarBag;
  const groutCost = selectedSpacing.id !== "none" ? groutBagsRequired * costPerGroutBag : 0;
  const totalCost = blocksCost + mortarCost + groutCost;

  const handleIncrementLength = () => setLength((prev) => parseFloat((prev + (unit === "imperial" ? 0.5 : 0.2)).toFixed(1)));
  const handleDecrementLength = () => setLength((prev) => parseFloat((Math.max(unit === "imperial" ? 1 : 0.5, prev - (unit === "imperial" ? 0.5 : 0.2))).toFixed(1)));
  const handleIncrementHeight = () => setHeight((prev) => parseFloat((prev + (unit === "imperial" ? 0.5 : 0.2)).toFixed(1)));
  const handleDecrementHeight = () => setHeight((prev) => parseFloat((Math.max(unit === "imperial" ? 1 : 0.5, prev - (unit === "imperial" ? 0.5 : 0.2))).toFixed(1)));

  const handleCopySummary = async () => {
    let text = `--- MASONRY BLOCK WALL ESTIMATION REPORT ---
Units: ${unit.toUpperCase()}
Specifications:
  - Wall Length: ${length.toFixed(1)} ${unit === "imperial" ? "ft" : "m"}
  - Wall Height: ${height.toFixed(1)} ${unit === "imperial" ? "ft" : "m"}
  - Selected Block: ${blockInfo.name}
  - Waste Margin: ${wastePct}%

Calculated Quantities:
  - Wall Surface Area: ${unit === "imperial" ? surfaceAreaSqFt.toFixed(2) + " sq ft" : surfaceAreaSqM.toFixed(2) + " m²"}
  - Total Blocks Required: ${blocksRequired.toLocaleString()} blocks
  - Estimated Pallets: ~${palletsRequired} pallets (${blocksPerPallet} blocks/pallet)
  - Mortar Bags Required: ${activeMortarBags} bags (${unit === "imperial" ? "80 lb" : "25 kg"})`;

    if (selectedSpacing.id !== "none") {
      text += `
  - Core Fill Spacing: ${selectedSpacing.name}
  - Grout Volume: ${unit === "imperial" ? `${groutVolumeCuYd.toFixed(2)} cu yd (${groutVolumeCuFt.toFixed(1)} cu ft)` : `${groutVolumeCuM.toFixed(2)} m³`}
  - Grout Mix Bags: ${groutBagsRequired} bags`;
    }

    if (includeCaps) {
      text += `
  - Retaining Wall Cap Stones: ${capStonesRequired} units`;
    }

    if (includeGravel) {
      text += `
  - Drainage Gravel Backfill: ${unit === "imperial" ? `${gravelVolumeCuYd.toFixed(2)} cu yd (~${gravelTons.toFixed(1)} tons)` : `${gravelVolumeCuM.toFixed(2)} m³ (~${gravelTons.toFixed(1)} tonnes)`}`;
    }

    if (enableCost) {
      text += `

Cost Estimation:
  - Blocks Cost (${blocksRequired} @ $${costPerBlock.toFixed(2)}): $${blocksCost.toFixed(2)}
  - Mortar Cost (${activeMortarBags} @ $${costPerMortarBag.toFixed(2)}): $${mortarCost.toFixed(2)}`;
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
      <!DOCTYPE html>
      <html>
        <head>
          <title>Block Wall Estimation Report</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
            .header { border-bottom: 2px solid #d85d44; padding-bottom: 20px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: 800; color: #0f172a; margin: 0; }
            .subtitle { font-size: 14px; color: #64748b; margin-top: 5px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
            .item { font-size: 14px; }
            .label { font-weight: 600; color: #475569; }
            .value { font-family: monospace; font-weight: 700; color: #0f172a; }
            .highlight { font-size: 18px; color: #d85d44; font-weight: 800; }
            .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">CONCRETE & MASONRY BLOCK WALL REPORT</h1>
            <div class="subtitle">Generated on ${new Date().toLocaleDateString()} via blockwallcalculator.com</div>
          </div>
          <div class="section">
            <div class="section-title">Wall Specifications (${unit.toUpperCase()})</div>
            <div class="grid">
              <div class="item"><span class="label">Wall Dimensions:</span> <span class="value">${length.toFixed(1)} × ${height.toFixed(1)} ${unit === "imperial" ? "ft" : "m"}</span></div>
              <div class="item"><span class="label">Total Surface Area:</span> <span class="value">${unit === "imperial" ? surfaceAreaSqFt.toFixed(2) + " sq ft" : surfaceAreaSqM.toFixed(2) + " m²"}</span></div>
              <div class="item"><span class="label">Block Type:</span> <span class="value">${blockInfo.name}</span></div>
              <div class="item"><span class="label">Waste Margin:</span> <span class="value">${wastePct}%</span></div>
            </div>
          </div>
          <div class="section">
            <div class="section-title">Required Materials & Ordering Quantities</div>
            <div class="grid">
              <div class="item"><span class="label">Total Blocks Needed:</span> <span class="value highlight">${blocksRequired.toLocaleString()} blocks</span></div>
              <div class="item"><span class="label">Pallet Estimate:</span> <span class="value">~${palletsRequired} pallets</span></div>
              <div class="item"><span class="label">Mortar Mix Bags:</span> <span class="value">${activeMortarBags} bags (${unit === "imperial" ? "80 lb" : "25 kg"})</span></div>
              ${includeCaps ? `<div class="item"><span class="label">Cap Stones:</span> <span class="value">${capStonesRequired} units</span></div>` : ""}
            </div>
          </div>
          ${selectedSpacing.id !== "none" ? `
          <div class="section">
            <div class="section-title">Core Fill & Grout Specifications</div>
            <div class="grid">
              <div class="item"><span class="label">Core Spacing:</span> <span class="value">${selectedSpacing.name}</span></div>
              <div class="item"><span class="label">Grout Volume:</span> <span class="value">${unit === "imperial" ? `${groutVolumeCuYd.toFixed(2)} cu yd` : `${groutVolumeCuM.toFixed(2)} m³`}</span></div>
              <div class="item"><span class="label">Grout Bags:</span> <span class="value">${groutBagsRequired} bags</span></div>
            </div>
          </div>
          ` : ""}
          ${enableCost ? `
          <div class="section">
            <div class="section-title">Cost Estimation</div>
            <div class="grid">
              <div class="item"><span class="label">Blocks Total:</span> <span class="value">$${blocksCost.toFixed(2)}</span></div>
              <div class="item"><span class="label">Mortar Total:</span> <span class="value">$${mortarCost.toFixed(2)}</span></div>
              ${selectedSpacing.id !== "none" ? `<div class="item"><span class="label">Grout Total:</span> <span class="value">$${groutCost.toFixed(2)}</span></div>` : ""}
              <div class="item"><span class="label">Total Materials Estimate:</span> <span class="value highlight">$${totalCost.toFixed(2)}</span></div>
            </div>
          </div>
          ` : ""}
          <div class="footer">
            © ${new Date().getFullYear()} blockwallcalculator.com. Verified ASTM C90 & International Masonry Reference.
          </div>
          <script>
            window.onload = function() { window.print(); setTimeout(function() { window.close(); }, 500); };
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
        
        {/* Header with Unit Toggle Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-masonry-brick rounded-full block"></span>
            Calculator Inputs
          </h2>

          {/* Unit Toggle Switch */}
          <div className="flex items-center bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl border border-slate-200 dark:border-zinc-700">
            <button
              type="button"
              onClick={() => handleUnitChange("imperial")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                unit === "imperial"
                  ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              🇺🇸 Feet & Inches (Imperial)
            </button>
            <button
              type="button"
              onClick={() => handleUnitChange("metric")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                unit === "metric"
                  ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              🌍 Meters & mm (Metric)
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Wall Length Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="wall-length" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                Wall Length ({unit === "imperial" ? "Feet" : "Meters"})
              </label>
              <span className="text-sm font-mono font-bold text-utility-action bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                {length.toFixed(1)} {unit === "imperial" ? "ft" : "m"}
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
                min={unit === "imperial" ? "1" : "0.5"}
                step={unit === "imperial" ? "0.5" : "0.1"}
                value={length}
                onChange={(e) => setLength(Math.max(unit === "imperial" ? 1 : 0.5, parseFloat(e.target.value) || 1))}
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
            <input
              type="range"
              min={unit === "imperial" ? "1" : "0.5"}
              max={unit === "imperial" ? "200" : "60"}
              step={unit === "imperial" ? "0.5" : "0.2"}
              value={length}
              onChange={(e) => setLength(parseFloat(e.target.value))}
              className="w-full mt-3 accent-utility-action h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          {/* Wall Height Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="wall-height" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                Wall Height ({unit === "imperial" ? "Feet" : "Meters"})
              </label>
              <span className="text-sm font-mono font-bold text-utility-action bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                {height.toFixed(1)} {unit === "imperial" ? "ft" : "m"}
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
                min={unit === "imperial" ? "1" : "0.5"}
                step={unit === "imperial" ? "0.5" : "0.1"}
                value={height}
                onChange={(e) => setHeight(Math.max(unit === "imperial" ? 1 : 0.5, parseFloat(e.target.value) || 1))}
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
            <input
              type="range"
              min={unit === "imperial" ? "1" : "0.5"}
              max={unit === "imperial" ? "50" : "15"}
              step={unit === "imperial" ? "0.5" : "0.1"}
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full mt-3 accent-utility-action h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
          </div>

          {/* Block Size Selector */}
          <div>
            <label htmlFor="block-size" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Block Size & Type
            </label>
            <div className="relative">
              <select
                id="block-size"
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="w-full h-12 pl-4 pr-10 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-utility-action appearance-none cursor-pointer"
              >
                {ALL_BLOCK_SIZES.map((block) => (
                  <option key={block.id} value={block.id}>
                    {block.name} ({unit === "imperial" ? `covers ${block.sqFt.toFixed(3)} sq ft` : `covers ${block.sqM.toFixed(3)} m²`})
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
              Waste & Cutting Buffer
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

          {/* Retaining Wall Options (if active or clicked) */}
          {(isRetainingWall || includeCaps || includeGravel) && (
            <div className="p-4 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <span>🧱</span> Retaining Wall Accessories & Backfill
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCaps}
                    onChange={(e) => setIncludeCaps(e.target.checked)}
                    className="w-4 h-4 text-masonry-brick rounded accent-masonry-brick"
                  />
                  Calculate Wall Cap Stones
                </label>
                <label className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeGravel}
                    onChange={(e) => setIncludeGravel(e.target.checked)}
                    className="w-4 h-4 text-masonry-brick rounded accent-masonry-brick"
                  />
                  Gravel Drainage Backfill
                </label>
              </div>
            </div>
          )}

          {/* Core Fill & Grout Selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">
              Core Fill & Rebar Grouting Spacing
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CORE_SPACING_OPTIONS.map((spacing) => (
                <button
                  key={spacing.id}
                  type="button"
                  onClick={() => setCoreSpacing(spacing.id)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                    coreSpacing === spacing.id
                      ? "bg-slate-900 text-white border-slate-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 shadow-sm"
                      : "bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="font-bold">{spacing.label}</div>
                  <div className="text-[10px] opacity-75 truncate">{spacing.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Cost Toggle */}
          <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => setEnableCost(!enableCost)}
              className="flex items-center justify-between w-full text-left text-sm font-bold text-slate-700 dark:text-zinc-200 hover:text-slate-900 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">💰</span> Enable Material Cost Estimation
              </span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${enableCost ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                {enableCost ? "Active" : "Optional"}
              </span>
            </button>

            {enableCost && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800">
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400">Price / Block ($)</label>
                  <input
                    type="number"
                    step="0.10"
                    value={costPerBlock}
                    onChange={(e) => setCostPerBlock(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1 h-10 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400">Price / Mortar Bag ($)</label>
                  <input
                    type="number"
                    step="0.10"
                    value={costPerMortarBag}
                    onChange={(e) => setCostPerMortarBag(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1 h-10 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-zinc-400">Price / Grout Bag ($)</label>
                  <input
                    type="number"
                    step="0.10"
                    value={costPerGroutBag}
                    onChange={(e) => setCostPerGroutBag(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1 h-10 px-3 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-semibold"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output Results (Right side card) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-masonry-brick/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-masonry-brick font-black">▶</span> Estimation Summary
            </h3>
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">
              {wastePct}% buffer included
            </span>
          </div>

          <div className="space-y-6">
            {/* Primary Hero Output: Blocks Required */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-5 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                Total Required Blocks
              </span>
              <div className="text-5xl font-black tracking-tight text-white">
                {mounted ? blocksRequired.toLocaleString() : "..."}
              </div>
              <span className="text-xs font-medium text-slate-400 mt-2 block">
                Net {netBlocks} blocks + {blocksRequired - netBlocks} cut/breakage buffer
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block font-medium">Wall Surface Area</span>
                <span className="text-base font-bold text-slate-100 font-mono">
                  {unit === "imperial" ? `${surfaceAreaSqFt.toFixed(1)} sq ft` : `${surfaceAreaSqM.toFixed(2)} m²`}
                </span>
              </div>

              <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block font-medium">Pallets Estimate</span>
                <span className="text-base font-bold text-slate-100 font-mono">
                  ~{palletsRequired} {palletsRequired === 1 ? "Pallet" : "Pallets"}
                </span>
                <span className="text-[10px] text-slate-500 block">({blocksPerPallet} blocks/pallet)</span>
              </div>

              <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block font-medium">Mortar Bags</span>
                <span className="text-base font-bold text-amber-400 font-mono">
                  {activeMortarBags} Bags
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {unit === "imperial" ? "80 lb bags (Type S/N)" : "25 kg premix bags"}
                </span>
              </div>

              {selectedSpacing.id !== "none" ? (
                <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-xs text-slate-400 block font-medium">Core Grout Volume</span>
                  <span className="text-base font-bold text-emerald-400 font-mono">
                    {unit === "imperial" ? `${groutVolumeCuYd.toFixed(2)} yd³` : `${groutVolumeCuM.toFixed(2)} m³`}
                  </span>
                  <span className="text-[10px] text-slate-500 block">~{groutBagsRequired} bags mix</span>
                </div>
              ) : (
                <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-xs text-slate-400 block font-medium">Grout Core Fill</span>
                  <span className="text-sm font-semibold text-slate-500">None selected</span>
                </div>
              )}
            </div>

            {/* Retaining Wall Accessories Display */}
            {(includeCaps || includeGravel) && (
              <div className="p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2 text-xs">
                <div className="font-bold text-slate-200">Retaining Wall Add-ons:</div>
                {includeCaps && (
                  <div className="flex justify-between text-slate-300">
                    <span>Wall Cap Stones:</span>
                    <span className="font-bold font-mono text-white">{capStonesRequired} units</span>
                  </div>
                )}
                {includeGravel && (
                  <div className="flex justify-between text-slate-300">
                    <span>Gravel Drainage Backfill:</span>
                    <span className="font-bold font-mono text-emerald-400">
                      {unit === "imperial" ? `${gravelVolumeCuYd.toFixed(2)} yd³ (~${gravelTons.toFixed(1)} tons)` : `${gravelVolumeCuM.toFixed(2)} m³ (~${gravelTons.toFixed(1)} t)`}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Cost Summary (if enabled) */}
            {enableCost && (
              <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-xs text-emerald-300">
                  <span>Estimated Total Cost:</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">${totalCost.toFixed(2)}</span>
                </div>
                <div className="text-[11px] text-emerald-400/80 pt-1 border-t border-emerald-900/50 flex justify-between">
                  <span>Blocks: ${blocksCost.toFixed(2)}</span>
                  <span>Mortar: ${mortarCost.toFixed(2)}</span>
                  {selectedSpacing.id !== "none" && <span>Grout: ${groutCost.toFixed(2)}</span>}
                </div>
              </div>
            )}

            {/* Action Buttons: Copy & PDF */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <span>{copied ? "✓ Copied!" : "📋 Copy Report"}</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="py-3 px-4 rounded-xl bg-masonry-brick hover:bg-red-600 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-95 cursor-pointer"
              >
                <span>🖨️ Export PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Rule-of-Thumb Reference Card */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 text-xs space-y-2.5">
          <div className="font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
            <span>💡</span> Pro Contractor Rule of Thumb
          </div>
          <ul className="space-y-1.5 text-slate-600 dark:text-zinc-400 leading-relaxed">
            <li>• <strong>1.125 blocks per sq ft</strong> (or 10 blocks per m² for UK breeze blocks).</li>
            <li>• <strong>3.5 bags of mortar mix (80 lb)</strong> per 100 standard 8x8x16 CMU blocks.</li>
            <li>• Standard pallet holds <strong>108 blocks (8x8x16)</strong> and weighs approx ~3,400 lbs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
