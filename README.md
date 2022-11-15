# cqupt-auto-clock-client

该脚本需要配合 [cqupt-clock](https://github.com/gocybee/cqupt-clock) 使用，请先部署后端或使用别人部署的后端

## 借助Github Action CI实现定时打卡

fork，给仓库设置以下secret

| 名称     | 描述                       |
| -------- | -------------------------- |
| BASE_URL | 后端服务url                |
| NAME     | 名字                       |
| STU_ID   | 学号                       |
| USERNAME | 教务在线帐号（统一认证码） |
| PASSWORD | 教务在线密码               |
| LOCATION | 具体位置 (重庆邮电大学xx苑xx舍) |

## 使用其他方式部署

需要 Deno 环境

> deno run -A main.ts [BASE_URL] [NAME] [STU_ID] [USERNAME] [PASSWORD] [LOCATION]