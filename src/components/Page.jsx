function Page(props) {

    return (
        <main className='flex justify-center items-center grow mi-main'>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className='text-2xl font-bold tracking-tight text-gray-900'>{props.title}</h2>
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default Page