import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home5/About"
import AboutTwo from "@/components/sections/home5/AboutTwo"
import Blog from "@/components/sections/home5/Blog"
import Brand from "@/components/sections/home5/Brand"
import Contact from "@/components/sections/home5/Contact"
import Counter from "@/components/sections/home5/Counter"
import Faq from "@/components/sections/home5/Faq"
import Features from "@/components/sections/home5/Features"
import Pricing from "@/components/sections/home5/Pricing"
import Project from "@/components/sections/home5/Project"
import Request from "@/components/sections/home5/Request"
import Services from "@/components/sections/home5/Services"
import Slider from "@/components/sections/home5/Slider"
import Team from "@/components/sections/home5/Team"
import Testimonial from "@/components/sections/home5/Testimonial"
import AboutThree from "@/components/sections/home5/AboutThree"
import Estimate from "@/components/sections/home5/Estimate"
import Testimonial2 from "@/components/sections/home5/Testimonial2"
export default function Home5() {
    return (
        <>
            <Layout headerStyle={5} footerStyle={1}>
                <Slider />
                <AboutTwo />
                
                <Request />
                
                <Testimonial />
                <About />
                
                <AboutThree/>
                <Estimate/>
                <Testimonial2/>
                <Contact />
                <Blog />
                
            </Layout>
        </>
    )
}