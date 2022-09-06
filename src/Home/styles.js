import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #426CD8;
    padding: 15px;
`;

export const Body = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding: 10px 15px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const Card = styled.View`
    width: 100%;
    min-height: 50px;
    height: fit-content;

    background: #FFFFFF;
    border: 0.2px solid #B4B4B4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.View`
    width: 100%;
    min-height: 50px;
    height: fit-content;

    background: #FFFFFF;
    border: 0.2px solid #B4B4B4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Title = styled.Text`
    width: 100%;
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #0B194A;

`;

export const Title2 = styled.Text`
    width: 100%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #0B194A;

`;

export const TopButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    
    background-color: blue; 
`;


export const TwoButtons = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const MiniCard = styled.View`
    width: 160px;
    min-height: 50px;
    height: fit-content;

    background: #FFFFFF;
    border: 0.2px solid #B4B4B4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;