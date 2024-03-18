import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { ProChat } from '@ant-design/pro-chat';
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NavBar } from 'antd-mobile'


const openai = new OpenAI({
  baseURL:'https://w66h994817.zicp.fun/v1',
  apiKey:'none',
  dangerouslyAllowBrowser:true,
 
});

export default function Page() {


  const delay = (text: string) =>
    new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(text);
      }, 5000);
    });
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <NavBar>消息</NavBar>
      </div>

      <div className={styles.content}>
        <ProChat
          style={{ height: '89vh' }}
          helloMessage={
            '欢迎使用 ProChat ，我是你的专属机器人，这是我们的 Github：[ProChat](https://github.com/ant-design/pro-chat)'
          }
          request={async (messages: Array<any>) => {
            const response = await openai.chat.completions.create({
              model: "chatglm2-6b",
              messages: [...messages],
              stream: true,
            });
            const stream = OpenAIStream(response);
            return new StreamingTextResponse(stream);
          }}
        />
      </div>
      {/* <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div> */}
    </div>
  );
}
