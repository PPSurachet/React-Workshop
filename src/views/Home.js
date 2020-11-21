import WordCard from '../components/WordCard';
import styled from 'styled-components';
import { useState } from 'react';
import { Row, Col, Button, Input, Select } from 'antd';

const StyleWrapper = styled.div`
    padding: 20px 10%;
    
    .title{
        font-size:30px;
        font-weight:bold;
        margin: 10px 0px
    }

    .form-item{
        margin: 10px 0px;
        width:50%;
    }

    .Type{
        min-width:200px;
        max-width:500px;
    }
    
    @media(max-width:425px){
        padding: 20px 0px;
    }
`

const typesOptions = [
    { label: "Noun", value: "Noun", },
    { label: "Verb", value: "Verb", },
    { label: "Adverb", value: "Adverb", },
    { label: "Preposition", value: "Preposition", },
    { label: "Conjunction", value: "Conjunction", },
];

const HomePage = () => {

    const data = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]

    const [dataList, setDataList] = useState(data);

    const [word, setWord] = useState('');
    const [types, setTypes] = useState('');
    const [meaning, setMeaning] = useState('');

    const addWord = () => {

        const newWord = {
            word: word,
            meanings: meaning.split(",").map((item) => item.trim()),
            types: types,
        }

        setDataList([...dataList, newWord]);
    }

    const handlerDelete = (index) => {
        const newArr = dataList.filter((item, id) => {
            return id != index;
        })

        setDataList(newArr);
    }

    return (
        <StyleWrapper>
            <div className="title">My Word Vocabulary</div>
            <Row gutter={[10, 16]}>
                {dataList.map((item, index) => {
                    return (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <WordCard {...item} deleteItem={() => { handlerDelete(index) }} />
                        </Col>
                    );
                })}
            </Row>
            <div className="form-item">
                <div>
                    <label htmlFor="word-input" >Words</label>
                </div>
                <Input
                    id="word-input"
                    placeholder="English Word"
                    onChange={(e) => { setWord(e.target.value) }}
                />
            </div>
            <div className="form-item">
                <div>
                    <label htmlFor="select-type" >Types</label>
                </div>
                <Select
                    id="select-type"
                    className="Type"
                    options={typesOptions}
                    mode="multiple"
                    onChange={(value) => { setTypes(value) }}
                />
            </div>
            <div className="form-item">
                <div>
                    <label htmlFor="meaning-input" >Meaning</label>
                </div>
                <Input
                    id="meaning-input"
                    placeholder="English Meaning"
                    onChange={(e) => { setMeaning(e.target.value) }}
                />
            </div>
            <div className="form-item">
                <Button type="primary" onClick={addWord}>Add Word</Button>
            </div>
        </StyleWrapper>
    );
}

export default HomePage;
