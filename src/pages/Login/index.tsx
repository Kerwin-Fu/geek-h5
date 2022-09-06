import { NavBar, Form, Input, List, Button, Toast } from 'antd-mobile'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginForm } from '@/types/data'
import { getCode, login } from '@/store/actions/login'
import { AxiosError } from 'axios'
import { InputRef } from 'antd-mobile/es/components/input'
import { useEffect, useRef, useState } from 'react'

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [time, setTime] = useState(0)
  const timeRef = useRef(-1)
  const mobileRef = useRef<InputRef>(null)
  const onFinish = async (values: LoginForm) => {
    try {
      await dispatch(login(values))
      Toast.show({
        content: '登录成功',
        icon: 'success',
        duration: 600,
        afterClose() {
          history.push('/home')
        }
      })
    } catch (e) {
      const error = e as AxiosError<{ message: string }>
      console.log(error.response?.data.message)
    }
  }
  const onGetCode = () => {
    if (time > 0) return
    const mobile = form.getFieldValue('mobile')
    const error = form.getFieldError('mobile')
    if (!mobile || error.length > 0) {
      mobileRef.current?.focus()
      return
    }
    dispatch(getCode(mobile))
    setTime(5)
    timeRef.current = 5
    timeRef.current = window.setInterval(() => {
      setTime((time) => time - 1)
    }, 1000)
  }

  useEffect(() => {
    if (time === 0) {
      clearInterval(timeRef.current)
    }
  })

  useEffect(() => {
    return () => {
      clearInterval(timeRef.current)
    }
  }, [])

  return (
    <div className={styles.root}>
      <NavBar onBack={() => history.go(-1)} />
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        <Form
          onFinish={onFinish}
          form={form}
          initialValues={{
            mobile: '13911111111',
            code: '246810'
          }}
        >
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
            extra={
              <span className="code-extra" onClick={onGetCode}>
                {time === 0 ? '发送验证码' : `${time}s后再次发送`}
              </span>
            }
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
            <Button
              color="primary"
              block
              className="login-submit"
              type="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
