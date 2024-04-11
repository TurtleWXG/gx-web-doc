# useCompRef <Badge text="1.0.10" />

> 新增支持泛型组件 <Badge text="1.0.13" />

- 类型

```ts
import type { ComponentExposed } from 'vue-component-type-helpers';
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
export declare function useCompRef<T extends ComponentExposed<any>>(_comp?: T): import("vue").Ref<ComponentExposed<T> | undefined>;
```
