import Logo from '../../../src/assets/svg/Group 211.svg';
import {  Center } from "@mantine/core";
import "./loader.css"
const LoadingScreen = () => (
  <Center style={{ height: "100vh" }}>
     <img src={Logo} alt="Logo"  className="img-pulse"/>
  </Center>
);

export default LoadingScreen;
