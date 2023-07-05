import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './articles.css'
import DetailsArticles from './DetailsArticles'
import { fetchArticles } from './services/Userservices'
import ReactPaginate from 'react-paginate'
import CreateArticles from './CreateArticles'
import EditArticles from './EditArticles'
import { Button } from 'antd'
import {Input} from 'antd'
const ListArticles = () => {
    const [render,setRender]=useState(false)
    const [page,setPage]=useState(1)
    const [articles, setArticles] = useState([])
    const [search,setSearch]=useState('')

    useEffect(() => {
        async function fetchData() {
            try{
                let res = await axios.get(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?page=${page}&limit=10`)
       
                let data = res.data
                console.log("Check data",data)
                setArticles(data)
                window.scrollTo(0, 0);

            } catch(error){
            console.error(error);
            }

        }
        fetchData()
    }, [page,render]);

    const handlePageClick =(e)=>
    {
        const s = e.selected + 1
        setPage(s)

    }
    const handlesearch = async ()=>
    {
        let res = await axios.get(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?search=${search}`)
        setArticles(res.data)
    }
    const handleonChangesearch =(e)=>
    {
        
        setSearch(e.target.value)
        setRender(!render)
    }
    const handleSort =async ()=>
    {
        let res=await axios.get (`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?sortBy=id&order=desc`)
        setArticles(res.data)
    }
    return (
        <>
        
            <div class="titleproject">List Articles</div>
            
            <CreateArticles/>
            <br/>
            <Button style={{marginTop:'20px'}} onClick={handleSort} type="primary">Sort theo ID</Button>
            <br/>
           
            <Input style={{width:'170px',marginTop:'20px'}}value={search} onChange={(e)=>handleonChangesearch(e)} placeholder="Basic usage" /> <Button onClick={handlesearch} type="primary">Search</Button>

            <div>
            {articles.map((item) => {
                return (

                    <>
                        <div class="container-articles">
                            <div style={{width:'150px'}}>
                            <img src={item.image}></img>
                            </div>
                            <div>
                                <p> ID: {item.id}</p>
                                <p class="title">Title: {item.title} </p>
                                <p class="content">Content: {item.content}</p>
                                <EditArticles
                                render={render}
                                setRender={setRender}
                               
                                item={item}
                                />
                                <DetailsArticles
                                id={item.id}
                                />
                                
                                
                            </div>
                        </div>

                    </>
                )
            })}
            </div>
           <div class="page">
           <ReactPaginate
                    nextLabel="Next  >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={4}
                    pageCount={7}
                    previousLabel="< Back"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
           </div>
        </>
    )
}
export default ListArticles
