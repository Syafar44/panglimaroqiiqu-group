"use client";

import { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import NotFound from "../components/NotFound";
import Wa from "../components/Wa";

const ProdukPanglima = () => {
  const [produk, setProduk] = useState([]);
  const [filteredProduk, setFilteredProduk] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduk(data);
        setFilteredProduk(data); // Initialize filtered data with all products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredData = produk.filter((item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduk(filteredData);
  }, [searchTerm, produk]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);

    if (category === "") {
      setFilteredProduk(produk); // Reset to show all products if no category selected
    } else {
      const filteredData = produk.filter((item) => item.produk === category);
      setFilteredProduk(filteredData);
    }
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProduk.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredProduk.length / cardsPerPage);

  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${
            i === currentPage ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="mt-4 flex justify-center">
        <button
          className="mx-1 px-3 py-1 rounded bg-gray-200"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages}
        <button
          className="mx-1 px-3 py-1 rounded bg-gray-200"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar />
        <section className="mt-20 lg:mt-28 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <subsection>
            <header>
              <h2 className="text-3xl lg:text-5xl font-bold text-red-700 sm:text-3xl">
                Produk Gerai Panglima
              </h2>
              <p className="max-w-md text-gray-500">
                Temukan kelezatan dengan kualitas unggul dalam setiap produk
                Kami
              </p>
            </header>
          </subsection>
          <subsection className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            {/*Filter*/}
            <div className="space-y-4 mb-5">
              <div className="mb-3">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-md border border-solid border-red-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-red-700 focus:text-neutral-700  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-red-700"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div>
                <p className="block text-xs font-medium text-red-700">
                  Filters
                </p>
                <div className="mt-1 space-y-2">
                  <details className="overflow-hidden rounded border border-red-700 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 hover:bg-red-700 hover:text-white text-red-700 transition">
                      <span className="text-sm font-medium"> Produk </span>
                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="border-t border-gray-200 bg-white">
                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li
                          className="btn w-full bg-red-700 text-white"
                          onClick={() => handleCategoryFilter("")}
                        >
                          All Produk
                        </li>
                        <li
                          className="btn w-full bg-red-700 text-white"
                          onClick={() => handleCategoryFilter("oleh-oleh")}
                        >
                          Oleh-Oleh
                        </li>
                        <li
                          className="btn w-full bg-red-700 text-white"
                          onClick={() => handleCategoryFilter("bakery")}
                        >
                          Bakery
                        </li>
                        <li
                          className="btn w-full bg-red-700 text-white"
                          onClick={() => handleCategoryFilter("resto")}
                        >
                          Resto
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              {filteredProduk.length === 0 ? (
                <NotFound />
              ) : (
                <div className="grid gap-2 lg:gap-7 grid-cols-2 lg:grid-cols-3">
                  {currentCards.map((item) => (
                    <div
                      key={item.id}
                      className="card card-compact bg-base-100 h-[15rem] lg: xl:h-[15rem] shadow-xl transition ease-in-out hover:scale-105 duration-200"
                    >
                      <figure>
                        <img
                          className="lg:h-56 scale-150 lg:scale-[1.9]"
                          src={`assets/${item.gambar}`}
                          alt={item.nama}
                        />
                      </figure>
                      <div className="px-5 pt-2 text-xs lg:text-lg">
                        <h2 className="font-bold truncate">
                          {item.nama.toUpperCase()}
                        </h2>
                        <div className="card-actions justify-start my-2">
                          {rupiah(item.harga)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {renderPagination()}
            </div>
          </subsection>
        </section>
      <Footer />
      <Wa />
    </>
  );
};

export default ProdukPanglima;
