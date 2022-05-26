import React, {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import { AuthLayout } from 'layouts';
import { useProfile } from 'hooks/useAuth';
import { AuthContext } from 'layouts/AuthContext';
import { Details } from 'components/profile';
import { Model } from 'components';

export default function Profile() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [userImg, setUserImg] = useState()
    const [password, setPassword] = useState()
    const [showAlert, setShowAlert] = useState(false)
    const {jwt} = useContext(AuthContext)
    const {user, update} = useProfile(jwt)

    useEffect(() => {
        if (!user) return
        const {name, email, img_uri} = user;
        setName(name)
        setEmail(email)
        setUserImg(img_uri)
        console.log(showAlert);
    }, [user])

    const onSubmit = async () => {
        try {
            await update({name, password})
            setShowAlert(false)
        } catch(e) {
            console.log(e.response);
            setShowAlert(false)
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>الملف الشخصي</title>
            </Head>
            <Model title={'model.title'} description={'model.description'} open={showAlert} close={setShowAlert} acceptor={onSubmit} />
            <AuthLayout title="title.profile">
                <Details name={name} email={email} userName={setName} password={setPassword} showAlert={setShowAlert} />
            </AuthLayout>
            <br className="mt-10"></br>
        </React.Fragment>
    )
}


