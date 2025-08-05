<template>
    <div class="mx-auto rounded" style="background: transparent;">
        <v-form fast-fail @submit.prevent>
            <v-radio-group v-model="selectedEngine" inline>
                <template v-slot:label>
                    <div class="mb-2">
                        <strong>选择搜索引擎</strong>
                    </div>
                </template>
                <v-row>
                    <v-col cols="12" sm="6" v-for="engine in searchEngines" :key="engine.value">
                        <v-radio
                            :label="engine.title"
                            :value="engine"
                            color="var(--leleo-vcard-color)"
                        ></v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>
            
            <div style="display: flex;justify-content: center;align-items: center;">
                <v-btn :loading="loading2" variant="tonal" class="ma-2" @click="submitdata()">确认</v-btn>
                <v-btn :loading="loading1" variant="tonal" class="ma-2" @click="redefault()">默认</v-btn>
                <v-btn variant="tonal" class="ma-2" @click="cancel()">取消</v-btn>
            </div>
        </v-form>
    </div>

    <v-snackbar
      :timeout="2000"
      variant="tonal"
      color="var(--leleo-vcard-color)"
      rounded="pill"
      v-model="snackbar"
    >
      {{snackbartext}}
    </v-snackbar>
</template>

<script>
import { setCookie, getCookie, eraseCookie } from '../../utils/cookieUtils.js';
import { useDisplay } from 'vuetify';

export default {
  emits: ['cancel'],
  setup() {
    const { xs } = useDisplay();
    return { xs };
  },
  data() {
    return {
        loading1: false,
        loading2: false,
        snackbar: false,
        snackbartext: '',
        selectedEngine: { title: 'Bing', value: 'https://www.bing.com/search?q=' },
        searchEngines: [
            { title: 'Bing', value: 'https://www.bing.com/search?q=' },
            { title: 'Google', value: 'https://www.google.com/search?q=' },
            { title: 'Baidu', value: 'https://www.baidu.com/s?wd=' },
            { title: 'Sogou', value: 'https://www.sogou.com/web?query=' },
            { title: '360', value: 'https://www.so.com/s?q=' },
        ]
    };
  },
  mounted() {
    let searchEngineData = this.getCookie("searchEngineData");
    if (searchEngineData) {
        this.selectedEngine = searchEngineData;
    }
  },
  methods: {
    setCookie,
    getCookie,
    eraseCookie,
    submitdata() {      
        this.loading2 = true;
        setTimeout(() => {
            this.loading2 = false;
            this.setCookie('searchEngineData', this.selectedEngine, 7); // 保存7天
            // 触发事件通知前台更新
            window.dispatchEvent(new CustomEvent('searchEngineUpdated', { detail: this.selectedEngine }));
            this.snackbartext = '搜索引擎设置已保存';
            this.snackbar = true;
            // 通知父组件关闭对话框
            this.$emit('cancel');
        }, 800);   
    },
    redefault() {              
        this.loading1 = true;
        setTimeout(() => {
            this.loading1 = false;
            this.eraseCookie('searchEngineData');
            this.selectedEngine = { title: 'Bing', value: 'https://www.bing.com/search?q=' };
            // 触发事件通知前台更新
            window.dispatchEvent(new CustomEvent('searchEngineUpdated', { detail: this.selectedEngine }));
            this.snackbartext = '已恢复默认搜索引擎';
            this.snackbar = true;
        }, 800); 
    },
    cancel() {
        // 触发事件通知前台更新
        window.dispatchEvent(new CustomEvent('searchEngineUpdated', { detail: this.selectedEngine }));
        this.snackbartext = '已取消修改';
        this.snackbar = true;
        this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>