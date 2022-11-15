# study-vue3

Vue3+pinia2+vue-router4 demo

## 预览地址

https://hutaoao.github.io/demo-vue3/

详情请看代码

## 项目运行

```sh
npm install
```

### 编译并热重新加载以供开发

```sh
npm run dev
```

### 类型检查、编译和缩小以用于生产

```sh
npm run build
```

## 选项式API
```typescript
import { defineStore } from "pinia";

interface State {
  name: string;
  age: number;
  weight: number;
}

export const useOptionStore = defineStore("option", {
  state: (): State => {
    return {
      name: "Bob",
      age: 18,
      weight: 60,
    };
  },
  getters: {
    doubleAge: (state) => state.age * 2,
    // 返回类型**必须**明确设置
    doubleAggPlusOne(): number {
      return this.doubleAge + 1;
    },
    // 向 getter 传递参数
    agePlusNumber: (state) => {
      return (num: number) => state.age + num;
    },
  },
  // action 可以是异步的
  actions: {
    addAge(num: number = 1) {
      this.age += num;
    },
    // 等待两秒
    async addAgeAwaitTwoSeconds(num: number = 1) {
      await this.timeoutTwo();
      this.age += num;
    },
    // 异步方法
    timeoutTwo() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve("");
        }, 2000)
      );
    },
  },
});

```

## 组合式API
```typescript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSetupStore = defineStore("setup", () => {
  const name = ref<string>("Bob");
  const age = ref<number>(18);
  const weight = ref<number>(60);

  const doubleAge = computed(() => age.value * 2);
  const doubleAggPlusOne = computed(() => {
    return doubleAge.value + 1;
  });
  const agePlusNumber = computed({
    // get函数.获取计算属性的值。
    get() {
      return age.value + 2;
    },
    // set函数，当你给计算属性设置值的时候触发，这时候去修改依赖的响应式数据。
    set(val) {
      console.log(val);
      age.value = val - 2;
    },
  });

  function addAge(num: number = 1) {
    age.value += num;
  }

  // 等待两秒
  async function addAgeAwaitTwoSeconds(num: number = 1) {
    await timeoutTwo();
    age.value += num;
  }

  // 异步方法
  function timeoutTwo() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("");
      }, 2000)
    );
  }

  return {
    name,
    age,
    weight,
    doubleAge,
    agePlusNumber,
    doubleAggPlusOne,
    addAge,
    addAgeAwaitTwoSeconds,
  };
});

```
