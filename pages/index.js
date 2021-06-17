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
          <SideNav/>
          <SearchBar/>
        </div>
  </>
  )
};