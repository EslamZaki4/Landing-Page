import CountUp from 'react-countup';
import { BsPersonHeart } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { PiBuildingOfficeFill, PiChalkboardTeacherFill } from 'react-icons/pi'

function Counter() {
  return (
    <>
    <div className=" -translate-y-20 ">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2 max-w-[900px] mx-auto justify-items-center">
            {[
              { icon: FaUserGraduate, end: 3500, label: 'Graduates' },
              { icon: BsPersonHeart, end: 2400, label: 'Students' },
              { icon: PiChalkboardTeacherFill, end: 3500, label: 'Teachers' },
              { icon: PiBuildingOfficeFill, end: 12, label: 'Branches' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-2xl rounded-lg px-7 py-4 md:px-10 md:py-4  transform transition-transform hover:translate-y-[-5px]  w-16 md:w-[100%] lg:w-[80%]"
              >
                <span className="flex justify-center items-center w-10 h-10 md:w-16 md:h-16 bg-[#FFF3E7] rounded-full mb-4">
                  <item.icon color="#FF6F28" size={25} />
                </span>
                <CountUp start={0} end={item.end} duration={7} className="text-title text-lg md:text-xl font-semibold" />
                <p className="text-title text-[10px] md:text-base mt-1 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Counter
