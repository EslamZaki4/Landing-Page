import BackgroundImage from '../../assets/images/unsplash_GDokEYnOfnE.png';
import Counter from '../counter/Counter';

function Section() {
  return (
     <div>
       <section
        className=" bg-secondary-200 text-white bg-cover bg-center h-[40%] "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
         

          <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mb-10 mt-32 bg-gradient-to-r from-white via-white to-white bg-clip-text text-3xl font-extrabold sm:text-5xl"
            >
        Best Learning Opportunities
      </h1>
    
            <p 
             data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            
            className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              We prepare you to engage in the world that is and to help bring about a world that ought to be
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-secondary bg-secondary px-12 py-3 text-sm font-semibold text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition duration-500 ease-in-out"
                href="#"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
      </section>
      <Counter/>
    </div>
  )
}

export default Section
