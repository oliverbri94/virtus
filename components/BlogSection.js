import { useTranslation } from 'next-i18next';
const BlogSection = () => {
  const { t } = useTranslation('common');
  return (<section id="blog" className="py-20 bg-white"><div className="container mx-auto px-6 text-center"><h2 className="text-4xl font-bold text-gray-800">{t('blog.title')}</h2></div></section>);
};
export default BlogSection;