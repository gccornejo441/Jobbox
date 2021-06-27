import Link from 'next/link';
// import Products from '../components/products';
import SideNav from '../components/sidenav';
import SearchBar from '../components/searchbar';
import MobileNav from '../components/mobilenav';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend';

export default withPageAuthRequired(function Dashboard() {
 
  return (
    <>
      <div class="lg:hidden">
        <MobileNav />
      </div>
      <div class="flex">
        <div class="h-screen px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
          <SideNav />
        </div>
        <div class="w-screen">
          <SearchBar />
        </div>
      </div>
    </>
  )
})