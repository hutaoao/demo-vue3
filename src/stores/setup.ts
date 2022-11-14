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
