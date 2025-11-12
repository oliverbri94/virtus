import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CheckCircle, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

const Feature = ({ icon, title, children }) => (
  <div className="flex">
    <div className="flex-shrink-0 h-12 w-12 rounded-md flex items-center justify-center bg-virtus-blue-light/10 text-virtus-blue-light">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      <p className="mt-1 text-gray-400">{children}</p>
    </div>
  </div>
);

const CasoDeExitoBotAuditoria = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-virtus-blue-light font-semibold uppercase tracking-wider">{t('case_study.header')}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 mt-4 max-w-4xl mx-auto">
            {t('case_study.title')}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('case_study.subtitle')}
          </p>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 sm:py-28 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-6">{t('case_study.problem_title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.problem_1')}</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.problem_2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.problem_3')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/40 border border-virtus-blue-light/50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-6 text-virtus-blue-light">{t('case_study.solution_title')}</h2>
              <p className="text-center text-gray-300 mb-6">{t('case_study.solution_intro')}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.solution_1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.solution_2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{t('case_study.solution_3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 sm:py-28 bg-gray-900/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100">{t('case_study.methodology_title')}</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{t('case_study.methodology_subtitle')}</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-virtus-blue-light mb-2">1</div>
              <h3 className="text-xl font-semibold mb-2">{t('case_study.step1_title')}</h3>
              <p className="text-gray-400">{t('case_study.step1_desc')}</p>
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-virtus-blue-light mb-2">2</div>
              <h3 className="text-xl font-semibold mb-2">{t('case_study.step2_title')}</h3>
              <p className="text-gray-400">{t('case_study.step2_desc')}</p>
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-virtus-blue-light mb-2">3</div>
              <h3 className="text-xl font-semibold mb-2">{t('case_study.step3_title')}</h3>
              <p className="text-gray-400">{t('case_study.step3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-100">{t('case_study_video_title')}</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-12">{t('case_study.video_subtitle')}</p>
          <div className="aspect-w-16 aspect-h-9 max-w-6xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/KDdOMFl7BYY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 sm:py-28 bg-gray-800/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100">{t('case_study.results_title')}</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{t('case_study.results_subtitle')}</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Feature icon={<Clock className="w-6 h-6" />} title={t('case_study.result1_title')}>
              {t('case_study.result1_desc')}
            </Feature>
            <Feature icon={<CheckCircle className="w-6 h-6" />} title={t('case_study.result2_title')}>
              {t('case_study.result2_desc')}
            </Feature>
            <Feature icon={<AlertTriangle className="w-6 h-6" />} title={t('case_study.result3_title')}>
              {t('case_study.result3_desc')}
            </Feature>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">{t('case_study.cta_title')}</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{t('case_study.cta_subtitle')}</p>
          <Link href="/#contact" legacyBehavior>
            <a
              className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-virtus-blue hover:bg-virtus-blue-dark"
            >
              {t('hero.cta')} <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
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