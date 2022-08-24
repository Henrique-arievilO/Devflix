import styled from 'styled-components';

export const ContainerSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
`;
export const CardMovie = styled.div`
  width: 35rem;
  height: 20rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CardPicture = styled.div`
  width: 15rem;
  height: 20rem;
`;
export const MoviePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardInfo = styled.div`
  width: 20rem;
  height: 100%;
  background: #252525;
  text-align: center;
  padding: 15px;
  font-family: Arial;
  opacity: 0.8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
