import React, { useState, useEffect } from 'react';
import { Authenticated } from 'layouts';
import { Alert } from '@mui/material'
import { tag } from 'hooks/useTags'
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import Head from 'next/head';

export default function Tag() {
    const router = useRouter()
    const [data, setData] = useState({
        name: '',
        slug: '',
        description: ''
    })
    const [alert, setAlert] = useState([])
    const { formatMessage } = useIntl()

    const changeFormValue = (key, event) => {
        setData({...data, [key]: event.target.value});
    }

    useEffect(() => {
        setTimeout(() => {
            setAlert([])
        }, 10000)
    }, [alert])

    const validate = () => {
        let validationErrors = [];
        let passed = true;
        const { name, slug, description} = data;

        if (name === '') {
          validationErrors.push('الرجاء إدخال العنوان');
          passed = false;
        }
    
        if (slug === '') {
          validationErrors.push('الرجاء إدخال اسم لطيف');
          passed = false;
        }
    
        if (description === '') {
          validationErrors.push('الرجاء إدخال الوصف');
          passed = false;
        }
    
        if (validationErrors.length > 0) {
            setAlert(validationErrors);
        }
        return passed;
    };

    const onSubmit = async () => {  
        if (!validate()) return;
        try {
            await tag(data)
            router.push(`/tag`) 
        } catch(e) {
            setAlert(["اسم لطيف يجب يكون فريد"])
        }
   
    }

    return (
        <Authenticated>
            <Head>
                <title>{formatMessage({id: 'drawer.settings'})}</title>
            </Head>
            <div className="min-h-screen md:px-20 pt-6">
                <div className="rounded-md px-6 max-w-2xl mx-auto">
                    {alert.map((alert, index) => (
                        <Alert key={index} severity='error' sx={{mb:2}}>
                            {alert}
                        </Alert>
                    ))}
                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                                placeholder={
                                    formatMessage({
                                        id: 'title.tag'
                                    })
                                }
                                onChange={(text) => changeFormValue('name', text)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                                placeholder={
                                    formatMessage({
                                        id: 'slug'
                                    })
                                }
                                onChange={(text) => changeFormValue('slug', text)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-4 pr-7 h-36 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                                placeholder={
                                    formatMessage({
                                        id: 'description.tag'
                                    })
                                }
                                onChange={(text) => changeFormValue('description', text)}
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button type="submit"
                                onClick={onSubmit}
                                className="inline-block hover:bg-[#f8931f] px-5 py-3 ml-3 text-sm font-medium text-white bg-[#ef4444] rounded-lg outline-none border-0">
                                {
                                    formatMessage({
                                        id: 'is.ok'
                                    })
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}