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
          "content": "<h1>¿Qué es exactamente RPA?</h1><p>Imagina un asistente incansable que trabaja 24/7, no comete errores de tipeo y se encarga de todas esas tareas repetitivas que consumen el tiempo de tu equipo. Eso es RPA...</p>"
        },
        "3-senales-de-que-necesitas-automatizar-tu-negocio": {
          "title": "3 Señales Claras de que Necesitas Automatizar (Ayer)",
          "summary": "Si tu equipo vive en Excel, los errores manuales son el pan de cada día o sientes que no puedes crecer sin contratar más personal administrativo, este artículo es para ti.",
          "content": "<h1>El dolor del crecimiento desordenado</h1><p>Crecer es bueno, pero si cada nueva venta significa más caos administrativo, algo anda mal. La primera señal es cuando tu equipo pasa más tiempo moviendo datos entre hojas de cálculo que hablando con clientes...</p>"
        },
        "el-futuro-es-ahora-agentes-rpa-con-ia": {
          "title": "El Futuro es Ahora: Agentes RPA con Inteligencia Artificial",
          "summary": "La automatización ha evolucionado. Ya no se trata solo de repetir clics, sino de entender documentos, interpretar correos y tomar decisiones. Descubre los Agentes RPA inteligentes.",
          "content": "<h1>Más allá de los clics: RPA que 'piensa'</h1><p>Un bot tradicional es un excelente ejecutor de tareas. Pero, ¿qué pasa si necesita leer una factura en PDF que cada proveedor envía en un formato distinto? Ahí es donde entra la Inteligencia Artificial...</p>"
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
          "content": "<h1>What exactly is RPA?</h1><p>Imagine a tireless assistant who works 24/7, makes no typing errors, and handles all those repetitive tasks that consume your team's time. That's RPA...</p>"
        },
        "3-senales-de-que-necesitas-automatizar-tu-negocio": {
          "title": "3 Clear Signs You Need to Automate (Yesterday)",
          "summary": "If your team lives in Excel, manual errors are a daily occurrence, or you feel you can't grow without hiring more administrative staff, this article is for you.",
          "content": "<h1>The pain of disorganized growth</h1><p>Growth is good, but if every new sale means more administrative chaos, something is wrong. The first sign is when your team spends more time moving data between spreadsheets than talking to customers...</p>"
        },
        "el-futuro-es-ahora-agentes-rpa-con-ia": {
          "title": "The Future is Now: RPA Agents with Artificial Intelligence",
          "summary": "Automation has evolved. It's no longer just about repeating clicks, but about understanding documents, interpreting emails, and making decisions. Discover intelligent RPA Agents.",
          "content": "<h1>Beyond clicks: RPA that 'thinks'</h1><p>A traditional bot is an excellent task executor. But what if it needs to read a PDF invoice that each supplier sends in a different format? That's where Artificial Intelligence comes in...</p>"
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

