### 目录

```
.
├── config                              配置目录
│   ├── config.ts                       整体组件配置
│   ├── defaultSettings.ts              全局基础参数配置
│   ├── proxy.ts                        开发代理配置
│   └── router.ts                       路由配置
├── public                              静态资源目录
├── src
│   ├── components                      全局公用组件
│   ├── pages                           页面
│   ├── services                        请求处理
│   ├── types                           类型定义
│   ├── utils                           工具
│   ├── wrappers                        包装组件
│   ├── global.less                     全局样式
│   ├── global.tsx                      serviceWorker及PWD配置
│   ├── manifest.json                   serviceWorker配置
│   ├── service-worker.js               serviceWorker
│   ├── typings.d.ts                    全局类型定义
│   ├── access.ts                       权限元数据
│   └── app.tsx                         项目入口, 数据初始化
├── jsconfig.json
├── nginx.conf                          项目nginx配置
├── package.json                        依赖配置
├── tsconfig.json                       ts配置
├── yarn.lock                           yarn版本锁
├── Dockerfile                          镜像构建配置
└── README.md
```

### 开发环境启动

```shell
yarn install
yarn start
```

### 提交前的代码操作

```shell
yarn lint:fix #代码检查, 不能自动修正的代码需要手动处理
yarn prettier #代码统一格式化
```

### 打包

```shell
yarn install
yarn build
```
