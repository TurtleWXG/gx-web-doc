# 断言

## assertArrEqual

断言 两个数组相等(基础数据类型)
@param arr1 数组1
@param arr2 数组2

- 类型
  
```ts
/**
 * 断言 两个数组相等(基础数据类型)
 * @param arr1 数组1
 * @param arr2 数组2
 */
const assertArrEqual: (arr1: (string | number)[], arr2: (string | number)[]) => boolean;
```

## assertServer

断言 浏览器环境

- 类型
  
```ts
/**
 * 断言 浏览器环境
 */
const assertServer: () => boolean;
```

## assertClient

- 类型
  
```ts
/**
 * 断言 服务端环境
 */
 const assertClient: () => boolean;
```

## assertUrl

- 类型
  
```ts
/**
 * 断言 地址URL
 * @param path 地址URL
 * @example
 * assertUrl('https://www.bing.com') // true
 */
 const assertUrl: (path: string) => boolean;
```

## assertDark

- 类型

```ts
/**
 * 断言 黑暗模式
 */
const assertDark: () => boolean;
```
