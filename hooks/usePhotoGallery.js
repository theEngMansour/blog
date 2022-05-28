import { useState } from 'react';
import { useIntl } from 'react-intl';
import { 
    Camera, 
    CameraResultType, 
    CameraSource 
} from '@capacitor/camera';

export function usePhotoGallery () {
    const [blobUrl, setBlobUrl] = useState()
    const { formatMessage } = useIntl()
    const takePhoto = async () => {
        try {
            const cameraPhoto = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Prompt,
                quality: 70,
                promptLabelHeader: formatMessage({ id: 'prompt.label.header'}),
                promptLabelPhoto: formatMessage({ id: 'prompt.label.photo'}),
                promptLabelPicture: formatMessage({ id: 'prompt.label.picture'})
            })
            setBlobUrl(cameraPhoto.webPath)
        } catch(e) {
            console.log(formatMessage({ id: 'close.camera'}));
        }
    }

    return {
        takePhoto,
        blobUrl
    }
}