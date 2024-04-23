import { Spin } from "antd";
import Page from "../Page";


function Loading() {
    return(
        <Page className="flex justify-center items-center p-4">
            <Spin size="large"/>
        </Page>
    )
};

export  default Loading;