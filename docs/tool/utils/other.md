# 其他

## debounce

- 类型

```ts
/**
 * ### 防抖执行函数(在防抖时间结束后才执行一次)
 * @param func 需执行的函数
 * @param wait 防抖时间(默认300ms)
 *
 * @example
 * 每次resize都会触发，但是只会在500ms内执行一次
 * const fn = debounce(() => { console.log('debounce') }, 500)
 * window.addEventListener('resize', fn)
 */
export declare function debounce(func: AnyFn, wait?: number): (...args: any) => void;
```

## throttle

- 类型

```ts
/**
 * ### 节流执行函数(在节流时间结束后才执行一次)
 * @param func 需执行的函数
 * @param delay 节流时间
 *
 * @example
 * 每次resize都会触发, 但是每500ms执行一次
 * const fn = throttle(() => { console.log('throttle') }, 500)
 * window.addEventListener('resize', fn)
 */
export declare function throttle(func: AnyFn, delay?: number): (...args: any) => void;
```

## delay

- 类型

```ts
/**
 * ### 延时执行函数
 * @param n 等待时间(默认500ms)
 *
 * @example
 * 500ms后执行
 * await delay()
 * 或
 * delay().then(() => { console.log('delay') })
 */
export declare function delay(n?: number): Promise<unknown>;
```
