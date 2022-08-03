const Mockjs = require('mockjs')

const user = {
  name: '吴浩',
  no: 'admin',
  password: 'admin',
  token: 'TOKEN'
}

module.exports = {
  '[POST] /api/user/login': ctx => {
    console.log(ctx.request.params, ctx.request.body, ctx.request.query)
    const { username, password } = ctx.request.body
    if (username !== user.no || password !== user.password) {
      ctx.body = {
        code: 500,
        msg: '账号或密码错误',
        data: null
      }
      return
    }
    ctx.body = {
      code: 200,
      msg: '操作成功',
      data: user
    }
  }
}
