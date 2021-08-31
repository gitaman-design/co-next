import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import mail from '../public/assets/mail.jpg'
import Query from './api/query/query'
import CITY_QUERY from './api/query/category'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { Spin,Skeleton, Space} from 'antd';
import {useRouter} from "next/router"


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}


export default function Home({ voCities }) {

  // console.log("city", voCities)

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
        <title>virtual office address for company registration all over India with instant documentation | virtual office coworly</title>
        <meta name="description" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />

          {/* Google / Search Engine Tags */}
          <meta itemprop="name" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
            <meta itemprop="description" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
              <meta itemprop="image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://officevirtual.in" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
                      <meta property="og:description" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
                        <meta property="og:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
                              <meta name="twitter:description" content="virtual office address for company registration all over India with instant documentation | virtual office coworly" />
                                <meta name="twitter:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                                
                                <link rel="icon" href="/favicon.ico" />
                                
      </Head>


      <div style={{ backgroundColor: '#232A34'}} class="py-20">
                <div class="text-center ">
                    <h1 class="text-4xl text-white font-semibold xl:text-5xl">Virtual Office Address</h1>
                    <p class="mt-4 text-white text-base xl:text-xl">Get your new fancy office address in just 5 mins.</p>
                        <button class="bg-white p-4 w-44  mt-6 m-auto" onClick={handleWidget}>
                                Chat With Us
                        </button>

                </div>

      </div>

      <Query query={CITY_QUERY} id={null}>

                {({ data: { voCities } }) => {
                        return (
                            <>
                            <div class="mt-2">

                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500 cursor-pointer">
                                            {voCities.map((city) => {
                                            return (
                                                <>
                                                <Link key={city.id} as={`/city/${city.id}`} href={'/city/[id]'}>
                                                    <div class=" hover:text-gray-800 transition  duration-200"> 
                                                        <img class="w-full h-52 hover:shadow-xl transition  duration-200" src={ApiUrl + city.image.url} alt={city.name}/>
                                                        
                                                        <h2 class="text-xl mt-4 font-semibold hover:text-gray-500">
                                                                {city.name}
                                                        </h2>
                                                        <p class="hover:text-gray-500 truncate">
                                                            {city.description}
                                                        </p>
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








      
      <div style={{ backgroundColor: '#f9f9f9' }} class="mt-20 md:flex px-10 py-20">
        <div class="md:w-6/12 pl-20 pr-20">
          <Image class="lg:w-8/12 m-auto" src={mail} alt="coworking-members"/>
        </div>
        <div class="md:w-6/12 pt-20 md:pt-0 md:pl-8">
          <div>
            <h1 class="text-3xl">How QuickVO Works?</h1>
          </div>
          <div class="mt-6">
            <h2 class="text-xl">1. Select Location</h2>
            <hr class="border border-gray-400 w-10 mt-2"></hr>
            <p class="mt-2">Explore our locations and packages to select your address</p>
          </div>
          <div class="mt-10">
            <h2 class="text-xl">2. Upload Documents</h2>
            <hr class="border border-gray-400 w-10 mt-2"></hr>
            <p class="mt-2">Your KYC documents makes the process super quick to draft the agreements</p>
          </div>
          <div class="mt-10">
            <h2 class="text-xl">3. Get Your Address</h2>
            <hr class="border border-gray-400 w-10 mt-2"></hr>
            <p class="mt-2"> It hardly takes 4-24 hours processing time, Your address agreements will be in your inbox </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

