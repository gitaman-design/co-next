import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import mail from '../public/assets/mail.jpg'
import Query from './api/query/query'
import BLOG_QUERY from './api/query/blog'
import { ApolloClient, InMemoryCache, gql} from "@apollo/client";


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
    window.BigRadar?.open()
}


export default function Home({ voBlogs }) {

  return (
    <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      <Head>
        <title>Find Virtual Office all over India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div>
            <h1 class="text-4xl font-semibold">Resources</h1>
        </div>

      <Query query={BLOG_QUERY} id={null}>

                {({ data: { voBlogs } }) => {
                        return (
                            <>
                            <div class="mt-2">

                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500 cursor-pointer">
                                            {voBlogs.map((post) => {
                                            return (
                                                <>
                                                <Link key={post.id} as={`/post/${post.id}`} href={'/post/[id]'}>
                                                  <div class="rounded">
                                                    <img class="hover:shadow-lg" src={ApiUrl + post.coverImage.url} />
                                                    <h1 class="text-2xl mt-4">
                                                      {post.title}
                                                    </h1>
                                                    <p class="mt-2">
                                                      {post.excerpt}
                                                    </p>
                                                    
                                                    <hr class="border border-gray-200 my-4 w-11/12"></hr>
                                                    
                                                    {post.authors.map((a) => {
                                                      return (
                                                        <div class="flex items-center">
                                                          <img class="rounded-full w-10" src={ApiUrl + a.profilePic.url} />
                                                          <h1 class="ml-2 text-md">{a.name}</h1>
                                                        </div>
                                                      )
                                                    })}
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









      
    </div>
  )
}

