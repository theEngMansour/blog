import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Dashboard({data}) {
  return (
    <React.Fragment>
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {/* Start */}
                    <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-right text-[24px] text-coolGray-900 tracking-tighter flex flex-col">
                                {data?.posts}
                                <span style={{ fontFamily: "NotoSansArabic"}} className="inline-block text-[#58585A] text-[19px]">
                                    <FormattedMessage id={'my.posts'} />
                                </span>
                            </p>
                            <span className="bg-[#95A3B8] h-5 w-5 rounded-full"></span>
                        </div>
                    </div>
                    {/* End */}
                    <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-right text-[24px] text-coolGray-900 tracking-tighter flex flex-col">
                                {data?.comments}
                                <span style={{ fontFamily: "NotoSansArabic"}} className="inline-block text-[#58585A] text-[19px]">
                                    <FormattedMessage id={'comments'} />
                                </span>
                            </p>
                            <span className="bg-[#36D398] h-5 w-5 rounded-full"></span>
                        </div>
                    </div>
                    {/* Start */}
                    <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-right text-[24px] text-coolGray-900 tracking-tighter flex flex-col">
                                {data?.likes}
                                <span style={{ fontFamily: "NotoSansArabic"}} className="inline-block text-[#58585A] text-[19px]">
                                    <FormattedMessage id={'likes'} />
                                </span>
                            </p>
                            <span className="bg-[#FCBF28] h-5 w-5 rounded-full"></span>
                        </div>
                    </div>
                    {/* End */}
                    <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-right text-[24px] text-coolGray-900 tracking-tighter flex flex-col">
                                {data?.tags} 
                                <span style={{ fontFamily: "NotoSansArabic"}} className="inline-block text-[#58585A] text-[19px]">
                                    <FormattedMessage id={'drawer.tags'} />
                                </span>
                            </p>
                            <span className="bg-[#ef4444] h-5 w-5 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </React.Fragment>
  );
}