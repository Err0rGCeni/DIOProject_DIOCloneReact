import React from 'react'
import { useNavigate } from "react-router-dom";

import logo from '../../assets/logo-dio.svg'
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles'
import Button from '../Button'

const Header = ({ auth }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {auth ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {auth ? (
            <UserPicture src="https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/assets/img/my-photo.jpg" />
          ) : (
            <>
              <MenuRight onClick={() => navigate("/")}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/sign-up")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>

  )
}

export default Header