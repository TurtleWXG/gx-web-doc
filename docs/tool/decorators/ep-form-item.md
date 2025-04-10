# EPFormItem 表单项 <Badge text="1.1.0" />

为字段设置`ElFormItem`的配置项

结合`@gx-web/component`中的`GXForm`组件渲染表单

## 示例

### 基础示例

原生写法

```ts{2,8-15}
import { EPFormItem, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPFormItem({
    render: form => defineComponent(() => {
      return () => h(ElInput, {
        'modelValue': form.username,
        'onUpdate:modelValue': (val: string) => form.username = val
      })
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

setup 写法

```ts{2,8-17}
import { EPFormItem, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPFormItem({
    render: form => defineComponent({
      setup() {
        return () => h(ElInput, {
          'modelValue': form.username,
          'onUpdate:modelValue': (val: string) => form.username = val
        })
      }
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

tsx写法

```tsx{2,,8-16}
import { EPFormItem, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPFormItem({
    render: form => defineComponent({
      setup() {
        return () => (
          <ElInput v-model={form.username} />
        )
      }
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

### 栅格布局

TODO

### 表单校验项

TODO

## API

### 属性

```ts
import type { defineComponent } from 'vue'
import type { RuleItem } from 'async-validator'

export interface EPFormItemConfigType<T> {
  /**
   * ### model 的键名
   */
  prop?: string

  /**
   * ### 标签文本
   */
  label?: string

  /**
   * ### 表单域标签的位置
   */
  labelPosition?: 'left' | 'right' | 'top'

  /**
   * ### 标签宽度，例如 '50px'， 可以使用 auto
   */
  labelWidth?: string | number

  /**
   * ### 是否为必填项，如不设置，则会根据校验规则确认
   */
  required?: boolean

  /**
   * ### 表单验证规则
   */
  rules?: Arrayable<FormItemRule>

  /**
   * ### 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。
   */
  error?: string

  /**
   * ### 是否显示校验错误信息
   */
  showMessage?: boolean

  /**
   * ### 是否在行内显示校验信息
   */
  inlineMessage?: string | boolean

  /**
   * ### 用于控制该表单域下组件的默认尺寸
   */
  size?: '' | 'large' | 'default' | 'small'

  /**
   * ### 和原生标签相同能力
   */
  for?: string

  /**
   * ### form-item 校验的状态
   */
  validateStatus?: '' | 'error' | 'validating' | 'success'

  /**
   * ### 排序
   */
  sort?: number

  /**
   * ### 是否隐藏
   */
  hide?: boolean

  /**
   * ### 栅格布局配置
   */
  col?: ColConfigType

  /**
   * ### 自定义列内容渲染
   */
  render?: (form: T) => ReturnType<typeof defineComponent>
}

interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
```
