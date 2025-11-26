import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TVCabinetDecor from "/src/assets/images/icons/ui/banners/products/tvunit/TvCabinetDoor.png"
import TVStand from "/src/assets/images/icons/ui/banners/products/tvunit/TvStand.png"
import TVUnitDesign from "/src/assets/images/icons/ui/banners/products/tvunit/TvUnitDesign.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const TvUnit = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Tv Unit */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Tv Unit
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={TVCabinetDecor} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            TV Cabinet Decor
        </h1>
        </div>
        <div className="relative">
        <img src={TVStand} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            TV Stand
        </h1>
        </div>
        <div className="relative">
        <img src={TVUnitDesign} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            TV Unit Design
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default TvUnit;
