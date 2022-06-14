import React from 'react';
import Image from 'next/image';
import TextEditor from 'components/TextEditor'
export default function CreatePost() {
    return (
        <React.Fragment>
            <section className="bg-[#F4F7FF] py-[50px] flex justify-center">
                <div className="container">
                    <div
                        className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                    >
                        <div className="mb-10 text-center md:mb-16">
                            <Image src="/logo/logokoora.svg" width={'400px'} height={'120px'} alt="logo"/>
                        </div>
                        <form>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bordder-[#E9EDF4] w-full rounded-md border-0 bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                            <TextEditor />
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="bordder-[#E9EDF4] w-full rounded-md border-0 bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                            <div className="mb-10">
                                <input
                                    type="submit"
                                    value="موافق"
                                    className="w-full cursor-pointer rounded-md border-0 bg-[#45b97c] py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}