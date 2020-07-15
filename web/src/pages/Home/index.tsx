import React, { useContext } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import { Container, Content, Header, Main } from './styles'

const Home: React.FC = () => {
  const { logo } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Ecoleta" />
        </Header>
        <Main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </Main>
      </Content>
    </Container>
  )
}

export default Home
