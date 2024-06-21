import { fetchPosts } from '../api/api.js';
import { useQuery } from '@tanstack/react-query';

const Postlists = () => {

    // Making a query using useQuery Hook
    const {data:postData, isLoading, error, isError, status} =useQuery({
      // queryKey: ["posts", {page:1}],  // it will create unique query for that particular page
      queryKey: ["posts"],  
      queryFn: fetchPosts,
    })
  
    console.log( {postData}, {isLoading}, {status});
  

  return (
    <div className='container'>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      
      {postData.map((post) => {
          return (
            <div key={post.id}>
              <div>{post.title}</div>
                {post.tags.map((tag)=>{
                  <span key={tag}>{tag}</span>
                })}
            </div>
          );
      })}
    </div>
  )
}

export default Postlists