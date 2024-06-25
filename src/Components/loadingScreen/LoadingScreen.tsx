import Logo from '../../../src/assets/svg/Group 211.svg';
import "./loader.css"
const LoadingScreen = () => (
  <div className='flex justify-center items-center' style={{ height: "100vh" }}>
     <img src={Logo} alt="Logo"  className="img-pulse"/>
  </div>
);

export default LoadingScreen;
