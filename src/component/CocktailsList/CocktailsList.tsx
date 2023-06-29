import { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import data from '../../data/cocktails.json';

interface Cocktail {
   cocktailReceipt: any;
}

interface CocktailArray {
   [key: string]: Cocktail;
}

const getRamdomCocktail = () => {
   const totalCocktails = data.cocktails.length;
   const randomIndex = Math.floor(Math.random() * totalCocktails);
   const cocktail = data.cocktails[randomIndex];
   return cocktail;
};

const getCocktailData = (name: string): Promise<any> => {
   return new Promise((resolve, reject) => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name;
      axios
         .get(url)
         .then((response) => {
            const dataCocktail = response.data.drinks[0];
            resolve(dataCocktail);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

const CocktailCard = (props: { name: string; item: any }) => {
   const { name, item } = props;
   return (
      <Card className="max-w-sm" href="#" imgSrc={item.strDrinkThumb}>
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{name}</p>
         </h5>
      </Card>
   );
};

const CocktailList = (props: { ramdomElementNumber: number }) => {
   const { ramdomElementNumber } = props;
   const [randomCocktailList, setRandomCocktailList] = useState<CocktailArray>({});

   useEffect(() => {
      const fetchCocktails = async () => {
         try {
            const arrayCocktail: CocktailArray = {};
            if (ramdomElementNumber && ramdomElementNumber > 1) {
               for (let step = 1; step < ramdomElementNumber; step++) {
                  const cocktail = await getRamdomCocktail();
                  const dataFromCocktail = await getCocktailData(cocktail);
                  arrayCocktail[cocktail] = dataFromCocktail;
               }
               setRandomCocktailList(arrayCocktail);
            }
         } catch (error) {
            console.error('Error fetching cocktails:', error);
         }
      };

      fetchCocktails();
   }, []);

   return (
      <>
         <h1 className="text-4xl font-extrabold dark:text-white mt-5 mb-5">
            Our cocktails of the moment
         </h1>
         <div className="grid grid-cols-3 gap-4">
            {Object.entries(randomCocktailList).map(([key, item], index) => {
               return <CocktailCard name={key} item={item} key={index} />;
            })}
         </div>
      </>
   );
};

export default CocktailList;
