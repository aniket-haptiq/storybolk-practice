export const Tour=(props:any)=>{
    return <h1>{props.blok.name}</h1>;
};



// import React from 'react';
// import { storyblokEditable } from '@storyblok/react';

// const Tour = ({ blok }: { blok: any }) => {
//   return (
//     <div {...storyblokEditable(blok)}>
//       <h1>{blok.name}</h1>
//       <p>{blok.introduction}</p>
//       <p>Location: {blok.location}</p>
//       <p>Price: ₹{blok.price}</p>
//       <img src={blok.main_imgae.filename} alt={blok.main_imgae.alt} />
//     </div>
//   );
// };

// export default Tour;
