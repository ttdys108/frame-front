const MockDataApi: DataApi = {
    getMenus() {
        return new Promise((resolve, reject) => {
            resolve({
                code: '000000',
                data: menus,
            })
        })
    }
}

const menus: Menu[] = [
    {
        id: '1',
        name: '首页',
        isRoot: true,
        icon: 'mdi-home',
    },
    {
        id: '2',
        name: '企业财资',
        isRoot: true,
        icon: 'mdi-cog-outline',
        children: [
            {
                id: '21',
                parentId: '2',
                name: '产品管理',
                isRoot: false,
                icon: 'mdi-home',
                children: [
                    {
                        id: '221',
                        parentId: '2',
                        name: '记账管理',
                        isRoot: false,
                    },
                ]
            },
            {
                id: '22',
                parentId: '2',
                name: '交易管理',
                icon: 'mdi-cog-outline',
                isRoot: false,
            },
        ]
    },
    {
        id: '3',
        name: '操作员中心',
        isRoot: true,
        icon: 'mdi-shield-key-outline',
        children: [
            {
                id: '31',
                parentId: '3',
                name: '用户管理',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '32',
                parentId: '3',
                name: '菜单设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '33',
                parentId: '3',
                name: '权限设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '311',
                parentId: '3',
                name: '用户管理',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '322',
                parentId: '3',
                name: '菜单设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '333',
                parentId: '3',
                name: '权限设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '314',
                parentId: '3',
                name: '用户管理',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '325',
                parentId: '3',
                name: '菜单设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '336',
                parentId: '3',
                name: '权限设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '317',
                parentId: '3',
                name: '用户管理',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '328',
                parentId: '3',
                name: '菜单设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
            {
                id: '339',
                parentId: '3',
                name: '权限设置',
                icon: 'mdi-shield-key-outline',
                isRoot: false,
            },
        ]
    },
    {
        id: '4',
        name: '工作流系统',
        isRoot: true,
        icon: 'mdi-vector-difference',
        children: [
            {
                id: '41',
                parentId: '3',
                name: '流程管理',
                icon: 'mdi-vector-difference',
                isRoot: false,
            },
        ]
    },
]

export default MockDataApi;