import logo from "../assets/logo-dark.png"
import fb from '../assets/social/facebook.svg'
import tw from '../assets/social/twitter.svg'
import insta from '../assets/social/instagram.svg'
import ln from '../assets/social/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'


const renderFooter = () => {
    return (
        <>
        <div>
            <div class="pt-10 lg:flex lg:justify-between">
                {/* Box 1 */}
                    <div>
                        <div class="w-40">
                            <Image class="w-40" src={logo} alt="logo" />
                        </div>
                    <p class="pt-4 text-gray-600">Coworly | Find Coworking Spaces in India</p>
                    <h5 class="pt-4 text-gray-600"> &copy; 2021 Coworly. All rights reserved.</h5>
                    <div class="flex gap-4 pt-8">
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.facebook.com/coworly">
                                <Image class="w-10"  src={fb} alt='Facebook' />
                            </a>
                        </div>
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.twitter.com/coworly">
                                <Image class="w-10" src={tw} alt='Twitter' />
                            </a>
                        </div>
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.instagram.com/coworly/">
                                <Image class="w-10" src={insta} alt='Instagram' />
                            </a>

                        </div>
                        <div class="w-10 cursor-pointer">
                            <a href="https://www.linkedin.com/company/coworly">
                                <Image class="w-10" src={ln} alt='Linkedin' />
                            </a>

                        </div>
                        {/* <div>
                            <a href="/">
                                <img class="w-10" src={yt} alt='social' />
                            </a>

                        </div> */}
                    </div>
                </div>
                {/* Box 1  End */}

                {/* Box 2 */}
                
                <div class="pt-14 lg:pt-0">
                    <h5 class="font-bold py-4">
                        About
                    </h5>
                    <a href="/contact">
                    <p class="text-gray-600 py-2 m-0">Contact Us</p>
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0buESW5D9q-iMTxm9mrrVb3r9j4omB6f9GV6QXb487q8Bcw/viewform" target="_blank" rel="noreferrer">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">List Your Space</p>
                    </a>
                    <a href="/resources">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Resources</p>
                    </a>
                    <Link href="/privacy-policy">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Privacy Policy</p>
                    </Link>
                    <Link href="/term-of-use">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Terms of use</p>
                    </Link>
                    <Link href="/refunds">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Refunds</p>
                    </Link>
                </div>

                {/* Box 2 End */}

                {/* Box 3 */}
                
                <div class="pt-14 lg:pt-0">
                    <h5 class="font-bold py-4">
                        Top Cities
                    </h5>
                    <Link href="/city/1487">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Bangalore</p>
                    </Link>
                    <Link href="/city/1485">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Delhi</p>
                    </Link>
                    <Link href="/city/1486">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Mumbai</p>
                    </Link>

                    <Link href="/city/1488">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Gurgaon</p>
                    </Link>
                    <Link href="/city/1489">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Noida</p>
                    </Link>
                    <Link href="/city/1490">
                        <p class="text-gray-600 py-2 m-0 cursor-pointer">Pune</p>
                    </Link>

                </div>

                {/* Box 3 End */}

                <div class="pt-14 lg:pt-0">
                    <h5 class="font-bold py-4">
                        Delhi/NCR
                    </h5>
                    <a href="/city/area/1">
                        <p class="text-gray-600 py-2 m-0">Connaught Place</p>
                    </a>
                    <a href="/city/area/3">
                        <p class="text-gray-600 py-2 m-0">Hauz Khas</p>
                    </a>
                    <a href="/city/area/4">
                        <p class="text-gray-600 py-2 m-0">Pitampura</p>
                    </a>
                    <a href="/city/area/12">
                        <p class="text-gray-600 py-2 m-0">Kalkaji</p>
                    </a>
                    <a href="/city/area/11">
                        <p class="text-gray-600 py-2 m-0">Chattarpur</p>
                    </a>
                    <a href="/city/area/7">
                        <p class="text-gray-600 py-2 m-0">RK Puram</p>
                    </a>

                    

                </div>

                {/* Box 3 End */}

            </div>
        </div>
        </>
    )
}


function Footer() {
    return (
        <div style={{backgroundColor: '#D4E6F2'}} class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">{renderFooter()}</div>
    )
}

export default Footer
