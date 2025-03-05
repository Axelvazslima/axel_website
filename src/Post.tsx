import SectionComponent from "./components/SectionComponent";
import { H1Component, H3Component } from "./components/TextComponents";
import { useParams } from "react-router-dom";
import postsData from '../data/data.json'
import { Post } from "./classes/Data";

function PostBlock(){
    const { id } = useParams<{ id: string }>();
  
  // Add proper validation and error handling
  const getPost = (): Post | undefined => {
    if (!id || isNaN(Number(id))) return undefined;
    return (postsData as { posts: Post[] }).posts.find(p => p.id === Number(id));
  };

  const post = getPost();

  if (!post) {
    return (
      <SectionComponent className="min-h-screen justify-center items-start">
        <H1Component>Post Not Found</H1Component>
        <H3Component><marker className="text-red-500">Invalid post ID:</marker> {id}</H3Component>
      </SectionComponent>
    );
  }

    return(
        <SectionComponent className="min-h-screen justify-start items-center text-start gap-4">
            <H1Component>{post.title}</H1Component>
            <h3 className="text-gray-500 text-lg">{post.date}</h3>
            <div className="p-2 font-stretch-ultra-condensed bg-inherit md:border-2 border-1 border-bg-gray-100 shadow-gray-700 text-gray-200 rounded-lg shadow-xl flex-wrap gap-2 max-w-full break-words overflow-scroll">
                <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose break-words" />
            </div>
        </SectionComponent>
    )
}

export default PostBlock