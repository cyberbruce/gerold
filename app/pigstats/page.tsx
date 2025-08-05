"use client";
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { Scale, DollarSign, TrendingUp, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

// --- Type Definitions ---
interface GrowthData {
  date: string;
  week: number;
  weight: number;
  feedKg: number;
}

interface CostData {
  name: string;
  value: number;
  color: string;
}

interface FeedEfficiencyData {
  period: string;
  fcr: number;
}

interface StatCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string | number;
}

// --- Mock Data ---
// This data would typically come from a database or API.
const pigGrowthData: GrowthData[] = [
  { date: '08-01', week: 0, weight: 50, feedKg: 1.5 },
  { date: '08-08', week: 1, weight: 62, feedKg: 2.0 },
  { date: '08-15', week: 2, weight: 75, feedKg: 2.5 },
  { date: '08-22', week: 3, weight: 90, feedKg: 3.0 },
  { date: '08-29', week: 4, weight: 105, feedKg: 3.5 },
  { date: '09-05', week: 5, weight: 122, feedKg: 4.0 },
  { date: '09-12', week: 6, weight: 140, feedKg: 4.5 },
  { date: '09-19', week: 7, weight: 158, feedKg: 5.0 },
  { date: '09-26', week: 8, weight: 175, feedKg: 5.5 },
  { date: '10-03', week: 9, weight: 192, feedKg: 6.0 },
  { date: '10-10', week: 10, weight: 210, feedKg: 6.0 },
  { date: '10-17', week: 11, weight: 225, feedKg: 6.5 },
  { date: '10-24', week: 12, weight: 240, feedKg: 6.5 },
  { date: '10-31', week: 13, weight: 255, feedKg: 7.0 },
  { date: '11-07', week: 14, weight: 268, feedKg: 7.0 },
  { date: '11-14', week: 15, weight: 280, feedKg: 7.0 },
];

const costData: CostData[] = [
  { name: 'Feed', value: 650, color: '#FFBB28' },
  { name: 'Vet & Medical', value: 120, color: '#0088FE' },
  { name: 'Housing & Bedding', value: 85, color: '#00C49F' },
  { name: 'Show Supplies & Fees', value: 225, color: '#FF8042' },
];

const feedEfficiencyData: FeedEfficiencyData[] = [
  { period: 'Weeks 1-4', fcr: 2.2 },
  { period: 'Weeks 5-8', fcr: 2.9 },
  { period: 'Weeks 9-12', fcr: 3.6 },
  { period: 'Weeks 13-16', fcr: 4.1 },
];

// --- Helper Calculations ---
const calculateKPIs = (growthData: GrowthData[], costData: CostData[]) => {
  const currentWeight = growthData[growthData.length - 1]?.weight || 0;
  const startWeight = growthData[0]?.weight || 0;
  const totalDays = (growthData.length - 1) * 7;
  const weightGain = currentWeight - startWeight;
  const avgDailyGain = totalDays > 0 ? (weightGain / totalDays).toFixed(2) : 0;
  const totalCost = costData.reduce((acc: number, item: CostData) => acc + item.value, 0);

  return { currentWeight, totalCost, avgDailyGain };
};

// --- Reusable Components ---
const StatCard: React.FC<StatCardProps> = ({ title, value, unit, icon, color }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex items-center space-x-4">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold text-gray-800">
        {value} <span className="text-lg font-medium text-gray-600">{unit}</span>
      </p>
    </div>
  </div>
);

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <div className="h-72 w-full">
      {children}
    </div>
  </div>
);

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-3 border border-gray-200 rounded-lg shadow-md">
        <p className="font-bold text-gray-800">{`Week ${label}`}</p>
        {payload.map((p, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {`${p.name}: ${p.value.toFixed(1)} ${p.name === 'Weight' ? 'lbs' : 'kg/day'}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PigStatsPage = () => {
  const { currentWeight, totalCost, avgDailyGain } = calculateKPIs(pigGrowthData, costData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <nav className="mb-6">
          <Link 
            href="/"            
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Gernold&apos;s FFA Journey</h1>
          <p className="text-lg text-gray-600 mt-2">A statistical look at raising a champion.</p>
        </header>

        {/* KPI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Current Weight" 
            value={currentWeight} 
            unit="lbs"
            icon={<Scale className="w-8 h-8 text-white" />}
            color="bg-blue-500"
          />
          <StatCard 
            title="Total Cost" 
            value={`$${totalCost.toFixed(2)}`}
            unit=""
            icon={<DollarSign className="w-8 h-8 text-white" />}
            color="bg-green-500"
          />
          <StatCard 
            title="Avg. Daily Gain" 
            value={avgDailyGain} 
            unit="lbs/day"
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            color="bg-yellow-500"
          />
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartContainer title="Weight & Feed Intake Over Time">
            <ResponsiveContainer>
              <LineChart data={pigGrowthData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="week" tickFormatter={(tick) => `W${tick}`} stroke="#6b7280" />
                <YAxis yAxisId="left" label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft', fill: '#3b82f6' }} stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Feed (kg/day)', angle: -90, position: 'insideRight', fill: '#f59e0b' }} stroke="#f59e0b" />
                <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="weight" name="Weight" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="feedKg" name="Feed Intake" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer title="Project Cost Breakdown">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={costData} cx="50%" cy="50%" labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value" nameKey="name"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    if (midAngle === undefined || percent === undefined) return null;
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="font-bold">{`${(percent * 100).toFixed(0)}%`}</text>;
                  }}>
                  {costData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(value, name) => [`$${typeof value === 'number' ? value.toFixed(2) : value}`, name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="lg:col-span-2">
            <ChartContainer title="Feed Conversion Ratio (FCR)">
              <ResponsiveContainer>
                <BarChart data={feedEfficiencyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="period" stroke="#6b7280" />
                  <YAxis label={{ value: 'lbs feed / lbs gain', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [value, 'FCR']} />
                  <Legend />
                  <Bar dataKey="fcr" name="FCR (Lower is better)" fill="#8884d8" barSize={50}>
                    {feedEfficiencyData.map((entry, index) => <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PigStatsPage;