# useTablePage <Tag text="1.0.10"></Tag>

- 类型

```ts
import type { UsePaginationConfigType } from '../config';

/**
 * ### 传入函数类型
 */
type OnLoad<T> = (params: {
    current: number;
    size: number;
}) => Promise<{
    records: T[];
    total: number;
}>;

/**
 * ### 获取分页数据
 * @param onLoad 异步请求函数
 * @param userConfig 用户配置
 */
export declare function useTablePage<T>(onLoad: OnLoad<T>, userConfig?: Partial<UsePaginationConfigType>): readonly [T[], {
    readonly loading: import("vue").Ref<boolean>;
    readonly setLoading: (value?: boolean) => boolean;
    readonly loadList: () => Promise<T[]>;
    readonly reloadList: () => void;
    readonly resetParams: () => void;
    readonly page: import("vue").Ref<{
        current: number;
        size: number;
        total: number;
    }>;
    readonly onCurrentChange: () => any;
    readonly onSizeChange: () => any;
    readonly onChange: () => any;
}];
```
