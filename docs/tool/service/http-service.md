# HTTPService <Badge text="1.1.2" />

## 配置项

继承自`AxiosRequestConfig`，支持所有原生配置项：

```ts
interface ServiceConfig<ResBody = any> extends AxiosRequestConfig<ResBody> {
  /** 
   * 请求拦截器钩子数组
   * 类型：RequestHook[]
   * 示例：添加认证头/请求日志
   */
  requestHooks?: RequestHook[]
  
  /**
   * 响应拦截器配置
   * 类型：ResponseHooks<ResBody>
   * 示例：处理特定状态码的业务逻辑
   */
  responseHooks?: ResponseHooks<ResBody>
}

// 请求拦截器
interface RequestHook {
  onFulfilled: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  onRejected?: (error: unknown) => unknown
}

// 响应拦截器
interface ResponseHooks {
  success?: { 
    [code: number | string]: (response: AxiosResponse) => any 
  }
  error?: {
    [httpStatus: number]: (error: AxiosError) => any
  }
}
```

## 用例

### 创建实例

```ts
// service.ts

// 定义属于业务系统响应数据类型
interface APIResponse<T> {
  code: string
  data: T
  message: string
}

// 初始化服务
const service = new HTTPService<APIResponse>({
  baseURL: '/api',
  timeout: 1000 * 60,
  requestHooks: [
    {
      onFulfilled: (config) => {
        // 添加请求头
        config.headers['Authorization'] = 'Bearer your-token'
        return config
      },
      onRejected: (error) => {
        console.error('请求错误:', error)
        return Promise.reject(error)
      }
    }
  ],
  responseHooks: {
    success: {
      200: (response) => response.data
    },
    error: {
      500: (error) => {
        console.error('服务器错误:', error.message)
        return Promise.reject(error)
      }
    }
  }
})

// 暴露axios实例, 可在业务模块中直接导入使用
export default service.getInstance() 
```

### 使用实例

继承axios实例, 可用方法参考 axios 文档

```ts
import service from './service'
import { downloadFile } from '@gx-web/tool'

// 发送GET请求
service.get('/users/1').then(user => {
  console.log('用户数据:', user)
})

// 发送POST请求
service.post('/users', {
  name: 'Alice',
  age: 28
}).then(res => {
  console.log('创建结果:', res)
})

// 文件下载
service.get<APIResponse<Blob>>('/reports/monthly', {
  responseType: 'blob'
}).then(blob => {
  downloadFile(blob, 'monthly_report.pdf')
})
```

## 拦截器

### 添加请求拦截器

```ts
import service from './service'

// 添加认证头
service.addRequestHook({
  onFulfilled: (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  }
})

// 过滤空参数
service.addRequestHook({
  onFulfilled: (config) => {
    if (config.params) {
      config.params = Object.fromEntries(
        Object.entries(config.params).filter(([_, v]) => v !== '')
      )
    }
    return config
  }
})
```
