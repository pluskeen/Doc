## 修改root密码 ##

已知root旧密码，输入命令 `passwd`

会提示输入 **新密码** 和 **确认密码**


***

## Xshell连接服务器报 The remote SSH server rejected X11 forwarding request ##

在Xshell连接配置中关闭X11服务

配置中找到 `Connection -> SSH -> Tunneling : X11 Forwarding` 关闭


***

## 修改ssh端口 ##

ssh的配置文件路径 `/etc/ssh/sshd_config`

修改ssh_config文件中的 **port**

重启ssh服务 `systemctl restart sshd.service`


***

## 修改文件名 ##

可使用命令`mv`

例 `mv oldname newname`

将 **oldname** 文件移动到当前目录的 **newname** 文件中，实现重命名效果

***

## 使用Xshell上传下载文件 ##

安装 **lrzsz**

`yum install lrzsz`

安装完毕后可以使用`rz`或`sz`命令

命令`rz`，用于接收文件，Xshell就会弹出文件选择对话框，选好文件之后关闭对话框，文件就会上传到linux里的当前目录

命令`sz file`，file是下载到本地的文件名，Xshell会弹出保存文件目录选择对话框，文件就会下载到所选目录中
