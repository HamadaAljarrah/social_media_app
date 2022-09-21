import { NextApiRequest,NextApiResponse } from 'next';
import React from 'react'
import { Loader } from '../../components/Loader/Loader';
import { useAuth } from '../../context/auth.context';
import Login from '../auth/login';
import { User } from './User';


export default function Profile() {
    const { currentUser, isLoading } = useAuth();
    if (isLoading) return <Loader />
    if (!currentUser) return <Login />
    return <User currentUser={currentUser} />
}

export function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
    return {
        props: {

        }
    }

}


