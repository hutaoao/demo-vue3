<template>
  <div class="Option">
    <h1>组合式 API</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>年龄的2倍：{{ setup.doubleAge }}</h2>
    <h2>年龄的2倍加1：{{ setup.doubleAggPlusOne }}</h2>
    <h2>年龄加2：{{ setup.agePlusNumber }}</h2>
    <h2>体重：{{ setup.weight }}</h2>
    <p class="btnBox">
      <button @click="addAge">增加年龄（直接修改）</button>
      <button @click="addAge2">增加年龄和体重（使用$patch）</button>
      <button @click="addAge3">增加年龄（使用 action）</button>
      <button @click="addAge4">增加年龄（使用 异步的action，等两秒）</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSetupStore } from "@/stores/setup";

const setup = useSetupStore();

// 使用 storeToRefs() 对其进行解构：（直接结构就不是响应式的）
const { name, age } = storeToRefs(setup);

// 直接对其进行读写
function addAge() {
  setup.age++;
}

// 使用$patch方法可以修改多个state中的值
function addAge2() {
  setup.$patch({
    age: setup.age + 1,
    weight: setup.weight + 10
  });
}

// 使用 action 方法修改
function addAge3() {
  setup.addAge(2);
}

// 使用 异步的 action 方法修改
function addAge4() {
  setup.addAgeAwaitTwoSeconds();
}

// 将 state 重置为初始值
function reset() {
  setup.$reset();
}
</script>

<style>
.btnBox {
  padding: 10px 10px 0;
  border: 1px solid #2c3e50;
}

.btnBox button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
