import { Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchDetailsArticles } from './services/Userservices';
import { Input } from 'antd';

const EditArticles = (props) => {


    let { item,render,setRender } = props
    const [newtitle,setNewtitle]=useState(item.title)
    const [newcontent,setnewcontent]=useState(item.content)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);


    };
    const handleOk = async () => {
        setIsModalOpen(false);
        let res = await axios.put(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/${item.id}`,
        {
            title:newtitle,
            content:newcontent
        })
        setRender(!render)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {
            }
            <Button type="primary" onClick={showModal}>
                Edit Articles
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                Title:  <Input placeholder="Basic usage" value={newtitle} onChange={(e)=>setNewtitle(e.target.value)}/> 
                Content:  <Input placeholder="Basic usage"  value={newcontent}  onChange={(e)=>setnewcontent(e.target.value)} /> 
            </Modal>
        </>
    );
};
export default EditArticles;