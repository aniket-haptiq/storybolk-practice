
import { renderRichText } from "@storyblok/react";

export const Tour=(props:any)=>{
    return <main className="container mx-auto px-4 w-full pt-8 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold"> {props.blok.name}</h1>
        {/* <img className="mt-12" src={props.blok.main_imgae.filename} /> */}
        <p className="mt-8 text-lg md:text-2xl md:leading-relaxed">
            {props.blok.introduction}</p>
       <div className="prose md:prose-lg mt-8 max-w-none"
            dangerouslySetInnerHTML={{
                __html: renderRichText(props.blok.body),
            }}
        />
       <p className="text-lg font-medium text-gray-700 mt-1">
            📍 Location: <span className="font-semibold">{props.blok.location}, India</span>
        </p>
        <p className="text-lg font-medium text-gray-700 mt-1">
            💰 Price: <span className="font-semibold text-blue-600">₹{props.blok.price}</span>
        </p>

    </main>
};
