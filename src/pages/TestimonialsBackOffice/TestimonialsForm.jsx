import React,{useState,useEffect,useRef} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import httpService from "../../services/httpService";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Loader from '../../components/Loader';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";

const service = new httpService();

const TestimonialsForm = () => {
    const {id} = useParams()
    const Navigate = useNavigate()
    const inputFile = useRef()
    const [isLoading, setIsLoading] = useState(false);
    let [mydata, setMyData] = useState({
        name: '',
        imageUrl: ''
    })
    let [files, setFiles] = useState()
    let [myContent, setMyContent] = useState()

    useEffect(()=>{
        service.get(`testimonials`, id)
            .then(res => {
                let myObject = {
                    name : id ? res.name : '',
                    content : id ? res.content : '',
                    imageUrl : id ? res.imageUrl : '',
                }
                setMyData(myObject)
            })
    },[id])


    const getUrlImg = async () => {
            //Get URL image first
            let data = null;

            const formData = new FormData()
            formData.append("image",files)
        
            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
              
            setIsLoading(true);
            data = await service.post("images",formData,config)
            if(data != null) setIsLoading(false)
            
            console.log(data)
            clearInputFile()
            setMyData({
                ...mydata,
                imageUrl: data.data.imagePath
            })
    }

    const handleChange = (e) => {
        setMyData({
            ...mydata,
            name : e.target.value
        })
    }

    const handleUpload = (e) =>{
        e.preventDefault()

        getUrlImg()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(id){
            //Edit
                setIsLoading(true)
                let res = await axios.put(`http://localhost:3000/testimonials/${id}`,{
                    name: mydata.name,
                    content: myContent,
                    imageUrl: mydata.imageUrl
                })
                if(res.data[0] === 1) {
                    setIsLoading(false)
                    alert('Testimonio editado con exito')
                }
            Navigate('/testimonios')
        }else{
            //create
            console.log('create')
            let res = await axios.post('http://localhost:3000/testimonials',{
                name: mydata.name,
                content: myContent,
                imageUrl: mydata.imageUrl
            })

            if(res.statusText === "OK"){
                alert('USUARIO CREADO CON EXITO')
                Navigate('/testimonios')
            }
            console.log(res)
        }
    }

    const handleFile = (e) => {
        setFiles(e.target.files[0])
    }

    const clearInputFile = () => {
        inputFile.value = undefined
    }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
        <div className='border border-dark w-50' style={{padding: "1rem"}}>
            <form className='d-flex flex-column align-items-center' onSubmit={handleUpload}>
                        <div class="input-group" style={{padding: ".5rem"}}>
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFile} ref={inputFile}/>
                            <button className="btn btn-outline-danger" type="submit" id="inputGroupFileAddon04">Upload</button>
                        </div>
            </form>

            <form className='d-flex flex-column w-100' onSubmit={handleSubmit}>
                <label for="name" className='text-danger font-weight-bold text-center' style={{fontWeight:"bold"}}>Name</label>
                <input type="text" name='name' className='mb-1' placeholder={mydata.name} onChange={handleChange} id="name" style={{width:"50%", margin:"0 auto"}}/>
                {isLoading && <Loader />}
                <div className='mb-1' style={{padding: ".5rem"}}>
                    <CKEditor
                        name="content" 
                        editor={ ClassicEditor }
                        data={id ? mydata.content : ''}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setMyContent(data)
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </div>
                <input type="submit" name="" id="" value={id ? 'Edit' : 'Create'} style={{width: "50%",fontWeight:"bold" ,margin:"0 auto"}} className="btn btn-outline-info"/>
            </form>
        </div>
    </div>
  )
}

export default TestimonialsForm