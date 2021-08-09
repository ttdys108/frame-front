import DynamicDataApi from "@/api/dynamicDataApi";
import MockDataApi from "@/api/mockDataApi";

const DataApi = window.LOCAL_CONFIG.MOCK_DATA ? MockDataApi : DynamicDataApi;

export default DataApi;