# 客户端使用说明

文: GrassBlock2022

-----

> MCUpdater需要强制启用UTF-8编码运行。<br>
> 可添加 -Dfile.encoding=UTF-8指定编码，否则后果自负 :(

### 配置客户端
1. 下载mc-updater-client.jar
2. 放入Minecraft运行目录中(一般地, 寻找resourcepacks所在目录即可)
3. 配置客户端配置文件(这个必须提前写好) 位于`<运行目录>/.updater/mcu-client.properties`
4. 添加额外启动参数 `-javaagent:mc-updater-client.jar` 到当前MC版本启动设置
5. 把你的整合包发给玩家

### 客户端配置文件
```
brand=MCUpdater Test Client #当前客户端名称, 你可以命名成自己的客户端名字
service=127.0.0.1:65320 #连接到更新服务器的地址端口
```

这个文件必须跟随你的整合包一同发布, 并且你应该告诉你的睿智玩家:
> **不要动这个文件以及`.updater`目录下的全部文件**。

