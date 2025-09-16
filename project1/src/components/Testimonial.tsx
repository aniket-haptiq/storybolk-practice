export const Testimonial=(params:any)=>{
    return (
        <div>
            <h3>{params.blok.name}</h3>
             <p>{params.blok.comment}</p>
             {/* <h1>WELCOME</h1> */}
        </div>
    );
};