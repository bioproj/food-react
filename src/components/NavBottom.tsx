import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import type { FC } from 'react'


const Bottom: FC = () => {
    const history = useNavigate()
    const location = useLocation()
    const { pathname } = location
  
    const setRouteActive = (value: string) => {
      history(value)
    }
  
    const tabs = [
      {
        key: '/',
        title: '首页',
        icon: <AppOutline />,
      },
      {
        key: '/recipes',
        title: '智能配餐',
        icon: <UnorderedListOutline />,
      },
      {
        key: '/message',
        title: '消息',
        icon: <MessageOutline />,
      },
      {
        key: '/me',
        title: '我的',
        icon: <UserOutline />,
      },
    ]
  
    return (
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    )
  }

export default Bottom