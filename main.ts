// BASE_URL NAME STU_ID USERNAME PASSWORD
//参数列表: 服务器地址 名字 学号 用户名 密码

const baseUrl = Deno.args[0]

const req = {
  "name": Deno.args[1],
  "stu_id": Deno.args[2],
  "username": Deno.args[3],
  "password": Deno.args[4],
  "is_today": "true",
  "is_force": "false",
  "latitude": "29.52168",
  "longitude": "106.56256",
  "district": "重庆市,重庆市,南岸区",
  "location": "重庆邮电大学 明理苑4舍802号",
  "risk_level": "低风险",
  "risk_history": "无",
  "contact_history": "无",
  "prefecture_history": "无",
  "is_risk": "否",
  "is_normal_temp": "是",
  "has_symptom": "否",
  "roommates": "无",
  "code_color": "绿色"
}

const formData = new FormData()

for (const key in req) {
  formData.append(key, req[key as keyof typeof req])
}

const res = await fetch(`${baseUrl}/do`, {
  method: 'POST',
  body: formData
})

console.log(await res.json())

