import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import {gql, useQuery} from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'


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

      
      <div>
        <h1 class="text-4xl font-semibold">Virtual Offices in {id.name}</h1>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6">
        {id.virtual_offices.map((c) => {
          return (
            <>
              <Link key={c.id} as={`/virtual-offices/${c.id}`} href={'/virtual-offices/[id]'}>
                <div class="mt-6 hover:text-gray-500 border border-gray-5 hover:shadow-xl transition  duration-200 cursor-pointer">
                  <img class="h-48 w-full" src={ApiUrl + c.banner.url} alt={c.name} />
                  <h1 class="text-xl mt-4 pl-4 pr-4 font-semibold truncate">{c.name}</h1>
                  <p class="pl-4 pr-4 truncate">{c.description}</p>
                  <div style={{ backgroundColor: '#05A081' }} class="p-2 ml-4 rounded mt-4 w-6/12  md:w-4/12">
                    <p class="text-white m-0"> Price : Rs {c.price}/-</p>
                  </div>
                  
                  <Link href={`/${c.slug}`}>
                    <div style={{ backgroundColor: '#232A34' }} class="m-4 hover:bg-black p-4  mt-6">
                      <h1 class="text-white text-center m-0">Know More</h1>
                    </div>
                  </Link>
                </div>
              </Link>
            </>
          )
        })}

      </div>
      
      <hr class="border-1 border-gray-200 mt-6"></hr>
      
      <div>
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
  const res = await fetch(`https://cms.bigradar.io/vo-cities/${id}`)
  const slug = await res.json()
  // console.log(slug)
  return {
    props: {
      id: slug
    },
  }
}
