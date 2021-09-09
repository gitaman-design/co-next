import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import { gql, useQuery } from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { AREA_QUERY } from '../../api/query/area';
import pin from '../../assets/pin.svg'


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
  window.BigRadar?.open()
}

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const city_id = router.query?.id;
  console.log(city_id)
  const cityInfo = useQuery(AREA_QUERY, { variables: { url: city_id }});
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

       {data?.areas?.map((post) => {
        return (
          <>
            <Head>
                {/* HTML Meta Tags */}
                <title> {post.area} - Coworly </title>
                <meta name="description" content={`${post.description}`} />

                {/* Google / Search Engine Tags */}
              <meta itemprop="name" content={`${post.area} - Coworly`}/>
                <meta itemprop="description" content={`${post.description}`} />
                <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${post.area} - Coworly`} />
                <meta property="og:description" content={`${post.description}`} />
                <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.area} - Coworly`} />
                <meta name="twitter:description" content={`${post.description}`} />
                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />


                <link rel="icon" href="/favicon.ico" />

            </Head>

            </>
        )
      })}


    
      {data?.areas?.map((city) => {
        return (
          <>
            <div class="">
              <h1 class="text-4xl font-semibold">Coworkings in {city.area}</h1>
              <p class="mt-4 text-lg lg:w-8/12">{city.description}</p>
              <hr class="border-1 border-gray-200 mt-6"></hr>
            </div>   

            
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {city.coworkings.map((c) => {
                                                return(
                                                    <>
                                                    <Link as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                <div class="mt-6 hover:text-gray-500 border border-gray-5-">
                                                                    <img class="h-48 w-full" src={c.srcImages[0].large} alt={c.name} />

                                                                    <h1 class="text-xl mt-4 px-4 font-semibold truncate" >{c.name}</h1>
                                                                    
                                                                    <div class="flex items-center pl-4 mt-2">

                                                                        <Image src={pin} alt="location"/>

                                                                        <p class="text-md pl-2 m-0">
                                                                            {c.areas.map((a) => {
                                                                                return(
                                                                                    <>
                                                                                        {a.area}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </p>
                                                                        
                                                                    </div>
                                                                    
                                                                    {/* <div class="flex items-center pl-2 mt-2">
                                                                        <img src={chair} alt="chair" />
                                                                        <p class="text-md pl-2">Seaters: {c.seater}</p>

                                                                    </div> */}
                                                                    
                                                                    <Link as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                        <div style={{backgroundColor: '#788794'}} class="hover:bg-black p-4 m-4  mt-6 cursor-pointer">
                                                                            <h1 class="text-white text-center m-0">Explore Now</h1>
                                                                        </div>
                                                                    </Link>

                                                                </div>
                                                            </Link>
                                                    </>
                                                )
                                            })}
                                        </div>
            
            
            



            </>
      )
    })}
    </div>
  )
}


