import { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import data from '../../data/cocktails.json';

const getRamdomCocktail = () => {
   const totalCocktails = data.cocktails.length;
   const randomIndex = Math.floor(Math.random() * totalCocktails);
   const cocktail = data.cocktails[randomIndex];
   return cocktail;
};

const getCocktailData = (name: string) => {
   if (name) {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name;
      axios.get(url).then((response) => {
         console.log(response);
      });
   } else {
      console.error('An error occured');
   }
};

const CocktailCard = (props) => {
   const { name } = props;
   const dataCocktai = getCocktailData(name);

   return (
      <Card className="max-w-sm" href="#">
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{name}</p>
         </h5>
      </Card>
   );
};

const CocktailList = (props) => {
   const { ramdomElementNumber } = props;
   const [randomCocktailList, setRandomCocktailList] = useState<string[]>([]);

   useEffect(() => {
      const fetchCocktails = async () => {
         try {
            const arrayCocktail = [];
            if (ramdomElementNumber && ramdomElementNumber > 1) {
               for (let step = 1; step < ramdomElementNumber; step++) {
                  const cocktail = getRamdomCocktail();
                  arrayCocktail.push(cocktail);
                  console.log('Walking east one step');
               }
               if (arrayCocktail.length > 1) {
                  setRandomCocktailList(arrayCocktail);
               }
            }
         } catch (error) {
            console.error('Error fetching cocktails:', error);
         }
      };

      fetchCocktails();
   }, []);

   return (
      <>
         <h1>Cocktails aléatoires :</h1>
         <div className="grid grid-cols-3 gap-4">
            {randomCocktailList.map((item, index) => (
               <CocktailCard name={item} />
            ))}
         </div>
      </>
   );
};

export default CocktailList;
