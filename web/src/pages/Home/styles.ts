import styled from 'styled-components'

import background from '../../assets/home-background.svg'

export const Container = styled.div`
  height: 100vh;

  background: url(${background}) no-repeat 700px bottom;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`

export const Header = styled.header`
  margin: 48px 0 0;

  @media (max-width: 900px) {
    margin: 48px auto 0;
  }
`

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;
    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }

    &:hover {
      background: #2fb86e;
    }

    @media (max-width: 900px) {
      align-items: center;

      h1 {
        font-size: 42px;
      }

      p {
        font-size: 24px;
      }
    }
  }
`

// #page-home {
//   height: 100vh;

//   background: url('../../assets/home-background.svg') no-repeat 600px bottom;
// }

// #page-home .content {
//   width: 100%;
//   height: 100%;
//   max-width: 1100px;
//   margin: 0 auto;
//   padding: 0 30px;

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// }

// #page-home .content header {
//   margin: 48px 0 0;
// }

// #page-home .content main {
//   flex: 1;
//   max-width: 560px;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }

// #page-home .content main h1 {
//   font-size: 54px;
//   color: var(--title-color);
// }

// #page-home .content main p {
//   font-size: 24px;
//   margin-top: 24px;
//   line-height: 38px;
// }

// #page-home .content main a {
//   width: 100%;
//   max-width: 360px;
//   height: 72px;
//   background: var(--primary-color);
//   border-radius: 8px;
//   text-decoration: none;

//   display: flex;
//   align-items: center;
//   overflow: hidden;

//   margin-top: 40px;
// }

// #page-home .content main a span {
//   display: block;
//   background: rgba(0, 0, 0, 0.08);
//   width: 72px;
//   height: 72px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.2s;
// }

// #page-home .content main a span svg {
//   color: #FFF;
//   width: 20px;
//   height: 20px;
// }

// #page-home .content main a strong {
//   flex: 1;
//   text-align: center;
//   color: #FFF;
// }

// #page-home .content main a:hover {
//   background: #2FB86E;
// }

// @media(max-width: 900px) {
//   #page-home .content {
//     align-items: center;
//     text-align: center;
//   }

//   #page-home .content header {
//     margin: 48px auto 0;
//   }

//   #page-home .content main {
//     align-items: center;
//   }

//   #page-home .content main h1 {
//     font-size: 42px;
//   }

//   #page-home .content main p {
//     font-size: 24px;
//   }
// }
