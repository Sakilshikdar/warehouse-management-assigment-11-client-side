import React from 'react';
import logo1 from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shear/Loading/Loading';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    const navigate = useNavigate();

    let errorElement;
    if (error) {
         errorElement = <div>
            <p>Error: {error?.message}</p>
          </div>
      }

      if(user){
          navigate('/inventory')
      }

    if (loading) {
        return <Loading></Loading>
      }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height:'1px', backgroundColor: 'rgb(149, 160, 167, 1)'}} className='w-50'></div>
                <div className='mx-2 mb-2'>or</div>
                <div style={{ height: '1px', backgroundColor: 'rgb(149, 160, 167, 1)' }} className=' w-50'></div>
            </div>
            {errorElement}
            <button onClick={() =>signInWithGoogle()}
             className='w-50 d-block mx-auto bg-primary my-2'>
            <img style={{ width: '25px' }} src={logo1} alt="" />
                <span className='px-2 text-white'>Google Sign In</span>
            </button>
        </div>
    );
};

export default Social;