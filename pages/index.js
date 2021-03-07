import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'node-fetch'
import {NextSeo} from 'next-seo'

import Post from '../components/blog/Post'

export default function Home({posts}) {
  return (
    <div>
      <NextSeo
        title = "Bienvenido a mi blog"
        description ="mi blog es una creación"
        openGraph={
          {
            url:'https://ed.team',
            title : "Bienvenido a mi blog",
            description :"mi blog es una creación",
            images:[
              {
                url:"https/ed.team.img/hh.jpg",
                width:1280,
                height:720,
                alt:'hh'
              }
            ],
            site_name:'Ed....'
          }
        }
        twitter={
          {
            handle:"@test",
            site:"@edtem..",
            cardType:"sumary_large_images"
          }
        }
      />
      {/* <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head> */}
      <main>
        <h1>Blog</h1>
        <span>Bienvenidos</span>
        <span>{process.env.API_BLOG}</span>
        {
          posts.map(item=>{
            return<Post key={item.id} post={item}/>
          })
        }
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const resp = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await resp.json();
  //console.log("posts", posts);
  return {
    props:{
      posts
      // todo lo que necesite recibir 
    }
  }
}
