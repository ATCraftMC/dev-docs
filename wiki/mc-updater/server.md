# 服务端使用说明

文: GrassBlock2022

-----

> MCUpdater需要强制启用UTF-8编码运行。<br>
> 可添加 -Dfile.encoding=UTF-8指定编码，否则后果自负 :(

### 安装服务端

1. 下载mc-updater-server.jar
2. 找个空目录塞进去(这个目录将会作为MCUpdater服务端运行目录)
3. 随便写个启动脚本, 推荐内存最好不要大于256M(因为实测占用一般就20多M)
4. 第一次启动会自动退出并让你修改配置文件, 按提示修改即可
5. 重启服务端, 等待全部频道构建初始安装版本

参考启动命令:

```shell
java -Xms32M -Xmx256M -Dfile.encoding=UTF-8 -jar mc-updater-server.jar
```

### 构建一个版本:

1. 输入指令: (这里的版本号制作为显示用, 你可以输入任何东西(因为实际版本判断是基于系统时间的))

```
build <频道> <版本号>
```

2. 等待自动文件分析和打包完成
3. 根据控制台提示的路径, 找到相应的文件填写更新日志

### 服务端配置文件

```yaml
config:
  server-address: 127.0.0.1 #服务器绑定的地址，一般不动
  server-port: 65321 #服务器网络端口
  patch-slice-size: 32768 #发送更新数据包时的切片的大小(可选)
  channels: #更新频道列表
    server: #更新频道的唯一ID 服务端目录建议直接修改path为你的Minecraft服务端路径即可
      required: true #是否强制安装，不填写默认为false
      name: 服务端资源(默认)
      desc: 默认的服务端核心玩法资源。
      path: "E:/Java/Projects/MCUpdater/test/server/server"
      filter-block: [ ] #优先于所有屏蔽器的强制屏蔽，选填
      filter-reject: #拒绝的路径前缀
        - "/version/"
        - "/plugins/"
        - "/libraries/"
        - "/configs/"
        - "/config/"
        - "/mohist-config/"
        - "/banner-config/"
        - "/youer-config/"
        - "/bukkit.yml"
        - "/spigot.yml"
        - "/paper.yml"
        - "/purpur.yml"
        - "/server.properties"
        - "/start.bat"
        - "/start.sh"
        - "/eula.txt"
        - "/start.bat"
      filter-add: #允许的路径前缀，最后执行（优先级高于拒绝）
        - "/mods"
    client-enforced: #预配的客户端资源，可以在这里快速配置你的客户端必装内容
      required: true
      name: 客户端资源(默认)
      desc: 默认的服务端必备资源。
      path: "E:/Java/Projects/MCUpdater/test/server/server-client"
    client-optional:
      required: false
      name: 客户端资源(选配)
      desc: 客户端的可选扩展资源。
      path: "E:/Java/Projects/MCUpdater/test/server/server-client"
      filter-reject: [ "/" ]
      filter-add:
        - "/resourcepacks"
        - "/shaderpack"

```