import Link from 'next/link';
import Head from '../components/head';
// import Products from '../components/products';
import SideNav from '../components/sidenav';
import SearchBar from '../components/searchbar';
import MobileNav from '../components/mobilenav';


const Dashboard = () => {
  // let [ isDisplayed, setDisplayed ] = useState( false );
  // const setHideShow = () => {
  //   isDisplayed === false ? ( isDisplayed = true ) : ( isDisplayed = false )
  //   console.log(`You Navbar display is set to ${isDisplayed}.`); 
  // }
  return (
    <>
      <Head />
      <div class="lg:hidden">
        <MobileNav />
      </div>
      {/* <button onClick={() => setHideShow()}>Toggle</button> */}
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
};

export default Dashboard;