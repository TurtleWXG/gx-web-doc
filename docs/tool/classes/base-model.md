# BaseModel <Badge text="1.1.0" />

<script setup lang="ts">
import { Default, FieldName, ClassName, BaseModel, useStateRef } from '@gx-web/tool'

@ClassName('登录')
class LoginFormVO extends BaseModel {
  /**
   * ### 账号
   */
  @Default('')
  @FieldName('账号')
  username!: string

  /**
   * ### 密码
   */
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

const [form] = useStateRef(() => LoginFormVO.fromJson())

const name = LoginFormVO.getClassName()

const usernameCN = LoginFormVO.getFieldName('username')
</script>

## 说明

BaseModel 是一个用于处理数据模型和数据转换的基类，它提供了一些通用的方法和属性，用于简化数据处理逻辑

## 装饰器

通过继承`BaseModel`后，在继承类结合装饰器进行数据处理，可以获取到装饰器设置的属性，并使用这些属性进行数据处理

## 基础示例

```ts
import { 
  Default, 
  FieldName, 
  ClassName, 
  BaseModel, 
  useStateRef 
} from '@gx-web/tool'

@ClassName('登录')
class LoginFormVO extends BaseModel {
  /**
   * ### 账号
   */
  @Default('')
  @FieldName('账号')
  username!: string

  /**
   * ### 密码
   */
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

// 定义变量， 提供设置以及重置方法， form还能支持类型提示
const [form, setForm, resetForm] = useStateRef(() => LoginFormVO.fromJson())

// 获取类说明名，可以在标题名称引入，达到统一管理
const name = LoginFormVO.getClassName()

// 获取属性说明名，可以在表单项名称引入，达到统一管理
const usernameCN = LoginFormVO.getFieldName('username')
```

form => {{ form }}

usernameCN => {{ usernameCN }}

name => {{ name }}

## API

### 属性

```ts
import type { ConstructorType, EPDescriptionsConfigType, EPDescriptionsItemConfigType, EPFormItemConfigType, EPTableItemConfigType } from '../types/decorator';
export declare class BaseModel {
    /**
     * ### 实例化类
     * #### 如类中存在原型属性设置了Default装饰器, 进行覆盖实例化类
     * @param json 最高优先级覆盖实例属性以及装饰属性
     */
    static fromJson<TClass extends BaseModel>(this: ConstructorType<TClass>, json?: Partial<TClass>): TClass;
    /**
     * ### 获取类的可阅读名字
     */
    static getClassName<TClass extends BaseModel>(this: ConstructorType<TClass>): string;
    /**
     * ### 获取属性的可阅读名字
     * @param fieldKey 属性名
     */
    static getFieldName<TClass extends BaseModel>(this: ConstructorType<TClass>, fieldKey: keyof TClass): string;
    /**
     * ### 获取通过ElTableItem装饰的字段配置
     */
    static getEPTableItems<TClass extends BaseModel>(this: ConstructorType<TClass>): EPTableItemConfigType<TClass>[];
    /**
     * ### 获取通过ElFormItem装饰的字段配置
     */
    static getEPFormItems<TClass extends BaseModel>(this: ConstructorType<TClass>): EPFormItemConfigType<TClass>[];
    /**
     * ### 获取通过ElDescriptions装饰的配置
     */
    static getEPDescriptions<TClass extends BaseModel>(this: ConstructorType<TClass>): EPDescriptionsConfigType<TClass>;
    /**
     * ### 获取通过ElDescriptionsItem装饰的字段配置
     */
    static getEPDescriptionsItems<TClass extends BaseModel>(this: ConstructorType<TClass>): EPDescriptionsItemConfigType<TClass>[];
}
```
