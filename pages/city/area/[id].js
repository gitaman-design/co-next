import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {useRouter} from "next/router"
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import pin from '../../../public/assets/pin.svg'


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
        <title>{id.name} | Virtual Office Coworly</title>
        <meta name="description" content={`virtual office address in ${id.name} for company registration all over India with instant documentation | virtual office coworly`} />

          {/* Google / Search Engine Tags */}
          <meta itemprop="name" content={`virtual office address in ${id.name} for company registration all over India with instant documentation | virtual office coworly`} />
            <meta itemprop="description" content={`virtual office address in ${id.name} for company registration all over India with instant documentation | virtual office coworly`} />
              <meta itemprop="image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://officevirtual.in" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content={`${id.name} | virtual office coworly`} />
                      <meta property="og:description" content={`virtual office address in ${id.name} for company registration all over India with instant documentation | virtual office coworly`} />
                        <meta property="og:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content={`${id.name} | virtual office coworly`} />
                              <meta name="twitter:description" content={`virtual office address in ${id.name} for company registration all over India with instant documentation | virtual office coworly`} />
                                <meta name="twitter:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                                
                                <link rel="icon" href="/favicon.ico" />
                                
      </Head>

      
      <div class="">
        <h1 class="text-4xl font-semibold">Coworkings in {id.area}, {id.cities.map((a) => { return (<h1> { a.name}</h1>)}) }</h1>
        <p class="mt-4 text-lg w-8/12">{id.description}</p>
        <hr class="border-1 border-gray-200 mt-6"></hr>
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
                                                          

                                                                        <Image width={40} height={40} src={pin} alt="location"/>

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


    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { id } = context.query
  // console.log(id)
  const res = await fetch(`https://cms.bigradar.io/areas/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
