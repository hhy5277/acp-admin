export const getMenuListByAppId = () => {
  return [{
    'id': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '系统配置',
    'iconType': 'el-icon-s-tools',
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'enabled': true,
    'covert': false,
    'openType': 0,
    'sort': 0,
    'children': [{
      'id': 'dbdb15db-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '机构配置',
      'iconType': 'md-git-network',
      'path': '/orgconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 4,
      'children': []
    }, {
      'id': 'dbda2254-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '应用配置',
      'iconType': 'md-apps',
      'path': '/appconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 0,
      'children': []
    }, {
      'id': 'dbda5bf9-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '角色配置',
      'iconType': 'md-contacts',
      'path': '/roleconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 1,
      'children': []
    }, {
      'id': 'dbdadf09-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '用户配置',
      'iconType': 'md-people',
      'path': '/userconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 3,
      'children': []
    }, {
      'id': 'dbdb5115-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '运行参数配置',
      'iconType': 'md-build',
      'path': '/runtimeconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 5,
      'children': []
    }, {
      'id': 'dbdaa27b-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '权限配置',
      'iconType': 'md-key',
      'path': '/authconfig',
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 2,
      'children': []
    }]
  }, {
    'id': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': 'demo',
    'iconType': 'md-laptop',
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'enabled': true,
    'covert': true,
    'openType': 0,
    'sort': 1,
    'children': [{
      'id': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '多级菜单',
      'iconType': 'md-funnel',
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'openType': 0,
      'sort': 1,
      'children': [{
        'id': 'dbdc90b0-19fb-11e9-894e-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '普通页面',
        'iconType': 'md-funnel',
        'path': '/demo4?name=123',
        'parentId': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'enabled': true,
        'covert': true,
        'openType': 0,
        'sort': 0,
        'children': []
      }, {
        'id': 'dbdcd7a2-19fb-11e9-894e-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '很长很长的菜单名称用以测试显示效果',
        'iconType': 'md-funnel',
        'path': '/demo4?name=long%20long%20ago',
        'parentId': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'enabled': true,
        'covert': true,
        'openType': 0,
        'sort': 1,
        'children': []
      }]
    }, {
      'id': 'dbdc0cd5-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '上传',
      'iconType': 'md-cloud-upload',
      'path': '/demo_upload',
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'openType': 0,
      'sort': 0,
      'children': []
    }, {
      'id': 'dbdd18fc-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '页面跳转',
      'iconType': 'md-funnel',
      'path': 'http://www.baidu.com',
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'openType': 1,
      'sort': 2,
      'children': []
    }]
  }, {
    'id': 'dbdd5362-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '顶层菜单，名字长一点查看显示效果',
    'iconType': 'md-funnel',
    'path': '/demo4?name=in%20dialog',
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'enabled': true,
    'covert': true,
    'openType': 0,
    'sort': 2,
    'children': []
  }]
}

