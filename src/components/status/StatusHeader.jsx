import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Flex, Layout, Typography } from 'antd'
import {
    ReloadOutlined,
    ThunderboltOutlined 
} from '@ant-design/icons';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

import { getLocal, setLocal } from '../../helper/utils';
import { MQTT } from '../../constants/mqtt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Header, Content, Footer } = Layout

export default function StatusHeader({ client }) {
    const [newTime, setNewTime] = useState(moment())
    const [diff, setDiff] = useState(1)

    const reloadStatus = async () => {
        const now = moment().add(-1, "minute");
        setLocal("lastUpdate", now)
        setDiff(1)
        MQTT.publish({ topic: "admin", payload: "reload", qos: 1 })
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


    const renderTempature = () => {
        const isNight = moment().hour() < 6 || moment().hour() > 18

        return (
            <Flex vertical={false} gap={10} justify='space-between' align='center'>
                {
                    isNight ? <FontAwesomeIcon size='3x' icon="fa-solid fa-moon" /> : <FontAwesomeIcon size='3x' icon="fa-solid fa-sun" />
                }
                <h1>47&deg;F</h1>
            </Flex>
        )
    }
    
    return (
        <div className='status-header'>
            <Flex vertical={false} justify='space-between' align='center' style={{ margin: 20 }}>
                <Flex vertical={false} gap={10} >
                    <h1>Live Status</h1>
                    <CheckCircleTwoTone twoToneColor="#52c41a" height="2em" width="2em" style={{ fontSize : 30 }}/>
                </Flex>
                {
                    renderTempature()
                }
            </Flex>
            
        </div>
    )
}
