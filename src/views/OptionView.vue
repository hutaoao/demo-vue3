<template>
  <div class="Option">
    <h1>选项式 API</h1>
    <h2>姓名：{{ option.name }}</h2>
    <h2>年龄：{{ option.age }}</h2>
    <h2>年龄的2倍：{{ option.doubleAge }}</h2>
    <h2>年龄的2倍加1：{{ option.doubleAggPlusOne }}</h2>
    <h2>年龄加2：{{ option.agePlusNumber(2) }}</h2>
    <h2>体重：{{ option.weight }}</h2>
    <p class="btnBox">
      <button @click="addAge">增加年龄（直接修改）</button>
      <button @click="addAge2">增加年龄和体重（使用$patch）</button>
      <button @click="addAge3">增加年龄（使用 action）</button>
      <button @click="addAge4">增加年龄（使用 异步的action，等两秒）</button>
      <button @click="reset">重置年龄（使用$reset）</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useOptionStore } from "@/stores/option";
const option = useOptionStore();

// 直接对其进行读写
function addAge() {
  option.age++;
}

// 使用$patch方法可以修改多个state中的值
function addAge2() {
  option.$patch({
    age: option.age + 1,
    weight: option.weight + 10,
  });
}

// 使用 action 方法修改
function addAge3() {
  option.addAge(2);
}

// 使用 异步的 action 方法修改
function addAge4() {
  option.addAgeAwaitTwoSeconds();
}

// 将 state 重置为初始值
function reset() {
  option.$reset();
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
