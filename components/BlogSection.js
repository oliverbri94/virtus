import Link from 'next/link';
import { useTranslation } from 'react-i18next';

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

const BlogSection = () => {
    const { t } = useTranslation();

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-virtus-dark">{t('blog.title')}</h2>
                    <p className="text-xl text-gray-600 mt-2">{t('blog.subtitle')}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
                            <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <img className="h-56 w-full object-cover" src={post.imageUrl} alt={t(post.titleKey)} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-virtus-dark mb-2">{t(post.titleKey)}</h3>
                                    <p className="text-gray-600 mb-4 text-sm text-justify">{t(post.summaryKey)}</p>
                                    <span className="font-bold text-virtus-blue hover:text-virtus-blue-light">{t('blog.cta')} &rarr;</span>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

