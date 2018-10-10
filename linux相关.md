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
