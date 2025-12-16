import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowLeft, 
  Bot, 
  BarChart3, 
  Smartphone, 
  BrainCircuit, 
  Users, 
  Layers, 
  ShieldCheck, 
  Headphones, 
  Briefcase, 
  CheckCircle2, 
  Activity,
  FileText,
  Zap,
  Target,
  ChevronRight,
  Database,
  Globe,
  Lock
} from 'lucide-react';

// --- Components ---

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[color]} uppercase tracking-wider mb-4 inline-block`}>
      {children}
    </span>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group h-full">
    <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4 group-hover:bg-cyan-900/20 transition-colors">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
    {features && (
      <ul className="space-y-2">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start text-xs text-gray-300">
            <CheckCircle2 className="w-3 h-3 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="relative pl-8 border-l-2 border-gray-700 hover:border-cyan-500 transition-colors py-2">
    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500"></span>
    <h4 className="text-lg font-bold text-gray-100">{title}</h4>
    <p className="text-sm text-gray-400 mt-1">{desc}</p>
  </div>
);

// --- Content Data ---

const slidesData = [
  {
    id: 'hero',
    layout: 'hero',
    badge: 'Virtus Tech Consulting',
    title: 'Transformación Digital Práctica y Rentable',
    subtitle: 'Su socio estratégico para la eficiencia operativa en el sector financiero.',
    description: 'Ayudamos a las cooperativas a evolucionar de la operatividad manual a la inteligencia automatizada.',
    cta: 'Iniciar el Recorrido'
  },
  {
    id: 'approach',
    layout: 'split',
    badge: 'Nuestra Filosofía',
    title: 'Más que proveedores, somos socios de crecimiento',
    content: [
      {
        icon: Target,
        title: 'Enfoque Estratégico',
        desc: 'No vendemos tecnología por moda. Diagnosticamos sus procesos para identificar dónde la digitalización genera retorno real (ROI).'
      },
      {
        icon: Zap,
        title: 'Agilidad Operativa',
        desc: 'Implementamos soluciones de impacto rápido bajo metodologías ágiles. Resultados visibles en semanas, no en años.'
      },
      {
        icon: Layers,
        title: 'Independencia Tecnológica',
        desc: 'Priorizamos tecnologías Open Source y arquitecturas flexibles para evitar ataduras costosas de licenciamiento perpetuo.'
      }
    ],
    imageAlt: "Consulting strategy"
  },
  // --- New Individual Service Slides ---
  {
    id: 'service-rpa',
    layout: 'service-focus',
    badge: 'Eficiencia Operativa',
    badgeColor: 'blue',
    headline: 'Fuerza de trabajo digital 24/7',
    subheadline: 'Libere a su equipo humano de las tareas repetitivas y monótonas.',
    title: 'RPA & Automatización',
    description: 'Implementamos robots de software que imitan la interacción humana con sistemas digitales para ejecutar procesos de negocio a alta velocidad y sin errores.',
    features: [
      'Conciliaciones bancarias automáticas',
      'Generación de reportes regulatorios (SB, SEPS)',
      'Carga masiva de datos entre sistemas',
      'Gestión automatizada de correos y archivos'
    ],
    icon: Bot
  },
  {
    id: 'service-bi',
    layout: 'service-focus',
    badge: 'Inteligencia de Datos',
    badgeColor: 'purple',
    headline: 'De datos históricos a decisiones futuras',
    subheadline: 'Transformamos filas de excel en tableros de control vivos.',
    title: 'Business Intelligence (BI)',
    description: 'Centralizamos y visualizamos la información crítica de su cooperativa para que la gerencia pueda tomar decisiones basadas en evidencia en tiempo real.',
    features: [
      'Dashboards Gerenciales en tiempo real',
      'Análisis profundo de Mora y Colocación',
      'Control y proyección de Liquidez',
      'Limpieza y estructuración de datos (ETL)'
    ],
    icon: BarChart3
  },
  {
    id: 'service-apps',
    layout: 'service-focus',
    badge: 'Movilidad & Agilidad',
    badgeColor: 'green',
    headline: 'Digitalización del "último metro"',
    subheadline: 'Elimine el papel y la doble digitación en campo y ventanilla.',
    title: 'Apps & Herramientas Internas',
    description: 'Desarrollamos aplicaciones a medida para optimizar la captura de información donde realmente sucede la acción: frente al socio.',
    features: [
      'Vinculación digital de socios (Onboarding)',
      'Estrategia de Oficina sin Papel (Paperless)',
      'Geolocalización de asesores de crédito',
      'Firma electrónica integrada en procesos'
    ],
    icon: Smartphone
  },
  {
    id: 'service-collection',
    layout: 'service-focus',
    badge: 'Soluciones Financieras',
    badgeColor: 'orange',
    headline: 'Recuperación de cartera inteligente',
    subheadline: 'Optimice el ciclo de cobranza con tecnología proactiva.',
    title: 'Cobranza Digital',
    description: 'Sistemas que automatizan el contacto y la negociación con el socio, aumentando la tasa de recuperación y reduciendo la carga operativa de los gestores.',
    features: [
      'Segmentación automática de morosidad',
      'Recordatorios omnicanal (WhatsApp, SMS, Email)',
      'Acuerdos de pago digitales',
      'Gestión preventiva de cartera'
    ],
    icon: Briefcase
  },
  {
    id: 'service-contact',
    layout: 'service-focus',
    badge: 'Experiencia del Socio',
    badgeColor: 'blue',
    headline: 'Atención escalable y personalizada',
    subheadline: 'Centralice sus canales y responda más rápido a sus socios.',
    title: 'Contact Center 2.0',
    description: 'Evolucione su centro de llamadas a un centro de experiencia omnicanal, integrando voz y texto con una visión 360 del socio.',
    features: [
      'Enrutamiento inteligente de llamadas',
      'Historial unificado del socio (CRM)',
      'Análisis de sentimiento en interacciones',
      'Auto-servicio mediante IVR avanzado'
    ],
    icon: Headphones
  },
  {
    id: 'service-risk',
    layout: 'service-focus',
    badge: 'Seguridad & Riesgo',
    badgeColor: 'purple',
    headline: 'Blindaje operativo y prevención',
    subheadline: 'Tecnología para mitigar riesgos antes de que se materialicen.',
    title: 'Riesgo & Compliance',
    description: 'Herramientas avanzadas para la detección de fraude y el cumplimiento normativo, protegiendo los activos de la institución y sus socios.',
    features: [
      'Monitoreo transaccional antifraude',
      'Validación de identidad biométrica',
      'Scoring crediticio alternativo con IA',
      'Listas de control automatizadas (PLD)'
    ],
    icon: ShieldCheck
  },
  // --- End Individual Services ---
  {
    id: 'innovation',
    layout: 'feature-highlight',
    badge: 'Innovación & IA',
    title: 'El Futuro de la Banca es Cognitivo',
    mainFeature: {
      title: 'Inteligencia Artificial Generativa y Predictiva',
      desc: 'Integramos modelos de IA para personalizar la experiencia del socio y predecir comportamientos de mercado.',
      points: [
        'Chatbots conversacionales entrenados con sus productos.',
        'Modelos predictivos para fuga de socios (Churn).',
        'Análisis automatizado de riesgo crediticio.'
      ]
    }
  },
  {
    id: 'methodology',
    layout: 'steps',
    badge: 'Metodología',
    title: 'Piloto Ágil: Resultados sin Riesgo',
    subtitle: 'Nuestro modelo de trabajo garantiza adopción y funcionalidad.',
    steps: [
      { title: '1. Diagnóstico Gratuito', desc: 'Evaluación de procesos "cuello de botella" y matriz de priorización con ROI estimado.' },
      { title: '2. Diseño & Estrategia', desc: 'Definición de reglas de negocio y selección de herramientas (RPA, App o BI).' },
      { title: '3. Desarrollo Iterativo', desc: 'Entregas funcionales cada 1-2 semanas. Usted ve el progreso real constantemente.' },
      { title: '4. Estabilización & Soporte', desc: 'Acompañamiento post-implementación y transferencia de conocimiento a su equipo.' }
    ]
  },
  {
    id: 'contact',
    layout: 'final',
    badge: 'Siguiente Paso',
    title: '¿Listo para transformar su Cooperativa?',
    subtitle: 'Agendemos su sesión de diagnóstico de procesos.',
    contactInfo: {
      email: 'contacto@virtusecuador.com',
      web: 'www.virtusecuador.com',
      company: 'Virtus Tech Consulting'
    }
  }
];

// --- Main Application ---

export default function VirtusPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const totalSlides = slidesData.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slidesData[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-gray-900 to-transparent">
        <div className="flex items-center">
          <Image src="/logo_black.png" alt="Virtus Tech Consulting Logo" width={180} height={50} />
        </div>
        <div className="text-sm text-gray-500 font-mono hidden sm:block">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in-out">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-6xl z-10 animate-fadeIn">
          
          {/* Layout: Hero */}
          {slide.layout === 'hero' && (
            <div className="text-center max-w-4xl mx-auto">
              <Badge color="blue">{slide.badge}</Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 || i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              <p className="text-gray-500 mb-12">{slide.description}</p>
              <button 
                onClick={nextSlide}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-lg overflow-hidden transition-all hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                {slide.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Layout: Split (Text + List/Image) */}
          {slide.layout === 'split' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge color="purple">{slide.badge}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{slide.title}</h2>
                <div className="space-y-8">
                  {slide.content.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                 {/* Abstract visual representation */}
                 <div className="relative w-full aspect-square max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm p-8 flex flex-col justify-between">
                        <div className="w-full h-2 bg-gray-700 rounded-full mb-4 opacity-50"></div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="h-4 w-1/3 bg-gray-600 rounded"></div>
                                <div className="h-4 w-8 bg-cyan-500 rounded"></div>
                            </div>
                            <div className="h-32 bg-gray-800/50 rounded-lg border border-gray-700 border-dashed flex items-center justify-center">
                                <Activity className="w-12 h-12 text-gray-600" />
                            </div>
                            <div className="flex gap-2">
                                <div className="h-12 flex-1 bg-gray-700/50 rounded"></div>
                                <div className="h-12 flex-1 bg-gray-700/50 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-24 bg-gray-800 rounded-xl border border-gray-600 p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-400 w-8 h-8" />
                            <div>
                                <div className="text-xs text-gray-400">Estado</div>
                                <div className="font-bold text-white">Optimizado</div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* Layout: Service Focus (New Detailed Single Service) */}
          {slide.layout === 'service-focus' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gray-800/40 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-8 lg:p-12 hover:border-cyan-500/30 transition-colors duration-500">
                        <div className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <slide.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                         <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {slide.description}
                        </p>
                         <div className="grid grid-cols-1 gap-4">
                            {slide.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center p-3 rounded-lg bg-gray-900/50 border border-gray-800 group-hover:border-gray-700 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                  <Badge color={slide.badgeColor || "blue"}>{slide.badge}</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.headline}
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {slide.subheadline}
                  </p>
                  
                  {/* Decorative Elements for Context */}
                  <div className="mt-12 hidden lg:flex gap-4 opacity-50">
                    <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                    <div className="h-2 w-6 bg-gray-700 rounded-full"></div>
                  </div>
              </div>
            </div>
          )}

          {/* Layout: Grid (Cards) - Kept for fallback/overview if needed */}
          {slide.layout === 'grid' && (
            <div>
              <div className="text-center mb-12">
                <Badge color="blue">{slide.badge}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                {slide.subtitle && <p className="text-xl text-gray-400">{slide.subtitle}</p>}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slide.cards.map((card, idx) => (
                  <ServiceCard key={idx} {...card} />
                ))}
              </div>
            </div>
          )}

          {/* Layout: Feature Highlight */}
          {slide.layout === 'feature-highlight' && (
            <div className="relative overflow-hidden rounded-3xl bg-gray-800/30 border border-gray-700 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <Badge color="green">{slide.badge}</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{slide.title}</h2>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{slide.mainFeature.title}</h3>
                  <p className="text-gray-300 mb-8 text-lg">{slide.mainFeature.desc}</p>
                  <ul className="space-y-4">
                    {slide.mainFeature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <BrainCircuit className="w-5 h-5 text-emerald-400 mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-sm bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl relative">
                        <div className="absolute -top-3 -right-3 bg-emerald-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">AI POWERED</div>
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                            <div className="w-32 h-3 bg-gray-700 rounded"></div>
                        </div>
                        <div className="space-y-3">
                             <div className="p-3 bg-gray-800 rounded-lg rounded-tl-none border border-gray-700 text-sm text-gray-300">
                                ¿Cuál es la predicción de mora para el próximo trimestre?
                             </div>
                             <div className="p-3 bg-cyan-900/20 rounded-lg rounded-tr-none border border-cyan-500/30 text-sm text-cyan-100 ml-8">
                                <span className="flex items-center gap-2">
                                    <Bot className="w-4 h-4" />
                                    Basado en los patrones actuales, se estima una reducción del 12% si aplicamos las campañas preventivas sugeridas.
                                </span>
                             </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}

          {/* Layout: Steps */}
          {slide.layout === 'steps' && (
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                <Badge color="purple">{slide.badge}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-gray-400">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {slide.steps.map((step, idx) => (
                  <StepCard key={idx} number={idx + 1} {...step} />
                ))}
              </div>
            </div>
          )}

          {/* Layout: Final */}
          {slide.layout === 'final' && (
            <div className="text-center max-w-3xl mx-auto">
               <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                    <span className="text-4xl font-bold text-gray-900">V</span>
                  </div>
               </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{slide.title}</h2>
              <p className="text-2xl text-gray-400 mb-12">{slide.subtitle}</p>
              
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-gray-700 inline-block w-full max-w-md">
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-cyan-400"/>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Consultoría</p>
                        <p className="text-white font-medium">Diagnóstico de Procesos (Gratuito)</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-cyan-400"/>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Email</p>
                        <p className="text-white font-medium">{slide.contactInfo.email}</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg transition-colors">
                    Contactar Ahora
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="fixed bottom-0 left-0 w-full p-6 md:p-8 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Progress Bar */}
            <div className="flex gap-2 mr-8 overflow-x-auto pb-2 scrollbar-hide">
                {slidesData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                            idx === currentSlide ? 'w-8 bg-cyan-500' : 'w-4 bg-gray-700 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-3 rounded-full border border-gray-700 bg-gray-900/80 backdrop-blur hover:bg-gray-800 transition-colors ${
                        currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                >
                    <ArrowLeft className="w-5 h-5 text-gray-300" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className={`p-3 rounded-full border border-gray-700 bg-gray-900/80 backdrop-blur hover:bg-cyan-900/30 transition-colors group ${
                         currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 border-cyan-900'
                    }`}
                >
                    {currentSlide === totalSlides - 1 ? (
                        <CheckCircle2 className="w-5 h-5 text-gray-300" />
                    ) : (
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    )}
                </button>
            </div>
        </div>
      </footer>

      {/* Styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}