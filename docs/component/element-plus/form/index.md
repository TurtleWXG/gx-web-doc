# GXForm

<script setup lang="ts">
import GXFormDemo1 from './components/dome-1.vue'
</script>

## 基础示例

<GXFormDemo1 />

::: details 阅览代码

```vue
<script setup lang="ts">
import { Default, FieldName, ClassName, BaseModel, EPFormItemConfig, useStateRef } from '@gx-web/tool'
import { GXForm } from '@gx-web/component'
import { defineComponent, h } from 'vue'
import { ElInput } from 'element-plus'

@ClassName('登录')
class UserSearchVO extends BaseModel {
  /**
   * ### 用户名
   */
  @EPFormItemConfig({
    render: (form) => defineComponent({
        setup() {
          return () => h(ElInput, {
            'modelValue': form.username,
            'onUpdate:modelValue': (val: string) => form.username = val
          })
        }
      }),
    sort: 0
  })
  @Default('')
  @FieldName('用户名')
  username!: string
}

const [form,,resetForm] = useStateRef(() => UserSearchVO.fromJson())
</script>

<template>
  <GXForm v-model="form" :class-entity="UserSearchVO" @reset="resetForm"></GXForm>
</template>

<style lang="scss" scoped>

</style>
```

:::
