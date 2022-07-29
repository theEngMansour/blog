
export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-7">
            <article className="flex h-[100px] items-center gap-4 p-6 bg-white shadow-sm border border-gray-100 rounded-lg sm:justify-between">
                <span className="p-3 text-blue-600 bg-green-500 rounded-full sm:order-last"></span>
                <div>
                    <p className="text-2xl font-bold text-gray-900 m-0 select-none">240</p>
                    <p className="text-sm text-gray-400 m-0 select-none">المقالات</p>
                </div>
            </article>
            <article className="flex h-[100px] items-center gap-4 p-6 bg-white shadow-sm border border-gray-100 rounded-lg sm:justify-between">
                <span className="p-3 text-blue-600 bg-yellow-500 rounded-full sm:order-last"></span>
                <div>
                    <p className="text-2xl font-bold text-gray-900 m-0 select-none">240</p>
                    <p className="text-sm text-gray-400 m-0 select-none">المقالات</p>
                </div>
            </article>
            <article className="flex h-[100px] items-center gap-4 p-6 bg-white shadow-sm border border-gray-100 rounded-lg sm:justify-between">
                <span className="p-3 text-blue-600 bg-blue-500 rounded-full sm:order-last"></span>
                <div>
                    <p className="text-2xl font-bold text-gray-900 m-0 select-none">240</p>
                    <p className="text-sm text-gray-400 m-0 select-none">المقالات</p>
                </div>
            </article>
            <article className="flex h-[100px] items-center gap-4 p-6 bg-white shadow-sm border border-gray-100 rounded-lg sm:justify-between">
                <span className="p-3 text-blue-600 bg-gray-500 rounded-full sm:order-last"></span>
                <div>
                    <p className="text-2xl font-bold text-gray-900 m-0 select-none">240</p>
                    <p className="text-sm text-gray-400 m-0 select-none">المقالات</p>
                </div>
            </article>
            <div className="bg-white h-[100px] md:col-start-1 md:col-end-5  sm:col-start-1 sm:col-end-3 shadow-sm border border-gray-100 rounded-lg">
                Data
            </div>
        </div> 
    )
}