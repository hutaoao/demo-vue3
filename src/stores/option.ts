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
