import React from "react";

import { Container, Body, TopButtons, Card, Title, Button, TwoButtons, MiniCard, Title2 } from "./styles";




function Home (){
    return(
        <Container>
            <Body>
                <TwoButtons>
                    <MiniCard>
                        <Title2>Dispositivos </Title2>
                    </MiniCard>
                    <MiniCard>
                        <Title2>House</Title2>
                    </MiniCard>
                </TwoButtons>
                <Card>
                    <Title>Notificações</Title>
                </Card>
                <Card>
                    <Title>Respostas rápidas</Title>
                </Card>
                <Button>
                    <Title>Sobre o app</Title>
                </Button>
            </Body>
        </Container>
    )
}

export default Home;



