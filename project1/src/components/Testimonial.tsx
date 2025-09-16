export const Testimonial=(params:any)=>{
    return (
        <div className="bg-white p-8 rounded-sm shadow">
            <h3 className="text-xl leading-relaxed text-gray-700">{params.blok.name}</h3>
             <p className="text-lg font-semibold mt-6">{params.blok.comment}</p>   
        </div>
    );
};