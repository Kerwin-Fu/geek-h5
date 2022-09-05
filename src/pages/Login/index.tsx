import { NavBar, Form, Input, List, Button } from 'antd-mobile'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'

type LoginForm = {
  mobile: string
  code: string
}

export default function Login() {
  const history = useHistory()
  const onFinish = (values: LoginForm) => {
    console.log(values)
  }
  return (
    <div className={styles.root}>
      <NavBar onBack={() => history.go(-1)} />
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        <Form onFinish={onFinish}>
          <Form.Item
            className="login-item"
            name="mobile"
            rules={[
              { required: true, message: '手机号不能为空' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' }
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <List.Item
            className="login-code-extra"
            extra={<span className="code-extra">发送验证码</span>}
          >
            <Form.Item
              className="login-item"
              name="code"
              rules={[
                {
                  required: true,
                  message: '验证码不能为空'
                },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码格式错误'
                }
              ]}
            >
              <Input placeholder="请输入验证码" />
            </Form.Item>
          </List.Item>

          <Form.Item>
            <Button color="primary" block className="login-submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
