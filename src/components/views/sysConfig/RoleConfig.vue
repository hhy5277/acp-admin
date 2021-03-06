<template>
  <el-row :gutter="16">
    <el-col :lg="{ span: 9 }" style="min-width: 300px;margin-bottom: 16px;">
      <el-card>
        <div style="overflow-x: auto;overflow-y: hidden">
          <el-input v-model="filterText" clearable :placeholder="$t('forms.pleaseEnter') + $t('forms.filterKey')"/>
          <el-tree style="margin-right: 16px;min-height: 100px;margin-top: 10px;" :data="treeData"
                   v-loading="treeLoading"
                   :default-expand-all="true" ref="roleTree" :filter-node-method="filterNode"
                   :expand-on-click-node="false">
            <span class="config-tree-node" slot-scope="{ node, data }">
              <span v-if="data.isApp">{{ node.label }}</span>
              <span v-else @click="treeClick(data)">{{ node.label }}</span>
              <span>
                <el-button
                  v-if="data.isApp"
                  type="text"
                  size="mini"
                  icon="el-icon-plus"
                  :loading="treeLoading"
                  @click="append(data)">
                </el-button>
                <el-button
                  v-else
                  type="text"
                  size="mini"
                  icon="el-icon-minus"
                  :loading="treeLoading"
                  @click="remove(node, data)">
                </el-button>
              </span>
            </span>
          </el-tree>
        </div>
      </el-card>
    </el-col>
    <el-col :lg="{ span: 15 }" v-show="currRole.id&&currRole.id!==''" style="margin-bottom: 16px;">
      <el-card>
        <div slot="header">{{currRoleFullPath}}</div>
        <el-tabs v-model="activeName">
          <el-tab-pane name="basicInfo">
            <span slot="label"><i class="el-icon-info" style="margin-right: 5px"/>{{$t('forms.basicInfo')}}</span>
            <el-form ref="editForm" size="mini" :model="editForm" :rules="ruleEditForm" label-width="60px"
                     v-loading="treeLoading" @submit.native.prevent>
              <el-form-item :label="$t('forms.name')" prop="name">
                <el-input ref="name" v-model="editForm.name" :disabled="treeLoading"
                          :placeholder="$t('forms.pleaseEnter') + $t('forms.name')"
                          @keyup.enter.native="doSave"/>
              </el-form-item>
              <el-form-item :label="$t('forms.code')" prop="code">
                <el-autocomplete v-model="editForm.code" :disabled="treeLoading"
                                 :fetch-suggestions="querySearch"
                                 :placeholder="$t('forms.pleaseEnter') + $t('forms.code')"
                                 @keyup.enter.native="doSave"/>
              </el-form-item>
              <el-form-item :label="$t('forms.level')" prop="levels">
                <el-input-number v-model="editForm.levels" :disabled="treeLoading"
                                 style="width: 100%;max-width: 150px;"
                                 :placeholder="$t('forms.pleaseEnter') + $t('forms.level')" :min="0"
                                 @keyup.enter.native="doSave">
                </el-input-number>
              </el-form-item>
              <el-form-item :label="$t('forms.sort')" prop="sort">
                <el-input-number v-model="editForm.sort" :disabled="treeLoading" style="width: 100%;max-width: 150px;"
                                 :placeholder="$t('forms.pleaseEnter') + $t('forms.sort')" :min="0"
                                 @keyup.enter.native="doSave">
                </el-input-number>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane name="people">
            <span slot="label"><i class="el-icon-user" style="margin-right: 5px"/>{{$t('forms.userList')}}</span>
            <el-transfer :data="optionalUsers" v-model="editForm.userIds" v-loading="treeLoading"
                         :filterable="true" :props="{key:'id'}"
                         :titles="[$t('forms.optional'),$t('forms.selected')]"
                         :button-texts="[$t('forms.buttons.cancel'),$t('forms.buttons.select')]"
                         @change="handleUserListChange">
            </el-transfer>
          </el-tab-pane>
          <el-tab-pane name="menuList">
            <span slot="label"><i class="el-icon-s-order" style="margin-right: 5px"/>{{$t('forms.menuList')}}</span>
            <el-tree ref="menuTree" :data="menuData" :show-checkbox="true" node-key="id"
                     v-loading="treeLoading" :default-expanded-keys="editForm.menuIds"/>
          </el-tab-pane>
          <el-tab-pane name="moduleFuncList">
            <span slot="label"><i class="el-icon-s-grid"
                                  style="margin-right: 5px"/>{{$t('forms.moduleFuncList')}}</span>
            <el-tree ref="moduleFuncTree" :data="moduleFuncData" :show-checkbox="true" node-key="id"
                     v-loading="treeLoading" :default-expanded-keys="editForm.moduleFuncIds"/>
          </el-tab-pane>
        </el-tabs>
        <div style="text-align: center">
          <el-button type="info" :loading="treeLoading" style="margin-right: 20px;"
                     @click="doReset">
            {{$t('forms.buttons.reset')}}
          </el-button>
          <el-button type="primary" :loading="treeLoading" @click="doSave">
            {{$t('forms.buttons.submit')}}
          </el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import {
    sortTreeNodes,
    processTreeNode,
    getTreeFullPathTitle,
    findCheckedTreeNode
  } from '@/libs/tools'

  export default {
    name: 'roleConfig',
    data () {
      return {
        activeName: 'basicInfo',
        treeData: [],
        menuData: [],
        moduleFuncData: [],
        tree_loading: false,
        roleCode: [],
        currRoleFullPath: '',
        currRoleData: {},
        currRole: {},
        editForm: {
          id: '',
          appId: '',
          name: '',
          code: '',
          levels: 999,
          sort: 1,
          userIds: [],
          menuIds: [],
          moduleFuncIds: []
        },
        optionalUsers: [],
        filterText: ''
      }
    },
    computed: {
      ruleEditForm () {
        return {
          name: [{
            required: true,
            message: this.$i18n.t('forms.name') + this.$i18n.t('forms.notEmpty'),
            trigger: 'blur'
          }],
          code: [{
            type: 'string',
            required: true,
            message: this.$i18n.t('forms.code') + this.$i18n.t('forms.notEmpty'),
            trigger: 'none'
          }],
          levels: [{
            type: 'integer',
            required: true,
            message: this.$i18n.t('forms.level') + this.$i18n.t('forms.notEmpty'),
            trigger: 'blur'
          }],
          sort: [{
            type: 'integer',
            required: true,
            message: this.$i18n.t('forms.sort') + this.$i18n.t('forms.notEmpty'),
            trigger: 'blur'
          }]
        }
      },
      treeLoading () {
        return this.tree_loading
      }
    },
    watch: {
      filterText (value) {
        this.$refs.roleTree.filter(value)
      }
    },
    methods: {
      querySearch (queryString, cb) {
        let restaurants = this.roleCode
        let results = queryString ? restaurants.filter(item => {
          return item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        }) : restaurants
        cb(results)
      },
      filterNode (value, data) {
        if (!value || value === '') {
          return true
        }
        return data.label.indexOf(value) !== -1
      },
      refreshTree (clear = true, callBackFun) {
        if (clear) {
          this.clearCurrObj()
        }
        this.tree_loading = true
        this.$api.request.app.getList().then((appRes) => {
          if (appRes) {
            const appData = appRes.data
            for (let i = 0; i < appData.length; i++) {
              const item = appData[i]
              item.isApp = true
              item.appId = item.id
              item.name = item.appName
              item.label = item.appName
              item.sort = i
              item.children = []
            }
            this.tree_loading = true
            this.$api.request.role.getList().then((res) => {
              this.tree_loading = false
              if (res) {
                processTreeNode(res.data)
                for (const item of res.data) {
                  item.parentId = item.appId
                  for (const root of appData) {
                    if (root.id === item.appId) {
                      root.children.push(item)
                    }
                  }
                }
                this.treeData = appData
                if (typeof callBackFun === 'function') {
                  callBackFun()
                }
              }
            }).catch(() => {
              this.tree_loading = false
            })
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      refreshRoleCodeList () {
        this.tree_loading = true
        this.$api.request.role.getCodeList().then((res) => {
          this.tree_loading = false
          if (res) {
            this.roleCode = res.data.map(item => {
              const obj = {}
              obj.value = item
              return obj
            })
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      reloadUserList () {
        this.tree_loading = true
        this.$api.request.user.getModifiableUser().then((res) => {
          this.tree_loading = false
          if (res) {
            this.optionalUsers = res.data.map(item => {
              item.label = item.name + '(' + item.loginNo + ')'
              return item
            })
          }
          this.$nextTick(() => {
            this.$refs['name'].focus()
          })
        }).catch(() => {
          this.tree_loading = false
        })
      },
      reloadMenuList (callBack) {
        this.tree_loading = true
        this.$api.request.auth.getMenuList(this.currRole.appId).then((res) => {
          this.tree_loading = false
          if (res) {
            processTreeNode(res.data)
            this.menuData = res.data
            if (typeof callBack === 'function') {
              callBack()
            }
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      reloadModuleFuncList (callBack) {
        this.tree_loading = true
        this.$api.request.auth.getModuleFuncList(this.currRole.appId).then((res) => {
          this.tree_loading = false
          if (res) {
            processTreeNode(res.data)
            this.moduleFuncData = res.data
            if (typeof callBack === 'function') {
              callBack()
            }
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      clearCurrObj (currRoleId) {
        if (!currRoleId || (currRoleId && currRoleId === this.currRole.id)) {
          this.editForm = {
            id: '',
            name: '',
            code: '',
            levels: 1,
            sort: 0,
            userIds: [],
            menuIds: [],
            moduleFuncIds: []
          }
          this.currRole = {
            id: '',
            appId: '',
            name: '',
            code: '',
            levels: 1,
            sort: 0,
            userIds: [],
            menuIds: [],
            moduleFuncIds: []
          }
          this.currRoleData = {}
        }
      },
      append (data) {
        this.tree_loading = true
        this.$api.request.role.createRole({
          name: this.$i18n.t('forms.new') + this.$i18n.t('forms.role'),
          appId: data.appId,
          sort: data.children.length + 1,
          code: 'BUSINESS',
          levels: 999
        }).then((res) => {
          this.tree_loading = false
          if (res) {
            this.$message.success(this.$i18n.t('messages.createSuccess') + '')
            const children = data.children || []
            processTreeNode([res.data])
            children.push(res.data)
            sortTreeNodes(children)
            this.treeClick(res.data)
            this.$set(data, 'children', children)
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      remove (node, data) {
        this.$confirm(this.$i18n.t('messages.deleteDataConfirm') + ': ' + getTreeFullPathTitle(this.treeData, data.id),
          this.$i18n.t('dialog.confirm') + '', {
            type: 'warning'
          }).then(() => {
          this.tree_loading = true
          this.$api.request.role.deleteRole([data.id]).then((res) => {
            this.tree_loading = false
            if (res) {
              this.$message.success(this.$i18n.t('messages.deleteSuccess') + '')
              const parent = node.parent
              const children = parent.data.children
              const index = children.findIndex(d => d.id === data.id)
              children.splice(index, 1)
              this.clearCurrObj(data.id)
            }
          }).catch(() => {
            this.tree_loading = false
          })
        }).catch(() => {
        })
      },
      treeClick (data) {
        this.tree_loading = true
        this.$api.request.role.getRoleInfo(data.id).then((res) => {
          this.tree_loading = false
          if (res) {
            this.currRoleData = data
            this.currRoleData.userIds = res.data.userIds
            this.currRoleData.menuIds = res.data.menuIds
            this.currRoleData.moduleFuncIds = res.data.moduleFuncIds
            this.currRole = {
              id: this.currRoleData.id,
              appId: this.currRoleData.appId,
              name: this.currRoleData.name,
              code: this.currRoleData.code,
              levels: this.currRoleData.levels,
              sort: this.currRoleData.sort,
              userIds: this.currRoleData.userIds,
              menuIds: this.currRoleData.menuIds,
              moduleFuncIds: this.currRoleData.moduleFuncIds
            }
            this.doReset()
          }
        }).catch(() => {
          this.tree_loading = false
        })
      },
      doSave () {
        this.$refs['editForm'].validate((valid) => {
          if (valid) {
            this.tree_loading = true
            this.$api.request.role.doUpdateRole({
              id: this.editForm.id,
              name: this.editForm.name,
              code: this.editForm.code,
              levels: this.editForm.levels,
              sort: this.editForm.sort,
              userIds: this.editForm.userIds,
              menuIds: this.$refs['menuTree'].getCheckedNodes(false, true).map(item => item.id),
              moduleFuncIds: this.$refs['moduleFuncTree'].getCheckedNodes(false, true).map(item => item.id)
            }).then((res) => {
              this.tree_loading = false
              if (res) {
                this.reloadUserList()
                this.$message.success(this.$i18n.t('messages.saveSuccess') + '')
                this.currRoleData.name = this.editForm.name
                this.currRoleData.label = this.editForm.code !== '' ? this.editForm.name + '(' + this.editForm.code + ')' : this.editForm.name
                this.currRoleData.code = this.editForm.code
                this.currRoleData.levels = this.editForm.levels
                this.currRoleData.sort = this.editForm.sort
                this.currRoleData.userIds = this.editForm.userIds
                this.currRoleData.menuIds = this.$refs['menuTree'].getCheckedNodes(false, true).map(item => item.id)
                this.currRoleData.moduleFuncIds = this.$refs['moduleFuncTree'].getCheckedNodes(false, true).map(item => item.id)
                this.currRole = {
                  id: this.editForm.id,
                  appId: this.editForm.appId,
                  name: this.editForm.name,
                  code: this.editForm.code,
                  levels: this.editForm.levels,
                  sort: this.editForm.sort,
                  userIds: this.editForm.userIds,
                  menuIds: this.$refs['menuTree'].getCheckedNodes(false, true).map(item => item.id),
                  moduleFuncIds: this.$refs['moduleFuncTree'].getCheckedNodes(false, true).map(item => item.id)
                }
                this.editForm.menuIds = this.currRole.menuIds
                this.editForm.moduleFuncIds = this.currRole.moduleFuncIds
                this.reloadMenuList(() => {
                  this.$nextTick(() => {
                    const checkedResult = findCheckedTreeNode(this.menuData, this.editForm.menuIds)
                    this.$refs['menuTree'].setCheckedKeys(checkedResult.checkedIdList)
                  })
                })
                this.reloadModuleFuncList(() => {
                  this.$nextTick(() => {
                    const checkedResult = findCheckedTreeNode(this.moduleFuncData, this.editForm.moduleFuncIds)
                    this.$refs['moduleFuncTree'].setCheckedKeys(checkedResult.checkedIdList)
                  })
                })
                this.refreshTree(false, (() => {
                  this.currRoleFullPath = getTreeFullPathTitle(this.treeData, this.currRole.id)
                  this.$nextTick(() => {
                    this.$refs['name'].focus()
                  })
                }))
              }
            }).catch(() => {
              this.tree_loading = false
            })
          }
        })
      },
      doReset () {
        this.reloadUserList()
        this.$refs['editForm'].resetFields()
        this.editForm = {
          id: this.currRole.id,
          appId: this.currRole.appId,
          name: this.currRole.name,
          code: this.currRole.code,
          levels: this.currRole.levels,
          sort: this.currRole.sort,
          userIds: this.currRole.userIds,
          menuIds: this.currRole.menuIds,
          moduleFuncIds: this.currRole.moduleFuncIds
        }
        this.reloadMenuList(() => {
          this.$nextTick(() => {
            const checkedResult = findCheckedTreeNode(this.menuData, this.editForm.menuIds)
            this.$refs['menuTree'].setCheckedKeys(checkedResult.checkedIdList)
            this.$refs['name'].focus()
          })
        })
        this.reloadModuleFuncList(() => {
          this.$nextTick(() => {
            const checkedResult = findCheckedTreeNode(this.moduleFuncData, this.editForm.moduleFuncIds)
            this.$refs['moduleFuncTree'].setCheckedKeys(checkedResult.checkedIdList)
            this.$refs['name'].focus()
          })
        })
        this.currRoleFullPath = getTreeFullPathTitle(this.treeData, this.currRole.id)
      },
      handleUserListChange (newTargetKeys) {
        this.editForm.userIds = newTargetKeys
      }
    },
    mounted () {
      this.refreshTree()
      this.reloadUserList()
      this.refreshRoleCodeList()
    },
    activated () {
      if (this.currRole.id && this.currRole.id !== '') {
        this.$nextTick(() => {
          this.$refs['name'].focus()
        })
      }
    }
  }
</script>
