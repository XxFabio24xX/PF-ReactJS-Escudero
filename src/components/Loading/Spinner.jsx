import 'boxicons';
import Page from "../Page";


function Loading() {
    return(
        <Page>
            <div className='flex justify-center items-center p-4'>
                <box-icon name='loader-alt' animation='spin' color='#ffffff' size='72px'></box-icon>
            </div>
        </Page>
    )
};

export  default Loading;