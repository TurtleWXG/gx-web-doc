# 校验

## asyncValidate

- 类型

```ts
/**
 * ### 异步校验
 * @param reg 正则表达式
 * @param str 校验字符
 * @param msg 错误提示
 */
export declare function asyncValidate(reg: RegExp, str: string, msg: string): Promise<void>;
```

## validRequired

- 类型

```ts
/**
 * ### 校验必填
 * @param value 校验值
 * @param msg 错误提示(默认值: 该项为必填)
 */
export declare function validRequired(value: string | unknown[], msg?: string): Promise<void>;
```

## validEmail

- 类型

```ts
/**
 * ### 有效的邮箱
 * @param email 需校验的邮箱
 * @param msg 错误提示(默认值: 非有效邮箱)
 */
export declare function validEmail(email: string, msg?: string): Promise<void>;
```

## validChinese

- 类型

```ts
/**
 * ### 有效的中文
 * @param str 需校验的中文
 * @param msg 错误提示(默认值: 非有效中文)
 */
export declare function validChinese(str: string, msg?: string): Promise<void>;
```

## validCName

- 类型

```ts
/**
 * ### 有效的中文姓名(包含·)
 * @param str 需校验的中文姓名
 * @param msg 仅支持中文名称(可包含·)
 */
export declare function validCName(str: string, msg?: string): Promise<void>;
```

## validPhone

- 类型

```ts
/**
 * ### 有效手机号码
 * @param str 需校验的手机号码
 * @param msg 错误提示(默认值: 非有效手机号码)
 */
export declare function validPhone(str: string, msg?: string): Promise<void>;
```

## validTelephone

- 类型

```ts
/**
 * ### 有效固定电话号码
 * @param str 需校验的固定电话号码
 * @param msg 错误提示(默认值: 非有效固定电话号码)
 */
export declare function validTelephone(str: string, msg?: string): Promise<void>;
```

## validLicensePlate

- 类型

```ts
/**
 * ### 有效车牌
 * @param str 需校验的有效车牌
 * @param msg 错误提示(默认值: 非有效车牌)
 */
export declare function validLicensePlate(str: string, msg?: string): Promise<void>;
```

## validIdCard

- 类型

```ts
/**
 * ### 有效身份证号
 * @param str 需校验的身份证号
 * @param msg 错误提示(默认值: 非有效身份证号)
 */
export declare function validIdCard(str: string, msg?: string): Promise<void>;
```

## validNumber

- 类型

```ts
/**
 * ### 有效的数字字符串
 * @param str 需校验的数字字符串
 * @param msg 错误提示(默认值: 非有效数字)
 */
export declare function validNumber(str: string, msg?: string): Promise<void>;
```

## validUnSpecialStr

- 类型

```ts
/**
 * ### 有效非特殊字符(字母、数字、横线(-)、下横线(_))
 * @param str 需校验的数字字符串
 * @param msg 错误提示(默认值: 非有效数字)
 */
export declare function validUnSpecialStr(str: string, msg?: string): Promise<void>;
```
