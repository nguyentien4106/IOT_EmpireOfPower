import React from 'react'
import { Col, Divider, Row } from 'antd';
import PowerIcon from './PowerIcon';
import tower from '../../assets/tower_869833.png';

export default function StatusContent() {

    const towerIcon = () => <img src={tower} height={48} style={{alignSelf: "center"}}></img>
    return (
        <>
            <Divider orientation="center"></Divider>
            <Row gutter={[48, 8]} style={{lineHeight: "120px"}} >
                <Col flex={1} >
                    <PowerIcon value={2.09} text={"Sample"}></PowerIcon>
                </Col>
                <Col flex={1} >
                    <PowerIcon value={12.12} text={"Sample"}></PowerIcon>
                </Col>
                <Col flex={1} >
                    <PowerIcon value={'02.09'} text={"Sample"}></PowerIcon>
                </Col>
            </Row>
            <Divider orientation="center"></Divider>
            <Row gutter={[48, 8]} style={{lineHeight: "120px"}} >
                <Col flex={1} >
                    <PowerIcon value={12.09} text={"Sample"} withThunderBolt={false} icon={towerIcon()}></PowerIcon>
                </Col>
                <Col flex={1} >
                </Col>
                <Col flex={1} >
                </Col>
            </Row>
        </>
    )
}
