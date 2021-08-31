
const renderFooter = () => {
    return (
        <>
        <div>
            <div class="pt-10 lg:flex lg:justify-between">
                {/* Box 1 */}
                <div class="text-center w-full">
                    {/* <img class="w-40" src={logo} alt="logo" /> */}
                    <p class="pt-4 text-gray-600">Virtual Office | Coworly</p>
                    <h5 class="pt-4 text-gray-600"> &copy; 2021 Virtual Office - Coworly. All rights reserved.</h5>
                    
                </div>
                

            </div>
        </div>
        </>
    )
}


function Footer() {
    return (
        <div style={{backgroundColor: '#f9f9f9'}} class="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">{renderFooter()}</div>
    )
}

export default Footer
