import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {useRouter} from "next/router"
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import pin from '../assets/pin.svg'


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
        <Skeleton.Image active size={500} />
          <Skeleton.Image active size={"large"} />
          <Skeleton.Image active size={"large"} />
      </Space>
      
      <Skeleton active paragraph={{ rows: 8 }} />
      

  </div>
}
  return (
    <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      <Head>
        {/* HTML Meta Tags */}
        <title>Coworkings in {id.name} | Coworly </title>
        <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

          {/* Google / Search Engine Tags */}
        <meta itemprop="name" content={`Coworkings in ${id.name} | Coworly`} />
            <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
              <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content={`Coworkings in ${id.name} | Coworly`} />
                      <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                        <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content={`Coworkings in ${id.name} | Coworly`} />
                              <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                                
                                <link rel="icon" href="/favicon.ico" />
                                
      </Head>

      
      <div class="">
        <h1 class="text-4xl font-semibold">Coworkings in {id.name}</h1>
        <p class="mt-4 text-lg lg:w-8/12">{id.description}</p>
        <hr class="border-1 border-gray-200 mt-6"></hr>
      </div>


      <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 cursor-pointer">
                          {id.areas.slice(0,6).map((a) => {
                            return(
                              <>
                                <Link key={a.id} as={`/city/area/${a.id}`} href={'/city/area/[id]'}>

                                      <div class="border p-4 text-center rounded">
                                          <h2 class="text-base m-0">{a.area}</h2>
                                      </div>

                                </Link>
                              </>
                            )
                          })}
                        </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {id.coworkings.map((c) => {
                                                return(
                                                    <>
                                                    <Link key={c.id} as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                <div class="mt-6 hover:text-gray-500 border border-gray-5 cursor-pointer">
                                                                  <img class="h-48 w-full" src={c.srcImages[0].large} alt={c.name} />
                                                                    <h1 class="text-xl mt-4 pl-4 font-semibold truncate pr-4 m-0">{c.name}</h1>
                                                                    
                                                        <div class="flex items-center pl-4 mt-2">
                                                          <Image src={pin} alt="location" />
                                                          
                                                          <p class="text-md pl-2 truncate m-0 pr-4">
                                                            {c.address}
                                                          </p>
                                                        </div>
                                                                    
                                                    
                                                                    <Link as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                        <div style={{backgroundColor: '#788794'}} class="hover:bg-black p-4 m-4  mt-6">
                                                                            <h1 class="text-white text-center m-0">Explore Now</h1>
                                                                        </div>
                                                                    </Link>

                                                                </div>
                                                            </Link>
                                                    </>
                                                )
                                            })}
                                        </div>

      
      <hr class="border-1 border-gray-200 mt-6"></hr>
      <div class="mt-10">
        <h1 class="m-0 text-2xl"> All areas in {id.name}</h1>
      </div>

       <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 cursor-pointer">
                          {id.areas.map((a) => {
                            return(
                              <>
                                <Link key={a.id} as={`/city/area/${a.id}`} href={'/city/area/[id]'}>

                                      <div class="border p-2 text-center rounded hover:shadow">
                                          <h2 class="text-md m-0">{a.area}</h2>
                                      </div>

                                </Link>
                              </>
                            )
                          })}
                        </div>

      

      <hr class="border-1 border-gray-200 mt-6"></hr>

  

      
      <div>
        <Markdown
          children={id.about}
          remarkPlugins={[gfm]}
          components={{
            // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
            h1: ({ node, ...props }) => <h1 class="text-black text-4xl my-6" {...props} />,
            h2: ({ node, ...props }) => <h2 class="text-black text-2xl my-6" {...props} />,
            h4: ({ node, ...props }) => <h4 class="text-black text-base my-4" {...props} />,
            a: ({ node, ...props }) => <a class="text-yellow-500 underline" {...props} />,
            p: ({ node, ...props }) => <p class="text-black text-md md:text-lg my-6" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
            bold: ({ node, ...props }) => <strong class="" {...props} />,
            em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
            ol: ({ node, ...props }) => <ol class="list-decimal list-inside my-6 text-black text-md md:text-lg" {...props} />,
            ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
            img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
          }}
        />
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { id } = context.query
  // console.log(id)
  const res = await fetch(`https://cms.bigradar.io/cities/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
