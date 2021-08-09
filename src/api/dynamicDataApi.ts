const DynamicDataApi: DataApi = {
    getMenus() {
        return new Promise((resolve, reject) => {
            resolve({
                code: '000000',
            })
        })
    }
}

export default DynamicDataApi;