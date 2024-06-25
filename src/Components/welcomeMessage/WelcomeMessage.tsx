
import welcomeImage from "../../assets/images/Group 208.png";
import { SlArrowRight } from "react-icons/sl";
function WelcomeMessage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-52 w-[100%] my-12 container  ">
   
        <img data-aos="fade-up" src={welcomeImage} className="w-[544.15px]" alt="welcomeImage" />
     
        
        <div data-aos="fade-up" className="mt-10">
          <h4 className="text-secondary text-[20px] ">Welcome Message</h4>
          <h1 className="text-[#524FD5] text-4xl mt-5">
            <span className="inline-block border-b-4 border-secondary pb-5 mr-2">
              From 
            </span>
            the Principal
          </h1>

          <p className="font-bold mt-5">Mrs. Esraa Mossad</p>
          <p className="text-[#737373] mt-3">
            I am delighted to welcome you to our schools, where you can be part
            of a unique learning community, seeking the finest national
            education provision for your children.
          </p>

          <div className="flex items-center gap-1 my-5 cursor-pointer ">
            <p className="text-secondary text-[18px] border-b-2 p-0 border-secondary">Learn More</p>
            <SlArrowRight size={13} color="#FF6F28" />
          </div>
        </div>
      
      </div>
    </>
  );
}

export default WelcomeMessage;
