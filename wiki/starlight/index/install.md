# 安装指南

## 快速安装

### 1. 从页面下载 bundler 包

### 2. 安装

- 停止服务器或执行 `/starlight reload prepare`
- 将 jar 放入插件目录

### 3. 重载

- 启动服务器或执行 `/starlight reload action`
- 等待加载完成

### 4. 卡在依赖库下载？

为了获得更好的性能与更小的 Jar 包体积，Starlight 使用 **OTA 模式** 下载运行所需的依赖库。

如果下载卡住，可以在 `config.yml` 中修改 Maven 镜像：

```yaml
config:
  dependency:
    maven-repo: ALICLOUD
    # 可填写任意 Maven 仓库地址，或：
    #  - 'ALICLOUD'  阿里云 Maven Central 镜像
    #  - 'HUAWEI'    华为 Maven 仓库
    #  - 'TENCENT'   腾讯云 Maven 仓库
    #  - 'TSINGHUA'  清华大学 Maven 镜像
    #  - 'CENTRAL'   官方 Maven Central（适合中国大陆外用户）
```

## 独立包安装

如果您认为组合包太过庞大，可前往github选择子包组合使用。

starlight-core是必备前置，其余jar均可选。
