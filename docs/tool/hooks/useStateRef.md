# useStateRef

> 用于定义Ref的变量  
> 根据传入默认值, 分别可以定义Number,String,Object,Array

<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [num, setNum, resetNum] = useStateRef(0)

const [str, setStr, resetStr] = useStateRef('wjh')

const [obj, setObj, resetObj] = useStateRef(() => ({
  name: 'wjh',
  age: 18
}))

const [arr, setArr, resetArr] = useStateRef(() => ([1]))
</script>

## Number

```typescript{5}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef } from '@gx-web/tool'

const [num, setNum, resetNum] = useStateRef(0)
</script>
```

The state is: {{ num }}

<ElButton type="primary" @click="setNum(++num)">setNum(++num)</ElButton>

<ElButton @click="resetNum()">resetNum()</ElButton>

## String

```typescript{5}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [str, setStr, resetStr] = useStateRef('wjh')
</script>
```

The state is: {{ str }}

<ElButton type="primary" @click="setStr(randomString(10))">setStr(randomString(10))</ElButton>

<ElButton @click="resetStr()">resetStr()</ElButton>

## Object

```typescript{5-8}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [obj, setObj, resetObj] = useStateRef(() => ({
  name: 'wjh',
  age: 18
}))
</script>
```

The state is: {{ obj }}

<ElButton type="primary" @click="setObj({ name: randomString(10) })">setObj({ name: randomString(10) })</ElButton>

<br>

<ElButton style="margin-top: 20px" type="primary" @click="setObj((s) => s.name = randomString(10))">setObj((s) => s.name = randomString(10))</ElButton>

<br>

<ElButton style="margin-top: 20px" @click="resetObj()">resetObj()</ElButton>

## Array

```typescript{5}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [arr, setArr, resetArr] = useStateRef(() => ([1]))
</script>
```

The state is: {{ arr }}

<ElButton type="primary" @click="setArr([2])">setArr([2])</ElButton>

<br>

<ElButton style="margin-top: 20px" type="primary" @click="setArr((s) => s.push(123))">setArr((s) => s.push(123))</ElButton>

<br>

<ElButton style="margin-top: 20px" @click="resetArr()">resetArr()</ElButton>
