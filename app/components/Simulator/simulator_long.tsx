"use client";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const InvestmentCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(50000);
  const [recurringAmount, setRecurringAmount] = useState<number>(5000);
  const [years, setYears] = useState<number>(5);
  const [result, setResult] = useState<{ year: number; initialAmount: number; additionalCapital: number; interestEarned: string; accumulatedInterest: string; }[]>([]);
  const [currency, setCurrency] = useState<string>("S/");
  const [recurrence, setRecurrence] = useState<string>("annual");
  const recurrenceOptions: string[] = ["monthly", "bimonthly", "semiannual", "annual"];

  const interestRates = {
    PEN: [
      { min: 5000, rates: { 6: 0.06 / 6, 12: 0.14 / 12, 24: 0.30 / 24 } },
      { min: 10000, rates: { 6: 0.07 / 6, 12: 0.16 / 12, 24: 0.34 / 24 } },
      { min: 30000, rates: { 6: 0.07 / 6, 12: 0.17 / 12, 24: 0.36 / 24 } },
      { min: 50000, rates: { 6: 0.08 / 6, 12: 0.18 / 12, 24: 0.38 / 24 } },
      { min: 100000, rates: { 6: 0.08 / 6, 12: 0.18 / 12, 24: 0.38 / 24 } },
    ],
    USD: [
      { min: 5000, rates: { 6: 0.06 / 6, 12: 0.14 / 12, 24: 0.30 / 24 } },
      { min: 10000, rates: { 6: 0.06 / 6, 12: 0.15 / 12, 24: 0.32 / 24 } },
      { min: 25000, rates: { 6: 0.07 / 6, 12: 0.16 / 12, 24: 0.34 / 24 } },
      { min: 50000, rates: { 6: 0.07 / 6, 12: 0.16 / 12, 24: 0.34 / 24 } },
    ]
  };

  const getInterestRate = (amount: number): number => {
    const rates = interestRates[currency === "S/" ? "PEN" : "USD"];
    for (let i = rates.length - 1; i >= 0; i--) {
      if (amount >= rates[i].min) {
        return rates[i].rates[24]; // Siempre usar la tasa de 24 meses
      }
    }
    return 0;
  };

  const calculateInvestment = () => {
    let totalInvested = initialAmount;
    let accumulatedInterest = 0;
    let data = [];

    for (let i = 1; i <= years; i++) {
      // Agregar inversión recurrente solo a partir del segundo año
      if (i >= 1) {
        if (recurrence === "monthly") {
          totalInvested += recurringAmount * (i === 1 ? 11 : 12);
        } else if (recurrence === "bimonthly") {
          totalInvested += recurringAmount * (i === 1 ? Math.floor(11 / 2) : 6);
        } else if (recurrence === "semiannual") {
          totalInvested += recurringAmount * (i === 1 ? Math.floor(11 / 6) : 2);
        } else if (recurrence === "annual") {
          totalInvested += recurringAmount;
        }
      }

      let rate = getInterestRate(totalInvested);
      let monthlyInterest = totalInvested * rate;
      let annualInterest = monthlyInterest * 12;
      accumulatedInterest += annualInterest;

      data.push({
        year: i,
        initialAmount: initialAmount,
        additionalCapital: totalInvested - initialAmount,
        interestEarned: annualInterest.toFixed(2),
        accumulatedInterest: accumulatedInterest.toFixed(2),
      });
    }
    setResult(data);
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Calculadora de Inversión</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Monto Inicial</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Inversión Recurrente</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={recurringAmount}
            onChange={(e) => setRecurringAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Tiempo (años)</label>
          <input
            type="range"
            min={1}
            max={10}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
          <span>{years} años</span>
        </div>
        <div>
          <label className="text-sm font-medium">Moneda</label>
          <div className="flex gap-2">
            <button className={`px-4 py-2 border rounded ${currency === "S/" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setCurrency("S/")}>Soles</button>
            <button className={`px-4 py-2 border rounded ${currency === "$" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setCurrency("$")}>Dólares</button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Frecuencia de Inversión</label>
          <div className="flex gap-2">
            {recurrenceOptions.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 border rounded ${recurrence === option ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setRecurrence(option)}
              >
                {option === "monthly" ? "Mensual" : option === "bimonthly" ? "Cada 2 meses" : option === "semiannual" ? "Cada 6 meses" : "Anual"}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded" onClick={calculateInvestment}>Calcular</button>
      {result.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-medium">Proyección de Inversión</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={result}>
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(tick) => new Intl.NumberFormat().format(tick)} domain={[0, Math.max(...result.map(d => Number(d.initialAmount) + Number(d.additionalCapital) + Number(d.accumulatedInterest) || 0)) || 10000]} allowDecimals={false} tick={{ fontSize: 10 }} ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000, 75000, 100000, 150000, 200000, 300000, 400000, 500000, 750000, 1000000]} allowDataOverflow={true} />
              <Tooltip formatter={(value: number | string) => `${currency} ${new Intl.NumberFormat().format(typeof value === 'number' ? value : parseFloat(value))}`} />
              <Bar dataKey="initialAmount" stackId="a" fill="#93C5FD" name="Monto Inicial" />
              <Bar dataKey="additionalCapital" stackId="a" fill="#4F46E5" name="Capital Adicional Colocado" />
              <Bar dataKey="interestEarned" stackId="a" fill="#FACC15" name="Intereses Ganados" />
              <Bar dataKey="accumulatedInterest" stackId="a" fill="#EAB308" name="Intereses Acumulados" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
