import styled from 'styled-components';
import User from '../../assets/user.png';

export const ContainerNav = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Navigation = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Search = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const SubTitle = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`;
export const BtnLogin = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background: #800080;
  background-image: url(${User});
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position: center;
`;
export const BoxSearch = styled.input`
  width: 10rem;
  height: 1.2rem;
  margin-left: 0.5rem;
  border-radius: 5px;
`;
