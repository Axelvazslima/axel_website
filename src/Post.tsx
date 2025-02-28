import SectionComponent from "./components/SectionComponent";
import { H1Component, H3Component, PComponent } from "./components/TextComponents";
import { useParams } from "react-router-dom";
import postsData from '../data/data.json'
import { Post } from "../Data";

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
        <SectionComponent className="min-h-screen justify-start items-center text-start">
            <H1Component>{post.title}</H1Component>
            <h3 className="text-gray-500 text-lg">{post.date}</h3>
            <PComponent>{post.content}</PComponent>
        </SectionComponent>
    )
}

export default PostBlock