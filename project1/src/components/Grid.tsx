import { StoryblokComponent } from "@storyblok/react";

export const Grid=(params:any)=>{
    return(
        <section>
            <h2>{params.blok.headline}</h2>
            {params.blok.items.map((blok:any)=>
            (
                <StoryblokComponent blok={blok} key={blok._uid}/>
            ))}
        </section>
    );
};