import PageIntro from "../intropage"
import Card from "../card"
import { arr } from "@/utils/productdata"
const Pagetwo = () => {
  return (
    <div className="border-b py-12 p-3">
      <PageIntro intro={"Today's"} text={"Flash Sales"}></PageIntro>
      <div className="w-full overflow-x-scroll flex md:gap-10 gap-4 py-8">
        <Card arr={arr} />
      </div>
      <div className="w-full flex justify-center">
        <button className="px-5 py-3 text-white bg-[#DB4444] rounded-sm text-base mb-4 mt-10">View All Products</button>
      </div>
    </div>
  )
}

export default Pagetwo