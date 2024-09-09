import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
  max-width: 600px;
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #0096c7;
  color: white;
  border-radius: 20px;
  display: block;
  width: 100%;
  text-align: center;
 transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077b6;
  }
`;
