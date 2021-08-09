interface RootState {
    app: AppStoreState;
}

interface AppStoreState {
    menuInit: boolean;
    menus?: Menu[];
    topMenus?: Menu[];
    currentTopMenuId?: string;
    sideMenus?: Menu[];
}