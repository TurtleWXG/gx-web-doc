# ClassName 类名 <Badge text="1.1.0" />

为类添加中文描述

## 示例

```ts{3}
import { FieldName, ClassName, BaseModel } from '@gx-web/tool'

@ClassName('用户信息')
class UserVO extends BaseModel {
  /**
   * ### 用户名称
   */
  @FieldName('用户名称')
  userName!: string
}

UserVO.getClassName() // =>> '用户信息'
```
