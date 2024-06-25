import AboutUs from '../aboutUs/AboutUs';
import ContactUs from '../contactUs/ContactUs';
import News from '../news/News';
import WelcomeMessage from '../welcomeMessage/WelcomeMessage';
import Section from '../section/Section';

function MiddleHome() {
  return (
    <>
      <Section/>
      <WelcomeMessage />
      <AboutUs />
      <News />
      <ContactUs />
    </>
  );
}

export default MiddleHome;
