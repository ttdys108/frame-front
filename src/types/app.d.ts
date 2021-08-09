type Optional<T> = T | undefined;
type Nullable<T> = T | undefined | null;

interface LocalConfig {
    PUBLIC_PATH: string;
    ROUTE_MODE: 'history'|'hash';
    MOCK_DATA: boolean;
}

interface Window {
    __QIANKUN_STARTED__: boolean;
    LOCAL_CONFIG: LocalConfig;
}

interface Menu {
    id: string;
    parentId?: string;
    name: string;
    children?: Menu[];
    isRoot: boolean;
    icon?: string;
}

