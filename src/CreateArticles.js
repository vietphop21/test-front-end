import { Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const CreateArticles = (props) => {
    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [content, setContent] = useState()

    let { id } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = async () => {
        setIsModalOpen(true);

    };
    const handleOk = async () => {
        setIsModalOpen(false);
        const res = await axios.post(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs`, { title, content, image })
        console.log(res.data)
        toast.success("Thêm thành công!!")
        setTitle('')
        setContent('')
        setImage('')


    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>                    <ToastContainer />

         
            <Button type="primary" onClick={showModal}>
                CreateArticles
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
               



                Title:  <Input placeholder="Basic usage" value={title} onChange={(e) => setTitle(e.target.value)} />
                Content:  <Input placeholder="Basic usage" value={content} onChange={(e) => setContent(e.target.value)} />

                URL Image:  <Input placeholder="Basic usage" value={image} onChange={(e) => setImage(e.target.value)} />

            </Modal>
        </>
    );
};
export default CreateArticles;