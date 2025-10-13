import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

const DynamicParticleComponent = dynamic(() => import('../components/DynamicParticles'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="particle-background">
        <DynamicParticleComponent />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
