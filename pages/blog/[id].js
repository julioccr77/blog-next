import fetch from 'node-fetch'
import Head from 'next/head'
import Comments from '../../components/blog/Comments'
const PostBlog = ({post}) => {
  return (
    <div>
      <Head>
        <title>{post.title} | Blog</title>
      </Head>
      <main>
          <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
          </div>
      </main>
      <Comments id = {post.id}/>
    </div>
  );
};


PostBlog.getInitialProps = async function(context){
    
    const {id} = context.query;
    console.log("id",id);
    const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`)
    const post = await resp.json();

    return {
        post
    }
}


export default PostBlog;
