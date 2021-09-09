import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { RESOURCES_QUERY } from './api/query/resources';
import pin from './assets/pin.svg';


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
  window.BigRadar?.open()
}

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const city_id = router.query?.id;
  console.log(city_id)
  const cityInfo = useQuery(RESOURCES_QUERY, { variables: { url: city_id }});
  const data = cityInfo?.data

  console.log(data)
  // useEffect(() => {
  //   // const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //   // const handleComplete = (url) => (url === router.asPath) && setLoading(false);
  //   // router.events.on('routeChangeStart', handleStart)
  //   // router.events.on('routeChangeComplete', handleComplete)
  //   // router.events.on('routeChangeError', handleComplete)
  //   return () => {
  //     router.events.off('routeChangeStart', handleStart)
  //     router.events.off('routeChangeComplete', handleComplete)
  //     router.events.off('routeChangeError', handleComplete)
  //   }
  // }, [])

  if (loading || !data) {
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
                <title> Resources - Coworly </title>
                <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

                {/* Google / Search Engine Tags */}
                <meta itemprop="name" content="Resources - Coworly" />
                <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Resources - Coworly" />
                <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Resources - Coworly" />
                <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />


                <link rel="icon" href="/favicon.ico" />

            </Head>

      <div class="">
              <h1 class="text-4xl font-semibold">Resources</h1>
            </div>   
    
            <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.coBlogs?.map((city) => {
        return (
          <>
            <Link key={city.id} as={`/post/${city.id}`} href={'/post/[id]'}>

                                <div class="rounded cursor-pointer">
                                    <img src={ApiUrl + city.coverImage.url} />
                                            <h1 class="text-2xl mt-4"> 
                                                {city.title}
                                            </h1>
                                            <p class="mt-2">
                                                {city.excerpt}
                                            </p>

                                            <hr class="border border-gray-200 my-4 w-11/12"></hr>

                                            {city.authors.map((a) => {
                                                return(
                                                    <div class="flex items-center">
                                                        <img class="rounded-full w-14" src={ApiUrl + a.profilePic.url} />
                                                        <h1 class="ml-2 text-md">{a.name}</h1>
                                                        </div>
                                                    
                                                )
                                            })}
                                                </div>
                            </Link>                    
                      

            
            



            </>
      )
    })}
    </div>            
    </div>
  )
}


