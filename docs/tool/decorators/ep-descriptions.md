# EPDescriptions 描述列表 <Badge text="1.1.0" />

设置`ElDescriptions`的配置项

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

## 标题插槽

`titleRender`优先级大于`title`

```ts{4-7,12}
import { EPDescriptionsConfig, EPDescriptionsItemConfig, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

@EPDescriptionsConfig({
  title: '用户详情',
  titleRender: () => h('div', '用户详情插槽')
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

## API

### 属性

```ts
import type { defineComponent } from 'vue'

export interface EPDescriptionsConfigType<T> {
  /**
   * ### 是否带有边框
   * @default false
   */
  border?: boolean

  /**
   * ### 一行 `Descriptions Item` 的数量
   * @default 3
   */
  column?: number

  /**
   * ### 排列的方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical'

  /**
   * ### 列表的尺寸
   */
  size?: '' | 'large' | 'default' | 'small'

  /**
   * ### 标题文本，显示在左上方
   */
  title?: string

  /**
   * ### 操作区文本，显示在右上方
   */
  extra?: string

  /**
   * ### 每一列的标签宽度
   * #### v2.8.8生效
   */
  labelWidth?: string | number

  /**
   * ### 自定义标题，显示在左上方
   */
  titleRender?: (form: T) => ReturnType<typeof defineComponent>

  /**
   * ### 自定义操作区，显示在右上方
   */
  extraRender?: (form: T) => ReturnType<typeof defineComponent>
}
```
