import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "nav": {
        "solutions": "Soluciones",
        "whyVirtus": "Nosotros", // <-- ¡La palabra que faltaba!
        "caseStudies": "Casos de Éxito",
        "methodology": "Metodología",
        "blog": "Blog",
        "cta": "Diagnóstico Gratuito"
      },
      "hero": {
        "title": "Automatizamos tu Potencial",
        "subtitle": "Ayudamos a las empresas en Ecuador a transformar sus procesos manuales en ventajas competitivas a través de la Automatización Robótica de Procesos (RPA).",
        "cta": "Agenda tu Diagnóstico Gratuito"
      },
      "clients": {
        "title": "Construyendo Alianzas para el Futuro de Ecuador",
        "subtitle": "Nuestra misión es ser el socio estratégico de las empresas que lideran la transformación en sectores clave de nuestro país.",
        "sectors": ["Finanzas & Banca", "Retail & Consumo Masivo", "Logística & Transporte", "Salud & Farmacéutica", "Sector Público"],
        "cta": "Sé Nuestro Próximo Caso de Éxito"
      },
      "servicesOverview": {
          "title": "Nuestros Servicios",
          "subtitle": "Soluciones de automatización inteligente diseñadas para generar un impacto real en tu negocio.",
          "services": [
              {
                  "title": "Consultoría y Diagnóstico de Procesos",
                  "description": "Analizamos tus flujos de trabajo para identificar los cuellos de botella y las oportunidades de automatización con mayor ROI."
              },
              {
                  "title": "Desarrollo de Agentes RPA y Bots a Medida",
                  "description": "Construimos 'trabajadores digitales' que ejecutan tareas repetitivas 24/7, sin errores ni descanso."
              },
              {
                  "title": "Integración de Sistemas y Aplicaciones",
                  "description": "Creamos puentes entre tus plataformas (ERP, CRM, etc.) para que la información fluya sin intervención manual."
              }
          ]
      },
      "whyVirtus": {
        "mainTitle": "No Vendemos Tecnología. Vendemos Tiempo y Tranquilidad.",
        "benefits": [
          { "title": "Más Horas en el Día", "text": "Liberamos a tu equipo de tareas repetitivas para que se enfoquen en lo que realmente importa: hacer crecer tu negocio." },
          { "title": "Precisión del 99,9%", "text": "Nuestros agentes digitales eliminan el error humano en procesos críticos, garantizando datos fiables y evitando costosos reprocesos." },
          { "title": "Crecimiento sin Caos", "text": "Escala tus operaciones y ventas sin aumentar proporcionalmente tu carga administrativa. Crece de forma inteligente." }
        ],
        "advantages": [
          { "title": "Adaptable a tu Realidad", "text": "No necesitas cambiar tus sistemas actuales. Nos integramos incluso con software antiguo sin APIs, protegiendo tu inversión tecnológica." },
          { "title": "Automatización de Punta a Punta", "text": "Cubrimos procesos completos, desde la recepción de un correo hasta el registro contable, eliminando islas de trabajo manual." },
          { "title": "Seguridad Garantizada", "text": "Operamos en la interfaz de usuario, sin acceso directo a tus bases de datos, replicando los permisos de un empleado para máxima seguridad." }
        ]
      },
      "industrySolutions": {
        "title": "Soluciones Estratégicas para Cada Industria",
        "subtitle": "Entendemos los desafíos únicos de tu sector. Descubre cómo podemos ayudarte a transformar tus operaciones.",
        "tabs": ["Finanzas", "Logística", "Retail", "RRHH"],
        "content": {
          "Finanzas": {
            "title": "Precisión y Velocidad para tu Back Office Financiero",
            "solutions": [
              "Conciliación bancaria y contable en minutos, no en días.",
              "Procesamiento automático de facturas de proveedores y cuentas por pagar.",
              "Gestión de cobranza automatizada con recordatorios inteligentes.",
              "Generación de reportes financieros y de cumplimiento sin intervención manual."
            ]
          },
          "Logística": {
            "title": "Optimización de la Cadena de Suministro de Principio a Fin",
            "solutions": [
              "Procesamiento automático de órdenes de compra y venta.",
              "Monitoreo de inventarios en tiempo real con alertas de stock bajo.",
              "Integración con portales de proveedores y seguimiento de despachos.",
              "Generación automática de guías de remisión y documentos de transporte."
            ]
          },
          "Retail": {
            "title": "Una Experiencia de Cliente y Operativa Superior",
            "solutions": [
              "Actualización masiva de precios y catálogos de productos.",
              "Sincronización de inventario entre tu e-commerce y tiendas físicas.",
              "Procesamiento de devoluciones y gestión de reclamos.",
              "Análisis de datos de ventas para optimizar la estrategia comercial."
            ]
          },
          "RRHH": {
            "title": "Enfócate en tu Talento, no en el Papeleo",
            "solutions": [
              "Procesos de onboarding y offboarding de empleados 100% digitales.",
              "Cálculo y validación automática de nómina y beneficios.",
              "Gestión y actualización masiva de datos y expedientes de empleados.",
              "Publicación de vacantes y filtrado inicial de candidatos."
            ]
          }
        },
        "iaSection": {
            "title": "El Futuro: Agentes RPA con Inteligencia Artificial",
            "description": "Combinamos la eficiencia de RPA con el poder de la IA para crear 'Agentes Digitales' que no solo ejecutan, sino que entienden, aprenden y razonan. Pueden leer documentos no estructurados, entender correos de clientes y tomar decisiones basadas en datos, llevando la automatización a un nuevo nivel."
        }
      },
      "caseStudies": {
        "title": "Resultados, no Promesas",
        "subtitle": "Descubre cómo hemos ayudado a empresas como la tuya a transformar sus operaciones y a lograr un crecimiento sostenible.",
        "cases": [
          {
            "industry": "Logística",
            "title": "Reducción del 85% en el Tiempo de Procesamiento de Pedidos",
            "challenge": "Una empresa de distribución nacional procesaba más de 300 pedidos diarios manualmente, lo que generaba errores, retrasos en la facturación y clientes insatisfechos.",
            "solution": "Implementamos un agente digital que lee los correos de pedidos, extrae la información, la valida contra el inventario en el ERP y genera la pre-factura, todo en menos de 60 segundos.",
            "results": [
              { "value": "85%", "label": "Menos tiempo de procesamiento" },
              { "value": "99.8%", "label": "Precisión en pedidos" },
              { "value": "4 meses", "label": "Retorno de la Inversión" }
            ]
          }
        ]
      },
       "methodology": {
        "title": "Un Camino Claro y de Bajo Riesgo Hacia la Automatización",
        "subtitle": "Nuestra metodología está diseñada para entregar valor rápidamente y asegurar el éxito a largo plazo.",
        "steps": [
          { "title": "1. Diagnóstico y Hoja de Ruta", "description": "Analizamos tus procesos para identificar las oportunidades de mayor impacto. Te presentamos un plan claro y cuantificable, sin costo inicial." },
          { "title": "2. Proyecto Piloto de Alto Impacto", "description": "En semanas, no meses, implementamos una primera automatización. Demostramos el ROI con datos reales y una inversión controlada." },
          { "title": "3. Escalabilidad y Soporte Continuo", "description": "Una vez probado el valor, nos convertimos en tu socio estratégico, expandiendo la automatización a nuevas áreas y garantizando la optimización permanente." }
        ]
      },
      "blog": {
        "title": "Desde Nuestro Blog",
        "subtitle": "Conocimiento y tendencias sobre el futuro de la automatización y la eficiencia empresarial.",
        "cta": "Leer más",
        "viewAll": "Ver todos los artículos",
        "page": {
          "title": "Nuestro Blog",
          "subtitle": "Un espacio para aprender, explorar y entender el poder de la automatización.",
          "back": "Volver al blog"
        },
        "que-es-rpa-y-como-ayuda-a-tu-pyme": {
          "title": "¿Qué es RPA y cómo puede catapultar a tu PYME?",
          "summary": "Desmitificamos la Automatización Robótica de Procesos y te mostramos con ejemplos prácticos cómo puede ser el mejor aliado para el crecimiento de tu negocio.",
          "content": "<h1>¿Qué es exactamente RPA? Olvídalo todo y piensa en esto...</h1><p>Imagina que contratas a un nuevo empleado. Es el más rápido, el más preciso y el más dedicado que jamás hayas tenido. Trabaja 24 horas al día, 7 días a la semana, sin pedir vacaciones ni aumento de sueldo. Nunca se cansa, nunca se queja y nunca comete un error al copiar y pegar un dato. Su única misión es realizar esas tareas repetitivas y aburridas que le roban tiempo y energía a tu equipo más valioso.</p><p>Eso, mi amor, es la **Automatización Robótica de Procesos (RPA)**. No es un robot de metal, es un 'trabajador digital' de software que puedes 'entrenar' para que utilice las aplicaciones de tu computadora exactamente como lo haría una persona.</p><h2>Soluciones puntuales que un 'trabajador digital' puede hacer por ti HOY:</h2><ul><li><strong>El Asistente del SRI:</strong> Inicia sesión cada mañana en el portal del SRI, descarga todas las facturas electrónicas (recibidas y emitidas), las clasifica y las registra en tu sistema contable o en un archivo de Excel.</li><li><strong>El Conciliador Bancario Nocturno:</strong> Mientras duermes, compara el estado de cuenta de tu banco con tus registros internos y te entrega un reporte a las 8 AM con las únicas transacciones que necesitan tu atención.</li><li><strong>El Gestor de Inventario:</strong> Revisa los niveles de stock en tu sistema y envía alertas automáticas de compra cuando un producto de alta rotación está por agotarse.</li><li><strong>El Registrador de Clientes:</strong> Toma los datos de los formularios de contacto de tu web o redes sociales y los crea automáticamente en tu CRM, notificando a un vendedor de inmediato.</li></ul><p>En Virtus, no implementamos tecnología; liberamos el potencial humano de tu empresa. ¿Listo para contratar a tu primer trabajador digital?</p>"
        },
        "3-senales-de-que-necesitas-automatizar-tu-negocio": {
          "title": "3 Señales Claras de que Necesitas Automatizar (Ayer)",
          "summary": "Si tu equipo vive en Excel, los errores manuales son el pan de cada día o sientes que no puedes crecer sin contratar más personal administrativo, este artículo es para ti.",
          "content": "<h1>El dolor del crecimiento desordenado</h1><p>Crecer es el sueño de todo empresario, pero si cada nueva venta significa más caos administrativo, algo anda mal. La automatización no es un lujo para el futuro, es una necesidad para el presente. Aquí te dejo tres síntomas claros de que tu empresa está pidiendo a gritos un 'trabajador digital'.</p><h2>Señal 1: Tu equipo vive 'ahogado' en hojas de cálculo</h2><p>Si la respuesta a cualquier pregunta de negocio es 'déjame revisar el Excel', tienes un problema. Cuando tus empleados pasan más tiempo copiando y pegando datos entre diferentes hojas de cálculo que analizando esa información o hablando con clientes, estás perdiendo dinero y agilidad.<strong>La solución puntual:</strong> Un bot puede consolidar automáticamente la información de múltiples fuentes (tu sistema de ventas, tu sistema contable, etc.) en un único reporte o dashboard actualizado en tiempo real.</p><h2>Señal 2: Los errores manuales son el 'pan de cada día'</h2><p>Un número mal tipeado en una factura, un pedido ingresado con el código incorrecto, un correo de un cliente que se traspapeló. Estos pequeños errores humanos tienen un costo enorme: clientes insatisfechos, problemas con el SRI y horas perdidas buscando el origen del problema.<strong>La solución puntual:</strong> Un bot de RPA realiza las tareas de ingreso de datos con una precisión del 99.9%. Elimina el factor humano del error en tus procesos más críticos.</p><h2>Señal 3: Sientes que para crecer, necesitas contratar más personal administrativo</h2><p>Si piensas 'si duplicamos las ventas, necesitaremos duplicar el personal de administración', estás limitando tu propio crecimiento. La verdadera escalabilidad significa poder manejar más volumen de negocio con la misma estructura, o incluso una más ágil.<strong>La solución puntual:</strong> La automatización te permite procesar 10 o 1,000 transacciones con el mismo esfuerzo: cero. Libera a tu equipo para que se convierta en el motor estratégico de tu crecimiento, no en un centro de costos.</p><p>Si te identificaste con una o más de estas señales, no estás solo. Hablemos. Podemos diseñar un plan para curar estos dolores de crecimiento.</p>"
        },
        "el-futuro-es-ahora-agentes-rpa-con-ia": {
          "title": "El Futuro es Ahora: Agentes RPA con Inteligencia Artificial",
          "summary": "La automatización ha evolucionado. Ya no se trata solo de repetir clics, sino de entender documentos, interpretar correos y tomar decisiones. Descubre los Agentes RPA inteligentes.",
          "content": "<h1>Más allá de los clics: RPA que 'piensa'</h1><p>Un bot de RPA tradicional es un ejecutor de tareas magistral. Le das una regla clara ('copia el dato de la casilla A y pégalo en la casilla B') y lo hará a la perfección un millón de veces. Pero, ¿qué pasa si la tarea requiere un poco de... juicio?</p><p>Ahí es donde la Inteligencia Artificial (IA) entra en juego, transformando a nuestros 'trabajadores digitales' en verdaderos 'Agentes Digitales Inteligentes'.</p><h2>¿Qué puede hacer un Agente RPA con IA que un bot tradicional no puede?</h2><p>Un bot tradicional necesita datos estructurados (como una hoja de Excel). Un agente con IA puede trabajar con datos no estructurados, el 80% de la información de una empresa.</p><h3>Soluciones puntuales que la IA desbloquea:</h3><ul><li><strong>Entender Documentos:</strong> Puede leer una factura en PDF o una foto de un recibo, sin importar si el formato cambia. Extrae los datos clave (RUC, total, fecha) como lo haría un humano, pero en segundos.</li><li><strong>Clasificar Correos Electrónicos:</strong> Puede leer un correo entrante, entender si es una queja, una solicitud de cotización o un pedido de soporte, y redirigirlo automáticamente al departamento correcto sin que nadie tenga que leerlo primero.</li><li><strong>Análisis de Sentimiento:</strong> Puede analizar los comentarios de tus clientes en redes sociales o encuestas y decirte si el sentimiento general es positivo, negativo o neutro, dándote un pulso de tu marca en tiempo real.</li><li><strong>Toma de Decisiones Básica:</strong> Puede aprobar una solicitud de descuento si cumple con ciertas variables (cliente antiguo, monto bajo, etc.) o escalarla a un supervisor si es un caso complejo.</li></ul><p>En Virtus Tech Consulting, no solo te ofrecemos la automatización de hoy, te preparamos para la eficiencia del mañana. La IA ya no es ciencia ficción; es la próxima ventaja competitiva para las empresas que quieren liderar, no solo competir.</p>"
        }
      },
      "contact": {
        "title": "Hablemos de tu Potencial",
        "subtitle": "Agenda un diagnóstico gratuito de 30 minutos y descubre las oportunidades de automatización ocultas en tu empresa. Sin compromiso, con resultados claros.",
        "form": {
          "title": "Agenda tu Diagnóstico",
          "name": "Nombre Completo",
          "email": "Correo Electrónico",
          "company": "Nombre de la Empresa",
          "message": "Cuéntanos sobre tu principal desafío",
          "companySize": "Tamaño de la empresa",
          "selectService": "Selecciona un servicio",
          "submit": "Agendar mi Diagnóstico"
        },
        "or": "O contáctanos directamente"
      },
      "footer": {
        "slogan": "Su aliado en automatización inteligente.",
        "quote": "Transforme su empresa con procesos más rápidos, seguros y rentables."
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "solutions": "Solutions",
        "whyVirtus": "About Us", // <-- And here for English!
        "caseStudies": "Case Studies",
        "methodology": "Methodology",
        "blog": "Blog",
        "cta": "Free Diagnosis"
      },
      "hero": {
        "title": "We Automate Your Potential",
        "subtitle": "We help companies in Ecuador transform their manual processes into competitive advantages through Robotic Process Automation (RPA).",
        "cta": "Schedule Your Free Diagnosis"
      },
      "clients": {
        "title": "Building Alliances for the Future of Ecuador",
        "subtitle": "Our mission is to be the strategic partner for companies leading transformation in our country's key sectors.",
        "sectors": ["Finance & Banking", "Retail & CPG", "Logistics & Transport", "Health & Pharma", "Public Sector"],
        "cta": "Be Our Next Success Story"
      },
       "servicesOverview": {
          "title": "Our Services",
          "subtitle": "Intelligent automation solutions designed to generate a real impact on your business.",
          "services": [
              {
                  "title": "Process Consulting and Diagnosis",
                  "description": "We analyze your workflows to identify bottlenecks and automation opportunities with the highest ROI."
              },
              {
                  "title": "Custom RPA Agent and Bot Development",
                  "description": "We build 'digital workers' that execute repetitive tasks 24/7, without errors or breaks."
              },
              {
                  "title": "Systems and Application Integration",
                  "description": "We create bridges between your platforms (ERP, CRM, etc.) so that information flows without manual intervention."
              }
          ]
      },
      "whyVirtus": {
        "mainTitle": "We Don't Sell Technology. We Sell Time and Peace of Mind.",
        "benefits": [
          { "title": "More Hours in Your Day", "text": "We free up your team from repetitive tasks so they can focus on what truly matters: growing your business." },
          { "title": "99.9% Accuracy", "text": "Our digital agents eliminate human error in critical processes, ensuring reliable data and avoiding costly rework." },
          { "title": "Growth Without Chaos", "text": "Scale your operations and sales without proportionally increasing your administrative burden. Grow smarter." }
        ],
        "advantages": [
          { "title": "Adaptable to Your Reality", "text": "You don't need to change your current systems. We integrate even with legacy software without APIs, protecting your tech investment." },
          { "title": "End-to-End Automation", "text": "We cover complete processes, from receiving an email to accounting entry, eliminating islands of manual work." },
          { "title": "Security Guaranteed", "text": "We operate on the user interface, without direct access to your databases, replicating employee permissions for maximum security." }
        ]
      },
        "industrySolutions": {
        "title": "Strategic Solutions for Every Industry",
        "subtitle": "We understand the unique challenges of your sector. Discover how we can help you transform your operations.",
        "tabs": ["Finance", "Logistics", "Retail", "HR"],
        "content": {
          "Finance": {
            "title": "Precision and Speed for Your Financial Back Office",
            "solutions": [
              "Bank and accounting reconciliation in minutes, not days.",
              "Automatic processing of supplier invoices and accounts payable.",
              "Automated collections management with smart reminders.",
              "Generation of financial and compliance reports without manual intervention."
            ]
          },
          "Logistics": {
            "title": "End-to-End Supply Chain Optimization",
            "solutions": [
              "Automatic processing of purchase and sales orders.",
              "Real-time inventory monitoring with low-stock alerts.",
              "Integration with supplier portals and shipment tracking.",
              "Automatic generation of shipping documents and transport forms."
            ]
          },
          "Retail": {
            "title": "A Superior Customer and Operational Experience",
            "solutions": [
              "Bulk updates of prices and product catalogs.",
              "Inventory synchronization between your e-commerce and physical stores.",
              "Returns processing and claims management.",
              "Sales data analysis to optimize business strategy."
            ]
          },
          "HR": {
            "title": "Focus on Your Talent, Not the Paperwork",
            "solutions": [
              "100% digital employee onboarding and offboarding processes.",
              "Automatic calculation and validation of payroll and benefits.",
              "Bulk management and updating of employee data and files.",
              "Job vacancy posting and initial candidate screening."
            ]
          }
        },
        "iaSection": {
            "title": "The Future: RPA Agents with Artificial Intelligence",
            "description": "We combine the efficiency of RPA with the power of AI to create 'Digital Agents' that not only execute but also understand, learn, and reason. They can read unstructured documents, understand customer emails, and make data-driven decisions, taking automation to a new level."
        }
      },
       "caseStudies": {
        "title": "Results, Not Promises",
        "subtitle": "Discover how we have helped companies like yours transform their operations and achieve sustainable growth.",
        "cases": [
          {
            "industry": "Logistics",
            "title": "85% Reduction in Order Processing Time",
            "challenge": "A national distribution company processed over 300 orders daily by hand, leading to errors, billing delays, and dissatisfied customers.",
            "solution": "We implemented a digital agent that reads order emails, extracts the information, validates it against ERP inventory, and generates the pre-invoice, all in under 60 seconds.",
            "results": [
              { "value": "85%", "label": "Less processing time" },
              { "value": "99.8%", "label": "Accuracy in orders" },
              { "value": "4 months", "label": "Return on Investment" }
            ]
          }
        ]
      },
        "methodology": {
        "title": "A Clear and Low-Risk Path to Automation",
        "subtitle": "Our methodology is designed to deliver value quickly and ensure long-term success.",
        "steps": [
          { "title": "1. Diagnosis and Roadmap", "description": "We analyze your processes to identify the highest-impact opportunities. We present a clear, quantifiable plan at no initial cost." },
          { "title": "2. High-Impact Pilot Project", "description": "In weeks, not months, we implement a first automation. We demonstrate ROI with real data and a controlled investment." },
          { "title": "3. Scalability and Continuous Support", "description": "Once the value is proven, we become your strategic partner, expanding automation to new areas and ensuring permanent optimization." }
        ]
      },
      "blog": {
        "title": "From Our Blog",
        "subtitle": "Knowledge and trends on the future of automation and business efficiency.",
        "cta": "Read more",
        "viewAll": "View all articles",
        "page": {
          "title": "Our Blog",
          "subtitle": "A space to learn, explore, and understand the power of automation.",
          "back": "Back to blog"
        },
        "que-es-rpa-y-como-ayuda-a-tu-pyme": {
          "title": "What is RPA and How Can It Catapult Your SME?",
          "summary": "We demystify Robotic Process Automation and show you with practical examples how it can be the best ally for your business growth.",
          "content": "<h1>What exactly is RPA? Forget everything and think about this...</h1><p>Imagine hiring a new employee. They are the fastest, most accurate, and most dedicated you've ever had. They work 24 hours a day, 7 days a week, without asking for vacations or a raise. They never get tired, never complain, and never make a mistake copying and pasting data. Their sole mission is to handle those repetitive, boring tasks that steal time and energy from your most valuable team.</p><p>That, my love, is **Robotic Process Automation (RPA)**. It's not a metal robot; it's a software 'digital worker' that you can 'train' to use your computer's applications exactly as a person would.</p><h2>Specific solutions a 'digital worker' can do for you TODAY:</h2><ul><li><strong>The SRI Assistant:</strong> Logs into the SRI portal every morning, downloads all electronic invoices (received and issued), classifies them, and records them in your accounting system or an Excel file.</li><li><strong>The Overnight Bank Reconciler:</strong> While you sleep, it compares your bank statement with your internal records and delivers a report at 8 AM with the only transactions that need your attention.</li><li><strong>The Inventory Manager:</strong> Checks stock levels in your system and sends automatic purchase alerts when a high-turnover product is about to run out.</li><li><strong>The Lead Registrar:</strong> Takes data from contact forms on your website or social media and automatically creates them in your CRM, notifying a salesperson immediately.</li></ul><p>At Virtus, we don't implement technology; we unleash your company's human potential. Ready to hire your first digital worker?</p>"
        },
        "3-senales-de-que-necesitas-automatizar-tu-negocio": {
          "title": "3 Clear Signs You Need to Automate (Yesterday)",
          "summary": "If your team lives in Excel, manual errors are a daily occurrence, or you feel you can't grow without hiring more administrative staff, this article is for you.",
          "content": "<h1>The Pain of Disorganized Growth</h1><p>Growing is every entrepreneur's dream, but if every new sale means more administrative chaos, something is wrong. Automation is not a luxury for the future; it's a necessity for the present. Here are three clear symptoms that your company is crying out for a 'digital worker'.</p><h2>Sign 1: Your team is 'drowning' in spreadsheets</h2><p>If the answer to any business question is 'let me check the Excel file,' you have a problem. When your employees spend more time copying and pasting data between different spreadsheets than analyzing that information or talking to customers, you are losing money and agility.<strong>The specific solution:</strong> A bot can automatically consolidate information from multiple sources (your sales system, your accounting system, etc.) into a single, real-time updated report or dashboard.</p><h2>Sign 2: Manual errors are a 'daily bread'</h2><p>A mistyped number on an invoice, an order entered with the wrong code, a customer email that got lost. These small human errors have a huge cost: dissatisfied customers, problems with tax authorities, and hours lost searching for the source of the problem.<strong>The specific solution:</strong> An RPA bot performs data entry tasks with 99.9% accuracy. It eliminates the human error factor from your most critical processes.</p><h2>Sign 3: You feel that to grow, you need to hire more administrative staff</h2><p>If you think 'if we double sales, we'll need to double the administrative staff,' you are limiting your own growth. True scalability means being able to handle more business volume with the same structure, or even a leaner one.<strong>The specific solution:</strong> Automation allows you to process 10 or 1,000 transactions with the same effort: zero. It frees your team to become the strategic engine of your growth, not a cost center.</p><p>If you identified with one or more of these signs, you are not alone. Let's talk. We can design a plan to cure these growing pains.</p>"
        },
        "el-futuro-es-ahora-agentes-rpa-con-ia": {
          "title": "The Future is Now: RPA Agents with Artificial Intelligence",
          "summary": "Automation has evolved. It's no longer just about repeating clicks, but about understanding documents, interpreting emails, and making decisions. Discover intelligent RPA Agents.",
          "content": "<h1>Beyond Clicks: RPA that 'Thinks'</h1><p>A traditional RPA bot is a masterful task executor. You give it a clear rule ('copy the data from cell A and paste it into cell B'), and it will do it perfectly a million times. But what if the task requires a bit of... judgment?</p><p>That's where Artificial Intelligence (AI) comes into play, transforming our 'digital workers' into true 'Intelligent Digital Agents'.</p><h2>What can an AI-powered RPA Agent do that a traditional bot can't?</h2><p>A traditional bot needs structured data (like an Excel sheet). An AI agent can work with unstructured data, which makes up 80% of a company's information.</p><h3>Specific solutions that AI unlocks:</h3><ul><li><strong>Understand Documents:</strong> It can read a PDF invoice or a photo of a receipt, regardless of whether the format changes. It extracts key data (Tax ID, total, date) just as a human would, but in seconds.</li><li><strong>Classify Emails:</strong> It can read an incoming email, understand if it's a complaint, a quote request, or a support ticket, and automatically route it to the correct department without anyone having to read it first.</li><li><strong>Sentiment Analysis:</strong> It can analyze your customers' comments on social media or in surveys and tell you if the overall sentiment is positive, negative, or neutral, giving you a real-time pulse of your brand.</li><li><strong>Basic Decision Making:</strong> It can approve a discount request if it meets certain variables (long-time customer, low amount, etc.) or escalate it to a supervisor if it's a complex case.</li></ul><p>At Virtus Tech Consulting, we don't just offer you today's automation; we prepare you for tomorrow's efficiency. AI is no longer science fiction; it's the next competitive advantage for companies that want to lead, not just compete.</p>"
        }
      },
       "contact": {
        "title": "Let's Talk About Your Potential",
        "subtitle": "Schedule a free 30-minute diagnosis and discover the hidden automation opportunities in your company. No commitment, with clear results.",
        "form": {
          "name": "Full Name",
          "email": "Email Address",
          "company": "Company Name",
          "message": "Tell us about your main challenge",
          "submit": "Schedule My Diagnosis"
        },
        "or": "Or contact us directly"
      },
      "footer": {
        "slogan": "Your partner in intelligent automation.",
        "quote": "Transform your company with faster, safer, and more profitable processes."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', 
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

