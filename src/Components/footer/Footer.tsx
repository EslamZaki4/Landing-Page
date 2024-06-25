import footerLogo from "../../assets/svg/Group 211 (1).svg"
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <>
     <footer className="bg-secondary">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
  
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
       
         <img src={footerLogo} alt="footerLogo" width={100} height={100}/>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className=" text-primary font-bold">Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> Home </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> About Us </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> Admissions </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> Academics </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> News </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-primary">Information</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> About Us </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> Terms & Conditions </a>
            </li>

            <li>
              <a href="#" className="text-primary transition hover:opacity-75"> Contact Us </a>
            </li>
          </ul>
        </div>

       
        <div className="w-[200px]">
          <p className="font-bold text-primary"> Get In Touch </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-2">
             <LuPhone color="white" size={20}/>
              <a href="#" className="text-primary transition hover:opacity-75">(+20) 1092827334</a>
            </li>

            <li className="flex items-center gap-2">
              <FiMapPin color="white" size={20} />
              <a href="#" className="text-primary transition hover:opacity-75">564 street, Mansoura, Dakhlia</a>
            </li>

            <li className="flex items-center gap-2 ">
              <MdEmail color="white" size={20}/>
              <a href="#" className="text-primary transition hover:opacity-75">e.mossad99@gmail.com</a>
            </li>

           
          </ul>
        </div>
      </div>
    </div>

   
  </div>
</footer>
    </>
  )
}

export default Footer
