import CocktailList from 'component/CocktailsList/CocktailsList';

const Home = () => {
   return (
      <>
         <div className="md:container md:mx-auto">
            <CocktailList ramdomElementNumber="6" />
         </div>
      </>
   );
};

export default Home;
