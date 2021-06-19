import Link from 'next/link';
import Head from '../components/head';
// import Products from '../components/products';
import SideNav from '../components/sidenav';
import SearchBar from '../components/searchbar';
import MobileNav from '../components/mobilenav';

const Index = () => {

  return (
    <>
      <Head />
      <div class="md:hidden">
        <MobileNav />
      </div>
      <div class="flex">
        <div class="h-screen px-4 pt-3 bg-blue-900 grid place-content-between hidden md:block">
          <SideNav />
        </div>
        <div class="w-screen">
          <SearchBar />
        </div>
      </div>
    </>
  )
};

export default Index;