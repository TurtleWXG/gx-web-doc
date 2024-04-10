# useList <Badge text="1.0.10" />

- 类型

```ts
/**
 * ### 异步获取数组数据
 * @template T 列表项
 * @param onLoad Promise 获取列表接口
 */
export declare function useList<T>(onLoad: PromiseFn<T[]>): readonly [T[], {
    readonly loadList: () => Promise<T[]>;
    readonly loading: import("vue").Ref<boolean>;
    readonly setLoading: (value?: boolean) => boolean;
    readonly reloadList: () => Promise<T[]>;
}];
```
