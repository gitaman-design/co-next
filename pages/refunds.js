import { useEffect } from 'react'
import Head from 'next/head'


function Refunds() {
    return (
        <div class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
           
        
        <Head>
        {/* HTML Meta Tags */}
        <title> Refunds & Cancellation Policy | Coworly </title>
        <meta name="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />

          {/* Google / Search Engine Tags */}
        <meta itemprop="name" content='Refunds & Cancellation Policy | Coworly' />
            <meta itemprop="description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
              <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                  <meta property="og:type" content="website" />
                    <meta property="og:title" content='Refunds & Cancellation Policy | Coworly' />
                      <meta property="og:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                        <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                          
                          {/* <!-- Twitter Meta Tags --> */}
                          <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content='Refunds & Cancellation Policy | Coworly' />
                              <meta name="twitter:description" content="Coworly instantly compares the best pricing available in all the coworking spaces. Explore spaces in Delhi, Mumbai, Bengaluru, Hyderabad and more cities." />
                                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />
                                 <link rel="icon" href="/favicon.ico" />
                                
      </Head>  

            <div>
              
              <h1 class="text-2xl mt-6">
                Refunds & Cancellation Policy
              </h1>

              <h1 class="text-2xl mt-6">
                Order Cancellation
              </h1>
                    
                    <p class="mt-6 text-lg text-gray-600">
                    If a user wants to cancel the order which he/she placed, send a cancellation request to hello[a]coworly.com within 3 hours of placing the order. Entire charges will be refunded.
                    </p>

                    <h1 class="text-2xl mt-6">
                Refund Policy
              </h1>

              <p class="mt-6 text-lg text-gray-600">
              If a user pays the charges and wants to withdraw/ask for refund minimum 24 hours before the commencement of booking, then 50% charges will be refunded.
                    </p>

                    <h1 class="text-2xl mt-6">
                Payment Refund Mode
              </h1>

              <p class="mt-6 text-lg text-gray-600">
              All the refunds will be processed via NEFT or through payment gateway within 10 working days.
                    </p>

            </div>


    
        </div>
    )
}

export default Refunds
