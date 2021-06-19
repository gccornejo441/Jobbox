import Link from 'next/link';
import Head from '../components/head';
// import Products from '../components/products';
import SideNav from '../components/sidenav';
import SearchBar from '../components/searchbar';
import MainBody from '../components/mainbody';

const Index = () => {

  return (
  <>
  <Head/>
        <div class="flex">
          <div class="h-screen px-4 pt-3 bg-blue-900 grid place-content-between">
            <SideNav/>
          </div>
          <div class="w-screen">
          <SearchBar/>
          </div>
        </div>
  </>
  )
};

export default Index;