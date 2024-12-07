
import Bottombar from "@/Components/homepage/bottombar";
import Pagefive from "@/Components/homepage/pagefive";
import Pagefour from "@/Components/homepage/pagefour";
import Pageone from "@/Components/homepage/pageone";
import Pagesix from "@/Components/homepage/pagesix";
import Pagethree from "@/Components/homepage/pagethree";
import Pagetwo from "@/Components/homepage/pagetwo";

export default function Home() {
  return (
    <div className="md:max-w-[1280px] w-full m-auto overflow-hidden">
      <Pageone />
      <Pagetwo /> 
      <Pagethree />
      <Pagefour />
      <Pagefive />
      <Pagesix />
      <Bottombar />
    </div>
  );
}