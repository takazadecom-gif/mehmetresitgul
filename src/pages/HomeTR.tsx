import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';

function HomeTR() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = 'Mehmet Reşit Gül - AI Otomasyon Kurucusu';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '17 yaşında startup kurucusu ve AI otomasyon geliştiricisi. Türkiye\'nin ilk yetenek değişim platformunun kurucusu, n8n otomasyon sistemleri uzmanı.');
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center relative z-10">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl mb-4 font-medium transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>merhaba, ben mehmet!</h1>
        <p className={`text-sm sm:text-base mb-4 transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-700'
        }`}>
          17 yaşında startup kurucusu & AI otomasyon geliştiricisi
        </p>
      </div>
    </section>
  );
}
export default HomeTR;
