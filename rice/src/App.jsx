import { useState } from 'react'
import './App.css'

const NAV = [
  { label: 'Haqqında', href: '#about' },
  { label: 'Düyü', href: '#rice' },
  { label: 'Topdan satış', href: '#wholesale' },
  { label: 'Əlaqə', href: '#contact' },
]

const FEATURES = [
  {
    title: 'Hindistanın Pəncab tarlalarından',
    text: 'Uzun dənəli premium basmati yalnız Himalay ətəyindəki ən yaxşı tarlalardan toplanır və ənənəvi qaydada yetişdirilir.',
  },
  {
    title: '24 ay yetişdirilmiş dən',
    text: 'Hər dən nəm və temperatur nəzarəti altında ən az iki il saxlanılır — bu, dənənin uzunluğu və ətrini ortaya çıxarır.',
  },
  {
    title: 'Müstəqil keyfiyyət testi',
    text: 'Hər partiya laboratoriya yoxlamasından keçir: nəmlik, qırıq dən faizi və aroma profili sənədləşdirilir.',
  },
  {
    title: 'Restoran və topdan tərəfdaşlıq',
    text: 'HoReCa seqmenti və topdan satış məntəqələri üçün 5, 10 və 25 kq qablaşdırma seçimləri.',
  },
]

const STATS = [
  { value: '12+', label: 'ildir bazardayıq' },
  { value: '120+', label: 'tərəfdaş restoran' },
  { value: '8.4 mm', label: 'orta dən uzunluğu' },
  { value: '100%', label: 'təbii, qatqısız' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#top">
            <span className="brand__mark">SB</span>
            <span className="brand__name">
              Shahmir<span className="brand__name--accent">Basmati</span>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="nav__cta" href="#contact">
              Tərəfdaş ol
            </a>
          </nav>

          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <span className="eyebrow">Premium Basmati · 1121 Long Grain</span>
          <h1>
            Hindistan tarlalarından
            <br />
            <span className="hero__accent">Azərbaycan süfrəsinə</span>
          </h1>
          <p className="hero__lead">
            Shahmir Basmati — uzun dənəli, ətirli və hər dəfə bərabər bişən
            premium düyü. Restoranlar, ailə süfrələri və mərasimlər üçün
            seçilən marka.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#wholesale">
              Topdan qiymət istə
            </a>
            <a className="btn btn--ghost" href="#about">
              Brend haqqında ↓
            </a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="about" id="about">
        <div className="container about__grid">
          <div className="about__copy">
            <span className="eyebrow eyebrow--dark">Brend haqqında</span>
            <h2>
              Hər dənənin bir
              <br /> hekayəsi var
            </h2>
            <p>
              Shahmir Basmati — Hindistanın Pəncab əyalətinin münbit
              torpaqlarında, Himalay sularıyla becərilən 1121 növlü uzun
              dənəli basmati düyüsüdür. Dən 24 ay ərzində xüsusi anbarlarda
              yetişdirilir: bu proses dənənin əsl ətrini, uzunluğunu və
              bişərkən artma xüsusiyyətini ortaya çıxarır.
            </p>
            <p>
              Biz tədarük zəncirinin hər addımına nəzarət edirik — tarladan
              dəyirmana, dəyirmandan qablaşdırma xəttinə, oradan da sizin
              mətbəxinizə qədər. Hər partiya laboratoriya analizindən keçir
              və yalnız standartlara cavab verən dən paketlənir.
            </p>

            <ul className="bullets">
              <li>Təmiz, qatqısız və qlüten-azad</li>
              <li>Bişdikdə 2,5 qat həcmində böyüyən dən</li>
              <li>Plov, biryani və paella üçün ideal</li>
            </ul>
          </div>

          <div className="about__visual">
            <div className="about__img about__img--main" />
            <div className="about__img about__img--accent" />
            <div className="about__badge">
              <strong>1121</strong>
              <span>Long Grain Variety</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features" id="rice">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--dark">Niyə Shahmir Basmati</span>
            <h2>Tarladan süfrəyə nəzarət</h2>
            <p className="section-head__lead">
              Düyü sadəcə qida deyil — adət-ənənənin daşıyıcısıdır. Hər
              addımda keyfiyyəti qoruyan dörd əsas prinsipimiz var.
            </p>
          </div>

          <div className="features__grid">
            {FEATURES.map((f, i) => (
              <article key={f.title} className="feature">
                <div className="feature__num">0{i + 1}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="wholesale">
        <div className="cta__bg" />
        <div className="container cta__inner">
          <div className="cta__text">
            <span className="eyebrow">Topdan tərəfdaşlıq</span>
            <h2>Restoran və marketlər üçün xüsusi şərtlər</h2>
            <p>
              HoReCa, supermarket şəbəkələri və regional distribütorlar üçün
              5 kq, 10 kq və 25 kq qablaşdırmalarda təklif. Sabit qiymət,
              vaxtında çatdırılma və partiya başına keyfiyyət sertifikatı.
            </p>
          </div>
          <div className="cta__action">
            <a className="btn btn--primary btn--lg" href="#contact">
              Tərəfdaş ol
            </a>
            <a className="btn btn--ghost btn--lg" href="tel:+994000000000">
              +994 00 000 00 00
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#top">
              <span className="brand__mark">SB</span>
              <span className="brand__name">
                Shahmir<span className="brand__name--accent">Basmati</span>
              </span>
            </a>
            <p>
              Hindistandan idxal olunan premium 1121 uzun dənəli basmati
              düyü. Azərbaycanda rəsmi distribütor.
            </p>
          </div>

          <div className="footer__col">
            <h4>Əlaqə</h4>
            <ul>
              <li>Bakı şəh., Nəsimi r., Azərbaycan</li>
              <li>
                <a href="tel:+994000000000">+994 00 000 00 00</a>
              </li>
              <li>
                <a href="mailto:info@shahmirbasmati.az">
                  info@shahmirbasmati.az
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>İş saatları</h4>
            <ul>
              <li>Bazar ertəsi – Cümə</li>
              <li>09:00 – 18:00</li>
              <li>Şənbə, Bazar — bağlıdır</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Bizi izləyin</h4>
            <ul className="socials">
              <li>
                <a href="#" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" aria-label="WhatsApp">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom container">
          <span>© {new Date().getFullYear()} Shahmir Basmati. Bütün hüquqlar qorunur.</span>
          <span>Hindistan istehsalı · Azərbaycanda paketlənir</span>
        </div>
      </footer>
    </div>
  )
}

export default App
