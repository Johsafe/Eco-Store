import Alert from 'react-bootstrap/Alert';
// import styled from 'styled-components';

// const Alert = styled.Alert`
//   width: 40%;
// `
export default function MessageBox(props) {
  return <Alert  variant={props.variant || 'info'} >{props.children}</Alert>;
}
