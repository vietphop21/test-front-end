import { Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const EditArticles = (props) => {


    let { item,render,setRender } = props
    const [newtitle,setNewtitle]=useState()
    const [newcontent,setnewcontent]=useState()
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
        toast.success("Edit thành công!!")
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
                    <ToastContainer/>

            {
            }
            <Button type="primary" onClick={showModal}>
                Edit Articles
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                Title:  <Input placeholder="Nhập Title mới" value={newtitle} onChange={(e)=>setNewtitle(e.target.value)}/> 
                Content:  <Input placeholder="Nhập Content mới "  value={newcontent}  onChange={(e)=>setnewcontent(e.target.value)} /> 
            </Modal>
        </>
    );
};
export default EditArticles;