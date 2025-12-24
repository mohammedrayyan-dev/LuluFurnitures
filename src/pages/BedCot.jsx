import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import BabyBedCot from "/src/assets/images/icons/ui/banners/products/bedcot/BabyBedCot.png"
import WesternBedCot from "/src/assets/images/icons/ui/banners/products/bedcot/WesternBedCot.png"
import IndianBedCot from "/src/assets/images/icons/ui/banners/products/bedcot/IndianBedCot.png"
import LuxuryFabricBedCot from "/src/assets/images/icons/ui/banners/products/bedcot/LuxuryFabricBedCot.png"
import ChineseBedCot from "/src/assets/images/icons/ui/banners/products/bedcot/ChineseBedCot.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const BedCollections = [
    { name: "Baby Bed Cot", image: BabyBedCot, alt: "Baby Bed Cot Image" },
    { name: "Western Bed Cot", image: WesternBedCot, alt: "Western Bed Cot Image" },
    { name: "Indian Bed Cot", image: IndianBedCot, alt: "Indian Bed Cot Image" },
    { name: "Luxury Fabric Bed Cot", image: LuxuryFabricBedCot, alt: "Luxury Fabric Bed Cot Image" },
    { name: "Chinese Bed Cot", image: ChineseBedCot, alt: "Chinese Bed Cot Image" },
]

const BedCot = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Bed Cot */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Bed Cot
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]" />

    
    <div className="flex flex-col items-center space-y-6 lg:space-y-10">

        {BedCollections.map((item) => (
        <div className="relative aspect-[18/7] lg:aspect-[25/6] max-w-[1200px]">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h2 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {item.name}
        </h2>
        </div>
        ))}
        
    </div>
    
    </div>
    <Footer />
    </>
  )
}

export default BedCot;
