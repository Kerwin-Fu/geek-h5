import { RootState } from '@/types/store'
import { Input, NavBar, TextArea } from 'antd-mobile'
import { InputRef } from 'antd-mobile/es/components/input'
import { TextAreaRef } from 'antd-mobile/es/components/text-area'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './index.module.scss'
type Props = {
  hideInput: () => void
  type: '' | 'name' | 'intro'
}

const EditInput = ({ hideInput, type }: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.profile)
  const [value, setValue] = useState(
    type === 'name' ? userProfile.name : userProfile.intro
  )
  const inputRef = useRef<InputRef>(null)
  const textRef = useRef<TextAreaRef>(null)
  useEffect(() => {
    if (type === 'name') {
        inputRef.current?.focus()
    } else {
        textRef.current?.focus()
        document.querySelector('textarea')?.setSelectionRange(-1, -1)
    }
}, [type])
  return (
    <div className={styles.root}>
      <NavBar
        className="navbar"
        right={<span className="commit-btn">提交</span>}
        onBack={hideInput}
      >
        编辑{type === 'name' ? '昵称' : '简介'}
      </NavBar>

      <div className="edit-input-content">
        <h3>{type === 'name' ? '昵称' : '简介'}</h3>

        {type === 'name' ? (
          <div className="input-wrap">
            <Input
              placeholder="请输入昵称"
              value={value}
              onChange={(v) => setValue(v)}
              maxLength={11}
              ref={inputRef}
            />
          </div>
        ) : (
          <TextArea
            className="textarea"
            placeholder="请输入简介"
            showCount
            maxLength={99}
            value={value}
            onChange={(v) => setValue(v)}
            ref={textRef}
          />
        )}
      </div>
    </div>
  )
}

export default EditInput
