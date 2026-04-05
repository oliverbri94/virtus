import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Send, Car, DollarSign, AlertTriangle, TrendingUp, TrendingDown, Target, Lightbulb, RefreshCw, BarChart2, MessageSquare, Trash2 } from 'lucide-react';

const INITIAL_MESSAGE = {
  id: 0,
  role: 'agent',
  text: '¡Hola! Soy tu Agente Inteligente de Gestión Vehicular. 🚗\nEstoy aquí para ayudarte a maximizar tu rentabilidad.\n\nPuedes decirme comandos como:\n• *"Hice $25 en Uber"*\n• *"Gasté 15 en gasolina"*\n• *"ver resumen"*\n• *"optimizar negocio"*'
};

export default function AgenteVehicular() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const messagesEndRef = useRef(null);

  // Cargar datos locales
  useEffect(() => {
    setIsClient(true);
    const savedTx = localStorage.getItem('vehicle_transactions');
    const savedMsgs = localStorage.getItem('vehicle_messages');
    
    if (savedTx) setTransactions(JSON.parse(savedTx));
    if (savedMsgs) {
      const parsedMsgs = JSON.parse(savedMsgs);
      setMessages(parsedMsgs.length > 0 ? parsedMsgs : [INITIAL_MESSAGE]);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Guardar datos
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('vehicle_transactions', JSON.stringify(transactions));
      localStorage.setItem('vehicle_messages', JSON.stringify(messages));
    }
  }, [transactions, messages, isClient]);

  // Cálculos estadísticos
  const totalIngresos = transactions.filter(t => t.tipo === 'ingreso').reduce((acc, t) => acc + t.monto, 0);
  const totalGastos = transactions.filter(t => t.tipo === 'gasto').reduce((acc, t) => acc + t.monto, 0);
  const gananciaNeta = totalIngresos - totalGastos;
  const rentabilidad = totalIngresos > 0 ? ((gananciaNeta / totalIngresos) * 100).toFixed(1) : 0;

  const expensesByCategory = transactions
    .filter(t => t.tipo === 'gasto')
    .reduce((acc, t) => {
      acc[t.categoria] = (acc[t.categoria] || 0) + t.monto;
      return acc;
    }, {});
  
  const topGasto = Object.entries(expensesByCategory).sort((a, b) => b[1] - a[1])[0] || ['N/A', 0];

  const incomeByCategory = transactions
    .filter(t => t.tipo === 'ingreso')
    .reduce((acc, t) => {
      acc[t.categoria] = (acc[t.categoria] || 0) + t.monto;
      return acc;
    }, {});
    
  const topIngreso = Object.entries(incomeByCategory).sort((a, b) => b[1] - a[1])[0] || ['N/A', 0];

  // NLP Engine Local (Heurísticas básicas)
  const processInput = (text) => {
    const lowerText = text.toLowerCase();
    
    // Commands
    if (lowerText.includes('reiniciar datos')) {
      return { type: 'command', command: 'reset' };
    }
    if (lowerText.includes('resumen') || lowerText.includes('cuanto hice') || lowerText.includes('ganando o perdiendo')) {
      return { type: 'command', command: 'resume' };
    }
    if (lowerText.includes('optimizar') || lowerText.includes('estrategia') || lowerText.includes('mejorar')) {
      return { type: 'command', command: 'optimize' };
    }

    // Number extraction
    const amountMatch = text.match(/\$?\b\d+(\.\d{1,2})?\b/);
    const monto = amountMatch ? parseFloat(amountMatch[0].replace('$', '')) : null;

    if (!monto) {
      return { 
        type: 'error', 
        msg: 'No pude detectar ningún monto numérico. Por favor intenta así: "Gasté 10 en gasolina".' 
      };
    }

    // Intent detection
    const ingresoWords = ['hice', 'gané', 'generé', 'ingreso', 'carrera', 'viaje', 'entró'];
    const gastoWords = ['gasté', 'gast', 'pagué', 'costó', 'compré', 'multa', 'tanqueé'];
    
    let isIngreso = ingresoWords.some(w => lowerText.includes(w));
    let isGasto = gastoWords.some(w => lowerText.includes(w));
    
    // Category detection
    const categoriasGasto = ['gasolina', 'multa', 'limpieza', 'lavado', 'peaje', 'mantenimiento', 'seguro', 'comida'];
    const categoriasIngreso = ['uber', 'indrive', 'didi', 'puerta a puerta', 'calle'];
    
    // Plataform intent fallback
    if (!isIngreso && !isGasto) {
      if (categoriasIngreso.some(w => lowerText.includes(w))) isIngreso = true;
      else if (categoriasGasto.some(w => lowerText.includes(w))) isGasto = true;
      else return { type: 'error', msg: `Detecté el monto $${monto}, pero no sé si es un gasto o una ganancia. ¡Necesito más contexto!` };
    }

    const transactionType = isGasto ? 'gasto' : 'ingreso';
    
    let categoria = 'general';
    if (transactionType === 'gasto') {
      const match = categoriasGasto.find(c => lowerText.includes(c));
      if (match) categoria = match === 'lavado' ? 'limpieza' : match;
    } else {
      const match = categoriasIngreso.find(c => lowerText.includes(c));
      if (match) categoria = match;
    }

    const newTransaction = {
      id: Date.now().toString(),
      tipo: transactionType,
      categoria: categoria,
      monto: monto,
      fecha: new Date().toISOString().split('T')[0],
      descripcion: text
    };

    let extraMsg = '';
    if (transactionType === 'gasto' && categoria === 'gasolina' && monto > 40) {
        extraMsg = "\n\n⚠️ **Alerta:** Gasto alto en gasolina. Evalúa si las rutas de hoy fueron eficientes.";
    }
    if (transactionType === 'gasto' && categoria === 'multa') {
        extraMsg = "\n\n🛑 Oops. ¡Cuidado con las infracciones! Esto golpea directamente tu rentabilidad neta.";
    }
    if (transactionType === 'gasto' && gananciaNeta - monto < 0) {
        extraMsg = "\n\n⚠️ **Alerta Financiera:** Con este gasto, tus números globales están en negativo.";
    }

    return { type: 'transaction', newTransaction, msg: `✅ **Registrado:**\n${transactionType === 'ingreso' ? '📈 Ingreso' : '📉 Gasto'} de **$${monto.toFixed(2)}** en la categoría *${categoria}*.${extraMsg}` };
  };

  const executeCommand = (cmd) => {
    switch (cmd) {
      case 'reset':
        setTransactions([]);
        setMessages([INITIAL_MESSAGE]);
        return "Tus datos han sido reiniciados por completo. ¡Empecemos de cero! 🔄";
      case 'resume':
        return `📊 **RESUMEN DEL VEHÍCULO**\n\nIngresos Totales: **$${totalIngresos.toFixed(2)}**\nGastos Totales: **$${totalGastos.toFixed(2)}**\nGanancia Neta: **$${gananciaNeta.toFixed(2)}**\nRentabilidad: **${rentabilidad}%**\n\n📍 Mayor ingreso por: *${topIngreso[0]}* ($${topIngreso[1]})\n🚨 Mayor gasto en: *${topGasto[0]}* ($${topGasto[1]})`;
      case 'optimize':
        const ratioGasolina = (expensesByCategory['gasolina'] || 0) / (totalIngresos || 1);
        
        let estrategias = "🧠 **DIAGNÓSTICO ESTRATÉGICO**\n\n";
        
        if (gananciaNeta < 0) estrategias += "🔴 **ESTADO CRÍTICO:** Actualmente estás operando a pérdida. \n\n";
        else if (rentabilidad < 30) estrategias += "🟡 **ESTADO REGULAR:** El margen de ganancia es muy delgado.\n\n";
        else estrategias += "🟢 **ESTADO SALUDABLE:** Tienes buena rentabilidad, pero siempre se puede mejorar.\n\n";

        estrategias += "**Tus 3 Acciones de Mejora:**\n\n";
        
        if (ratioGasolina > 0.3) {
          estrategias += "1. ⛽ **Control de Combustible:** Estás gastando más del 30% en gasolina. Evita deambular sin pasajeros. Acércate a zonas de alta demanda y apaga el motor si estás parqueado.\n";
        } else {
          estrategias += `1. 📈 **Maximiza tu fuerte:** Tu mejor canal es *${topIngreso[0]}*. Dedícale más horas en franjas pico (7am-9am / 5pm-8pm).\n`;
        }

        if (totalGastos > 0) {
          estrategias += `2. ✂️ **Recorte de Gasto:** *${topGasto[0]}* es tu mayor fuga de dinero. Busca alternativas más económicas o reduce la frecuencia semanal.\n`;
        }
        
        estrategias += "3. 🎯 **Ruta Estratégica:** En viajes particulares ('puerta a puerta'), cobra un pequeño recargo durante horas de tráfico pesado para compensar el tiempo muerto.";

        return estrategias;
      default:
        return "No estoy seguro de cómo procesar ese comando.";
    }
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMsgId = Date.now();
    
    // Añadimos mensaje de usuario
    setMessages(prev => [...prev, { id: newMsgId, role: 'user', text: userText }]);
    setInput('');
    
    // Procesamos
    setTimeout(() => {
      const parsed = processInput(userText);
      let agentReply = '';

      if (parsed.type === 'error') {
        agentReply = parsed.msg;
      } else if (parsed.type === 'command') {
        agentReply = executeCommand(parsed.command);
      } else if (parsed.type === 'transaction') {
        setTransactions(prev => [...prev, parsed.newTransaction]);
        agentReply = parsed.msg;
      }

      setMessages(prev => [...prev, { id: newMsgId + 1, role: 'agent', text: agentReply }]);
    }, 500); // Simulamos un leve delay
  };

  if (!isClient) return null; // Evitar hidratación mismatch en SSR

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 flex justify-center">
      <Head>
        <title>Agente Vehicular | Virtus</title>
      </Head>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row h-screen">
        
        {/* PANEL IZQUIERDO: Dashboard */}
        <aside className="w-full lg:w-1/3 bg-slate-900/50 border-r border-slate-800 p-6 overflow-y-auto flex flex-col gap-6 hide-scrollbar shadow-2xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-cyan-500/10 p-3 rounded-2xl ring-1 ring-cyan-500/30">
              <Car className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">FleetAgent Pro</h1>
              <p className="text-xs text-slate-400 font-medium">Asistente Operativo</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Ingresos Unit */}
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Ingresos</span>
              </div>
              <p className="text-2xl font-bold">${totalIngresos.toFixed(2)}</p>
            </div>
            
            {/* Gastos Unit */}
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-800/80 hover:border-rose-500/30 transition-colors">
              <div className="flex items-center gap-2 text-rose-400 mb-2">
                <TrendingDown className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Gastos</span>
              </div>
              <p className="text-2xl font-bold">${totalGastos.toFixed(2)}</p>
            </div>
          </div>

          {/* Tarjeta Ganancia */}
          <div className={`p-5 rounded-2xl border ${gananciaNeta >= 0 ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/20' : 'bg-gradient-to-br from-rose-500/10 to-red-500/5 border-rose-500/20'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-slate-300">Ganancia Neta</span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${gananciaNeta >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                {rentabilidad}% ROI
              </span>
            </div>
            <p className={`text-4xl font-extrabold tracking-tight ${gananciaNeta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${gananciaNeta.toFixed(2)}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-2 space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-slate-500 uppercase flex items-center gap-2">
              <BarChart2 className="w-4 h-4" /> Indicadores
            </h3>
            
            <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 text-sm flex items-start gap-3">
              <Target className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-indigo-300 font-medium mb-1">Mejor Ingreso</p>
                <p className="text-slate-300 capitalize">{topIngreso[0] === 'N/A' ? 'Aún sin datos' : `${topIngreso[0]} ($${topIngreso[1]}`}</p>
              </div>
            </div>

            <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-amber-300 font-medium mb-1">Mayor Gasto</p>
                <p className="text-slate-300 capitalize">{topGasto[0] === 'N/A' ? 'Aún sin datos' : `${topGasto[0]} ($${topGasto[1]})`}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 pb-2">
            <button 
              onClick={() => {if(window.confirm('¿Borrar todo el historial?')) executeCommand('reset')}}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-200"
            >
              <Trash2 className="w-4 h-4" /> Resetear Datos Locales
            </button>
          </div>
        </aside>

        {/* PANEL DERECHO: Chat Interface */}
        <main className="flex-1 flex flex-col h-full bg-slate-950 relative">
          
          {/* Decorative background gradients */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

          {/* Header Mobile / Tablas */}
          <header className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between z-10 sticky top-0">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-slate-400" />
              <h2 className="font-semibold text-slate-200">Asistente Virtual</h2>
            </div>
            {transactions.length > 0 && (
              <span className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                {transactions.length} registros
              </span>
            )}
          </header>

          {/* Area Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 z-10 hide-scrollbar">
            {messages.map((msg) => {
              const isAgent = msg.role === 'agent';
              return (
                <div key={msg.id} className={`flex w-full ${isAgent ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${isAgent ? 'flex-row' : 'flex-row-reverse'}`}>
                    
                    {/* Avatar */}
                    <div className="shrink-0 pt-1">
                      {isAgent ? (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                          <Car className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                          <span className="text-xs text-slate-400 font-bold">TÚ</span>
                        </div>
                      )}
                    </div>

                    {/* Burbuja Texto */}
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm
                      ${isAgent 
                        ? 'bg-slate-900 border border-slate-800 text-slate-300' 
                        : 'bg-cyan-600/20 border border-cyan-500/30 text-cyan-50 font-medium'
                      }`}
                    >
                      {/* Regex simple para renderizar "negritas" tipo markdown si el bot lo retorna */}
                      {msg.text.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                        if (part.startsWith('*') && part.endsWith('*')) return <em key={i} className="text-cyan-200 not-italic font-semibold">{part.slice(1, -1)}</em>;
                        return part;
                      })}
                    </div>

                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 z-10 sticky bottom-0">
            {/* Sugerencias Rápidas */}
            <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar pb-1">
              {['Gasté $20 en gasolina', 'Hice $40 en indrive', 'Ver resumen', 'Optimizar negocio'].map((chip) => (
                <button 
                  key={chip}
                  onClick={() => setInput(chip.toLowerCase())}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-xs font-medium text-slate-300"
                >
                  {chip}
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej. 'Pagué 10 en multa hoy' o 'Ganancia 30 en uber'..."
                className="w-full bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-2xl pl-5 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-inner transition-all sm:text-sm"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className="absolute right-2 p-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </main>
      </div>
      
      {/* Añadir clase CSS para esconder scrollbars globalmente sólo para este archivo */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
