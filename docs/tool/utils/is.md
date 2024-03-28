# 类型守卫

> 主要用于TypeScript类型缩小或者类型断言

## isDef

类型守卫 undefined

- 类型

  ```ts
  <T = unknown>(val?: T | undefined) => val is undefined;
  ```

## isUnDef

类型守卫 非 undefined

- 类型

  ```ts
  <T = unknown>(val?: T | undefined) => val is T;
  ```

## isNull

类型守卫 null

- 类型

  ```ts
  (val: unknown) => val is null;
  ```

## isNullOrUnDef

类型守卫 null 或 undefined

- 类型

  ```ts
  (val: unknown) => val is null | undefined;
  ```

## isObject

类型守卫 object

- 类型

  ```ts
  (val: any) => val is Record<any, any>;
  ```

## isNumber

类型守卫 number

- 类型

  ```ts
  (val: unknown) => val is number;
  ```

## isDate

类型守卫 date

- 类型

  ```ts
  (val: unknown) => val is Date;
  ```

## isPromise

类型守卫 promise

- 类型

  ```ts
  <T = any>(val: any) => val is Promise<T>;
  ```

## isString

类型守卫 string

- 类型

  ```ts
  (val: unknown) => val is string;
  ```

## isFunction

类型守卫 function

- 类型

  ```ts
  (val: unknown) => val is Function;
  ```

## isBoolean

类型守卫 boolean

- 类型

  ```ts
  (val: unknown) => val is boolean;
  ```

## isRegExp

类型守卫 RegExp

- 类型

  ```ts
  (val: unknown) => val is RegExp;
  ```

## isArray

类型守卫 array

- 类型

  ```ts
  (val: any) => val is any[];
  ```

## isWindow

类型守卫 Window

- 类型

  ```ts
  (val: any) => val is Window;
  ```

## isElement

类型守卫 Element

- 类型

  ```ts
  (val: unknown) => val is Element;
  ```

## isMap

类型守卫 Map

- 类型

  ```ts
  (val: unknown) => val is Map<any, any>;
  ```

## isEmpty

类型守卫 空值

- 类型

  ```ts
  <T = unknown>(val: T) => val is T;
  ```
