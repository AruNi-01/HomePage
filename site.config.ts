import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'a725cc93bbfa41ddb8d06be969c169a2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '5690eed0-9742-4b5b-9fa9-36d4b2aed4bf',

  // basic site info (required)
  name: 'AarynLu',
  domain: '0x3f4.run',
  author: 'AarynLu',

  // open graph metadata (optional)
  description: 'Personal site of AarynLu',

  // social usernames (optional)
  wechat: 'Lrr_0x3F4',
  twitter: 'AruNi_Lu',
  github: 'AruNi-01',
  // blog: 'https://code.0x3f4.run',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://run-notion.oss-cn-beijing.aliyuncs.com/header.png',
  defaultPageCover: 'null',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
  //  '/appdev': '34980aba84f048788b735f969742bdaa',
  },

  // pageUrlAdditions: {
  //   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  // },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'About',
    //   pageId: '86806cc6d33a455a898320503a778248'
    // },
    // {
    //   title: 'Contact',
    //   pageId: '6815b32c4f5a4e34a235930f0b0cf0ba'
    // }
  ]
})
