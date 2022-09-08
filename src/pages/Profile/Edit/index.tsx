import { useEffect, useState } from 'react'
import { Button, List, DatePicker, NavBar, Popup } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import styles from './index.module.scss'
import { getUserProfile } from '@/store/actions/profile'
import { RootState } from '@/types/store'
import EditInput from './EditInput'

type InputState = {
  visible: boolean
  type: '' | 'name' | 'intro'
}

const ProfileEdit = () => {
  const [showInput, setShowInput] = useState<InputState>({
    type: '',
    visible: false
  })
  const Item = List.Item
  const history = useHistory()
  const dispatch = useDispatch()
  const { userProfile } = useSelector((state: RootState) => state.profile)

  const hideInput = () => {
    setShowInput({
      type: '',
      visible: false
    })
  }

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])
  return (
    <div className={styles.root}>
      <div className="content">
        <NavBar
          style={{
            '--border-bottom': '1px solid #F0F0F0'
          }}
          onBack={() => history.go(-1)}
        >
          个人信息
        </NavBar>

        <div className="wrapper">
          <List className="profile-list">
            <Item
              extra={
                <span className="avatar-wrapper">
                  <img width={24} height={24} src={userProfile.photo} alt="" />
                </span>
              }
              arrow
            >
              头像
            </Item>
            <Item
              arrow
              extra={userProfile.name}
              onClick={() => setShowInput({ visible: true, type: 'name' })}
            >
              昵称
            </Item>
            <Item
              arrow
              extra={
                <span className={classNames('intro', 'normal')}>
                  {userProfile.intro}
                </span>
              }
              onClick={() => setShowInput({ visible: true, type: 'intro' })}
            >
              简介
            </Item>
          </List>

          <List className="profile-list">
            <Item arrow extra={userProfile.gender === 0 ? '男' : '女'}>
              性别
            </Item>
            <Item arrow extra={userProfile.birthday}>
              生日
            </Item>
          </List>

          <DatePicker
            visible={false}
            value={new Date()}
            title="选择年月日"
            min={new Date(1900, 0, 1, 0, 0, 0)}
            max={new Date()}
          />
        </div>

        <div className="logout">
          <Button className="btn">退出登录</Button>
        </div>
      </div>
      <Popup
        visible={showInput.visible}
        position="right"
        onMaskClick={() => setShowInput({ type: '', visible: false })}
        destroyOnClose
      >
        <div style={{ height: 400, width: '80vw' }}>
          <EditInput hideInput={hideInput} type={showInput.type}></EditInput>
        </div>
      </Popup>
    </div>
  )
}

export default ProfileEdit
