import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Car, DollarSign, TrendingDown, TrendingUp, AlertTriangle, BarChart2, Briefcase, Plus, Trash2, Calendar, Tag, FileText, Filter, PieChart as PieChartIcon, Activity, LineChart as LineChartIcon } from 'lucide-react';

export default function PlanificadorVehicular() {
  const [transactions, setTransactions] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Form State
  const [tipo, setTipo] = useState('gasto');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('gasolina');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Dashboard Filters
  const [filterPeriod, setFilterPeriod] = useState('all'); // 'all', '7d', '30d'

  // Libro Mayor Filters
  const [listFilterCategory, setListFilterCategory] = useState('todas');
  const [listFilterDate, setListFilterDate] = useState('');

  const categoriasGasto = ['gasolina', 'multa', 'limpieza', 'peaje', 'mantenimiento', 'seguro', 'comida', 'salario', 'cuota de banco', 'otros'];
  const categoriasIngreso = ['uber', 'indrive', 'didi', 'puerta a puerta', 'particular', 'otros'];

  useEffect(() => {
    setFecha(new Date().toISOString().split('T')[0]);
  }, []);

  // Load Data
  useEffect(() => {
    setIsClient(true);
    fetch('/api/vehicular-db')
      .then((res) => res.json())
      .then((data) => {
        if (data.transactions && data.transactions.length > 0) {
          const normalized = data.transactions.map(t => ({
            ...t,
            categoria: t.categoria === 'salario chofer' ? 'salario' : t.categoria
          }));
          const sorted = normalized.sort((a, b) => new Date(b.fecha) - new Date(a.fecha) || b.id - a.id);
          setTransactions(sorted);
        }
      })
      .catch((err) => {
        console.error('Error cargando BD local:', err);
      });
  }, []);

  const saveToDB = async (updatedTransactions) => {
    try {
      await fetch('/api/vehicular-db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactions: updatedTransactions, messages: [] })
      });
    } catch (error) {
      console.error('Error guardando en BD:', error);
    }
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!monto || isNaN(monto) || parseFloat(monto) <= 0) {
      alert("Por favor ingresa un monto válido.");
      return;
    }

    const newTx = {
      id: Date.now().toString(),
      tipo,
      monto: parseFloat(monto),
      categoria,
      fecha,
      descripcion: descripcion.trim()
    };

    const updatedTransactions = [newTx, ...transactions];
    setTransactions(updatedTransactions);
    saveToDB(updatedTransactions);

    // Reset campos
    setMonto('');
    setDescripcion('');
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Seguro de eliminar este registro?')) {
      const updatedTransactions = transactions.filter(t => t.id !== id);
      setTransactions(updatedTransactions);
      saveToDB(updatedTransactions);
    }
  };

  // --- DATA AGGREGATION PARA DASHBOARD ---
  const filteredTransactions = useMemo(() => {
    if (filterPeriod === 'all') return transactions;
    const now = new Date();
    // Normalizamos para comparar con las fechas sin hora
    now.setHours(0, 0, 0, 0);
    const daysToSubtract = filterPeriod === '7d' ? 7 : 30;
    const pastDate = new Date(now.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));

    return transactions.filter(t => {
      const tDate = new Date(t.fecha);
      tDate.setHours(23, 59, 59, 999);
      return tDate >= pastDate;
    });
  }, [transactions, filterPeriod]);

  const totalIngresos = filteredTransactions.filter(t => t.tipo === 'ingreso').reduce((acc, t) => acc + t.monto, 0);
  const totalGastos = filteredTransactions.filter(t => t.tipo === 'gasto').reduce((acc, t) => acc + t.monto, 0);
  const gananciaNeta = totalIngresos - totalGastos;
  const rentabilidad = totalIngresos > 0 ? ((gananciaNeta / totalIngresos) * 100).toFixed(1) : 0;

  // Para Pie Chart (Distribución de Gastos)
  const gastosPorRubro = useMemo(() => {
    const gastos = filteredTransactions.filter(t => t.tipo === 'gasto');
    const agrupado = gastos.reduce((acc, curr) => {
      acc[curr.categoria] = (acc[curr.categoria] || 0) + curr.monto;
      return acc;
    }, {});

    return Object.keys(agrupado).map(key => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: agrupado[key]
    })).sort((a, b) => b.value - a.value);
  }, [filteredTransactions]);

  const COLORS = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9', '#14b8a6', '#10b981'];

  // Para Area Chart (Evolución Diaria Diaria)
  const trendData = useMemo(() => {
    const grouped = filteredTransactions.reduce((acc, curr) => {
      const date = curr.fecha;
      if (!acc[date]) acc[date] = { date, ingreso: 0, gasto: 0, neto: 0 };
      if (curr.tipo === 'ingreso') {
        acc[date].ingreso += curr.monto;
        acc[date].neto += curr.monto;
      } else {
        acc[date].gasto += curr.monto;
        acc[date].neto -= curr.monto;
      }
      return acc;
    }, {});

    return Object.values(grouped).sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [filteredTransactions]);

  // Aplicar filtros específicos para el Libro Mayor
  const listTransactions = useMemo(() => {
    return filteredTransactions.filter(t => {
      const matchCategory = listFilterCategory === 'todas' || t.categoria === listFilterCategory;
      const matchDate = listFilterDate === '' || t.fecha === listFilterDate;
      return matchCategory && matchDate;
    });
  }, [filteredTransactions, listFilterCategory, listFilterDate]);

  // Actualizar categoría por default al cambiar el tipo
  useEffect(() => {
    if (tipo === 'gasto') setCategoria('gasolina');
    else setCategoria('uber');
  }, [tipo]);

  if (!isClient) return null;

  // Custom Tooltips Recharts
  const CustomTooltipArea = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl backdrop-blur-md">
          <p className="text-slate-300 font-bold mb-2 border-b border-slate-700 pb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-semibold flex justify-between gap-4">
              <span className="capitalize">{entry.name}:</span>
              <span>${entry.value.toFixed(2)}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomTooltipPie = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/90 border border-slate-700 p-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.fill }} />
          <div>
            <p className="text-slate-200 font-bold capitalize">{data.name}</p>
            <p className="text-slate-400 text-sm font-semibold">${data.value.toFixed(2)}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 font-sans selection:bg-indigo-500/30 p-4 sm:p-6 lg:p-8">
      <Head>
        <title>BI Jetour X70| Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>

      <div className="max-w-[1400px] mx-auto space-y-6">

        {/* HEADER & GLOBAL FILTERS */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3.5 rounded-2xl ring-1 ring-indigo-500/30 shadow-lg shadow-indigo-900/20">
              <Activity className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 tracking-tight drop-shadow-sm">
                BI Vehicular Analytics
              </h1>
              <p className="text-sm text-slate-400 font-medium mt-1.5 flex items-center gap-2">
                Inteligencia Financiera Operativa <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-1.5 rounded-xl shadow-inner">
            <div className="flex items-center gap-2 px-3 py-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterPeriod}
                onChange={e => setFilterPeriod(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-200 focus:outline-none appearance-none pr-6 cursor-pointer"
                style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #94a3b8 50%), linear-gradient(135deg, #94a3b8 50%, transparent 50%)', backgroundPosition: 'calc(100% - 4px) calc(1em + 2px), calc(100% - 0px) calc(1em + 2px)', backgroundSize: '4px 4px, 4px 4px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="7d" className="bg-slate-900">Últimos 7 Días</option>
                <option value="30d" className="bg-slate-900">Últimos 30 Días</option>
                <option value="all" className="bg-slate-900">Histórico Total</option>
              </select>
            </div>
          </div>
        </header>

        {/* TOP KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-3xl shadow-lg hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all group overflow-hidden relative">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-2 py-1 rounded-md">Ingresos</span>
            </div>
            <p className="text-3xl font-extrabold text-white">${totalIngresos.toFixed(2)}</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-3xl shadow-lg hover:shadow-rose-900/20 hover:border-rose-500/30 transition-all group overflow-hidden relative">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-400">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-2 py-1 rounded-md">Gastos</span>
            </div>
            <p className="text-3xl font-extrabold text-white">${totalGastos.toFixed(2)}</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-3xl shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-500/30 transition-all group overflow-hidden relative">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-2 py-1 rounded-md">Neto</span>
            </div>
            <p className={`text-3xl font-extrabold ${gananciaNeta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${Math.abs(gananciaNeta).toFixed(2)}
            </p>
          </div>

          <div className={`p-5 rounded-3xl border shadow-lg group overflow-hidden relative ${gananciaNeta >= 0 ? 'bg-gradient-to-b from-slate-900 to-emerald-950/30 border-emerald-500/20' : 'bg-gradient-to-b from-slate-900 to-rose-950/30 border-rose-500/20'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl border ${gananciaNeta >= 0 ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/20 border-rose-500/30 text-rose-300'}`}>
                <BarChart2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-950/50 px-2 py-1 rounded-md">Margen ROI</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className={`text-4xl font-black ${gananciaNeta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {rentabilidad}%
              </p>
            </div>
          </div>
        </div>

        {/* ANALYTICS CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Trend Chart */}
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <LineChartIcon className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-100">Tendencia Financiera Diaria</h3>
            </div>
            <div className="h-[300px] w-full">
              {trendData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorIngreso" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorGasto" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis
                      dataKey="date"
                      stroke="#475569"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(str) => {
                        const [, month, day] = str.split('-');
                        return `${month}/${day}`;
                      }}
                    />
                    <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <RechartsTooltip content={<CustomTooltipArea />} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                    <Area type="monotone" name="Ingresos" dataKey="ingreso" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIngreso)" />
                    <Area type="monotone" name="Gastos" dataKey="gasto" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorGasto)" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-500 font-medium">No hay suficientes datos para graficar.</div>
              )}
            </div>
          </div>

          {/* Pie Chart Distribution */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <PieChartIcon className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-slate-100">Distribución de Gastos</h3>
            </div>

            <div className="flex-1 min-h-[250px] relative">
              {gastosPorRubro.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gastosPorRubro}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {gastosPorRubro.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltipPie />} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">Sin datos de gastos</div>
              )}
              {/* Center Metric Text */}
              {gastosPorRubro.length > 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs text-slate-400 font-bold uppercase">Total</span>
                  <span className="text-lg font-black text-white">${totalGastos.toFixed(0)}</span>
                </div>
              )}
            </div>

            {/* Custom Mini Legend */}
            {gastosPorRubro.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-2 max-h-[100px] overflow-y-auto hide-scrollbar">
                {gastosPorRubro.map((entry, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                    <span className="text-slate-300 truncate">{entry.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* INPUT & LIST GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Form */}
          <aside className="lg:col-span-1">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sticky top-6">
              <h2 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-4 h-4 text-indigo-400" /> Nuevo Registro Operativo
              </h2>

              <form onSubmit={handleAddTransaction} className="space-y-4">

                <div className="p-1 bg-slate-950/80 rounded-xl flex gap-1 border border-slate-800/80 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setTipo('gasto')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${tipo === 'gasto' ? 'bg-rose-500/20 text-rose-400 shadow-sm' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}
                  >
                    📉 Gasto
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipo('ingreso')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${tipo === 'ingreso' ? 'bg-emerald-500/20 text-emerald-400 shadow-sm' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}
                  >
                    📈 Ingreso
                  </button>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3 h-3" /> Monto
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <span className="text-slate-500 font-bold">$</span>
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      required
                      value={monto}
                      onChange={e => setMonto(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl py-2.5 pl-8 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all font-semibold text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Tag className="w-3 h-3" /> Categoría
                    </label>
                    <select
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                      className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 appearance-none capitalize text-xs"
                    >
                      {(tipo === 'gasto' ? categoriasGasto : categoriasIngreso).map(c => (
                        <option key={c} value={c} className="capitalize">{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> Fecha
                    </label>
                    <input
                      type="date"
                      required
                      value={fecha}
                      onChange={e => setFecha(e.target.value)}
                      className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-xs [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3 h-3" /> Detalle
                  </label>
                  <input
                    type="text"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    placeholder="Nota opcional..."
                    className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 mt-1 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] text-sm shadow-lg
                    ${tipo === 'ingreso' ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/30'}`}
                >
                  Confirmar Registro
                </button>
              </form>
            </div>

            {/* Análisis Breve */}
            {totalGastos > totalIngresos * 0.7 && totalIngresos > 0 && (
              <div className="mt-4 bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-amber-400 font-bold text-sm mb-0.5">Alerta Operativa</h4>
                  <p className="text-amber-200/70 text-xs leading-relaxed">Tus gastos representan más del 70% de tus ingresos en este periodo.</p>
                </div>
              </div>
            )}
          </aside>

          {/* Transaction List */}
          <main className="lg:col-span-2">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col h-[500px] sm:h-[550px]">
              <div className="p-4 sm:p-5 border-b border-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Libro Mayor</h3>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {/* Select Categoría */}
                  <select
                    value={listFilterCategory}
                    onChange={e => setListFilterCategory(e.target.value)}
                    className="bg-slate-950/50 border border-slate-800 text-slate-300 rounded-lg py-1.5 px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs capitalize"
                  >
                    <option value="todas">Todas las categorías</option>
                    {[...categoriasGasto, ...categoriasIngreso].map(c => (
                      <option key={c} value={c} className="capitalize">{c}</option>
                    ))}
                  </select>

                  {/* Date Input */}
                  <div className="flex items-center gap-1 bg-slate-950/50 border border-slate-800 rounded-lg px-2 text-xs">
                    <span className="text-slate-500">Día:</span>
                    <input
                      type="date"
                      value={listFilterDate}
                      onChange={e => setListFilterDate(e.target.value)}
                      className="bg-transparent text-slate-300 py-1.5 focus:outline-none [color-scheme:dark]"
                    />
                    {listFilterDate && (
                      <button onClick={() => setListFilterDate('')} className="text-rose-400 font-bold ml-1 hover:text-rose-300">&times;</button>
                    )}
                  </div>

                  <span className="text-xs text-slate-500 font-semibold ml-2">{listTransactions.length} regs.</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-2 hide-scrollbar">
                {listTransactions.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center space-y-3">
                    <div className="p-4 bg-slate-950 rounded-full border border-slate-800">
                      <FileText className="w-8 h-8 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400">Sin Datos para este Filtro</p>
                      <p className="text-xs mt-1">Ajusta el rango de fechas o añade nuevos registros.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 p-2">
                    {listTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3.5 bg-slate-950/40 border border-slate-800/50 rounded-2xl hover:bg-slate-800/80 transition-colors group">

                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl border ${tx.tipo === 'ingreso' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                            {tx.tipo === 'ingreso' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-bold text-slate-200 capitalize text-sm">{tx.categoria}</span>
                              <span className="text-[9px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded-md border border-slate-800 font-mono tracking-wider">
                                {tx.fecha}
                              </span>
                            </div>
                            {tx.descripcion && (
                              <p className="text-[11px] text-slate-400 font-medium truncate max-w-[150px] sm:max-w-xs">{tx.descripcion}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`font-black text-sm md:text-base ${tx.tipo === 'ingreso' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {tx.tipo === 'ingreso' ? '+' : '-'}${tx.monto.toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleDelete(tx.id)}
                            className="p-1.5 text-slate-500 hover:text-rose-400 active:bg-slate-800 hover:bg-slate-900 rounded-lg lg:opacity-0 lg:group-hover:opacity-100 transition-all border border-transparent hover:border-slate-800 shrink-0"
                            title="Eliminar Registro"
                          >
                            <Trash2 className="w-4 h-4 md:w-3.5 md:h-3.5" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; }
      `}} />
    </div>
  );
}
