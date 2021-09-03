import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import Query from './api/query/query'
import BLOG_QUERY from './api/query/blog'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { Spin,Skeleton, Space} from 'antd';
import {useRouter} from "next/router"


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}


export default function Home({ voBlogs }) {

   const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);


    
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
 
  }, [])

  if (loading) {
    return <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      {/* <Space>
        <Skeleton.Image active size={500} />
          <Skeleton.Image active size={"large"} />
          <Skeleton.Image active size={"large"} />
      </Space> */}
      
      <Skeleton active paragraph={{ rows: 16 }} />
      

  </div>
}

  return (
    <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      <Head>
        {/* HTML Meta Tags */}
        <title> Resources | Coworly </title>
        <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

          {/* Google / Search Engine Tags */}
        <meta itemprop="name" content='Resources | Coworly' />
            <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
              <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content='Resources | Coworly' />
                      <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                        <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content='Resources | Coworly' />
                              <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                                 <link rel="icon" href="/favicon.ico" />
                                
      </Head>  


        <div>
            <h1 class="text-4xl font-semibold">Resources</h1>
        </div>

      <Query query={BLOG_QUERY} id={null}>

                {({ data: { coBlogs } }) => {
                        return (
                            <>
                            <div class="mt-2">

                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500 cursor-pointer">
                                            {coBlogs.map((post) => {
                                            return (
                                                <>
                                                <Link key={post.id} as={`/post/${post.id}`} href={'/post/[id]'}>
                                                  <div class="rounded">
                                                    <img class="hover:shadow-lg" src={ApiUrl + post.coverImage.url} />
                                                    <h1 class="text-2xl mt-4">
                                                      {post.title}
                                                    </h1>
                                                    <p class="mt-2">
                                                      {post.excerpt}
                                                    </p>
                                                    
                                                    <hr class="border border-gray-200 my-4 w-11/12"></hr>
                                                    
                                                    {post.authors.map((a) => {
                                                      return (
                                                        <div class="flex items-center">
                                                          <img class="rounded-full w-10" src={ApiUrl + a.profilePic.url} />
                                                          <h1 class="ml-2 text-md">{a.name}</h1>
                                                        </div>
                                                      )
                                                    })}
                                                  </div>
                                                </Link>
                                              </>
                                            );
                                            })}
                                    </div>
                            </div>



                            

                                </>
                        );
                        }}
                </Query>









      
    </div>
  )
}

