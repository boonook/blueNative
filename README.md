### 最近使用CocoaPods来添加第三方类库，无论是执行pod install还是pod update都很慢，甚至有时候会卡住原因在于当执行以上两个命令的时候会升级CocoaPods的spec仓库，加一个参数可以省略这一步，然后速度就会提升不少。加参数的命令如下：
```bash
pod install --verbose --no-repo-update

pod update --verbose --no-repo-update
```


### React Native BLE蓝牙通信
```bash
https://blog.csdn.net/withings/article/details/71378562
```


### 统计在电脑上能正常显示，再是打包之后无法正常显示,你用plug下的文件进行替换即可
```bash
    1.复制tpl.html并粘贴到android->app->src->main->assets文佳佳下
    2.const source = (Platform.OS == 'ios') ? require('./tpl.html') : {'uri':'file:///android_asset/tpl.html'}
    3.source={source}
```

### https://www.jianshu.com/p/56562e5a9396

###   Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`
# blueNative
