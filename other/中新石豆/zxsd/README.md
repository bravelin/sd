请先执行cnpm install 安装依赖模块

生产环境构建：
1. 执行：gulp style // 编译样式文件
2. 执行：npm run build // 生产最终文件，在dist目录下
3. 将dist目录下所有文件上传至服务器即可

本地开发：
启动两个终端，一个终端执行gulp命令，实时编译样式文件；另外一个终端执行：npm run dev

语言、菜单、产品数据放在src/data目录下
模板、图片、文件等静态资源放在static目录下