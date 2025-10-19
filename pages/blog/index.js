import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DynamicParticles = dynamic(() => import('../../components/DynamicParticles'), {
  ssr: false
});

const posts = [
    {
      slug: 'que-es-rpa-y-como-ayuda-a-tu-pyme',
      titleKey: 'blog.que-es-rpa-y-como-ayuda-a-tu-pyme.title',
      summaryKey: 'blog.que-es-rpa-y-como-ayuda-a-tu-pyme.summary',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      slug: '3-senales-de-que-necesitas-automatizar-tu-negocio',
      titleKey: 'blog.3-senales-de-que-necesitas-automatizar-tu-negocio.title',
      summaryKey: 'blog.3-senales-de-que-necesitas-automatizar-tu-negocio.summary',
      imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
     {
      slug: 'el-futuro-es-ahora-agentes-rpa-con-ia',
      titleKey: 'blog.el-futuro-es-ahora-agentes-rpa-con-ia.title',
      summaryKey: 'blog.el-futuro-es-ahora-agentes-rpa-con-ia.summary',
      imageUrl: 'https://img.freepik.com/premium-photo/creative-artificial-intelligence-concept-with-human-brain-sketch-modern-computer-background-double-exposure_258654-23252.jpg',
    }
];

const BlogIndex = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-gray-900 text-white">
            <Navbar />
            <main className="pt-24">
                <div className="relative">
                    <DynamicParticles />
                    <section className="py-20">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h1 className="text-5xl font-bold text-white">{t('blog.title')}</h1>
                                <p className="text-xl text-gray-400 mt-4">{t('blog.subtitle')}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
                                        <a className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                            <Image width={400} height={224} className="w-full object-cover" src={post.imageUrl} alt={t(post.titleKey)} />
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-white mb-2">{t(post.titleKey)}</h3>
                                                <p className="text-gray-400 mb-4 text-sm">{t(post.summaryKey)}</p>
                                                <span className="font-bold text-blue-400 hover:text-blue-300">{t('blog.cta')} &rarr;</span>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
}

export default BlogIndex;

