interface BaseResponse {
    code: string;
    msg?: string;
}

interface BaseResponse<T> extends BaseResponse {
    data?: T;
}

interface PageQuery {
    pageNo: number;
    pageSize: number;
}

interface PageResponse<T> extends BaseResponse {
    total: number;
    data?: T[];
}

interface DataApi {
    getMenus: () => Promise<BaseResponse<Menu[]>>;

}