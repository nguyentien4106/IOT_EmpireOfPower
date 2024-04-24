import React, { useState } from 'react'
import AppLayout from '../../shared/AppLayout'
import { Layout } from 'antd'
import StatusHeader from './StatusHeader'
import Loading from '../../shared/Loading'
import { MQTT } from '../../constants/mqtt'
import StatusContent from './StatusContent'

const { Content, Footer } = Layout
export default function Status() {
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState()
    const [client, setClient] = useState(null)

    MQTT.connectAsync().then(client => {
      setIsLoading(false)
      setClient(client)
    })

    return (
      <AppLayout>
        { isLoading && <Loading></Loading> }
        <Layout>
          <StatusHeader
            client={client}
          />
          <Content style={{marginTop: 20}}>
            <StatusContent 
            />
          </Content>
          <Footer></Footer>
        </Layout>
      </AppLayout>
    )
}
