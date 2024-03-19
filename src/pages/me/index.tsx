import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { NavBar, Grid } from 'antd-mobile'
import { Avatar, Card, List, Button } from 'antd-mobile'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
  AntOutline,
} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <NavBar>我的</NavBar>
      </div>

      <div className={styles.content} style={{ padding: '0.4rem' }}>

        <Card title='匿名用户' >
          <Avatar src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUFRgSFRUVEhIaGBgZGBoSHBohFRQSGhkcHBgVGBgdIS4lHCMuHxgcJjgmKy8xNTU1HCU+QDs0PzE0NTEBDAwMEA8QHxISGjQrISE0MTQ0NDQ0NDQxNDQ0MTQ0NDExND00NDE0NDQ0ND80MTE0PzQ/NTQ0NDQ0MTE0MT80Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABLEAABAwIDBAYECgYHCQEAAAABAAIDBBEFEiEGBzFBEyJRYXGBFDKRoSNCUmJygpKiscEVM0NjssI0NVNzk7PSFyQlRHSDo8PhFv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgICAgMAAAAAAAAAAAECESExAxJBUWGBEyIy/9oADAMBAAIRAxEAPwC5kREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF1c4DiQPFB2RdWuB4EHwXZAXC02020EFBA6ondZo0a0etI88GNHbp5AEr5/2m25rMReWPlFNTG9o2l2QN/eFozSG3dbsAQXZjW8LC6Ulr52yPFxkgGd1xxaS3qg9xIUPrd9sI/U0kj++V7W+5od+KramdhMOrxUVr+wARQ/iXnx08Ftqbbeki/VYZCzvLgXHxcWX96lv1G5hPm6SP/bdNf8AocduzpHX9uX8ls6DfZTuNpqWWPvie1/nZwao3DvPiOj6MBvzXtP3Swfivd20eB1QtPAIydLujsfJ8Rupu/Tf8eN6yn74WxgO19BW6U87HP8AkPu2TTj1HWJ8RcLfr58q9hqeYGXDqlr3A3EZcCQeIs4HM09gcPNbDZfeTV0UgpMSbJJGCG53j4aIcA4n9q3nfjzBOgVllYy8dx7XoixqKsimY2WJ7ZI3C7XNNwQslVgREQEREBERAREQEREBERAReUsjWgucQ1oBJLiAABxJJ4BVTtdvaa1xp8PaJpL26VwJYHXtaNnF57zp2BwQWdiOJwU7OknlZCztlcACewX4nuCg9fvgwuN2VgnnHyomAN++5pPsUMwzd7imJPFTiEz4WnX4brTlpsbNjuBGOOhtb5JVgYXu0wqAC8HTusLuqHFxJ7cujR7FNrpsNoTWVVMx2HTMi6RrXh77gmN4DmlpynLcHsuqyduixSd2eoq4nO+U58sjva5o/FXa1oAAAAAFgBwAHAAcl2U2ulHO3P4lEc0FVDm7Q6RjvaGn8V1LtqcO1JnnjHG9p2Ed/F7R7FeaJs0+WdodoqjEZ2yVMgY27WgNzdFC02DnNZcnlc8z7FZ2z26LD5GNmdVvq2HUGDIyNw7PjH3g+Cme02xNDXgmWMNltpLEA2QHlcjRw7nXVTObiWzlQCD01K93eIZ2jiCNejfYeP0grKmlt0G77CYRZtJE89soLzf65K3kGF07BZkETB2NY0D3BYmzmOwV0DamF12u0cD60bx60bxyIv4HQi4IW4VRrKvAKOX9ZTU8n042E+0hRzFN1+Ez3tAYHH41O4tt4NN2+5TZEFI4tucqIj0lFU5yNWtluyRvhI3QnyaofjtZWx2psSge4i+R8gtMwaXMco0kb2g5ge0HVfTqw8Rw+GdhimjZLGeLZGgjuOvA9/JF3Y+d93m3EmHS5Hkvo3nrs5sJ/asHI9o5jyI+jqaoZIxsjHB8bgHNc03a5rhcOB7LKotq9zgN5KB1ufQzHTwZIdfJ3tUy3Y4PV0lEIKqweJHljA4OMcZsQwlpI9bM7Qn1kRMkREBERAREQEREBERAWNXVkcLHSyuDI2Auc53ANCyVRu83aCbEaxuE0l3Ma/I4NOk049YuPyWWPmHHkEGFtFtFXY9UCjpGObTZr5ToHNB/XTuHADiG691zZWTsZsDS4eA+wmqrdaV49U21EbfijjrxPbyWx2P2Yhw6nbAyznmzpJLdaSTme5o4Ach33J36zasgiIo0IiICIiAsHGMLhqoXU87Q+N4sQeIPJzTycOIKzC4BM4TaaUHHJVbOV9jmlpZOzQTw30I5B7b8O/scr4w6ujnjZPE4Pje0OaRzB/A8iOS0+12z0WI07qd9g71o321jlHB3hyI5gnuVZbq9oZKGqdhNVdjXSFrA/wDZVN7ZR81+luV7EesStS7SzS8URFUEREBERAREQEREBERARFj1lVHCx0sjgyNgLnOcbBrRxJQd5JGtaXOIa0Aklxs0AcSSeAVXbVb34YSYqNgqXjQyPuIQfmgav8bgdhKh22e2VRi0jqeC8dCy7jmNg5jT+unPJo0Ib224usovgWzs1dP6PStL7es9+jGs4GR3yR2DU+JQ02lZvLxeRxd6SWC+jYmsa0dw6tz5kqcbj8B0lxGQEucTHEXcbcZX99zZt+53ao1vG2TpcMgp4WF0tVI5zpJXadVgAytZezWkvvzPV1KuXYrDvR6CmhtlcImOeP3jxmf95xUqxvUXUvAXHSdyzuNarui8ZqljGOkccrGtc5xPxWtBLj7AtLsrtbS4i17qcvBjcGvbI0B1nXyPFiRY5TbnpqAiJAiKJ4Xt5Sz1smHNa9srC9oc7KGyPjNntbre+jiNNQ0orf4tikFLE6ed4jiba7jc6k2AAGpJ7AuKLEI542zQuD4ni7XN4Efkb6WPYvLH8HgrIXU84Lo3Fp6pIIc03DgRwK4wnDYqaFlPC3JEwWaL3OpJJJ5kkkk96lq4zlmLlEWWxVRvn2cuxuIxi0jMrJst75L/AAclxzB6t+wt7Fa6x6+jZPG+F4ux7HMcPmuBBt36qy6qZTcard3tF6fRRyuN5mfBy9vSNA631gQ7zKlSondTVvocTmw2Q6PLo+djNESWuHYCzP43ar2XVxEREBFwonj28PDKS7XziWQX6lOM7rjkSOq0+JCCWoqUxPfVM45aWkaLmzXTOL3H/tstY92YrA//AE21FT1o2SRtPJkTGN8nSC/vQXyioMs2rOuef/Eh/DMu/wCntqKXrPbLIwcQ+Njx5uYM3vV1Ta+kVBf7XMY/sKf/AApf9aKC/FQ28PaabE6puHUhLqdr7HKerNIPWe4/IbY25aE66WnO9zac0lJ0MbstRUZmgg6siFukcCOB1DR9Inkonu/wZtJTOrZQBI9jpLniynaCQO7NbMe7L2LNuo6eLx+9/Hyi+0VMIejwilBkkc5hnc3R09Q71I/oi4IHAXF9QSrw2J2Xjw6mbC2xkNnTP5ySf6RwA7O8lVZugw81mITV8upju8cbdPKXAeNm59PDsV7hWTTOV3eOlFb6gZcSpqe9gYo2+DpJXgn2AexXY826o05eAVK7xutj9K08M1IPIy//AFXQ43JUypjN1wiIubq6uaCCCAQRYg8CDxBCwsIwempGubTxMha52ZwYD1nd5PuHALPREsewKo7efRyYficWJQizZHNk04dMywkYe5zbE9uZyu+MqK7zMC9MoJGNF5Y/ho7cS5gOZoHO7S4eJC6SueUSKkq2TxMmYczJGte0/NcLj8V3Vc7k8c6amfRuN3wHMy/EwvJNu/K7N5OCsdZynLeNERFloREAQUnvWidR4nT17BYuDJOzNLC4B1/FuQeavSGVrmte03a4BwPa0i4Kq7frRB1HBMBcxzZL/JZIw38szG+5SjYTF4/0TTVEjmxxshDHOcQGtERMdyfqLrOnG9pcoPtfvHo6C8bT6RUj9nGRlYf3j+DfAXPdzUD2s3jVdfJ6HhrZGxuJbmYLTTDhcf2bed9DbiQLhZuyu7SKK0tXaeXj0Y/VMPzvln3dxWpNs26aGfEccxslrbx0pJFm3ZTga6Odxk7x1vAKQYNuspI7OqHuqXc2tuyO/kcx9o8FYDGAANADWjQAAAAdgA4LlbmMT2YmHYbBTjLBEyEc+jaAT4kau8SVloi2giIg7ZiuFwiCpNt3/pDHBTE/BxuZF9RgL5fA3Lx7FKdvZ+joJy3QuDWDwc5oI+ySojgv9f1Ga9+nrLX+k+3uUh3oPtQuHbLGP4j+S8eX+pHv8M14cq3W46jyYe6TnJM91/mtDWAe1rvarJUK3RADCaY9vTE/48g/JTVdXjUXvTOXG6V/Dq0zr+EztfcrndzVN7/KbLPSzDQujey4+Y4O/wDYrdo6gSxslbq17GPBHAh7Q4W9qzk3heXuiIuboIiIO8fNei6tFl2W453lQrv+C47f1KZ7uejRSzHXyY7+BXw9t1WW/DBOkpo6xo68Dsr+0wvIF/J2X7RUl3bY36ZQRPJzSMHRSXOueMAAnvLS13mreYzOKkZaUXuiz6t+zxDSvRjLLsisiW7Q7exT58LqLalvRvHdlkbc/ZJVJYTLXV7IcKid8Awvfl4NGZ2Z0kp5gF2njpqVf23zM2G1Y/cPP2Rm/JV3uYYz0ed2UZ+laC74xZkBDb9ly4+a3jNsXhK9l9maehjyRjNIR8JK4deQ9nzWjk0e83K3aIu+mBERAREQEREBERBUm2jfQMdFQdI3uZLc8mPaWSHyIeVIN5sd6B5+S+M/ey/zLZb6tnjPStqo23kpyS63E07rZ/HKQ09wzKKUuJitweaNxvNDGA+51LYyHtf26tZYntaV5cpzK9nhz/rcfuLA3OyXwqAfJdMP/K938ynCq/cRVZqKWK+rJybdjXsaR72uVoLbzK135UBfQMlA1imaT3MeCw/eLFtt2FeKjDKc/GjaYndxjOVv3Mp81IdosMFVTTUx/aRuYCeTyOq7ydY+SqbcdihjkqMPku1x+EY06ESM6krfG2XT5pUvSxcBYVwvdFj1b9niGFejGWXZEkS3YiIqMPFqBlRBJTv9WRjmHuzAjMO8HXyVP7mK99PWVGHSGxdmsL6CeFxa4DxaXfZCuxV9WbAyfpdmJxSsZFnEkjTmz5w3K5rABYh3O5HrHirEqwURFFEREGj22/q+s/6ab+Aqtty/9HqP71n8BVibfyZcNqz+4e37XV/NV/uZZalmd2z29kbf9S6YdsZLDREXZgREQEREBERAREQb6WNr2lrgHNcCCDqHAixBHMWXz1tPg02C1hcwF9HKHtbfg+F4s+Fx5ObfQ9wPaF9FLX41hEFXC6nnaHxu5cw4cHNPIjtXB0l1dxTO4auy1U9PfSSIPH0o3AW8bPPsV7qutjN2jcPq3VQqDKzK5sbS2zgHEavdcg2AtoBfjpwViogqG3h0T8KxWPEYW2jkf0oA4GThPGezMHX+uexXyo7tts43EKR9ObNf60Tj8SVt8p8CCWnucUGyw2ujniZPGc0cjWvafmuF9RyPIjtWUqW3T7UOpJjhNXeMZ3Njz6GKoJs6I8rOPD53bm0ulZs01KIiKKIiICrjHN7lFA98UcctQ9pLSRZkZc0kEBxuTqOOVWOo+zYzDRI6b0SF0j3Fzi9uYZybkhriWt110CqVHthN4b8RnfAaXomtaX52PLmtsbAPu0ceXhwVgrziiYwZWtaxo4BgAA8gvRQgiIioHvlrhHhr472dLJGwW46Oznysy3msDdfS9Hh8RIsZHPf7XloPsYFG98uJOqayDDojnLLAgHQ1EpADT4NDfDMVZWH0jYImQt9RjGsb3hoAv52uuuEc8q90RF1ZEREBERAREQEREEkREXBsREQEREFY71dgjVg1tM3/AHto67W8Z2N4EdrwOHaBbkFj7td4gnDaGsdkqRZkcjtBNbQMeTwfyv8AG8eNrKs94u7RlZeqpQ2Or4vYdGT99+DX9/A8+1BYxRUnsvvIqqF/oeJMkc1lm5nD4eIcBmv+sb38bc3aBW9hWLU9UwS08rZozzYdW9zm8WnuIBWbGpWciIooiIgIiICjm2+1MWHU5lcQ6Z12ws5vktxI+S24JPgOJCwNsN4NJQBzA4VFVyiYR1T+8cNGju493NVjg2DVmNVBrKtzm097X4BzQdIYG8hxufHibqybZt0zt1+CyTzPxSclxLn9GXcZJnE55PAXI8SexWoF508DI2NjY0MjY0Na1vBrQLABei9GM1HO3YiIqCIiAiIgIiICIiCSIiLg2IiICIiAiKPbcY16HRT1ANpGsyx/3r+qw252Jv4AoKf2smOL4yKdhPQRnosw5RxkmV/jmzAH6K71uwWI0T+nw+dz7co3ZJg2/BwuA8fj2LN3O4TZktY4dZ56Jl+OQdZ7r87uyj6pVmrcx3EtVZQb18RpiI62nEhHEva6KY9pOmU/ZClNDvjw59g+OohPMlrXNHm11/cpNUU8b25HsZIw8WvaC32FaCr2GwyTV1Kxp/dl7PcxwHuUuB7M1u9HBj/zJb4xTfkwrrLvUwccJ3P7mRSa/aaFpH7s8MPxJG+D3fndd4t22GN4xPf9KR/8pCnpT2eOJb6aYAiCnmkdyMpaxvj1cx/BRefajHsV6kDHQwnj6OCxlr/GmcbnvAcL66KxaHZTD4CDHTRAjgXDO4fWeSVuVZglyV3s3uxijIkq3Cofx6NtxED84nV+vLQdt1YbGBoDWgNaBYBoAAA4AAaALlF0kkQREVBERAREQEREBERAREQSRERcGxERAREQFTO/jF7mnoWkk6zPAvre7Ix3/H08Fcy+f3P/AEjj73m7oo5HEdgjpxZvk57R9ooLL2fwwU1NFT6XYwB1uch1eftErYoi7sCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCSIiLg2IiICIiDV7R4h6PSz1HOOJ7m97w05R5usFTu5miv6TUu1JyxtJ439d+v2FNd9Vb0eGuZzlkjj8gekP+X71r919H0eHxm2V0jnyO77uytP2WNWse0vSWoiLqyIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIJIiIuDYiIgIiIKd3/1RDKSHkXSvPi0NaP4ypdgNKIqaCMfFhjHnkbc+1QHfyc1VSxjj0TvvPt/KrNY2wA7AB7BZbwZrlERdEEREBERAREQEREBERAREQEREBERAREQEREEkREXBsREQEREFFb7f6xpf7ln+a9Wm5cIt4M1wiIuiCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q==' />
        </Card>
        <div style={{ marginBottom: "0.4rem" }} />

        <Grid columns={2} gap={8}>

          <Grid.Item >
            <div className={styles['grid-demo-item-block']}>
              <Card onClick={() => navigate('/healthRecord')}>
                <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />健康记录
              </Card>

            </div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>
              <Card onClick={() => { }}>
                <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />我的偏好
              </Card>
            </div>
          </Grid.Item>
        </Grid>
        <div style={{ marginBottom: "0.4rem" }} />
        <List >

          <List.Item prefix={<UnorderedListOutline />} onClick={navigate('/myfood')}>
            自定义菜肴
          </List.Item>
          <List.Item prefix={<SetOutline />} onClick={() => { }}>
            设置
          </List.Item>
        </List>
      </div>


      {/* <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div> */}
    </div>
  );
}
