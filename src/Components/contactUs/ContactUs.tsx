
import ContactUsForm from "./contactUsComponents/ContactUsForm";
import Map from "./contactUsComponents/Map";
function ContactUs() {
  return (
    <>
    <div className="bg-[#E8E8E8] pt-3 pb-1  ">
      <div className="container flex flex-col justify-center text-center  gap-4 items-center mb-10">
      </div>
      <div className="mb-24 grid md:grid-cols-2 grid-cols-1 justify-center items-center sm:flex-col container  ">
       <div 
       data-aos="fade-up"
       data-aos-duration="1500">
        
        <Map />
        </div>
        
        <div 
        data-aos="fade-down"
     data-aos-duration="1500"
         className="rounded-xl z-index bg-[white]  shadow-2xl p-6 pt-10  border w-[100%] lg:w-[100%]  h-auto md:h-[600px]  lg:h-[600px]  ">
          <div className="flex justify-center items-center">

          <div className="flex justify-center items-center ">
        <div className="text-title text-[24px] font-semibold">
          <span className="inline-block border-b-4 border-secondary pb-2">Contact</span> Us
        </div>
          </div>

         
          </div>
          {/* form */}
          <ContactUsForm />
        </div>
        
      </div>
      </div>
    </>
  );
}

export default ContactUs;
