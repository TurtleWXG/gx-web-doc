# useLoadMap <Badge text="1.1.2" />

## 类型

```ts
/**
 * ### 异步获取对象数据
 * @template T 对象数据
 * @param onLoad Promise 获取对象数据接口
 * @param initialValue 初始值
 */
```

## 用例

```ts
/**
 * ### 示例
 * #### loadApi 为业务系统的接口请求，响应结构自行调整，最后返回的是一个对象类型数据即可
 */
const [
  data,
  {
    setData,
    resetData,
    load,
    reload,
    loading,
    setLoading
  }
] = useLoadMap(() => loadApi().then((res) => res.data))

/**
 * ### 提供初始化数据
 */
const [
  data,
  {
    setData,
    resetData,
    load,
    reload,
    loading,
    setLoading
  }
] = useLoadMap(
  () => loadApi().then((res) => res.data)
  { name: '', age: 0 }
)
```
