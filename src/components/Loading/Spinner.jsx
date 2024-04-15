import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Page from "../Page";


function Loading() {
    return(
        <Page className="flex justify-center items-center p-4">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
        </Page>
    )
};

export  default Loading;