import Vue from 'vue'
import VueI18n from 'vue-i18n'
import eleEn from 'element-ui/lib/locale/lang/en'
import eleCN from 'element-ui/lib/locale/lang/zh-CN'
import eleTW from 'element-ui/lib/locale/lang/zh-TW'

import en from "./en";
import cn from "./zh-CN";
import hk from "./zh-HK";

let lang = localStorage.getItem('lang') || 'zh-CN'

Vue.use(VueI18n)

const messages = {
  'en': {
    ...en,
    ...eleEn
  },
  'zh-CN': {
    ...cn,
    ...eleCN 
  },
  'zh-HK': {
    ...hk,
    ...eleTW 
  },
}
// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: lang, // set locale
  messages, // set locale messages
})
