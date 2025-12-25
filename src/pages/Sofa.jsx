import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodSofa from "/src/assets/images/ui/banners/products/sofa/TeakWoodSofa.webp"
import RubberWoodSofa from "/src/assets/images/ui/banners/products/sofa/RubberWoodSofa.webp"
import CushionComfortSofa from "/src/assets/images/ui/banners/products/sofa/CushionComfortSofa.webp"
import FabricSofa from "/src/assets/images/ui/banners/products/sofa/FabricSofa.webp"
import VelvetFabricSofa from "/src/assets/images/ui/banners/products/sofa/VelvetFabricSofa.webp"
import ReclinerLeatherSofa from "/src/assets/images/ui/banners/products/sofa/ReclinerLeatherSofa.webp"
import TeakWoodFabricSofa from "/src/assets/images/ui/banners/products/sofa/TeakWoodFabricSofa.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const SofaCollections = [
    { name: "Teak Wood Sofa", image: TeakWoodSofa, alt: "Teak Wood Sofa Image" },
    { name: "Rubber Wood Sofa", image: RubberWoodSofa, alt: "Rubber Wood Sofa Image" },
    { name: "Cushion Comfort Sofa", image: CushionComfortSofa, alt: "Cushion Comfort Sofa Image" },
    { name: "Fabric Sofa", image: FabricSofa,  alt: "Fabric Sofa Image" },
    { name: "Velvet Fabric Sofa", image: VelvetFabricSofa, alt: "Velvet Fabric Sofa Image" },
    { name: "Recliner Leather Sofa", image: ReclinerLeatherSofa, alt: "Recliner Leather Sofa Image" },
    { name: "Teak Wood Fabric Sofa", image: TeakWoodFabricSofa, alt: "Teak Wood Fabric Sofa Image" } 
]

const Sofa = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Sofa */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Sofa
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col items-center px-5 sm:px-6 lg:px-15 space-y-6 lg:space-y-10">

        {SofaCollections.map((item) => (
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

export default Sofa;
