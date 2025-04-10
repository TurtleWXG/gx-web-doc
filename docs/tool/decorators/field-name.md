# FieldName 字段名 <Badge text="1.1.0" />

为字段添加名称

## 示例

```ts{7}
import { FieldName, BaseModel } from '@gx-web/tool'

class UserVO extends BaseModel {
  /**
   * ### 用户名称
   */
  @FieldName('用户名称')
  userName!: string
}

UserVO.getFieldName('userName') // =>> '用户名称'
```
