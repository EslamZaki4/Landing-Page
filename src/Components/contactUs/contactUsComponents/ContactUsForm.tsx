


const ContactUsForm = () => {
  return (
   
    <div className='w-full mt-16 z-50'>
     
     <form className="max-w-lg mx-auto">
  <div className="my-5">
    <input
      type="text"
      placeholder="Full name"
      className=" bg-[#FAFAFC] placeholder-[#676767] w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
    />
  </div>
  <div className="my-5">
    <input
      type="email"
      placeholder="Email"
      autoComplete="email"
      className="bg-[#FAFAFC] placeholder-[#676767] w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
    />
  </div>
  <div className="my-5">
    <input
      type="tel"
      placeholder="Phone number"
      className="bg-[#FAFAFC] placeholder-[#676767] w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
    />
  </div>
  <div className="my-5">
  <textarea
  placeholder="Message"
  rows={5} 
  className="w-full px-4 py-3 rounded-lg border bg-[#FAFAFC] border-gray-300 resize-none focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary placeholder-[#676767]"
></textarea>
  </div>
  <div className="flex justify-center my-5">
    <button
      type="submit"
      
      className="w-[221px] px-6 py-2 bg-[#F77E23]  border-[#F77E23] text-white rounded-lg hover:bg-white hover:text-[#F77E23] font-semibold text-xl border transition duration-300 ease-in-out"
    >
      Send
    </button>
  </div>
</form>
    </div>
   
    
  );
}

export default ContactUsForm;
