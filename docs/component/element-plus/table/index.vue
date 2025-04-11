<script setup lang="ts">
import { Default, FieldName, ClassName, BaseModel, EPTableItemConfig, randomArray } from '@gx-web/tool'
import { GXTable } from '@gx-web/component'

@ClassName('登录')
class LoginFormVO extends BaseModel {
  /**
   * ### 账号
   */
  @EPTableItemConfig({
    sort: 0
  })
  @Default('')
  @FieldName('账号')
  username!: string

  /**
   * ### 密码
   */
  @EPTableItemConfig({
    sort: 1
  })
  @Default('')
  @FieldName('密码')
  password!: string

  /**
   * ### 验证码
   */
  @Default('')
  @FieldName('验证码')
  code?: string
}

const list = randomArray(10, {
  username: '@CName',
  password: '@Id',
})
</script>

<template>
  <div style="height: 200px;">
    <GXTable border :data="list" :class-entity="LoginFormVO">
      <template #action>
        <ElButton type="primary" text>编辑</ElButton>
      </template>
    </GXTable>
  </div>
</template>

<style lang="scss" scoped>

</style>
