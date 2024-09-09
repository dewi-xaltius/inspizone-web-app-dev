import axios from "axios";
export async function getStaticProps() {
    try{
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts=response.data;

    return {
        props: {
          posts,
        },
    }
}catch(error){
console.log('Error fetching log post:',error)
return{
    props:{
        posts:[],
    }
  }
 }
}
export default function Blog({posts})
{
    return(
        <div>
            <h1>Blogs</h1>
            <h2> This is an example of static site generation</h2>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>{post.title}</li>
                    )
                   )
                }
            </ul>
        </div>
    )
}
