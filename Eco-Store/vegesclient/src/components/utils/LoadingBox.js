import Spinner from 'react-bootstrap/Spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { BallTriangle } from  'react-loader-spinner'

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
//     <div>
//       <BallTriangle
//       height={100}
//       width={100}
//       radius={5}
//       color="#4fa94d"
//       ariaLabel="ball-triangle-loading"
//       wrapperClass={{}}
//       wrapperStyle=""
//      visible={true}
// />


    // </div>
  );
}
