import styles from './index.module.scss'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import { useHistory, useLocation, Switch, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Question from '@/pages/Question'
import Video from '@/pages/Video'
import Profile from '@/pages/Profile'

const tabs = [
  { path: '/home', icon: 'iconbtn_home', text: '首页' },
  { path: '/home/question', icon: 'iconbtn_qa', text: '问答' },
  { path: '/home/video', icon: 'iconbtn_video', text: '视频' },
  { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' }
]

export default function Layout() {
  const history = useHistory()
  const location = useLocation()
  const changeRoute = (path: string) => {
    history.push(path)
  }

  return (
    <div className={styles.root}>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/home/question" exact component={Question} />
        <Route path="/home/video" exact component={Video} />
        <Route path="/home/profile" exact component={Profile} />
      </Switch>
      <TabBar
        className="tab-bar"
        onChange={changeRoute}
        activeKey={location.pathname}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.path}
            icon={(active: boolean) => (
              <Icon type={active ? `${item.icon}_sel` : item.icon} />
            )}
            title={item.text}
          />
        ))}
      </TabBar>
    </div>
  )
}
