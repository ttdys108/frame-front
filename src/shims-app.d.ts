interface FrameConfig {
    publicPath: string;

}

interface Window {
    __QIANKUN_STARTED__: boolean;
    FRAME_CONFIG: FrameConfig;
}