export const getModuleFuncListByAppId = () => {
  return [{
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794af500-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '审批',
      'code': 'flow_approve',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794b3d42-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '流程图查看',
      'code': 'flow_diagram',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794b18f2-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '历史记录查看',
      'code': 'flow_history',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794ad425-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '查看待办任务',
      'code': 'flow_pending',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794aaed3-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '发起流程',
      'code': 'flow_start',
      'covert': false
    }],
    'id': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '工作流处理',
    'code': 'flow_process',
    'covert': false
  }, {
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79459723-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'app_add',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7945c0f8-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'app_delete',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79460ac1-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'app_query',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7945e423-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'app_update',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794634ad-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新密钥',
        'code': 'app_update_secret',
        'covert': false
      }],
      'id': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '应用配置',
      'code': 'app_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794905cd-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'auth_add',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79492e96-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'auth_delete',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79497819-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'auth_query',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794953cc-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'auth_update',
        'covert': false
      }],
      'id': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '权限配置',
      'code': 'auth_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79479029-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'org_add',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7947b154-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'org_delete',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79489f70-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'org_query',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7948726e-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'org_update',
        'covert': false
      }],
      'id': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '机构配置',
      'code': 'org_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79468cab-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'roleconf_add',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7946bf02-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'roleconf_delete',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79474405-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'roleconf_query',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79470569-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'roleconf_update',
        'covert': false
      }],
      'id': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '角色配置',
      'code': 'roleconf_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7944d328-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'runtime_add',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7944f896-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'runtime_delete',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79454042-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'runtime_query',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79451c27-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'runtime_update',
        'covert': false
      }],
      'id': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '运行参数配置',
      'code': 'runtime_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7949e07f-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'user_add',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a1b24-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'user_delete',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a62a9-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'user_query',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a3fef-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'user_update',
        'covert': false
      }],
      'id': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '用户配置',
      'code': 'user_config',
      'covert': false
    }],
    'id': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '系统配置',
    'code': 'sys_config',
    'covert': false
  }]
}
export const getModuleFuncCodeList = () => {
  return ['other', 'sys_config', 'runtime_config', 'runtime_add', 'runtime_delete', 'runtime_update', 'runtime_query', 'app_config', 'app_add', 'app_delete', 'app_update', 'app_query', 'app_update_secret', 'org_config', 'org_add', 'org_delete', 'org_update', 'org_query', 'roleconf_config', 'roleconf_add', 'roleconf_delete', 'roleconf_update', 'roleconf_query', 'auth_config', 'auth_add', 'auth_delete', 'auth_update', 'auth_query', 'user_config', 'user_add', 'user_delete', 'user_update', 'user_query', 'flow_process', 'flow_start', 'flow_pending', 'flow_approve', 'flow_history', 'flow_diagram']
}
export const getAllMenuList = () => {
  return [{
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbda2254-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '应用配置',
      'iconType': 'el-icon-s-tools',
      'path': '/appconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 0
    }, {
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbda5bf9-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '角色配置',
      'iconType': 'md-contacts',
      'path': '/roleconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 1
    }, {
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdaa27b-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '权限配置',
      'iconType': 'md-key',
      'path': '/authconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 2
    }, {
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdadf09-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '用户配置',
      'iconType': 'md-people',
      'path': '/userconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 3
    }, {
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdb15db-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '机构配置',
      'iconType': 'md-git-network',
      'path': '/orgconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 4
    }, {
      'parentId': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdb5115-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '运行参数配置',
      'iconType': 'md-build',
      'path': '/runtimeconfig',
      'enabled': true,
      'covert': false,
      'openType': 0,
      'sort': 5
    }],
    'id': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '系统配置',
    'iconType': 'md-settings',
    'enabled': true,
    'covert': false,
    'openType': 0,
    'sort': 0
  }, {
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdc0cd5-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '上传',
      'iconType': 'md-cloud-upload',
      'path': '/demo_upload',
      'enabled': true,
      'covert': true,
      'openType': 0,
      'sort': 0
    }, {
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentId': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdc90b0-19fb-11e9-894e-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '普通页面',
        'iconType': 'md-funnel',
        'path': '/demo4?name=123',
        'enabled': true,
        'covert': true,
        'openType': 0,
        'sort': 0
      }, {
        'parentId': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdcd7a2-19fb-11e9-894e-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '很长很长的菜单名称用以测试显示效果',
        'iconType': 'md-funnel',
        'path': '/demo4?name=long%20long%20ago',
        'enabled': true,
        'covert': true,
        'openType': 0,
        'sort': 1
      }],
      'id': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '多级菜单',
      'iconType': 'md-funnel',
      'enabled': true,
      'covert': true,
      'openType': 0,
      'sort': 1
    }, {
      'parentId': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdd18fc-19fb-11e9-894e-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '页面跳转',
      'iconType': 'md-funnel',
      'path': 'http://www.baidu.com',
      'enabled': true,
      'covert': true,
      'openType': 1,
      'sort': 2
    }],
    'id': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': 'demo',
    'iconType': 'md-laptop',
    'enabled': true,
    'covert': true,
    'openType': 0,
    'sort': 1
  }, {
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [],
    'id': 'dbdd5362-19fb-11e9-894e-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '顶层菜单，名字长一点长一点再长一点点',
    'iconType': 'md-funnel',
    'path': '/demo4?name=in%20dialog',
    'enabled': true,
    'covert': true,
    'openType': 0,
    'sort': 2
  }]
}
export const getAllModuleFuncList = () => {
  return [{
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794af500-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '审批',
      'code': 'flow_approve',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794b3d42-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '流程图查看',
      'code': 'flow_diagram',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794b18f2-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '历史记录查看',
      'code': 'flow_history',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794ad425-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '查看待办任务',
      'code': 'flow_pending',
      'covert': false
    }, {
      'parentId': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [],
      'id': '794aaed3-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '发起流程',
      'code': 'flow_start',
      'covert': false
    }],
    'id': '794a8ad1-8e7a-11e9-9bab-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '工作流处理',
    'code': 'flow_process',
    'covert': false
  }, {
    'parentId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'children': [{
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79459723-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'app_add',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7945c0f8-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'app_delete',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79460ac1-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'app_query',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7945e423-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'app_update',
        'covert': false
      }, {
        'parentId': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794634ad-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新密钥',
        'code': 'app_update_secret',
        'covert': false
      }],
      'id': '7945654d-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '应用配置',
      'code': 'app_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794905cd-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'auth_add',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79492e96-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'auth_delete',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79497819-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'auth_query',
        'covert': false
      }, {
        'parentId': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794953cc-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'auth_update',
        'covert': false
      }],
      'id': '7948dcab-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '权限配置',
      'code': 'auth_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79479029-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'org_add',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7947b154-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'org_delete',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79489f70-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'org_query',
        'covert': false
      }, {
        'parentId': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7948726e-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'org_update',
        'covert': false
      }],
      'id': '79476c32-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '机构配置',
      'code': 'org_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79468cab-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'roleconf_add',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7946bf02-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'roleconf_delete',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79474405-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'roleconf_query',
        'covert': false
      }, {
        'parentId': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79470569-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'roleconf_update',
        'covert': false
      }],
      'id': '79465d59-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '角色配置',
      'code': 'roleconf_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7944d328-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'runtime_add',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7944f896-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'runtime_delete',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79454042-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'runtime_query',
        'covert': false
      }, {
        'parentId': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '79451c27-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'runtime_update',
        'covert': false
      }],
      'id': '79448f48-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '运行参数配置',
      'code': 'runtime_config',
      'covert': false
    }, {
      'parentId': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
      'children': [{
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '7949e07f-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '新增',
        'code': 'user_add',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a1b24-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '删除',
        'code': 'user_delete',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a62a9-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '查询',
        'code': 'user_query',
        'covert': false
      }, {
        'parentId': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
        'children': [],
        'id': '794a3fef-8e7a-11e9-9bab-d8c49792dd7b',
        'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
        'name': '更新',
        'code': 'user_update',
        'covert': false
      }],
      'id': '7949a515-8e7a-11e9-9bab-d8c49792dd7b',
      'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
      'name': '用户配置',
      'code': 'user_config',
      'covert': false
    }],
    'id': '79442bdf-8e7a-11e9-9bab-d8c49792dd7b',
    'appId': '8a80cb816c0a5d4f016c0a5e0c020000',
    'name': '系统配置',
    'code': 'sys_config',
    'covert': false
  }]
}
export const getMenuInfo = () => {
  return {
    'id': '4688c606-1d33-11e9-a49e-d8c49792dd7b',
    'appId': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'name': '新菜单',
    'iconType': 'md-funnel',
    'path': '/',
    'parentId': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'enabled': false,
    'openType': 0,
    'sort': 1,
    'roleIds': []
  }
}
export const getModuleFuncInfo = () => {
  return {
    'parentId': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'children': [],
    'id': 'b43d56df-1d34-11e9-a49e-d8c49792dd7b',
    'appId': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'name': '新模块功能',
    'code': 'other',
    'covert': true
  }
}
export const deleteAuth = () => {
  return { 'message': '删除成功' }
}
