import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-yellow-400 text-base-content p-12 mt-20">
        <aside className="mx-auto">
          <img
            className="w-32"
            src="https://panglimaroqiiqu-group.co.id/wp-content/uploads/2024/06/logo.png"
          />
          <p>©2024 Panglima Roqiiqu Group. All Rights Reserved.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/" className="link link-hover">
            Home Panglima
          </Link>
          <Link href="/Tentang-Panglima" className="link link-hover">
            Aboute Panglima
          </Link>
          <Link href="/Produk-Panglima" className="link link-hover">
            Product Panglima
          </Link>
          <Link href="/Kontak-Panglima" className="link link-hover">
            Contact Panglima
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
