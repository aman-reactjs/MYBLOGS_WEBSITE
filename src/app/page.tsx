
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PostSlider from "@/components/PostSlider";
import RecentBlog from "@/components/RecentBlog";


export default function Home() {
  return (
    <main className="p-4">
             <PostSlider />
             <Hero/>
          <Featured/>
          <RecentBlog/>
             <Footer/>
    </main>
  )
}
