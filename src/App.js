import React from "react";
import "./App.css";
import fotograf from "./fotograf.png";


function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-info">
          <p>
            <i className="fa-brands fa-whatsapp"></i> +905382703413 |{" "}
            <i className="fa-solid fa-envelope"></i> karzu2958@gmail.com
          </p>
        </div>
        <nav>
          <div className="header-title">
            <h1>Beni Takip Edin:</h1>
          </div>
          <ul>
            <li>
              <a href="http://instagram.com/aarzu_kck" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arzu-k%C3%BC%C3%A7%C3%BCk-9158aa297/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/arzu336" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/selamarzuben" target="_blank" rel="noreferrer">
                X
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main>
        <section>
          <h1>Bloğuma Hoş Geldiniz</h1>
          <h2>Merak Ettiğiniz Her Şey</h2>

          {/* Hakkımda Flex Container */}
          <div className="hakkimda-container">
            <img src={fotograf} alt="Benim Fotoğrafım" className="hakkimda-foto" />
            <div className="hakkimda-text">
              <h3>Hakkımda</h3>
              <p>
                Merhaba, ben Arzu Küçük. Süleyman Demirel Üniversitesi Bilgisayar
                Mühendisliği 4. sınıf öğrencisiyim. Eğitim hayatım boyunca yazılım
                geliştirme, yapay zeka ve web teknolojileri üzerine projeler
                geliştirdim. Özellikle doğal dil işleme (NLP) ve veri bilimi alanlarına
                ilgi duyuyorum. Bunun yanında ağ teknolojileri, bulut sistemleri ve
                Cisco çözümleri üzerine kendimi geliştirmeye çalışıyorum.
              </p>

              <h5>Eğitim ve Deneyimlerim</h5>
              <p>
                2. sınıf yaz dönemi yazılım stajımı EKTAM (Gazi Üniversitesi Eklemeli
                İmalat Teknolojileri Uygulama ve Araştırma Merkezi) da yaptım. Veri
                bilimi ve makine öğrenmesi üzerine çalıştım. Consept Laser makinesinden
                alınan veriler ile Python kullanarak çeşitli regresyon algoritmalarıyla
                (Linear Regression, Decision Tree, Random Forest, XGBoost) malzeme
                sertlik tahmini modeli geliştirdim.
              </p>
              <p>
                3. sınıf yaz döneminde donanım stajımı MİTAŞ Group da donanım ve ağ
                teknolojileri üzerine deneyim yaşadım. Packet Tracer kullanarak
                farklı topolojiler üzerinde DHCP, DNS, e-posta ve web sunucuları
                barındıran ağ sistemleri kurdum.
              </p>
            </div>
          </div>

          {/* Beceriler ve Hedefler */}
          <h3>Becerilerim</h3>
          <p>Programlama Dilleri: Python, Java, JavaScript, HTML, CSS</p>
          <p>Veritabanları: SQL, NoSQL</p>
          <p>Makine Öğrenmesi: scikit-learn, XGBoost</p>
          <p>Ağ Teknolojileri: Cisco Packet Tracer</p>
          <p>Bulut ve DevOps: Kubernetes, temel cloud teknolojileri</p>

          <h3>Hedeflerim</h3>
          <p>
            Yakın gelecekte amacım, bulut bilişim ve Kubernetes alanında kendimi
            daha fazla geliştirmek. Ölçeklenebilir sistemlerin tasarlanması,
            konteyner teknolojileri ve modern DevOps süreçlerinde uzmanlaşmak
            istiyorum. Bu alanda edindiğim bilgi ve deneyimleri, hem akademik
            hem de profesyonel projelerde uygulayarak daha güvenli, esnek ve
            verimli yazılım çözümleri geliştirmeyi hedefliyorum. Uzun vadede ise
            bulut tabanlı altyapılar üzerinde çalışan global projelerde yer
            alarak, yeni nesil yazılım çözümlerine katkı sağlamayı planlıyorum.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 - Arzu KÜÇÜK | Öğrenci No: 2221032054</p>
      </footer>
    </div>
  );
}

export default App;
