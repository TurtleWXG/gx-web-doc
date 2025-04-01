# 随机生成

<script setup lang="ts">
import { randomString, randomArray, randomCName, randomIdCard, randomCString, randomPhone } from '@gx-web/tool';
</script>

## randomString

### 类型

```ts
/**
 * ### 随机生成字符串(仅包含小写字母、数字)
 * @param length 生成长度
 */
export declare function randomString(length: number): string;
```

### 用法

```ts-vue
import { randomString } from '@gx-web/tool';

randomString(10) // 输出 =>  {{ randomString(10) }}
```

## randomArray

### 类型

```ts
/**
 * ### 生成一个随机数组。
 * #### 更多用法参考: http://mockjs.com/examples.html
 * ---
 * @param length 数组的长度
 * @param content 数组的内容，可以是任意类型，包括字符串、数字、对象或数组。
 * @returns 返回一个类型为 T 的数组，T 可以是字符串或任意对象类型。
 * ---
 * @example
 * 随机数字数组(60到100之间)
 * randomArray<number>(length, '@natural(60, 100)')
 *
 * @example
 * 在数字数组中随机选择一个数字组成固定长度的数组
 * randomArray<number>(length, [23412, 5436, 765756, 67576])
 *
 * @example
 * 在字符串数组中随机选择一个字符串组成固定长度的数组
 * randomArray<string>(length, ['a', 'b', 'c', 'd'])
 *
 * @example
 * 随机生成对象数组
 * randomArray(length, { name: '@cname', age: '@natural(20, 30)', word: '@pick("医生", "程序员")', date: '@datetime' })
 */
export declare function randomArray<T extends string>(length: number, content: T): T[];
export declare function randomArray<T extends number>(length: number, content: string | number): T[];
export declare function randomArray<T extends string | number>(length: number, content: T[]): T[];
export declare function randomArray<T extends AnyObject>(length: number, content: T): T[];
```

### 用法

```ts-vue
import { randomArray } from '@gx-web/tool';

randomArray<number>(5, '@natural(60, 100)');
// 输出 =>  {{ randomArray<number>(5, '@natural(60, 100)') }}

randomArray<number>(5, [23412, 5436, 765756, 67576]);
// 输出 =>  {{ randomArray<number>(5, [23412, 5436, 765756, 67576]) }}

randomArray<number>(5, ['a', 'b', 'c', 'd']);
// 输出 =>  {{ randomArray<number>(5, ['a', 'b', 'c', 'd']) }}

randomArray(5, { name: '@cname', age: '@natural(20, 30)', word: '@pick("医生", "程序员")', date: '@datetime' });
// 输出 =>  {{ randomArray(5, { name: '@cname', age: '@natural(20, 30)', phone: '@phone', word: '@pick("医生", "程序员")', date: '@datetime' }) }}
```

## randomCName

### 类型

```ts
/**
 * ### 生成一个随机的中文名称
 */
export declare function randomCName(): string;
```

### 用法

```ts-vue
import { randomCName } from '@gx-web/tool';

randomCName(); // 输出 =>  {{ randomCName() }}
```

## randomIdCard

### 类型

```ts
/**
 * ### 随机生成一个 18 位身份证
 */
export declare function randomIdCard(): string;
```

### 用法

```ts-vue
import { randomIdCard } from '@gx-web/tool';

randomIdCard(); // 输出 =>  {{ randomIdCard() }}
```

## randomCString

### 类型

```ts
/**
 * ### 随机生成一个中文字符串
 */
export declare function randomCString(...params: Parameters<typeof Random.ctitle>): string;
```

### 用法

```ts-vue
import { randomCString } from '@gx-web/tool';

randomCString(); // 输出 =>  {{ randomCString() }}

randomCString(5); // 输出 =>  {{ randomCString(5) }}

randomCString(5, 10); // 输出 =>  {{ randomCString(5, 10) }}
```

## randomPhone

### 类型

```ts
/**
 * ### 随机生成一个手机号码字符串
 */
export declare function randomPhone(): string;
```

### 用法

```ts-vue
import { randomPhone } from '@gx-web/tool';

randomPhone(); // 输出 =>  {{ randomPhone() }}
```
