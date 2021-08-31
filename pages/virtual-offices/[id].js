import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import pin from '../../public/assets/pin.svg'
import rupee from '../../public/assets/rupee.svg'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'



const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}



export default function Slug({id}) {


  return (
    <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

       <Head>
        {/* HTML Meta Tags */}
        <title>{id.name} | Virtual Office Coworly</title>
        <meta name="description" content={`${id.name} | virtual office coworly`} />

          {/* Google / Search Engine Tags */}
          <meta itemprop="name" content={id.name} />
            <meta itemprop="description" content={`${id.name} | virtual office coworly`} />
              <meta itemprop="image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://officevirtual.in" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content={id.name} />
                      <meta property="og:description" content={`${id.name} | virtual office coworly`} />
                        <meta property="og:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content={id.name} />
                              <meta name="twitter:description" content={`${id.name} | virtual office coworly`} />
                                <meta name="twitter:image" content="https://cms.bigradar.io/uploads/ce005b13_38a6_4774_8d34_d7c5c61a5707_c74dcc20a6.jpg" />

                                
                                <link rel="icon" href="/favicon.ico" />
                                
      </Head>


          <div class="mt-4 w-full grid grid-cols-2 md:grid-cols-3 gap-1 h-72 md:h-48 lg:h-52 xl:h-60">
                            {id.gallery.slice(0, 3).map((g) => {

                                return (
                                    <>
                                        <img class="w-full h-full" src={ApiUrl + g.url} alt={id.name} />
                                    </>
                                )
                            })}
          </div>
          <div class="md:flex ">
              <div class="mt-8 md:w-8/12 lg:w-10/12">
                  <h1 class="text-2xl font-semibold">{id.name}</h1>

                  <div class="flex items-center mt-2">
                      <Image src={pin} alt="location" />
                      {id.vo_cities.map((a) => {
                          return (
                              <p style={{ color: '#808080' }} class="ml-2 text-md md:text-lg m-0">{a.name}</p>
                          )
                      })}
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
                                                <p class="pl-2 text-base m-0">{a.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>


                                <div class="">

                                    <h4 style={{ color: "#808080" }} class="text-base">Gallery</h4>

                                    <div class="grid grid-cols-4 mt-6 gap-2 cursor-pointer">

                                        <Gallery>

                                            {id.gallery.map((g) => {
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



                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div class="md:flex">
                                    <div class="md:w-6/12">
                                        <h4 style={{ color: "#808080" }} class="text-base">Document Required</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.documents}
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
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div class="md:w-6/12 mt-6 md:mt-0">
                                        <h4 style={{ color: "#808080" }} class="text-base">Open Hours</h4>
                                        <div class="mt-4">
                                            <Markdown
                                                children={id.openHour}
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
                                                    ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                    ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div class="">
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Description</h4>
                                    <div class="">
                                        <Markdown
                                            children={id.description}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />

                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Agreeement Terms</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.agreement}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>


                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">What you will get with address?</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.offer}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Business Registration</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.businessReg}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>


                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Mail Handling</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.mailForward}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Get Notified Whenever We Receive The Courier </h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.courier}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">Testimonials</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.testimonials}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>

                                <div>
                                    <h4 style={{ color: "#808080" }} class="text-base mb-6">How the Process Works</h4>
                                    <div class="mt-4">
                                        <Markdown
                                            children={id.process}
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
                                                ol: ({ node, ...props }) => <ol class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                                ul: ({ node, ...props }) => <ul class="list-disc list-inside my-6 text-black text-md md:text-lg" {...props} />,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <hr class="border border-gray-100 my-8 w-11/12"></hr>
                                </div>




                            </div>

                            <div class="shadow-md md:w-4/12 lg:w-3/12 mt-8 h-full ">
                                <div style={{ backgroundColor: '#D4E6F2' }} class="pt-8 h-28">
                                    <div class="flex items-center m-auto justify-center">
                                        <Image src={rupee} alt="rupee" />
                                        <h1 class="text-2xl font-semibold text-center m-0">{id.price}</h1>
                                    </div>
                                    <p class="text-md text-center">Monthly Charges</p>

                                </div>
                                <div class="p-4 pb-8">
                                    <p class="text-lg text-center pt-4">Message us to book this space.</p>
                                    <button class="bg-black text-white w-full mt-6 h-12 " onClick={handleWidget}>Message Now</button>
                                </div>
                            </div>
                        </div>


    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { id } = context.query
  // console.log(id)
  const res = await fetch(`https://cms.bigradar.io/virtual-offices/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
