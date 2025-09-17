import {StoryblokComponent} from "@storyblok/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page=(params:any)=>{
    return ( <main>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {params.blok.blocks.map((blok:any)=>
        (
            <StoryblokComponent blok={blok} key={blok._uid}/>
        ))}
    </main>
    );
};