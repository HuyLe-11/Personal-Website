import Navbar from "@/components/ui/Navbar/Navbar";
import Banner from "@/components/ui/banner/Banner";
import Content from "@/components/ui/Content/Content";
import './Home.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <br></br>
                <Banner/>
                <br></br>
                <Content />
            </div>
        </>
    );
}
