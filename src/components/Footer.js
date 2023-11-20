const Footer=()=>{
    return(
        <div>
        <div className="flex w-full h-auto  bg-slate-100">
           <div className="flex w-2/3 h-auto m-auto bg-slate-100">
                <div className="p-5"> 
                    <h1  className="text-center text-lg font-bold">For better experience,download </h1>
                    <h1 className="text-center text-lg font-bold">the Swiggy app now</h1>
                </div>
                <div className="ml-20">
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                    <img src="playstore.png" alt="Swiggylink" className="h-20"/>  
                </a>
                </div>
                <div className="ml-20"> 
                <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                    <img src="Appstore.png" alt="Swiggylink" className=" h-20"/>
                </a>    
                </div> 
            </div>
        </div> 
        {/* Footer */}

        <div className="flex bg-black w-full  text-white justify-center">
            <div className="p-6 text-lg">
                <img src="food-logo.png" className="w-24"/>
                <h3 className="font-bold">© 2023 Bundl Technologies Pvt. Ltd</h3>
            </div>
            <div className="p-6" >
                <ul>
                    <li className="font-bold p-1 text-lg">Company</li>
                    <li className="p-1">About</li>
                    <li className="p-1">Team</li>
                    <li className="p-1">Careers</li>
                    <li className="p-1">Swiggy One</li>
                    <li className="p-1">Swiggy Instamart</li>
                    <li className="p-1">Swiggy Genie</li>
                </ul>
            </div>
            <div  className="p-6">
                <ul>
                    <li className="font-bold text-lg p-1"> Contact us</li>
                    <li className="p-1">Help & Support</li>
                    <li className="p-1">Team</li>
                    <li className="p-1">Ride with us</li>
                    <li className="p-1">Terms & Conditions</li>
                    <li className="p-1">Cookie Policy</li>
                    <li className="p-1">Privacy Policy</li>
                </ul>
            </div> 
            <div className=" p-5">
                <ul>
                    <li className="font-bold p-1 text-lg"> We deliver to:</li>
                    <li className="p-1">Bangalore</li>
                    <li className="p-1">Gurgaon</li>
                    <li className="p-1">Hyderabad</li>
                    <li className="p-1">Delhi</li>
                    <li className="p-1">Mumbai</li>
                    <li className="p-1">Pune</li>
                </ul>
            </div>
        </div>
    </div>
        
    )
}
export default Footer;
