# useTablePage <Badge text="1.0.10" />

## 类型

```ts
/**
 * ### 获取分页数据
 * @param onLoad 异步请求函数
 * @param userConfig 用户配置
 * @param userConfig.pageSize 每页条数 默认为20
 */
```

## 用例

```ts
// 查询参数
const [search] = useStateRef(() => ({
  keywords: '',
  dataTags: [] as string[]
}))

// loadApi 为业务系统的接口请求，响应结构自行调整，最后返回需要有total和records
// 分页参数接收的是pageNum和pageSize，如果你的业务响应结构和分页参数不一致，可以自行修改
const [list, { loading, reloadList, page, onChange }] = useTablePage(
  () => loadApi({
    ...search.value,
    pageNum: page.value.current,
    pageSize: page.value.size
  }).then(res => res.data)
)

// 注入泛型参数，为list标注类型
interface PageType {
  name: string
  age: number
}

const [list, { loading, reloadList, page, onChange }] = useTablePage<PageType>(
  () => loadApi({
    ...search.value,
    pageNum: page.value.current,
    pageSize: page.value.size
  }).then(res => res.data)
)
```

### 修改默认分页参数

```ts
// pageSize 为默认分页为20， 可根据业务需求修改
const [list, { loading, reloadList, page, onChange }] = useTablePage(
  () => loadApi({
    ...search.value,
    pageNum: page.value.current,
    pageSize: page.value.size
  }).then(res => res.data),
  {
    pageSize: 50
  }
)
```
