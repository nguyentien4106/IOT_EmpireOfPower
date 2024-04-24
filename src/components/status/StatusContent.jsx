import React from 'react'
import { Col, Divider, Row } from 'antd';
import {
    ReloadOutlined,
    ThunderboltOutlined 
} from '@ant-design/icons';
import PowerIcon from './PowerIcon';
export default function StatusContent() {
  return (
    <>
        <Divider orientation="center"></Divider>
        <Row gutter={[48, 8]} style={{lineHeight: "120px"}} >
            <Col flex={1} >
                <PowerIcon value={2.09} text={"Sample"}></PowerIcon>
            </Col>
            <Col flex={1} >
                <PowerIcon value={2.09} text={"Sample"}></PowerIcon>
            </Col>
            <Col flex={1} >
                <PowerIcon value={2.09} text={"Sample"}></PowerIcon>
            </Col>
        </Row>
    </>
  )
}
