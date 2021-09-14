import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import banner from './assets/banner.png'
import howWork from './assets/how-works.jpg'
import pin from './assets/pin.png'
import Query from './api/query/query'
import CITY_QUERY from './api/query/category'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { useRouter } from "next/router"


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
                <title> Find Coworking Spaces in India - Coworly </title>
                <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

                {/* Google / Search Engine Tags */}
                <meta itemprop="name" content="Find Coworking Spaces in India - Coworly" />
                <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Find Coworking Spaces in India - Coworly" />
                <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Find Coworking Spaces in India - Coworly" />
                <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />


                <link rel="icon" href="/favicon.ico" />

              


            </Head>


            <div class="mt-10 lg:flex">
                <div class="lg:pt-16 xl:w-6/12 xl:pt-24">
                    <h1 class="text-4xl font-semibold xl:text-5xl">Find Your Own Office</h1>
                    <p style={{ color: '#808080' }} class="mt-4 text-base xl:pr-28 xl:text-xl">One solution for all your coworking needs.
                        Private cabins, Desks, Offices & Meetings Rooms all over India</p>
                    <Link href="/city/1485">
                        <div class="bg-black p-4 w-44  mt-6 cursor-pointer">
                            <h1 class="text-white text-center m-0">Explore Now</h1>
                        </div>
                    </Link>
                </div>

                <div class="mt-10 lg:mt-0 xl:w-6/12">
                    <Image class="w-full" src={banner} alt="banner" />
                </div>
            </div>

            <Query query={CITY_QUERY} id={null}>

                {({ data: { cities } }) => {
                    return (
                        <>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500">
                                {cities.map((city) => {
                                    return (
                                        <>
                                            <Link key={city.id} as={`/city/${city.id}`} href={'/city/[id]'}>
                                                <div class=" hover:text-gray-800 transition  duration-200 cursor-pointer">
                                                    <img class="w-full h-52 hover:shadow-xl transition  duration-200" src={ApiUrl + city.image.url} alt={city.name} />

                                                    <h1 class="text-xl mt-4 font-semibold hover:text-gray-500">
                                                        {city.name}
                                                    </h1>
                                                    <p class="hover:text-gray-500 truncate">
                                                        {city.description}
                                                    </p>
                                                </div>
                                            </Link>

                                        </>
                                    );
                                })}
                            </div>

                            <div class="mt-36">
                                <h1 class="font-semibold text-4xl">Featured Coworkings for you</h1>
                                <p style={{ color: '#808080' }} class="mt-4 text-base">One solution for all your coworking needs. Private cabins, Desks, Offices & Meetings Rooms in Delhi NCR.</p>
                            </div>

                            <div>
                                {cities.slice(0, 1).map((city) => {
                                    return (
                                        <>

                                            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                {city.coworkings.map((c) => {
                                                    return (
                                                        <>
                                                            <Link key={c.id} as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                <div class="mt-6 hover:text-gray-500 border border-gray-5 hover:shadow-xl transition  duration-200 cursor-pointer">

                                                                    {/* {c.srcImages.map((a) => {return(
                                                                        <>
                                                                        
                                                                             <img class="h-48 w-full" src={a.large} alt={c.name} />


                                                                        </>
                                                                    )} )}  */}

                                                                    <img class="h-48 w-full" src={c.srcImages[0].large} alt={c.name} />
                                                                    <h1 class="text-xl mt-4 pl-4 pr-4 font-semibold truncate">{c.name}</h1>

                                                                    <div class="flex items-center pl-4 mt-2">

                                                                        <Image width={20} height={20} src={pin} alt="location" />

                                                                        <p class="text-md pl-2 m-0">
                                                                            {c.areas.map((a) => {
                                                                                return (
                                                                                    <>
                                                                                        {a.area}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </p>
                                                                    </div>

                                                                    <Link as={`/coworkings/${c.id}`} href={'/coworkings/[id]'}>
                                                                        <div style={{ backgroundColor: '#788794' }} class="m-4 hover:bg-black p-4  mt-6">
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





                        </>
                    );
                }}
            </Query>









            <div style={{ backgroundColor: '#f9f9f9' }} class="mt-20 md:flex px-10 py-20">
                <div class="md:w-6/12 xl:pl-20 xl:pr-20">
                    <Image class="lg:w-8/12 m-auto" src={howWork} alt="coworking-members" />
                </div>
                <div class="md:w-6/12 pt-20 md:pt-0 lg:pt-20 xl:pt-10 md:pl-8">
                    <div>
                        <h1 class="text-3xl">How Coworly Works</h1>
                    </div>
                    <div class="mt-6">
                        <h2 class="text-xl">1. Distraction-free Spaces</h2>
                        <hr class="border border-gray-400 w-10 mt-2"></hr>
                        <p class="mt-2">One solution for all your coworking needs. Private cabins, Desks,
                            Offices & Meetings Rooms in Delhi NCR. Offices & Meetings Rooms in Delhi NCR.</p>
                    </div>
                    <div class="mt-10">
                        <h2 class="text-xl">2. Simple and Secure Access</h2>
                        <hr class="border border-gray-400 w-10 mt-2"></hr>
                        <p class="mt-2">One solution for all your coworking needs. Private cabins, Desks,
                            Offices & Meetings Rooms in Delhi NCR. Offices & Meetings Rooms in Delhi NCR.</p>
                    </div>
                    <div class="mt-10">
                        <h2 class="text-xl">3. Take a Tour</h2>
                        <hr class="border border-gray-400 w-10 mt-2"></hr>
                        <p class="mt-2"> One solution for all your coworking needs. Private cabins, Desks,
                            Offices & Meetings Rooms in Delhi NCR. Offices & Meetings Rooms in Delhi NCR.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

