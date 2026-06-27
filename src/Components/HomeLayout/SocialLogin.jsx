import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline btn-primary'><FcGoogle size={24}></FcGoogle> Log in with Google</button>
                <button className='btn w-full btn-outline btn-secondary'><FaGithub size={24}></FaGithub> Log in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;