# EPDescriptionsItem 描述列表项 <Badge text="1.1.0" />

设置`ElDescriptionsItem`的配置项

结合`@gx-web/component`中的`GXDescriptions`组件渲染

## 基础用法

- `EPDescriptionsConfig`对应`ElDescriptions`的配置项
- `EPDescriptionsItemConfig`对应`ElDescriptionsItem`的配置项

```ts{4-6,11}
import { EPDescriptionsConfig, EPDescriptionsItemConfig, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

@EPDescriptionsConfig({
  title: '用户详情'
})
export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPDescriptionsItemConfig()
  @FieldName('用户名称')
  username!: string
}
```

## 内容插槽

```ts{11-13}
import { EPDescriptionsConfig, EPDescriptionsItemConfig, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

@EPDescriptionsConfig({
  title: '用户详情'
})
export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPDescriptionsItemConfig({
    render: (detail) => h('div', detail.username)
  })
  @FieldName('用户名称')
  username!: string
}
```

## API

### 属性

```ts
import type { defineComponent } from 'vue'

export interface EPDescriptionsItemConfigType<T> {
  /**
   * ### 是否隐藏
   */
  hide?: boolean

  /**
   * ### 字段名
   */
  prop?: string

  /**
   * ### 排序
   */
  sort?: number

  /**
   * ### 标签文本
   */
  label?: string

  /**
   * ### 列的数量
   */
  span?: number

  /**
   * ### 单元格应该跨越的行数 v2.8.1生效
   */
  rowspan?: number

  /**
   * ### 列的宽度，不同行相同列的宽度按最大值设定（如无 `border` ，宽度包含标签与内容）
   */
  width?: string | number

  /**
   * 列的最小宽度，与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列（如无 `border`，宽度包含标签与内容）
   */
  minWidth?: string | number

  /**
   * ### 列标签宽，如果未设置，它将与列宽度相同。 比 `Descriptions` 的 `label-width` 优先级高
   */
  labelWidth?: string | number

  /**
   * ### 列的内容对齐方式（如无 `border`，对标签和内容均生效）
   */
  align?: 'left' | 'center' | 'right'

  /**
   * ### 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 `border`，请使用 align 参数）
   */
  labelAlign?: 'left' | 'center' | 'right'

  /**
   * ### 列的内容自定义类名
   * #### 多个类名用空格隔开
   * @default gx-descriptions-item
   */
  className?: string

  /**
   * ### 列的标签内容自定义类名
   */
  labelClassName?: string

  /**
   * ### 自定义默认内容
   */
  render?: (form: T) => ReturnType<typeof defineComponent>

  /**
   * ### 自定义标签
   */
  labelRender?: (form: T) => ReturnType<typeof defineComponent>
}
```
