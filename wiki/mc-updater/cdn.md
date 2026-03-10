# CDN端使用说明

文: GrassBlock2022

-----

> MCUpdater需要强制启用UTF-8编码运行。<br>
> 可添加 -Dfile.encoding=UTF-8指定编码，否则后果自负 :(

### 安装CDN端

CDN端设计逻辑为“专有协议的对象存储以及高速下载服务”，为保证玩家使用体验和缓存命中效果，请尽可能使用较大硬盘和带宽的服务器。

1. 下载mc-updater-proxy.jar
2. 找个空目录塞进去(这个目录将会作为MCUpdater服务端运行目录)
3. 随便写个启动脚本, 推荐内存最大于256M小于1GB(此区间内效果最好)
4. 第一次启动会自动退出并让你修改配置文件, 按提示修改即可
5. 重启CDN, 记住你配置好的服务器地址，端口和访问密钥并填写至你的MCUpdater-server端。

参考启动命令:

```shell
java -Xms32M -Xmx1G -Dfile.encoding=UTF-8 -jar mc-updater-proxy.jar
```