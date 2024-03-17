import { Image, List } from 'antd-mobile'
import React from 'react'
import { users } from '../users'

export default () => {
  return (
    <List  style={{ '--border-bottom': 'none' ,'--border-inner':'none','--border-top':'none'}}>
      {users.map(user => (
        <List.Item
          key={user.name}
          style={{ 'paddingLeft': '0' }}
          prefix={
            <Image
              src={user.avatar}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
              
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
    </List>
  )
}