# useCompRef <Badge text="1.0.10" />

- 类型

```ts
/**
 * ### 获取组件Ref
 * @param _comp Vue组件
 * @example // 组件库组件
 * const FormRef = useCompRef<typeof import('element-plus')['ElForm']>()
 *
 * @example // 自定义组件
 * import Page from '*.vue'
 * <Page ref="PageRef"></Page>
 * const PageRef = useCompRef(Page)
 */
export declare function useCompRef<T extends abstract new (...args: any) => any>(_comp?: T): import("vue").Ref<InstanceType<T> | undefined>;
```
