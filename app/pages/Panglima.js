import Link from "next/link";

const Panglima = () => {
  return (
    <>
      <div className="hero h-72 mt-8 -mb-16 lg:-mb-5 lg:mt-28">
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="text-3xl lg:text-6xl xl:text-6xl font-bold text-red-700">
              Gerai Panglima
            </h1>
            <p className="mb-5 text-xl lg:text-3xl xl:text-3xl font-bold text-gray-800">
              Oleh-Oleh, Bakery, Resto, caffee
            </p>
          </div>
        </div>
      </div>

      <div className=" hero bg-yellow-400">
        <div className="hero-content text-center">
          <div className="mt-5">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
              <span className="text-red-700">12 Tahun</span> Berdiri: Gerai
              Panglima & Jajan Panglima, Mewujudkan Oleh-Oleh Kaltim Berkualitas
              dan Menguatkan UKM
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 lg:gap-5 lg:mx-20 xl:gap-0 mt-6 mb-10 text-xs lg:text-base xl:text-base">
              <div className="flex">
                <img
                  className="h-28 lg:h-40"
                  src="https://panglimaroqiiqu-group.co.id/wp-content/uploads/2024/06/keunggulan-home-1.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl mb-1">Alami</h6>
                  <p>
                    Semua produk Panglima dipilih dan diproses secara alami.
                    Kami juga menggunakan kemasan daur ulang dan sistem bisnis
                    ramah lingkungan
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="h-28 lg:h-40"
                  src="https://panglimaroqiiqu-group.co.id/wp-content/uploads/2024/06/keunggulan-home-3.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl mb-1">Berkualitas Tinggi</h6>
                  <p>
                    Panglima Roqiiqu Group menggunakan bahan yang terbaik untuk
                    memastikan setiap produk yang dihasilkan memiliki kualitas
                    yang terbaik dan autentik.
                  </p>
                </div>
              </div>
              <div className="flex ml-3">
                <img
                  className="h-24 lg:h-36"
                  src="https://panglimaroqiiqu-group.co.id/wp-content/uploads/2024/06/keunggulan-home-2.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl">Pelayanan 24/7</h6>
                  <p>
                    Dengan fokus pada kepuasan pelanggan, kami menyediakan
                    layanan yang ramah dan profesional untuk pengalaman
                    berbelanja yang menyenangkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="hero min-h-screen">
          <div className="text-center">
            {/* Oleh-oleh Gerai Panglima */}
            <div>
              <figure className="my-12">
                <figcaption className="font-bold text-xl lg:text-5xl">
                  Produk OLeh-Oleh
                </figcaption>
                <img
                  className="w-60 lg:w-80 mx-auto -mb-7"
                  src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
                />
              </figure>
              <div className="grid grid-cols-2 mx-4 md:mx-10 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/ROTI-DURIAN-ORIGINAL.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      ROTI DURIAN ORIGINAL
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/ROTI-DURIAN-KEJU.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      ROTI DURIAN KEJU
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/PIE-SUSU-COKLAT.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      PIE SUSU COKLAT
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/BROWNIES-ALMOND.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      BROWNIES ALMOND
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/BOLU-GULUNG.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      BOLU GULUNG
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Resto Panglima */}
            <div className="mt-12">
              <figure>
                <figcaption className="font-bold text-xl lg:text-5xl">
                  Produk Resto
                </figcaption>
                <img
                  className="w-60 lg:w-80 mx-auto mb-8"
                  src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
                />
              </figure>
              <div className="grid grid-cols-2 mx-4 md:mx-10 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 h-72 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 lg:text-xl">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Panglima;
