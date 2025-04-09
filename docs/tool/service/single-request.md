# SingleRequest 单一请求控制器 <Badge text="1.1.2" />

## 概述

用于解决并发场景下的重复请求问题，确保相同请求只会发出一次，后续相同请求将复用已有请求结果。特别适用于高频操作（如搜索建议、实时校验等）的场景优化。

## 初始化实例

```ts
import axios from 'axios'
import { SingleRequest } from './single-request'

// 创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 初始化单一请求控制器
const singleRequest = new SingleRequest(service).request

export default singleRequest
```

## 使用示例

```ts
import request from './single-request'

const fetchData = (params) => {
  return request({
    method: 'get',
    url: '/search',
    cancelSingleRequest: false // 默认false可省略
  })
}

// 普通请求模式（跳过重复检测）
const forceFetch = () => {
  return request({
    method: 'post',
    url: '/submit',
    cancelSingleRequest: true // 取消单一请求
  })
}
```
