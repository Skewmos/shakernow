import { useState, useEffect } from 'react';

interface CocktailDataInterface {
   [key: string]: string | null;
}

interface CocktailDetails {
   ingredients: string[];
   measures: string[];
   instructions: string;
   category?: string;
   dateModified: string;
   video?: string;
   ingredientsWithMeasures?: { ingredient: string; measure: string }[];
}

export const useCocktailDetails = (cocktailData: any): CocktailDetails => {
   const [ingredients, setIngredients] = useState<string[]>([]);
   const [measures, setMeasures] = useState<string[]>([]);
   const [instructions, setInstructions] = useState<string>('');
   const [dateModified, setDateModified] = useState<string>('');
   const [category, setCategory] = useState<string | undefined>('');
   const [video, setVideo] = useState<string | undefined>('');
   const [ingredientsWithMeasures, setIngredientsWithMeasures] = useState<
      { ingredient: string; measure: string }[]
   >([]);
   console.log('cocktailData', cocktailData);

   useEffect(() => {
      if (cocktailData) {
         const filteredIngredients = Object.keys(cocktailData)
            .filter((key) => key.startsWith('strIngredient'))
            .map((key) => cocktailData[key])
            .filter(Boolean)
            .map((ingredient) => ingredient as string);

         const filteredStrMeasures = Object.keys(cocktailData)
            .filter((key) => key.startsWith('strMeasure'))
            .map((key) => cocktailData[key])
            .filter(Boolean)
            .map((measure) => measure as string);

         const ingredientsWithMeasure: { ingredient: string; measure: string }[] =
            filteredIngredients.map((ingredient, index) => ({
               ingredient,
               measure: filteredStrMeasures[index],
            }));
         console.log('IgM', ingredientsWithMeasure);

         const strInstructions = cocktailData.strInstructions as string;
         const dateModified = cocktailData.dateModified as string;
         const strCategory = cocktailData.strCategory as string | undefined;
         const strVideo = cocktailData.strVideo as string | undefined;

         setIngredients(filteredIngredients);
         setMeasures(filteredStrMeasures);
         setInstructions(strInstructions ?? '');
         setDateModified(dateModified ?? '');
         setCategory(strCategory);
         setVideo(strVideo);
         setIngredientsWithMeasures(ingredientsWithMeasure);
      }
   }, [cocktailData]);

   return {
      ingredients,
      measures,
      instructions,
      dateModified,
      category,
      video,
      ingredientsWithMeasures,
   };
};
