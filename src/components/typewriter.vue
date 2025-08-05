<template>
  <div class="leleo-typewriter" style="text-align: center;"><span class="qm">“ </span><span ref="text"
                                                                                            class="msg"></span><span
      class="qm"> ”</span></div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import TypeIt from 'typeit'
import config from '../config.js';

const text = ref(null)
onMounted(() => {
  let configdata = null;
  if (import.meta.env.VITE_CONFIG) {
    configdata = JSON.parse(import.meta.env.VITE_CONFIG);
  } else {
    configdata = config;
  }

  // ✅ 在此处对 strings 进行随机打乱（Fisher-Yates 洗牌）
  const shuffledStrings = [...configdata.typeWriterStrings].sort(() => Math.random() - 0.5);

  new (TypeIt)(text.value, {
    strings: shuffledStrings, // 使用打乱后的数组
    cursorChar: "<span class='cursorChar' style='font-size: 26px;color: var(--leleo-vcard-color);'>|<span>",//用于光标的字符。HTML也可以
    speed: 150,
    lifeLike: true,// 使打字速度不规则
    cursor: true,//在字符串末尾显示闪烁的光标
    breakLines: false,// 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
    loop: false,//是否循环
    nextStringDelay: 1500  // 打字等待延时
  }).go()
})
</script>

<style scoped>
.msg, .qm {
  color: var(--leleo-vcard-color);
  letter-spacing: 2px;
  font-family: Arial, sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(69, 157, 222, 0.3);
}

.msg ::v-deep.cursorChar {
  display: inline-block;
  margin-left: 2px;
}

@media screen and (min-width: 960px) and (max-width: 1200px) {
  .msg, .qm {
    font-size: 20px;
  }
}

@media (max-width: 960px) {
  .leleo-typewriter {
    min-height: 76px;
  }

  .msg, .qm {
    font-size: 16px;
  }
}
</style>