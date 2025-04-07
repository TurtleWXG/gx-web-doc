# useToggle <Badge text="1.0.10" />

## 类型

```ts
/**
 * ### 布尔切换
 * #### 常用于loading切换
 * @param defaultValue 默认值
 */
```

## 用例

```ts
/**
 * 不提供默认值，但是默认会是false
 */
const [loading, setLoading] = useToggle();

/**
 * 提供默认值
 */
const [loading, setLoading] = useToggle(true);
```
