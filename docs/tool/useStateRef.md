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

<button :class="$style.button" @click="setNum(++num)">setNum(++num)</button>

<button :class="$style.button" @click="resetNum()">resetNum()</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

## String

```typescript{5}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [str, setStr, resetStr] = useStateRef('wjh')
</script>
```

The state is: {{ str }}

<button :class="$style.button" @click="setStr(randomString(10))">setStr(randomString(10))</button>

<button :class="$style.button" @click="resetStr()">resetStr()</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

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

<button :class="$style.button" @click="setObj({ name: randomString(10) })">setObj({ name: randomString(10) })</button>

<button :class="$style.button" @click="setObj((s) => s.name = randomString(10))">setObj((s) => s.name = randomString(10))</button>

<button :class="$style.button" @click="resetObj()">resetObj()</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

## Array

```typescript{5}
<script setup lang="ts">
import { ref } from 'vue'
import { useStateRef, randomString } from '@gx-web/tool'

const [arr, setArr, resetArr] = useStateRef(() => ([1]))
</script>
```

The state is: {{ arr }}

<button :class="$style.button" @click="setArr([2])">setArr([2])</button>

<button :class="$style.button" @click="setArr((s) => s.push(123))">setArr((s) => s.push(123))</button>

<button :class="$style.button" @click="resetArr()">resetArr()</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
