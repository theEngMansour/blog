import React, {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import { AuthLayout } from 'layouts';
import { useGetProfile } from 'hooks/useAuth';
import { AuthContext } from 'layouts/AuthContext';
import { Details } from 'components/profile';

export default function Profile() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [userImg, setUserImg] = useState()
    const [password, setPassword] = useState()
    const [showAlert, setShowAlert] = useState(false)

    const {jwt} = useContext(AuthContext)
    const {user} = useGetProfile(jwt)
    

    useEffect(() => {
        if (!user) return
        const {name, email, img_uri} = user;
        setName(name)
        setEmail(email)
        setUserImg(img_uri)
    }, [user])

    return (
        <React.Fragment>
            <Head>
                <title>الملف الشخصي</title>
            </Head>
            <AuthLayout title="title.profile">
                <Details name={name} email={email} userName={setName} password={setPassword} showAlert={setShowAlert} />
            </AuthLayout>
            <br></br><br></br>
        </React.Fragment>
    )
}
