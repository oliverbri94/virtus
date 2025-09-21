import { FiSearch, FiZap, FiTrendingUp } from 'react-icons/fi';

const Methodology = () => {
    const steps = [
        { icon: <FiSearch className="w-12 h-12 text-white" />, title: "1. Diagnóstico y Hoja de Ruta", text: "Analizamos tus procesos actuales sin costo y te presentamos un plan de automatización cuantificable, identificando los puntos de mayor impacto y ROI." },
        { icon: <FiZap className="w-12 h-12 text-white" />, title: "2. Proyecto Piloto de Alto Impacto", text: "Implementamos una primera solución en semanas, no meses. Verás resultados medibles con una inversión controlada y sin riesgos." },
        { icon: <FiTrendingUp className="w-12 h-12 text-white" />, title: "3. Escalabilidad y Soporte Continuo", text: "Una vez demostrado el valor, nos convertimos en tu socio estratégico, expandiendo la automatización a nuevas áreas y garantizando la optimización permanente." },
    ];

    return(
        <section id="methodology" className="py-20 bg-virtus-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Un Camino Claro y de Bajo Riesgo Hacia la Eficiencia</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-virtus-blue/20 p-8 rounded-lg text-center">
                            <div className="flex justify-center items-center w-24 h-24 rounded-full bg-virtus-blue-light mx-auto mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-300">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Methodology;
