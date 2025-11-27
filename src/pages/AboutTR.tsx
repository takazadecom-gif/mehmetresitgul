import { Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';

function AboutTR() {
  const { isDark } = useTheme();
 
  useEffect(() => {
    document.title = 'Mehmet Reşit Gül Hakkında';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mehmet Reşit Gül hakkında bilgi edinin. 17 yaşında AI otomasyon, n8n iş akışları ve e-ticaret çözümleri konusunda uzmanlaşmış startup kurucusu.');
    }
  }, []);

  return (
    <section className="min-h-screen pt-20 sm:pt-32 pb-20 relative z-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          ben kimim<span className="text-cyan-400">_</span>
        </h1>

        <div className={`backdrop-blur-md border rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl ${
          isDark
            ? 'bg-white/3 border-white/10'
            : 'bg-gray-800/3 border-gray-800/20'
        }`}>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <Briefcase className="text-cyan-400 mt-1 animate-slide-in stagger-1 flex-shrink-0" size={24} />
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>profesyonel biyografi</h3>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Merhaba, ben Mehmet Reşit Gül. 17 yaşında bir startup kurucusu ve AI otomasyon geliştiricisiyim.
              </p>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Türkiye'nin ilk ve tek yetenek değişim platformunu kurdum. İstanbul'da yaşıyorum ve şu anda 11. sınıf öğrencisiyim. Üç yıldır kesintisiz olarak stajlarla sektör deneyimi kazanıyorum. Bunun yanında ürünler geliştiriyor, n8n tabanlı otomasyon sistemleri kuruyorum ve e-ticaret markalarının satışlarını artırmalarına, operasyonel yüklerini azaltmalarına ve günlük süreçlerini otomatikleştirmelerine yardımcı olan iş akışları tasarlıyorum.
              </p>

              <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Kendi projelerim var ama aynı sırada farklı markalarla da çalışıyorum. Kendi mağazalarım için ürün akışları, ödeme süreçleri ve müşteri yolculuğu otomasyonları kuruyorum; başka e-ticaret mağazaları içinse sipariş yönetimi, müşteri iletişimi, veri işleme ve operasyon hızlandırma odaklı n8n tabanlı sistemler geliştiriyorum.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 animate-slide-in stagger-5 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Büyük laflar etmekle ilgilenmiyorum. İşe yarayan şeyler inşa etmekle ilgileniyorum.
                Felsefem basit:{' '}
                <span className="text-cyan-400 font-semibold">
                  inşa et, test et, değer sağla, iyileştir, tekrarla.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutTR;
