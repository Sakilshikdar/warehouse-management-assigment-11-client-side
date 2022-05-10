import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-opacity-25 mx-auto w-75 mt-3 shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='p-3'>
                <h4 className='text-center'>1. Difference between Authorization and Authentication?</h4>
                <h6>Authorization and Authentication both terms are often used interchangeably with security terms. Authentication means confirming your own identity. Verify your testimonial such as username / username and password to verify identity. Authorization means granting access to the system. Authorization is the process of determining whether a certified user has access to certain resources.
                </h6>
            </div>
            <div className='p-3'>
                <h4 className='text-center'>2. Why are you using firebase?Other options to implement authentication?</h4>
                <h6>Firebase is Google's mobile application development platform. It has a lot of different products that cover a lot of what is needed to create a mobile app.
                    5 Common Authentication Types.When a user registers for an account, they must create a unique ID and key that will allow them to access their account later. When your user authentication is not secure, however, cyber criminals can hack into the system and gain access. User authorized access.

                </h6>
            </div>
            <div className='p-3'>
                <h4 className='text-center'>3. What other services does firebase provide other than authentication?</h4>
                <h6>According to Firebase console, the application SDKs provided by this toolkit, directly interact with backend services. Therefore, there is no need to establish any connection between the app and the service.Applications can be created without a backend server. There is no need to spend extra money for backend server.You can provide any social networking login with very few lines code.Push notification.Analytics.</h6>
            </div>
        </div>
    );
};

export default Blogs;