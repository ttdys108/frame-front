/**
 * 是否是开发环境
 */
export function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

/**
 * 请求是否成功
 */
export function isSucceed(res: BaseResponse<any>): boolean {
    return res.code === '000000';
}