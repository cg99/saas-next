import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SaaS Boilerplate
        </Link>
        <nav>
          <Link href="/" className="text-gray-800 mx-2 hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 mx-2 hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 mx-2 hover:text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
