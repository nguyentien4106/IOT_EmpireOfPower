import { Flex, Typography } from 'antd'
import React from 'react'
import {
  ThunderboltOutlined 
} from '@ant-design/icons';

export default function PowerIcon({ icon, value, text, fontSize = 40, withThunderBolt = true }) {
    return (
        <div style={{ width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "yellow" }}>
            <div className='icon-position'>
                {
                    icon ?? icon
                }
            </div>
            <div className='value-position'> 
                <Flex vertical={false} justify='center'>
                    <Typography style={{alignSelf: "center"}}>
                        {
                            <ThunderboltOutlined style={{fontSize: fontSize, alignItems:"center"}}></ThunderboltOutlined>
                        }
                    </Typography>
                    <Typography style={{fontSize: fontSize}}>{value}</Typography>
                    <Typography style={{fontSize: 25}}>kW</Typography>
                </Flex>
                <Typography style={{textAlign: "center"}}>{text}</Typography>
            </div>
        </div>
    )
}
