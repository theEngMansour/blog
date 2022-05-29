import React, {
    useState, 
    useEffect, 
    useContext
} from 'react';
import Head from 'next/head';
import { AuthLayout } from 'layouts';
import { useProfile } from 'hooks/useAuth';
import { AuthContext } from 'layouts/AuthContext';
import { Details, Avatar } from 'components/profile';
import { Model } from 'components';
import { useIntl } from 'react-intl';
import { usePhotoGallery } from 'hooks/usePhotoGallery';
import { Authenticated } from 'layouts';

export default function Profile() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [userImg, setUserImg] = useState()
    const [password, setPassword] = useState()
    const [showAlert, setShowAlert] = useState(false)

    const {jwt} = useContext(AuthContext)
    const {user, update, uploadPhoto} = useProfile(jwt)
    const { takePhoto, blobUrl } = usePhotoGallery()
    const { formatMessage } = useIntl()

    useEffect(() => {
        if (!user) return
        const {name, email, img_uri} = user;
        setName(name)
        setEmail(email)
        setUserImg(img_uri)
    }, [user])

    useEffect(() => {
        if(blobUrl) {
            setUserImg(blobUrl)
            uploadPhoto(blobUrl)
        }
    }, [blobUrl])

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
        <Authenticated>
            <Head>
                <title>{formatMessage({id: 'title.profile'})}</title>
            </Head>
            <Model title={'model.title'} description={'model.description'} open={showAlert} close={setShowAlert} acceptor={onSubmit} />
            <AuthLayout title="title.profile">
                <Avatar userImg={userImg} takePhoto={takePhoto} />
                <Details name={name} email={email} userName={setName} password={setPassword} showAlert={setShowAlert} />
            </AuthLayout>
            <br className="mt-10"></br>
        </Authenticated>
    )
}


