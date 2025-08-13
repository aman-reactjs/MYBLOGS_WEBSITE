
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Post from "@/components/Post";
import PostSlider from "@/components/PostSlider";


export default function Home() {
  return (
    <main className="p-4">
             <PostSlider />
             <Hero/>
          <Featured/>
             <Post/>
             <Footer/>
    </main>
  )
}
