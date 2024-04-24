import { Flex, Typography } from 'antd'
import Paragraph from 'antd/es/skeleton/Paragraph'
import React from 'react'
import {
  ReloadOutlined,
  ThunderboltOutlined 
} from '@ant-design/icons';
export default function PowerIcon({ icon, value, text, fontSize = 40 }) {
  return (
      <div style={{width: "200px"}}>
          <Flex vertical={false} justify='center'>
            <Typography style={{alignSelf: "center"}}>
              <ThunderboltOutlined style={{fontSize: fontSize, alignItems:"center"}}></ThunderboltOutlined>
            </Typography>
            <Typography style={{fontSize: fontSize}}>{value}</Typography>
            <Typography style={{fontSize: 25}}>kW</Typography>
          </Flex>
          <Typography style={{textAlign: "center"}}>{text}</Typography>
      </div>
  )
}
