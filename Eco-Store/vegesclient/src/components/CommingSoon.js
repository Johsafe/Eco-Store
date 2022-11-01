import React, { useReducer } from 'react';
// import { useSelector } from 'react-redux';
import './CommingSoon.css';
import { Helmet } from 'react-helmet-async';
import LoadingBox from './utils/LoadingBox';


const CommingSoon = () => {
  // const {loading} = useSelector(
  //     (state) => state.cart
  //   );
  const { loading } = useReducer({
    loading: true,
  });

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <Helmet>
            <title>Comming soon</title>
          </Helmet>
          <div>
            <div className="bg">
              <span dataText="Comming" className="first">
                Comming<span dataText="Soon...."> Soon....</span>
              </span>
              <div className="one">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommingSoon;
