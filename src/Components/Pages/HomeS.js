import styled from 'styled-components';
import Background from '../assets/netflixteaser.png';

export const ContainerSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Slogan = styled.p`
  width: 40rem;
  color: #fff;
  font-family: 'Arial';
  text-transform: normal;
  font-size: 5rem;
  text-align: center;
  text-shadow: 5px 5px 7px #000;
`;
