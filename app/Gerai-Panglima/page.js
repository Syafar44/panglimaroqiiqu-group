import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Wa from "../components/Wa";

const GeraiPanglima = () => {
  return (
    <>
      <Navbar />
      <section className="hero mt-32 my-8 lg:my-10 lg:mt-40">
        <header className="hero-content text-neutral-content text-center">
          <figur className="flex items-center">
            <img
              className="w-60 lg:w-96"
              src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
            />
          </figur>
        </header>
      </section>

      <section>
        <subsection className="hero bg-red-700">
          <div className="hero-content my-4 lg:my-20">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-center text-white">
                Differentation
              </h1>
              <p className="text-xl lg:text-3xl text-gray-100 font-semibold text-center">
                Gerai Panglima
              </p>
              <ul className="list-disc py-4 text-sm lg:text-xl text-gray-200 mx-5 ">
                <li>Produk berkualitas wahid dengan pricing Value for Money</li>
                <li>Rapid Experimentation new product</li>
                <li>Strong Data Analytic to measure the Goals</li>
                <li>Tersedia Menu Anak Muda</li>
                <li>Loyalty Program dengan Personalized Offer</li>
                <li>Program Promo Rutin</li>
                <li>
                  Kemasan Unik & mengangkat budaya lokal dengan menggandeng
                  komunitas
                </li>
                <li>
                  Mudah Didapat dengan tersebar dibanyak area mendekati
                  pemukiman padatpenduduk
                </li>
                <li>Aktif di Social Media Facebook & Instagram</li>
              </ul>
            </div>
          </div>
        </subsection>
      </section>

      <section>
        <div className="lg:hero my-4 lg:my-20">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="assets/img-gembung.png"
              className="lg:max-w-sm"
            />
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold">Marketing Mix</h1>
              <p className="text-xl lg:text-3xl font-semibold text-red-700">Gerai Panglima</p>
              <ul className="lg:py-6 text-wrap text-sm">
                <li className="py-2">
                  <h4 className="font-bold text-xl">Product</h4>
                  <p className="mr-3">
                    Roti Gembung berkualitas wahid dengan varian yang selalu
                    di-update dengan kemasan modern & mengangkat budaya lokal
                  </p>
                </li>
                <li className="">
                  <h4 className="font-bold text-xl">Price</h4>
                  <p className="mr-3">
                    Strategi harga Value for Money dengan range harga lebar
                    mulai dari produk promo sangat murah hingga produk premium
                  </p>
                </li>
                <li className="py-2">
                  <h4 className="font-bold text-xl">Place</h4>
                  <p className="mr-3">
                    Outlet tersebar di banyak titik pemukiman padat penduduk
                    (ubiquitous network strategy) dengan jam buka panjang
                    06.30-21.00
                  </p>
                </li>
                <li className="py-2">
                  <h4 className="font-bold text-xl">Promotion</h4>
                  <ul className="list-disc ml-8">
                    <li>Sales promotion untuk umum & khusus member</li>
                    <li>Social media Facebook & Instagram</li>
                    <li>Photo & Video Contest</li>
                    <li>Selebgram endorse</li>
                    <li>Selebgram endorse</li>
                    <li>Public Event booth & print out spreading</li>
                    <li>Event Sponsorship</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hero bg-red-700 text-center -mb-20">
          <div className="hero-content my-4 lg:my-20">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-center text-white">
                Position
              </h1>
              <p className="text-xl lg:text-3xl text-gray-100 font-semibold text-center">
                Jajan Panglima
              </p>
              <p className="py-4 text-sm lg:text-xl text-gray-200">
                Untuk Middle Class Urban berusia 20-45 tahun yang sudah tinggal
                di Kaltim ≻ 3 tahun, Jajan Panglima adalah Outlet Roti Gembung
                Zaman Now yang menghadirkan produk berkualitas & Rapid
                Experimentation New Product dengan strategi pricing Value for
                Money
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Wa />
    </>
  );
};

export default GeraiPanglima;
