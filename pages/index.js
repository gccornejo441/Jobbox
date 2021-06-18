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
        <div class="flex border-4 border-blue-500">
          <div class="border-4 border-yellow-500 h-screen ml-4">
            <SideNav/>
          </div>
          <div class="border-4 border-teal-500 w-screen">
          <SearchBar/>
          </div>
        </div>
  </>
  )
};