import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin,Skeleton, Space} from 'antd';
import {useRouter} from "next/router"


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}



export default function Slug({ id }) {
  
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

      <Space>
        <Skeleton.Image active size={2000} />
      </Space>
      
      <Skeleton active paragraph={{ rows: 20 }} />
      

  </div>
}


  return (
    <div className="py-10 px-6 sm:px-28 lg:px-44 xl:px-80 2xl:px-96">

       <Head>
        {/* HTML Meta Tags */}
        <title> {id.title} | Coworly </title>
        <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

          {/* Google / Search Engine Tags */}
        <meta itemprop="name" content={`${id.title} | Coworly`} />
            <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
              <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content={`${id.title} | Coworly`} />
                      <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                        <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content={`${id.title} | Coworly`} />
                              <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                                
                                <link rel="icon" href="/favicon.ico" />
                                
      </Head>


          <div class="">
              <h1 class="text-3xl lg:text-5xl lg:font-semibold m-0">{id.title}</h1>
              <div class="text-gray-600 my-6 flex justify-between justify-items-center items-center justify-center ">
                  <p class="m-0">Date: {id.date}</p>
              </div>
              
              <hr class="border-black my-4"></hr>
              <div class="flex items-center">
                  
                  <p class="text-lg m-0 mr-4">Written: </p>
                  {id.authors.map((a) => {
                      return (
                          <>
                              <img class="w-14 rounded-full" src={ApiUrl + a.profilePic.url} />
                              <p class="text-lg m-0 ml-2">{a.name}</p>
                          </>
                      )
                  })}
              </div>
              <div class="mt-6">
                  <img class="" src={ApiUrl + id.coverImage.url} alt="banner" />
              </div>
              
              <div class="mt-4">
                  
                  <Markdown
                      children={id.content}
                      remarkPlugins={[gfm]}
                      components={{
                          // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                          h1: ({ node, ...props }) => <h1 class="text-black text-4xl my-10" {...props} />,
                          h2: ({ node, ...props }) => <h2 class="text-black text-2xl my-10" {...props} />,
                          h3: ({ node, ...props }) => <h3 class="text-black text-xl my-10" {...props} />,
                          h4: ({ node, ...props }) => <h4 class="text-black text-base my-8" {...props} />,
                          h5: ({ node, ...props }) => <h5 class="text-black text-base my-8" {...props} />,
                          h6: ({ node, ...props }) => <h6 class="text-black text-base my-8" {...props} />,
                          a: ({ node, ...props }) => <a class="text-yellow-500 underline" {...props} />,
                          p: ({ node, ...props }) => <p class="text-black text-md md:text-lg my-10" {...props} />,
                          blockquote: ({ node, ...props }) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                          bold: ({ node, ...props }) => <strong class="" {...props} />,
                          em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
                          ol: ({ node, ...props }) => <ol class="list-decimal list-inside my-6 text-black text-md md:text-lg" {...props} />,
                          ul: ({ node, ...props }) => <ul class="list-disc list-outside my-6 text-black text-md md:text-lg ml-6" {...props} />,
                          img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                      }}
                  />
              </div>
            </div>
          
          

    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { id } = context.query
  // console.log(id)
  const res = await fetch(`https://cms.bigradar.io/co-blogs/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
