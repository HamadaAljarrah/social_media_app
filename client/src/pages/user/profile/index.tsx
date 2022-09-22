import { NextApiRequest } from 'next';
import SendRequest from "../../../services/auth"
import { IUser } from '../../../types/user';
import { User } from './User';

export default function Profile({ user }: { user: IUser }) {
    return (
        <User currentUser={user} />
    )
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
    const token = req.headers.cookie?.split('=')[1];

    const result = await SendRequest.GET('/user', token)
    return {
        props: {
            user: result.data
        }
    }

}