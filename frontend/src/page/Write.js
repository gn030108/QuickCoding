import React from 'react'
import { WriteActions } from '../redux/reducer/writeReducer'
import TextareaAutosize from 'react-textarea-autosize';
import styles from '../style/Write.module.scss'
import btn from '../style/Button.module.scss'
import Navbar from '../component/Navbar'
import { useDispatch, useSelector } from 'react-redux';


const Write = () => {

    const dispatch = useDispatch();
    const title = useSelector((state)=>state.write.title)
    const content = useSelector((state)=>state.write.content)

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name==='title'){
            dispatch(WriteActions.getTitle(value))
        }
        else if (name==='content'){
            dispatch(WriteActions.getContent(value))
        }
    }

    return (
        <div className={styles.container}>{/*보라색 배경*/}
            <Navbar/>
            <div className={styles.whiteboard}>{/*흰 배경*/}
                <div className={styles.border}>{/*글 쓰는 곳 테두리*/}
                    <div className={styles.main}>{/*가운데 몰기*/}
                        <textarea rows={1} onChange={handleInputChange} value={title} name='title' placeholder='제목'/>{/*제목*/}
                        <TextareaAutosize 
                        className={styles.content}
                        onChange={handleInputChange}
                        value={content}
                        name='content'
                        minRows={1}
                        maxRows={20}
                        placeholder='내용' 
                        />{/*내용*/}
                    </div>
                </div>
                <div className={styles.button}>
                        <button className={`${btn.custom}, ${btn.write}`} >올리기</button>
                    </div>
            </div>
        </div>
    )
}

export default Write

//   <div></div>
//   {/**/}
//   className={}