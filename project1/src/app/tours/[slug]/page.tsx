import { getStoryblokApi,StoryblokStory } from "@storyblok/react/rsc";

const fetchTourPage=async(slug:string)=>{
    const client=getStoryblokApi();
    const response=await client.getStory(`tours/${slug}`,{
        version:"draft", 
    });
    return response.data.story;
};


const TourPage = async ({ params }: { params: { slug: string } }) => {
  const story = await fetchTourPage(params.slug);
  // console.log('Fetched Story:', story);
  return <StoryblokStory story={story}/> ;
};

export default TourPage;


























// const TourPage= async(props:any)=>{
//     const story=await fetchTourPage(props.params.slug)
//     return (
//     <div>
//         <h4>Slug Page... / Dynamic Page</h4>
//         <p>{JSON.stringify(story,null,2)}</p>
//     </div>);
// };