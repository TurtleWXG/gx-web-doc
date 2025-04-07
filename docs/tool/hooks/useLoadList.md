# useLoadList <Badge text="1.1.2" />

## 类型

```ts
/**
 * ### 异步获取数组数据
 * #### loadList 是通过push数据的方式, 重复执行会存在多份数据
 * #### 可通过reloadList进行清空后再请求
 * @template T 列表项
 * @param onLoad Promise 获取列表接口
 */
export declare function useLoadList<T>(onLoad: PromiseFn<T[]>): 
  readonly [
    import("vue").Ref<import("@vue/reactivity").UnwrapRefSimple<T>[]>, 
    {
      readonly loadList: () => Promise<T[]>;
      readonly loading: import("vue").Ref<boolean>;
      readonly setLoading: (value?: boolean) => boolean;
      readonly reloadList: () => Promise<T[]>;
    }
  ];
```

## 用例

```ts
/**
 * ### 示例
 * #### loadApi 为业务系统的接口请求，响应结构自行调整，最后返回的是一个数组类型数据即可
 */
const [list, { loadList, loading, reloadList }] = useLoadList(() => loadApi().then((res) => res.data))
```
