import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';

function ExperienceTR() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = 'Deneyimler - Mehmet Reşit Gül';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mehmet Reşit Gül\'ün deneyimlerini keşfedin: Takazade kurucusu, AI otomasyon geliştiricisi, n8n uzmanı, ürün geliştiricisi ve nörobilim araştırmacısı.');
    }
  }, []);

  return (
    <section className="min-h-screen pt-20 sm:pt-32 pb-20 relative z-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          deneyim<span className="text-cyan-400">_</span>
        </h1>
        <div className="space-y-4 sm:space-y-6">
          <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-1 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Takazade</h3>
            <p className="text-cyan-400 mb-4 text-sm sm:text-base">Kurucu</p>
            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Türkiye’nin ilk yetenek değişim platformunu kurdum. Sıfırdan tasarlayıp kendim geliştirdim. Fon yok, ekip yok. Ürünü, mantığını ve lansmanı tamamen kendim yönettim.
Platform, kullanıcıların yeteneklerini birbirleriyle takas etmelerine olanak sağlıyor.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-2 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>AI Otomasyon Projeleri</h3>
            <p className="text-cyan-400 mb-4 text-sm sm:text-base">Bağımsız Geliştirici</p>
            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Kendi e-ticaret markalarım için ürün akışları, müşteri yolculuğu otomasyonları ve operasyon hızlandırma sistemleri geliştiriyorum.
Bunun yanında farklı markalar için n8n tabanlı otomasyonlar kuruyor; sipariş akışı, müşteri iletişimi, veri işleme hatları ve backend operasyon araçları oluşturuyorum.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-3 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Ürün Geliştirme</h3>
            <p className="text-cyan-400 mb-4 text-sm sm:text-base">Full-Stack Ürün Üretimi</p>
            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Dört yılı aşkın süredir fikirleri çalışan ürünlere dönüştürüyorum. Tasarımı, mantığı, prototiplemeyi, iterasyonu ve dağıtımı kendim yönetiyorum.
İş akışım basit: hızlı inşa et, hemen test et, sürekli iyileştir, tekrar yayınla.
            </p>
          </div>
          <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:transition-all transition-all duration-300 animate-slide-in stagger-4 ${
            isDark
              ? 'bg-white/3 border-white/10 hover:bg-white/5'
              : 'bg-gray-800/3 border-gray-800/20 hover:bg-gray-800/5'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Nörobilim</h3>
            <p className="text-cyan-400 mb-4 text-sm sm:text-base">Bağımsız Araştırmacı</p>
            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Yapay zekânın insan karar verme hızını ve bilişsel iş akışlarını nasıl etkilediğini araştırıyorum. Çalışmalarım; AI destekli görevlerin zihinsel yükümüzü, dikkat düzenimizi ve problem çözme süreçlerimizi nasıl değiştirdiğine odaklanıyor.
Erken aşama araştırmalar yürütüyor, deneysel fikirler geliştiriyor ve insan muhakemesinin AI sistemleri tarafından desteklendiğinde nasıl adapte olduğunu analiz ediyorum.

Şu anki temel ilgi alanım: AI destekli karar vermenin prefrontal işlem hızı üzerindeki etkisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceTR;
