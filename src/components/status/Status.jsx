import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import StatusHeader from './StatusHeader'
import { MQTT } from '../../constants/mqtt'
import StatusContent from './StatusContent'
import "./status.css"
import { useLoading } from '../../context/loading'
import { getSession } from '../../helper/utils'
import { useClient } from '../../context/client'

const { Content, Footer } = Layout

export default function Status() {
    const { show, hide } = useLoading(false)
    const [client1, setClient] = useState(null)
    const { client } = useClient()

    console.log(client)
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Layout>
                <StatusHeader
                    client={client}
                />
                <Content style={{marginTop: 20}}>
                    <StatusContent/>
                </Content>
                <Footer />
            </Layout>
        </div>
    )
}
