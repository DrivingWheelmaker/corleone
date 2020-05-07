
# yfy

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Publish

scp -r /Users/yanghaowen/Homepage/corleone/dist root@120.79.208.156:/receive/corleone

ssh root@120.79.208.156

rm -rf /home/tomcat/apache-tomcat-9.0.33/webapps/corleone

mv /receive/corleone /home/tomcat/apache-tomcat-9.0.33/webapps/corleone

### setting app as tomcat root app

https://blog.csdn.net/yakoo5/article/details/53207880

### Start Tomcat:
/home/tomcat/apache-tomcat-9.0.33/bin/startup.sh

### Stop Tomcat:
/home/tomcat/apache-tomcat-9.0.33/bin/shutdown.sh