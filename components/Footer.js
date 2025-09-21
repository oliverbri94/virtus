import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                    <a href="#" className="mx-2 text-blue-400 hover:text-blue-300"><FaLinkedin size={28}/></a>
                    <a href="#" className="mx-2 text-blue-400 hover:text-blue-300"><FaTwitter size={28}/></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Virtus Tech Consulting. {t('footer.rights')}</p>
            </div>
        </footer>
    );
}

export default Footer;
