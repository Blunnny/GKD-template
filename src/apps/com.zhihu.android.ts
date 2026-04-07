import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '尝试点击右上角跳过按钮',
      rules: [
        {
          name: '通用跳过文案',
          matches: '[text*="跳过"]',
        },
        {
          name: '开屏广告相关文案',
          matches: '[text*="跳过广告"]',
        },
      ],
    },
  ],
});
