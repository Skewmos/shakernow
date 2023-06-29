import CocktailList from 'component/CocktailsList/CocktailsList';
import NavTop from 'component/Navbar/NavTop';
import '../index.css';
import Brand from 'component/Brand/Brand';
import { Flowbite } from 'flowbite-react';

const Home = () => {
   return (
      <>
         <Flowbite>
            <NavTop />
            <Brand />
            <div className="md:container md:mx-auto">
               <CocktailList ramdomElementNumber={7} />
            </div>
         </Flowbite>
      </>
   );
};

export default Home;
