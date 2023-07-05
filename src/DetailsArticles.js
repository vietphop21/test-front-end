import { Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchDetailsArticles } from './services/Userservices';

const DetailsArticles = (props) => {
    const [details, setDetails] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [img1, setImg1] = useState('')
    const [createdAt,setCreatedAt] =useState()

    let { id } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = async () => {
        setIsModalOpen(true);
        const res = await axios.get(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/${id}`)
        console.log("Check res", res.data)
        setImg1(res.data.image)
        console.log(res.data.image)
        setTitle(res.data.title)
        setContent(res.data.content)
        setCreatedAt(res.data.createdAt)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {
            }
            <Button type="primary" onClick={showModal}>
               Details Articles
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <img style={{ width: '50%', height: '50%' }} src={img1}></img>

                <p><span style={{fontWeight:'bold'}}>ID:</span> {id}</p>
                <p><span style={{fontWeight:'bold'}}>Title:</span> {title}</p>
                <p><span  style={{fontWeight:'bold'}}>Content:</span> {content}</p>
                <p><span  style={{fontWeight:'bold'}}>Ngày tạo:</span> {createdAt}</p>
            </Modal>
        </>
    );
};
export default DetailsArticles;