import Link from 'next/link';
import Head from '../components/head';
// import Products from '../components/products';
import SideNav from '../components/sidenav';
import SearchBar from '../components/searchbar';
import MainBody from '../components/mainbody';

export default () => {

  return (
  <>
  <Head/>
        <div class="flex">
          <div class="h-screen px-4 pt-3 bg-blue-900 grid place-content-between">
            <SideNav/>
          </div>
          <div class="border-4 border-red-500 w-screen">
          <SearchBar/>
          </div>
        </div>
  </>
  )
};