import SubPagesComponent from "./components/SubPagesComponent";
import postsData from "../data/data.json";


function BlogPosts() {
  const posts  = postsData.posts.map((post) => post);
  
  return (
    <SubPagesComponent 
      h2="Thoughts and informations" 
      h3="It is pretty much me talking about what interests me the most at the moment." 
      p="Every now and then a new post will be added."
      posts={posts}
    />
  )
}

export default BlogPosts;