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

`apt-get install lrzsz`

安装完毕后可以使用`rz`或`sz`命令

命令`rz`，用于接收文件，Xshell就会弹出文件选择对话框，选好文件之后关闭对话框，文件就会上传到linux里的当前目录

命令`sz file`，file是下载到本地的文件名，Xshell会弹出保存文件目录选择对话框，文件就会下载到所选目录中


***

## 删除文件 ##

命令 `rm`

`rm -rf`

`-r` 向下递归，不管有多少级目录，一并删除

`-f` 直接强行删除，不作任何提示


***

## 永久设置环境变量 ##

在root目录中查看.bash_profile文件，找到类似开头是*PATH=$PATH:$HOME/bin*的关键行

查看命令 `cat .bash_profile`

修改在.bash_profile文件中找到的关键行

进入编辑器 `vim .bash_profile` 

在关键行后面新增环境变量，例如*:/var/software/bin*

修改后的关键行类似*PATH=$PATH:$HOME/bin:/var/software/bin*

保存后重载该文件

重载命令 `source ~/.bash_profile`

完成后就可以在任何目录下执行设置后的命令
