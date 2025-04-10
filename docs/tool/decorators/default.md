# Default 字段默认值 <Badge text="1.1.0" />

为字段设置默认值

## 示例

```ts{7}
import { Default, BaseModel } from '@gx-web/tool'

class UserVO extends BaseModel {
  /**
   * ### 用户名称
   */
  @Default('')
  userName!: string

  /** 等于以上 */
  userName: string = ''
}

UserVO.fromJson() // => { userName: '' }
```
