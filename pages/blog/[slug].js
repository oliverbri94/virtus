import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const posts = [
    {
      slug: 'que-es-rpa-y-como-ayuda-a-tu-pyme',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      slug: '3-senales-de-que-necesitas-automatizar-tu-negocio',
      imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
     {
      slug: 'el-futuro-es-ahora-agentes-rpa-con-ia',
      imageUrl: 'https://img.freepik.com/premium-photo/creative-artificial-intelligence-concept-with-human-brain-sketch-modern-computer-background-double-exposure_258654-23252.jpg',
    }
];

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { t } = useTranslation();

    if (!slug) return <p>Loading...</p>;

    const post = posts.find(p => p.slug === slug);
    const titleKey = `blog.${slug}.title`;
    const contentKey = `blog.${slug}.content`;
    
    return (
        <div className="bg-white">
            <Navbar />
            <main className="pt-24">
                <article className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <Link href="/blog" legacyBehavior>
                                    <a className="inline-flex items-center text-virtus-blue hover:text-virtus-blue-light transition-colors">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                        {t('blog.page.back')}
                                    </a>
                                </Link>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-virtus-dark mb-6">{t(titleKey)}</h1>
                            
                            {post && (
                                <img 
                                    src={post.imageUrl} 
                                    alt={t(titleKey)} 
                                    className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
                                />
                            )}

                            <div className="prose lg:prose-xl max-w-none text-gray-700 text-justify" dangerouslySetInnerHTML={{ __html: t(contentKey) }}>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;

