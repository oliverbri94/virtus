import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Car, DollarSign, TrendingDown, TrendingUp, AlertTriangle, BarChart2, Briefcase, Plus, Trash2, Calendar, Tag, FileText } from 'lucide-react';

export default function PlanificadorVehicular() {
  const [transactions, setTransactions] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Form State
  const [tipo, setTipo] = useState('gasto');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('gasolina');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const categoriasGasto = ['gasolina', 'multa', 'limpieza', 'peaje', 'mantenimiento', 'seguro', 'comida', 'otros'];
  const categoriasIngreso = ['uber', 'indrive', 'didi', 'puerta a puerta', 'particular', 'otros'];

  useEffect(() => {
    setFecha(new Date().toISOString().split('T')[0]);
  }, []);

  // Cargar datos
  useEffect(() => {
    setIsClient(true);
    fetch('/api/vehicular-db')
      .then((res) => res.json())
      .then((data) => {
        if (data.transactions && data.transactions.length > 0) {
          // Ordenar las transacciones de más reciente a más antigua
          const sorted = data.transactions.sort((a, b) => new Date(b.fecha) - new Date(a.fecha) || b.id - a.id);
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

  // Handle Form Submit
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
    // Mantenemos el tipo y fecha
  };

  const handleDelete = (id) => {
    if(window.confirm('¿Seguro de eliminar este registro?')) {
      const updatedTransactions = transactions.filter(t => t.id !== id);
      setTransactions(updatedTransactions);
      saveToDB(updatedTransactions);
    }
  };

  const handleClearAll = () => {
    if(window.confirm('⚠️ ADVERTENCIA: ¿Borrar ABSOLUTAMENTE TODOS los registros financieros?')) {
      setTransactions([]);
      saveToDB([]);
    }
  };

  // Cálculos estadísticos
  const totalIngresos = transactions.filter(t => t.tipo === 'ingreso').reduce((acc, t) => acc + t.monto, 0);
  const totalGastos = transactions.filter(t => t.tipo === 'gasto').reduce((acc, t) => acc + t.monto, 0);
  const gananciaNeta = totalIngresos - totalGastos;
  const rentabilidad = totalIngresos > 0 ? ((gananciaNeta / totalIngresos) * 100).toFixed(1) : 0;

  // Actualizar categoría por default al cambiar el tipo
  useEffect(() => {
    if (tipo === 'gasto') setCategoria('gasolina');
    else setCategoria('uber');
  }, [tipo]);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 p-4 sm:p-8">
      <Head>
        <title>Planificador Financiero | Virtus</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-500/10 p-4 rounded-2xl ring-1 ring-indigo-500/30">
              <Briefcase className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight">Planificador Operativo</h1>
              <p className="text-sm text-slate-400 font-medium mt-1">Gestión Financiera de Vehículos</p>
            </div>
          </div>
        </header>

        {/* TOP STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 bg-gradient-to-br from-emerald-500 to-transparent w-32 h-32 rounded-bl-full" />
             <div className="flex items-center gap-3 text-emerald-400 mb-4 z-10">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Total Ingresos</span>
             </div>
             <p className="text-4xl font-bold text-white z-10">${totalIngresos.toFixed(2)}</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 bg-gradient-to-br from-rose-500 to-transparent w-32 h-32 rounded-bl-full" />
             <div className="flex items-center gap-3 text-rose-400 mb-4 z-10">
                <TrendingDown className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Total Gastos</span>
             </div>
             <p className="text-4xl font-bold text-white z-10">${totalGastos.toFixed(2)}</p>
          </div>

          <div className={`p-6 rounded-3xl border shadow-xl flex flex-col relative overflow-hidden ${gananciaNeta >= 0 ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30' : 'bg-gradient-to-br from-rose-500/10 to-red-500/5 border-rose-500/30'}`}>
             <div className="flex justify-between items-start mb-4 z-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Ganancia Neta</span>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${gananciaNeta >= 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
                  ROI: {rentabilidad}%
                </span>
             </div>
             <p className={`text-5xl font-extrabold tracking-tight z-10 ${gananciaNeta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                ${gananciaNeta.toFixed(2)}
             </p>
          </div>
        </div>

        {/* MAIN SPLIT VIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LADO IZQUIERDO: FORMULARIO */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl sticky top-6">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-indigo-400" /> Nuevo Registro
              </h2>

              <form onSubmit={handleAddTransaction} className="space-y-5">
                
                {/* Tipo de transacción */}
                <div className="p-1.5 bg-slate-950 rounded-xl flex gap-1 border border-slate-800 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setTipo('gasto')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${tipo === 'gasto' ? 'bg-rose-500/20 text-rose-400 shadow-sm' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    📉 Registrar Gasto
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipo('ingreso')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${tipo === 'ingreso' ? 'bg-emerald-500/20 text-emerald-400 shadow-sm' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    📈 Registrar Ingreso
                  </button>
                </div>

                {/* Monto */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Monto
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-semibold text-lg"
                    />
                  </div>
                </div>

                {/* Categoría y Fecha (Fila Dual) */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4" /> Tipo / Rubro
                    </label>
                    <select 
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 appearance-none capitalize shadow-sm text-sm"
                    >
                      {(tipo === 'gasto' ? categoriasGasto : categoriasIngreso).map(c => (
                        <option key={c} value={c} className="capitalize">{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Fecha
                    </label>
                    <input 
                      type="date"
                      required
                      value={fecha}
                      onChange={e => setFecha(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm text-sm [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Nota / Descripción */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Nota Descripción
                  </label>
                  <input 
                    type="text"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    placeholder="Ej. Cambio de llantas traseras..."
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm text-sm"
                  />
                </div>

                <button 
                  type="submit"
                  className={`w-full py-4 mt-2 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl transition-transform active:scale-[0.98]
                    ${tipo === 'ingreso' ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/20'}`}
                >
                  <Plus className="w-5 h-5" /> Guardar Registro
                </button>
              </form>
            </div>
            
            {/* Análisis Breve */}
            {totalGastos > totalIngresos * 0.7 && totalIngresos > 0 && (
              <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-3xl flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-amber-400 font-bold mb-1">¡Alerta de Gastos!</h4>
                  <p className="text-amber-200/70 text-sm leading-relaxed">Tus gastos representan más del 70% de tus ingresos. Revisa la categoría en la que más gastas y busca eficiencias logísticas urgentes.</p>
                </div>
              </div>
            )}
          </aside>

          {/* LADO DERECHO: HISTORIAL DE TRANSACCIONES */}
          <main className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl flex flex-col h-full min-h-[600px]">
              
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <BarChart2 className="w-5 h-5 text-cyan-400" /> Historial de Movimientos
                </h3>
                <button
                  onClick={handleClearAll}
                  className="text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-lg transition-colors border border-rose-500/20 flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Limpiar Todo
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 hide-scrollbar">
                {transactions.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center space-y-4">
                    <div className="p-6 bg-slate-950 rounded-full border border-slate-800">
                      <Car className="w-10 h-10 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-400">Sin Movimientos</p>
                      <p className="text-sm">Tus registros financieros aparecerán aquí.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 p-4">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl hover:bg-slate-800 transition-colors group">
                        
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl border ${tx.tipo === 'ingreso' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                            {tx.tipo === 'ingreso' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-slate-200 capitalize text-sm md:text-base">{tx.categoria}</span>
                              <span className="text-[10px] md:text-xs text-slate-500 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800 font-mono">
                                {tx.fecha}
                              </span>
                            </div>
                            {tx.descripcion && (
                              <p className="text-xs text-slate-400 font-medium truncate max-w-[200px] sm:max-w-xs">{tx.descripcion}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className={`font-bold text-lg ${tx.tipo === 'ingreso' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {tx.tipo === 'ingreso' ? '+' : '-'}${tx.monto.toFixed(2)}
                          </span>
                          <button 
                            onClick={() => handleDelete(tx.id)}
                            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transition-all border border-transparent hover:border-slate-800"
                            title="Eliminar Registro"
                          >
                            <Trash2 className="w-4 h-4" />
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
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; }
      `}} />
    </div>
  );
}
