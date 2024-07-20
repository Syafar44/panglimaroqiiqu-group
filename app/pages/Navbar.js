import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar border-b p-4 fixed top-0 bg-white z-50">
      <div className="navbar lg:mx-16 xl:mx-36">
        <div className="navbar-start ">
          <div className="dropdown mr-2">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className="text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-2 xl:px-12 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Tentang-Panglima"
                  className="text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-2 xl:px-7 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  aria-current="page"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/Gerai-Panglima"
                  className="text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-2 xl:px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  aria-current="page"
                >
                  Gerai Panglima
                </Link>
              </li>
              <li>
                <Link
                  href="Kontak-Panglima"
                  className="text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px xl:px-4 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  aria-current="page"
                >
                  Kontak Panglima
                </Link>
              </li>
            </ul>
          </div>
          <Link className="" href="/">
            <img
              className="h-10 lg:h-16 xl:h-20"
              src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20GERAI%20PANGLIMA-02.png"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <Link
                href="/"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-lg px-2 xl:px-4 py-2.5 text-center me-2 mb-2  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Tentang-Panglima"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-lg px-2 xl:px-4 py-2.5 text-center me-2 mb-2 "
                aria-current="page"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/Gerai-Panglima"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-lg px-2 xl:px-4 py-2.5 text-center me-2 mb-2 "
                aria-current="page"
              >
                Gerai Panglima
              </Link>
            </li>
            <li>
              <Link
                href="Kontak-Panglima"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-lg px xl:px-4 py-2.5 text-center me-2 mb-2 "
                aria-current="page"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/Produk-Panglima" className="btn bg-red-700 text-white">Produk Kami</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
