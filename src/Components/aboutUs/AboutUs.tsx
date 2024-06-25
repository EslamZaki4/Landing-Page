import aboutUsImage from "../../assets/images/Frame 6593 (1).png"
import WhyUs from "./aboutUsComponent/WhyUs"
import backGroundAboutUsImage from "../../assets/images/Frame 6597.png"

function AboutUs() {
  return (
    <>
    <div className="bg-secondary-200 text-white pt-10 shadow-sm"
     style={{
        backgroundImage: `url(${backGroundAboutUsImage})`,
        backgroundSize: "cover",       
        backgroundPosition: "left",  
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay", 
      }}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-52 w-[100%]  container  ">
        <div className="mt-10">
     
          <h1 className="text-title text-3xl mt-5 font-semibold">
            <span className="inline-block border-b-4 border-secondary pb-2">
            About
            </span>
            Us
          </h1>

          <p className="font-semibold mt-5 text-[24px] text-[#524FD5]" >We help mould future Innovators</p>
          <p className="text-[#333333] mt-3 w-[80%]">
          In our school, with a dedicated team of educators, we foster an environment where students are encouraged to explore their passions and reach their fullest potential. we strive to provide a well-rounded education that prepares students for success in an ever-evolving world.
          </p>
        </div>
        <img src={aboutUsImage} className="w-[468px]" alt="welcomeImage" />
      </div>


      <WhyUs/>
   
    </div>

    </>
  )
}

export default AboutUs
