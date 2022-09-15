import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Chart() {
  return (
    <React.Fragment>
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {/* Start */}
                    <div className="w-full h-80 p-3">
                        <div className="bg-white border border-coolGray-100 rounded-md shadow-sm select-none h-[100px] m-0 flex items-center justify-between px-8">
                            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-right text-[24px] text-coolGray-900 tracking-tighter flex flex-col">
                                12   
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </React.Fragment>
  );
}