import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import pin from '../assets/pin.svg'
import rupee from '../assets/rupee.svg'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import ContactForm from './ContactForm';
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


          
                        {/* Flex Box starts */}
                        <div class="mt-10 relative">
                            {/* left flexbox starts */}
                            <div class="md:w-8/12 relative">
                                <div class="">
                                    <h1 class="text-6xl font-semibold">{id.title}</h1>
                                    <p class="mt-4 text-base text-gray-500 w-10/12">{id.shortDescription}</p>
                                </div>
                                
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base">Amenities</h4>
                                </div>
                                
                                <div class="flex flex-wrap mt-6">
                                    {id.amenities.map((a) => {
                                        return (
                                            <div class="flex items-center mr-6 mb-6">
                                                <img class="w-6" src={ApiUrl + a.icon.url} alt={a.name} />
                                                <p class="pl-2 text-base">{a.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                    
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                
                                <div class="">

                                    <h4 style={{ color: "#808080" }} class="text-base">Gallery</h4>

                                    <div class="grid grid-cols-4 mt-6 gap-2">

                                        <Gallery>

                                            {id.image.map((g) => {
                                                return (
                                                    <>
                                                        <Item
                                                            original={ApiUrl + g.url}
                                                            thumbnail={ApiUrl + g.url}
                                                             width="1024"
                                                            height="768"
                                                        >
                                                            {({ ref, open }) => (
                                                                <img ref={ref} onClick={open} src={ApiUrl + g.url} alt="gallery" />
                                                            )}
                                                        </Item>


                                                    </>
                                                )
                                            })}



                                        </Gallery>


                                    </div>
                                </div>

                                <hr class="border border-gray-100 my-8 w-11/12"></hr>

                                <div class="">
                                    <h4 style={{ color: "#808080" }} class="text-base">What will you get?</h4>
                                    
                                    <div class="">
                                        <Markdown
                                            children={id.offer}
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
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    li: ({ node, ...props }) => <li class="my-2" {...props} />,
                                                    
                                                    img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                                            }}
                                        />

                                    </div>
                                </div>

                                <hr class="border border-gray-100 my-8 w-11/12"></hr>


                                <div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10">
                                            
                                            {id.virtual_offices.map((c) => {
                                                return(
                                                    <>
                                                    <Link key={c.id} as={`/${c.slug}`} href={`/${c.slug}`}>
                                                                <div class="mt-6 hover:text-gray-500 ">
                                                                    <img class="h-48 w-full rounded shadow-xl" src={ApiUrl + c.banner.url} alt={c.name} />
                                                                    <h1 class="text-lg mt-4">{c.name}</h1>
                                                                    {/* <div style={{backgroundColor : '#05A081'}} class="p-2 ml-4 rounded mt-4 w-6/12  md:w-4/12">
                                                                        <p class="text-white"> Price : Rs {c.price}/-</p>

                                                                    </div> */}
                                                                    
                                                                    {/* <Link to={`/${c.slug}`}>
                                                                        <div style={{backgroundColor: '#232A34'}} class="m-4 hover:bg-black p-4  mt-6">
                                                                            <h1 class="text-white text-center">Know More</h1>
                                                                        </div>
                                                                    </Link> */}

                                                                </div>
                                                            </Link>
                                                    </>
                                                )
                                            })}
                                </div>
                                
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>

                                <div class="md:flex">
                                    <div class="md:w-6/12">
                                        <h4 style={{ color: "#808080" }} class="text-base">Document Required</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.document}
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
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    li: ({ node, ...props }) => <li class="my-2" {...props} />,
                                                    img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div class="md:w-6/12 mt-6 md:mt-0">
                                        <h4 style={{ color: "#808080" }} class="text-base">How the Process Works</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.process}
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
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    li: ({ node, ...props }) => <li class="my-2" {...props} />,
                                                    img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                <div class="mt-6 md:mt-0">
                                        <h4 style={{ color: "#808080" }} class="text-base">Our Client Testimonials</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.testimonial}
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
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    li: ({ node, ...props }) => <li class="my-2" {...props} />,
                                                    img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                                                }}
                                            />
                                        </div>
                                </div>
                                
                                <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                <div class="mt-6 md:mt-0">
                                        <h4 style={{ color: "#808080" }} class="text-base">Frequently Asked Question</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.faq}
                                                remarkPlugins={[gfm]}
                                                components={{
                                                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                                    h1: ({ node, ...props }) => <h1 class="text-black text-4xl my-10" {...props} />,
                                                    h2: ({ node, ...props }) => <h2 class="text-black text-2xl my-10" {...props} />,
                                                    h3: ({ node, ...props }) => <h3 class="text-black text-xl my-10" {...props} />,
                                                    h4: ({ node, ...props }) => <h4 class="text-black text-base my-4 font-semibold" {...props} />,
                                                    h5: ({ node, ...props }) => <h5 class="text-black text-base my-8" {...props} />,
                                                    h6: ({ node, ...props }) => <h6 class="text-black text-base my-8" {...props} />,
                                                    a: ({ node, ...props }) => <a class="text-yellow-500 underline" {...props} />,
                                                    p: ({ node, ...props }) => <p class="text-black text-md md:text-lg my-6" {...props} />,
                                                    blockquote: ({ node, ...props }) => <blockquote class="py-4 text-black text-lg italic" {...props} />,
                                                    bold: ({ node, ...props }) => <strong class="" {...props} />,
                                                    em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
                                                    ol: ({ node, ...props }) => <ol class="list-decimal list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    li: ({ node, ...props }) => <li class="my-2" {...props} />,
                                                    img: ({ alt, src, node, ...props }) => <img src={ApiUrl + src} alt={alt} {...props} />,
                                                }}
                                            />
                                        </div>
                                    </div>

                    

                </div>
                

                {/* left flexbox ends */}

                {/* Right flexbox starts */}
                <div style={{ backgroundColor: '#D4E6F2' }} class="shadow-md md:w-96 max-h-full p-4 md:fixed md:top-40 md:right-24">
                    <h1 class="text-xl">Get Your Virtual Office</h1>
                     <ContactForm />
                </div>
                {/* Right flexbox ends */}

            </div>


    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { id } = context.query
  // console.log(id)
  const res = await fetch(`https://cms.bigradar.io/vo-landing-pages/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
