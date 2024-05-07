function Page(props) {

    return (
        <main className='flex justify-center items-center grow bg-Verdecito'>
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className='text-3xl font-semibold tracking-tight text-White'>{props.title}</h2>
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default Page