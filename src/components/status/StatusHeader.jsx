import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Flex, Layout, Typography } from 'antd'
import {
    ReloadOutlined,
    ThunderboltOutlined 
} from '@ant-design/icons';
import { getLocal, setLocal } from '../../helper/utils';
import { MQTT } from '../../constants/mqtt';
const { Header, Content, Footer } = Layout

export default function StatusHeader({ client }) {
    const [newTime, setNewTime] = useState(moment())
    const [diff, setDiff] = useState(1)

    const reloadStatus = async () => {
        const now = moment().add(-1, "minute");
        setLocal("lastUpdate", now)
        setDiff(1)
        await MQTT.reload()
    }

    useEffect(() => {
        const old = getLocal("lastUpdate", moment().add(-1, "minute"))
        const duration = moment.duration(newTime.diff(old));
        const newDiff = Math.round(duration.asMinutes());
        setDiff(newDiff)
    }, [newTime])

    useEffect(() => {
        const id = setInterval(() => setDiff(prev => prev + 1), 1000 * 60);
    
        return () => {
          clearInterval(id);
        };
      }, []);

    return (
        <>
            <Flex vertical={false} justify='space-around' align='center'>
                <Header style={{ background: '#f5f5f7', padding: 0, textAlign: "center" }}>
                    <h1>Latest Status</h1>
                </Header>
                <Typography>
                    <h1>{`47F`}</h1>
                </Typography>
            </Flex>
            
            <Flex vertical={false} gap={10}>
                <h5>{`Last Updated: about ${diff} minutes ago.`}</h5>
                <ReloadOutlined onClick={reloadStatus}/>
            </Flex>
        </>
        
    )
}
