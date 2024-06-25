
import TiltCard from './TiltCard';
import qualityImage from '../../../assets/svg/17 quality.svg';
import certificateImage from '../../../assets/svg/Group (8).svg';
import learningImage from '../../../assets/svg/Vector (2).svg';

const whyUsData = [
  {
    image: qualityImage,
    title: ' of education',
    activeTitle:'High quality',
    description: 'We use the latest and most effective teaching methods',
    backgroundColor: 'bg-green-200',
  },
  {
    image: certificateImage,
    activeTitle: 'Obtaining ',
    title:'a certificate',
    description: 'With our certificate, you will be able to enter any university in the world',
    backgroundColor: 'bg-red-200',
  },
  {
    image: learningImage,
    title: ' of learning',
    activeTitle:'Ease',
    description: 'We use the latest and most effective teaching methods',
    backgroundColor: 'bg-blue-200',
  },
];

const WhyUs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="text-title text-3xl font-semibold">
          <span className="inline-block border-b-4 border-secondary pb-2">Why</span> Us
        </div>
      </div>
      <div className="flex justify-center items-center container pb-24">
        <div  data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {whyUsData.map((item) => (
          
              <TiltCard
             
                image={item.image}
                title={item.title}
                description={item.description}
                backgroundColor={item.backgroundColor}
                activeTitle={item.activeTitle}
              />
          
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
