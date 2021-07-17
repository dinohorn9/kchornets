import Link from "next/link";
import Image from "next/image";
import kchLogo from "/public/images/kch-logo.png";

function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="container mx-auto flex items-center justify-between flex-wrap bg-gray-900 p-6">
=======
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
>>>>>>> 50123a187471d316af2b08f1c88a099b358a25b0
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
            <Image src={kchLogo} height="44" width="155" />
          </a>
        </Link>
      </div>

      <div className="block hidden">
        <button
          className="flex items-center px-3 py-2 
        border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div className="text-sm lg:flex-grow ">
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4 no-underline">
              ABOUT
            </a>
          </Link>

          {/* <Link href="/development">
            <a
              className="block mt-4 lg:inline-block 
            lg:mt-0 text-yellow-200 hover:text-white mr-4 no-underline"
            >
              DEVELOPMENT
            </a>
          </Link>
          <Link href="/qualities">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4 no-underline">
              PLAYER QUALITIES
            </a>
          </Link> */}

          {/* <Link href="/coaching">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white no-underline">
              COACHING
            </a>
          </Link> */}
        </div>
        {/* <div>
          <Link href="/tryout">
            <a className="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0">
              Tryout Info
            </a>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
