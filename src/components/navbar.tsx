import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <header className=" inset-x-0 mt-6 top-12 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow-xl md:top-6 md:rounded-3xl lg:max-w-screen-sm">
        <div className="px-4">
          <div className="flex items-center justify-center">
            <div className="md:flex md:items-center md:justify-center md:gap-8">
              <Link
                href="/"
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                Quotes
              </Link>

              <Link
                href="/proverbs"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                Proverbs
              </Link>
              <Link
                href="/dialogues"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                Dialogues
              </Link>
            </div>
            <div className="flex items-center justify-end gap-3"></div>
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center">
           <h1 className="mt-10 mb-2">Made By Mandeep</h1>
           <Link className="text-blue-700 font-semibold" href="https://github.com/mandeepsingh9773">Github</Link>
           <Link className="text-blue-700 font-semibold" href="https://www.linkedin.com/in/mandeepsinghkachawa/">LinkedIn</Link>
           
      </div>
    </>
  );
};

export default Navbar;
