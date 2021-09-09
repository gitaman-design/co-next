import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import { gql, useQuery } from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { COWORKING_QUERY } from '../api/query/coworking'
import pin from '../assets/pin.svg'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
  window.BigRadar?.open()
}

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const city_id = router.query?.id;
  console.log(city_id)
  const cityInfo = useQuery(COWORKING_QUERY, { variables: { url: city_id }});
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

      {data?.coworkings?.map((post) => {
        return (
          <>
            <Head>
                {/* HTML Meta Tags */}
                <title> {post.name} - Coworly </title>
                <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

                {/* Google / Search Engine Tags */}
              <meta itemprop="name" content={`${post.name} - Coworly`}/>
                <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${post.name} - Coworly`} />
                <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.name} - Coworly`} />
                <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />


                <link rel="icon" href="/favicon.ico" />

            </Head>

            </>
        )
      })}

    
      {data?.coworkings?.map((city) => {
        return (
          <>
                <div class="mt-4 w-full grid grid-cols-2 md:grid-cols-3 gap-1 ">
                    {city.srcImages.slice(0, 3).map((g) => {
                        return (
                            <>
                                <img class="w-full h-full" src={g.large} alt={city.name} />
                            </>
                        )
                    })}
                </div>

                <div class="md:flex ">
                                <div class="mt-8 md:w-8/12 lg:w-10/12">
                                        <h1 class="text-2xl font-semibold">{city.name}</h1>
                                        <div class="flex items-center mt-2">
                                            <Image src={pin} alt="location" />
                                            <p style={{color: '#808080'}} class="ml-2 text-md md:text-lg m-0">{city.address}</p>
                                        </div>

                                        {/* <div class="flex items-center mt-2">
                                            <img src={pin} alt="location" />
                                            <p style={{color: '#808080'}} class="ml-2 text-md md:text-lg">Total Seats: {post.seater}</p>
                                        </div> */}
                                        
                                        <hr class="border border-gray-100 my-8 w-11/12"></hr>

                                        <div>
                                            <h4 style={{color: "#808080"}} class="text-base">Amenities</h4>
                                        </div>


                                        <div class="flex flex-wrap mt-6">
                                            {city.amenities.map((a) => {
                                                return(
                                                    <div class="flex items-center mr-6 mb-6">
                                                    <img class="w-6" src={ApiUrl + a.icon.url} alt={a.name} />
                                                    <p class="pl-2 text-base m-0">{a.name}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div>
                                            <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                        </div>


                                        <div class="">

                                        <h4 style={{color: "#808080"}} class="text-base">Gallery</h4>

                                        <div class="grid grid-cols-4 mt-6">

                                            <Gallery>

                                            {city.srcImages.map((g) => {
                                                return(
                                                    <>
                                                    <Item
                                                        original={g.large}
                                                        thumbnail={g.thumbnail}
                                                        width="1024"
                                                        height="768"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={g.large} />
                                                        )}
                                                    </Item>
                                                        {/* <Image preview="false" width={200} src={g.large} alt={post.coworkingName} /> */}

                                                    </>
                                                )
                                            })}


                                                
                                            </Gallery>


                                        </div>
                                        </div>



                                        <div>
                                            <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                        </div>

                                <div class="md:flex">
                                    <div class="md:w-6/12">
                                        <h4 style={{color: "#808080"}} class="text-base">Quick Info</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={city.quickInfo}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({node, ...props}) => <h1 class="text-black text-4xl my-6" {...props} />,
                                                    h2: ({node, ...props}) => <h2 class="text-black text-2xl my-6" {...props} />,
                                                    h4: ({node, ...props}) => <h4 class="text-black text-base my-4" {...props} />,
                                                    a: ({node, ...props}) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({node, ...props}) => <p class="text-black text-md md:text-lg my-6" {...props} />,
                                                    blockquote: ({node, ...props}) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({node, ...props}) => <strong class="" {...props} />,
                                                    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
                                                    ol: ({node, ...props}) => <ol class="list-decimal list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({node, ...props}) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                                />
                                        </div>
                                    </div>

                                    <div class="md:w-6/12 mt-6 md:mt-0">
                                        <h4 style={{color: "#808080"}} class="text-base">Open Hours</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={city.Timing}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({node, ...props}) => <h1 class="text-black text-4xl my-6" {...props} />,
                                                    h2: ({node, ...props}) => <h2 class="text-black text-2xl my-6" {...props} />,
                                                    h4: ({node, ...props}) => <h4 class="text-black text-base my-4" {...props} />,
                                                    a: ({node, ...props}) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({node, ...props}) => <p class="text-black text-md md:text-lg my-6" {...props} />,
                                                    blockquote: ({node, ...props}) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({node, ...props}) => <strong class="" {...props} />,
                                                    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
                                                    ol: ({node, ...props}) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({node, ...props}) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                                />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                            </div>

                            <div class="">
                                    <h4 style={{color: "#808080"}} class="text-base mb-6">Pricing</h4>
                                    <div class="md:flex items-center">
                                            <Markdown
                                                children={city.price}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({node, ...props}) => <h1 class="text-black text-4xl my-6 m-0" {...props} />,
                                                    h2: ({node, ...props}) => <h2 class="text-black text-2xl my-6 m-0" {...props} />,
                                                    h4: ({node, ...props}) => <h4 class="text-black text-base my-4 m-0" {...props} />,
                                                    a: ({node, ...props}) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({node, ...props}) => <p class="text-black text-md md:text-lg m-0" {...props} />,
                                                    blockquote: ({node, ...props}) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({node, ...props}) => <strong class="" {...props} />,
                                                    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
                                                    ol: ({node, ...props}) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({node, ...props}) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                                />
                                                <p class="text-yellow-600 underline text-lg font-semibold ml-4 m-0 cursor-pointer" onClick={handleWidget}>Message Now</p>
                                                
                                        </div>
                                </div>

                            <div>
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                            </div>

                            <div>
                                <h4 style={{color: "#808080"}} class="text-base mb-6">Description</h4>
                                <div class="mt-4">
                                            <Markdown
                                                children={city.description}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({node, ...props}) => <h1 class="text-black text-4xl my-6" {...props} />,
                                                    h2: ({node, ...props}) => <h2 class="text-black text-2xl my-6" {...props} />,
                                                    h4: ({node, ...props}) => <h4 class="text-black text-base my-4" {...props} />,
                                                    a: ({node, ...props}) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({node, ...props}) => <p class="text-black text-md md:text-lg my-6" {...props} />,
                                                    blockquote: ({node, ...props}) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({node, ...props}) => <strong class="" {...props} />,
                                                    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
                                                    ol: ({node, ...props}) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({node, ...props}) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                                />
                                        </div>
                            </div>


                          

                            {/* <div>
                                <h4 style={{color: "#808080"}} class="text-base mb-6">Cancellation Policy</h4>
                                <div class="mt-4">
                                            <Markdown
                                                children={post.cancellationPolicy}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({node, ...props}) => <h1 class="text-black text-4xl my-6" {...props} />,
                                                    h2: ({node, ...props}) => <h2 class="text-black text-2xl my-6" {...props} />,
                                                    h4: ({node, ...props}) => <h4 class="text-black text-base my-4" {...props} />,
                                                    a: ({node, ...props}) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({node, ...props}) => <p class="text-black text-md md:text-lg my-6" {...props} />,
                                                    blockquote: ({node, ...props}) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({node, ...props}) => <strong class="" {...props} />,
                                                    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
                                                    ol: ({node, ...props}) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({node, ...props}) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                                />
                                        </div>
                            </div> */}

                            <div>
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                            </div>
                            
                            <div>
                                <h4 style={{color: "#808080"}} class="text-base mb-6">Frequently Asked Questions</h4>
                                <div class="mt-4">
                                        {city.faqs.map((f) => {
                                            return(
                                                <>

                                                    <div class="border-l-4 border-black">
                                                        <h1 class="text-md md:text-lg font-semibold ml-2">Q: {f.question}</h1>
                                                    </div>

                                                    <div>
                                                        <p class="text-md md:text-lg mt-2 mb-6 ml-4">A: {f.answer}</p>
                                                    </div>

                                                    <div>
                                                        <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                                    </div>




                                                </>
                                            )
                                        })}
                                </div>
                            </div>
                            

                            
                                </div>

                                <div class="shadow-md md:w-4/12 lg:w-3/12 mt-8 h-full ">
                                    <div style={{backgroundColor: '#D4E6F2'}} class="pt-8 h-44">
                                        <div class="">
                                            {/* <img src={rupee} alt="rupee" /> */}
                                            <h1 class="text-2xl font-semibold text-center">{city.price}</h1>
                                        </div>
                                    </div>
                                    <div class="p-4 pb-8">
                                        <p class="text-lg text-center pt-4">Message us to book this space.</p>
                                        <button class="bg-black text-white w-full mt-6 h-12" onClick={handleWidget}>Message Now</button>
                                    </div>
                                </div>
                            </div>
            

      



            </>
      )
    })}
    </div>
  )
}

