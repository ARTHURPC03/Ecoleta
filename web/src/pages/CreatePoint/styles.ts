import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`

export const Header = styled.header`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      color: var(--primary-color);
    }
  }
`

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: var(--text-color);
    }
  }

  button {
    width: 260px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: #2fb86e;
  }
`

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  input::placeholder {
    color: #a0a0b2;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  input:disabled {
    cursor: not-allowed;
  }
`

export const FieldGroup = styled.div`
  display: flex;

  div + div {
    margin-left: 24px;
  }

  input + input {
    margin-left: 24px;
  }
`

export const FieldCheck = styled.div`
  flex-direction: row;
  align-items: center;

  input[type='checkbox'] {
    background: #f0f0f5;
  }

  label {
    margin: 0 0 0 8px;
  }
`

export const LeafletContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin-bottom: 24px;
`

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    span {
      flex: 1;
      margin-top: 12px;

      display: flex;
      align-items: center;
      color: var(--title-color);
    }
  }

  li.selected {
    background: #e1faec;
    border: 2px solid #34cb79;
  }
`

// #page-create-point {
//   width: 100%;
//   max-width: 1100px;

//   margin: 0 auto;
// }

// #page-create-point header {
//   margin-top: 48px;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// #page-create-point header a {
//   color: var(--title-color);
//   font-weight: bold;
//   text-decoration: none;

//   display: flex;
//   align-items: center;
// }

// #page-create-point header a svg {
//   margin-right: 16px;
//   color: var(--primary-color);
// }

// #page-create-point form {
//   margin: 80px auto;
//   padding: 64px;
//   max-width: 730px;
//   background: #FFF;
//   border-radius: 8px;

//   display: flex;
//   flex-direction: column;
// }

// #page-create-point form h1 {
//   font-size: 36px;
// }

// #page-create-point form fieldset {
//   margin-top: 64px;
//   min-inline-size: auto;
//   border: 0;
// }

// #page-create-point form legend {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 40px;
// }

// #page-create-point form legend h2 {
//   font-size: 24px;
// }

// #page-create-point form legend span {
//   font-size: 14px;
//   font-weight: normal;
//   color: var(--text-color);
// }

// #page-create-point form .field-group {
//   flex: 1;
//   display: flex;
// }

// #page-create-point form .field {
//   flex: 1;

//   display: flex;
//   flex-direction: column;
//   margin-bottom: 24px;
// }

// #page-create-point form .field input[type=text],
// #page-create-point form .field input[type=email],
// #page-create-point form .field input[type=number] {
//   flex: 1;
//   background: #F0F0F5;
//   border-radius: 8px;
//   border: 0;
//   padding: 16px 24px;
//   font-size: 16px;
//   color: #6C6C80;
// }

// #page-create-point form .field select {
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   flex: 1;
//   background: #F0F0F5;
//   border-radius: 8px;
//   border: 0;
//   padding: 16px 24px;
//   font-size: 16px;
//   color: #6C6C80;
// }

// #page-create-point form .field input::placeholder {
//   color: #A0A0B2;
// }

// #page-create-point form .field label {
//   font-size: 14px;
//   margin-bottom: 8px;
// }

// #page-create-point form .field :disabled {
//   cursor: not-allowed;
// }

// #page-create-point form .field-group .field + .field {
//   margin-left: 24px;
// }

// #page-create-point form .field-group input + input {
//   margin-left: 24px;
// }

// #page-create-point form .field-check {
//   flex-direction: row;
//   align-items: center;
// }

// #page-create-point form .field-check input[type=checkbox] {
//   background: #F0F0F5;
// }

// #page-create-point form .field-check label {
//   margin: 0 0 0 8px;
// }

// #page-create-point form .leaflet-container {
//   width: 100%;
//   height: 350px;
//   border-radius: 8px;
//   margin-bottom: 24px;
// }

// #page-create-point form button {
//   width: 260px;
//   height: 56px;
//   background: var(--primary-color);
//   border-radius: 8px;
//   color: #FFF;
//   font-weight: bold;
//   font-size: 16px;
//   border: 0;
//   align-self: flex-end;
//   margin-top: 40px;
//   transition: background-color 0.2s;
//   cursor: pointer;
// }

// #page-create-point form button:hover {
//   background: #2FB86E;
// }

// .items-grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 16px;
//   list-style: none;
// }

// .items-grid li {
//   background: #f5f5f5;
//   border: 2px solid #f5f5f5;
//   height: 180px;
//   border-radius: 8px;
//   padding: 32px 24px 16px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;

//   text-align: center;

//   cursor: pointer;
// }

// .items-grid li span {
//   flex: 1;
//   margin-top: 12px;

//   display: flex;
//   align-items: center;
//   color: var(--title-color)
// }

// .items-grid li.selected {
//   background: #E1FAEC;
//   border: 2px solid #34CB79;
// }
