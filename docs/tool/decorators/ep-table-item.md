# EPTableItem 列表项 <Badge text="1.1.0" />

为字段设置`ElTableItem`的配置项

结合`@gx-web/component`中的`GXTable`组件渲染列表

## 示例

### 基础示例

```ts{7}
import { EPTableItem, FieldName, BaseModel } from '@gx-web/tool'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPTableItem()
  @FieldName('用户名称')
  username!: string
}

UserVO.getEPFormItems() // => [{ label: '用户名称', prop: 'username' }]
```

### 覆盖`label`

```ts{7-9}
import { EPTableItem, FieldName, BaseModel } from '@gx-web/tool'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPTableItem({
    label: '用户'
  })
  @FieldName('用户名称')
  username!: string
}

UserVO.getEPFormItems() // => [{ label: '用户', prop: 'username' }]
```

### render

原生标签

```ts{2,8-12}
import { EPTableItem, FieldName, BaseModel } from '@gx-web/tool'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPTableItem({
    render: ({ row }) => defineComponent(() => {
      return () => h('div', row.username)
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

组件

```ts{2,3,11}
import { EPTableItem, FieldName, BaseModel } from '@gx-web/tool'
import { ElTag } from 'element-plus'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPTableItem({
    render: ({ row }) => defineComponent(() => {
      return () => h(ElTag, row.username)
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

TSX示例

```tsx{2,3,8-14}
import { EPTableItem, FieldName, BaseModel } from '@gx-web/tool'
import { ElTag } from 'element-plus'
import { defineComponent, h } from 'vue'

export class UserVO extends BaseModel {
  /**
   * **用户名称**
   */
  @EPTableItem({
    render: ({ row }) => defineComponent(() => {
      return () => (
        <ElTag>{{ row.username }}</ElTag>
      )    
    })
  })
  @FieldName('用户名称')
  username!: string
}
```

## API

### 属性

```ts
import type { defineComponent } from 'vue'

export interface EPTableItemConfigType<T> {
  /**
   * ### 是否隐藏
   */
  hide?: boolean

  /**
   * ### 列名
   */
  label?: string

  /**
   * ### 字段名
   */
  prop?: string

  /**
   * ### 列的宽度
   */
  width?: string | number

  /**
   * ### 列的最小宽度
   */
  minWidth?: string | number

  /**
   * ### 排序
   */
  sort?: number

  /**
   * ### 列是否固定在左侧或右侧
   */
  fixed?: boolean | 'left' | 'right'

  /**
   * ### 列内容的对齐方式
   */
  align?: 'left' | 'center' | 'right'

  /**
   * ### 列头内容的对齐方式
   */
  headerAlign?: 'left' | 'center' | 'right'

  /**
   * ### 自定义列内容渲染
   */
  render?: (scope: { row: T; column: any; $index: number }) => ReturnType<typeof defineComponent>

  /**
   * ### 自定义列头渲染
   */
  headerRender?: (scope: { column: any; $index: number }) => ReturnType<typeof defineComponent>
}
```
