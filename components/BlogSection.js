// components/BlogSection.js
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// Mantenemos la estructura de tus posts, pero ahora usamos las claves de traducción
const posts = [
    {
      slug: 'que-es-rpa-y-como-ayuda-a-tu-pyme',
      titleKey: 'blog.post1.title',
      summaryKey: 'blog.post1.summary',
      imageUrl: '/blog-post-1.jpg', // Usaremos imágenes locales para mayor velocidad y control
    },
    {
      slug: '3-senales-de-que-necesitas-automatizar-tu-negocio',
      titleKey: 'blog.post2.title',
      summaryKey: 'blog.post2.summary',
      imageUrl: '/blog-post-2.jpg',
    },
     {
      slug: 'el-futuro-es-ahora-agentes-rpa-con-ia',
      titleKey: 'blog.post3.title',
      summaryKey: 'blog.post3.summary',
      imageUrl: '/blog-post-3.jpg',
    }
];

const BlogSection = () => {
    const { t } = useTranslation('common');

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">{t('blog.title')}</h2>
                    <p className="text-xl text-gray-600 mt-2">{t('blog.subtitle')}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
                            <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                {/* Usamos <img> normal para evitar errores de build */}
                                <img className="h-56 w-full object-cover" src={post.imageUrl} alt={t(post.titleKey)} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t(post.titleKey)}</h3>
                                    <p className="text-gray-600 mb-4 text-sm text-justify">{t(post.summaryKey)}</p>
                                    <span className="font-bold text-blue-600 hover:text-blue-700">{t('blog.cta')} &rarr;</span>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <Link href="/blog" legacyBehavior>
                        <a className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                           {t('blog.viewAll')}
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;