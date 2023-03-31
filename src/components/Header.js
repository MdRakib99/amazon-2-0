import Image from 'next/image';

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      {/* {top nav} */}
      <div className="flex items-center bg-amazon_blue-DFAULT flex-grow py-2 px-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/images/amazon.jpg "
            alt="image"
            width={150}
            height={40}
            objectFit="contain"
            className="bg-white"
          />
        </div>
        {/* {search} */}
        <div className="hidden sm:flex items-center cursor-pointer h-10 rounded flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            placeholder="Search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-gray-700"
          />
          <SearchIcon className="h-12 p-4 text-gray-500" />
        </div>
        {/* {Right} */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="Link">
            <p>Hello MD.Rakib</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="Link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative Link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* {bottom nav} */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="Link">Prime Video</p>
        <p className="Link">Amazon Business</p>
        <p className="Link">Today Deals</p>
        <p className="Link">Home necessaries</p>
        <p className="Link hidden lg:inline-flex">Electronics</p>
        <p className="Link hidden lg:inline-flex">Clothes</p>
        <p className="Link hidden lg:inline-flex">Mobiles</p>
        <p className="Link hidden lg:inline-flex">Gadgets</p>
        <p className="Link hidden lg:inline-flex">Watchs</p>
        <p className="Link hidden lg:inline-flex">Others..</p>
      </div>
    </header>
  );
}

export default Header;
