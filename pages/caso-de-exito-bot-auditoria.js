import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CasoDeExitoBotAuditoria = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">{t('case_study_title')}</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4">
            {t('case_study_intro')}
          </p>
          <h2 className="text-2xl font-bold mb-4">{t('case_study_problem_title')}</h2>
          <p className="mb-4">
            {t('case_study_problem_desc')}
          </p>
          <h2 className="text-2xl font-bold mb-4">{t('case_study_solution_title')}</h2>
          <p className="mb-4">
            {t('case_study_solution_desc')}
          </p>
          <div className="my-8">
            <h2 className="text-2xl font-bold text-center mb-4">{t('case_study_video_title')}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">{t('case_study_results_title')}</h2>
          <p className="mb-4">
            {t('case_study_results_desc')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default CasoDeExitoBotAuditoria;
