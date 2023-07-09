'use client';

import { Button, Modal } from 'flowbite-react';
import { useCocktailDetails } from 'hooks/useCocktailsDetails';
import { useEffect, useState } from 'react';

export default function CocktailModal(props: any) {
   const { openModalValue, item } = props;
   const cocktailName = item.strDrink;
   const [openModal, setOpenModal] = useState<string | undefined>();
   const { ingredients, measures, instructions, category, video, ingredientsWithMeasures } =
      useCocktailDetails(item);

   useEffect(() => {
      setOpenModal(openModalValue);
   }, [openModalValue]);

   const iframeVideo = (url: string) => {
      const regex = /[?&]v=([^&#]+)/;
      const match = url.match(regex);
      const videoId = match && match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
         <iframe
            width="560"
            height="315"
            src={embedUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
         ></iframe>
      );
   };

   return (
      <>
         <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
            <Modal.Header>
               <h1>{cocktailName}</h1>
               <small>{category}</small>
            </Modal.Header>
            <Modal.Body>
               <div className="space-y-4">
                  <h4>
                     <b>Ingredients:</b>
                  </h4>
                  <ul className="list-disc ms-5">
                     {ingredientsWithMeasures.map((item, index) => (
                        <li key={index}>
                           {item.ingredient} {item.measure ? '-' : ''} {item.measure}
                        </li>
                     ))}
                  </ul>
                  <h4>
                     <b>Instructions:</b>
                  </h4>
                  <p>{instructions}</p>

                  {video ? iframeVideo(video) : ''}
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
}
