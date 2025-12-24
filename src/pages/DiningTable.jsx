import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/TeakWoodDiningTable.webp"
import RubberWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/RubberWoodDiningTable.webp"
import NeemWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/NeemWoodDiningTable.webp"
import CoffeeTable from "/src/assets/images/ui/banners/products/diningtable/CoffeeTable.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const DiningTableCollections = [
    { name: "Teak Wood Dining Table", image: TeakWoodDiningTable, alt: "Teak Wood Dining Table Image" },
    { name: "Rubber Wood Dining Table", image: RubberWoodDiningTable, alt: "Rubber Wood Dining Table Image" },
    { name: "Neem Wood Dining Table", image: NeemWoodDiningTable, alt: "Neem Wood Dining Table Image" },
    { name: "Coffee Table", image: CoffeeTable, alt: "Coffee Table Image" },
]

const DiningTable = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Dining Table */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Dining Table
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-6 lg:space-y-10">

        {DiningTableCollections.map((item) => (
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

export default DiningTable;
