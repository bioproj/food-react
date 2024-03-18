import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { ProChat } from '@ant-design/pro-chat';
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NavBar } from 'antd-mobile'
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
          request={async (messages) => {
            // 正常业务中如下:
            const response = await fetch('http://127.0.0.1:5000/stream-sse', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=UTF-8',
              },
              body: JSON.stringify({
                messages,
                stream: true,
              }),
            });
            console.log('messages', messages);
          
            // 确保服务器响应是成功的
            if (!response.ok || !response.body) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            // 获取 reader
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            const encoder = new TextEncoder();

            const readableStream = new ReadableStream({
              async start(controller) {
                function push() {
                  reader
                    .read()
                    .then(({ done, value }) => {
                      if (done) {
                        controller.close();
                        return;
                      }
                      const chunk = decoder.decode(value, { stream: true });
                      const message = chunk.replace('data: ', '');
                      const parsed = JSON.parse(message);
                      controller.enqueue(encoder.encode(parsed.choices[0].delta.content));
                      push();
                    })
                    .catch((err) => {
                      console.error('读取流中的数据时发生错误', err);
                      controller.error(err);
                    });
                }
                push();
              },
            });
            return new Response(readableStream);
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
