import GoogleReviews from "/src/components/GoogleReviews.jsx"

const CustomerFeedbacks = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] flex flex-col items-center">

    <div className="flex flex-col">
      <div className="hidden lg:block mb-10 border-t w-[1295px] border-[#33333366]" />
      <div className="flex items-center justify-between">
        <h2 className="text-[#6B4C41] font-bold text-[24px] lg:text-[40px] font-corinthia">
            Customer Feedbacks
        </h2>
        </div>
        <div className="pt-[20px] pb-[80px] lg:pb-[40px] max-w-xs lg:max-w-7xl">
        <GoogleReviews />
        </div>
    </div>
    </div>
    </>
  )
}

export default CustomerFeedbacks;
