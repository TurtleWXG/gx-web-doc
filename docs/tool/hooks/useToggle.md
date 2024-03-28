# useToggle <Tag text="1.0.10"></Tag>

- 类型

```ts
/**
 * ### 布尔切换
 * #### 常用于loading切换
 * @param defaultValue 默认值
 * @example
 *
 * const [loading, setLoading] = useToggle()
 * setLoading(true)
 * setLoading(false)
 */
export declare function useToggle(defaultValue?: boolean): readonly [import("vue").Ref<boolean>, (value?: boolean) => boolean];
```
