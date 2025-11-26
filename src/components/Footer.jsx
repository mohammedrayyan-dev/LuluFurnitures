import LuluLogo from "/src/assets/images/icons/LulufurnitureLogo.png"
import InstagramIcon from "/src/assets/images/icons/InstagramIcon.png"
import MailIcon from "/src/assets/images/icons/MailIcon.png"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="bg-[#DBD1C7] h-[430px] mt-[90px] flex flex-row justify-center space-x-20">

    <div className="pt-[50px]">
        <img src={LuluLogo} alt="Lulu Logo" className="w-[98px]"/>
        <p className="text-[#6F6F6F] mt-[32px] text-[18px] font-normal w-[502px]">
            At our store, we believe that furniture is more than just something you use — it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods.
        </p>
        <div className="flex flex-row mt-[30px] space-x-3">
        <img src={InstagramIcon} alt="InstagramIcon" className="w-[24px]"/>
        <a 
        href="https://www.instagram.com/lulufurniture.official/" 
        className="font-dm text-[#6F6F6F] text-[16px]"
        target="_blank"> 
            Lulufurnitures.official
        </a>
        </div>
        <div className="flex flex-row mt-[25px] space-x-3">
        <img src={MailIcon} alt="InstagramIcon" className="w-[24px]"/>
        <a 
        href="mailto:officiallulufurnitures@gmail.com" 
        className="font-dm text-[#6F6F6F] text-[16px]"
        target="_blank"> 
            officiallulufurniture@gmail.com
        </a>
        </div>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Explore
        </h2>
        <a href="/" className="font-dm text-[#6F6F6F] text-[18px]">
            Home
        </a>
        <a href="#products" className="font-dm text-[#6F6F6F] text-[18px]">
            Products
        </a>
        <a href="#feedback" className="font-dm text-[#6F6F6F] text-[18px]">
            Feedback
        </a>
        <a href="#aboutus" className="font-dm text-[#6F6F6F] text-[18px]">
            About us
        </a>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Knowledge
        </h2>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[18px]">
            FAQ
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[18px]">
            Return Policy
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[18px]">
            EMI
        </Link>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Contact
        </h2>
        <div className="flex">
        <a
        href="https://wa.me/8754610386"
        target="_blank">
        <button className="bg-[#6B4C41] hover:bg-[#553C34] font-dm text-[14px] text-[#ffffff] rounded-3xl w-[160px] h-[48px] cursor-pointer">
            Customer Support
        </button>
        </a>
        </div>
        <h4 className="font-dm text-[#6F6F6F] text-[18px]">
            2nd Street, Nanjundeshwar Nagar, <br/>
            Near Ashok Pillor, <br/>
            Hosur - 635109.
        </h4>
    </div>

    </div>
  )
}

export default Footer;
