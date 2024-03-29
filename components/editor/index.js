import React, {useEffect, useState, useRef} from 'react';
import { useIntl } from 'react-intl';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function TextEditor(props) {
    const [editorState, setEditorState] = useState(props.editorState)
    // EditorState.createEmpty()
    
    const [editorData, setEditorData] = useState()

    const { formatMessage } = useIntl()

    useEffect(() => {
        handleSend()
        focusEditor()
    }, [editorData])

    const handleSend = () => {
        props.sendToParent(editorData)
    }

    const editor = useRef()

    function focusEditor() {
        editor.current.focus();
    }

    const StyleButton = (props) => {
        let onClickButton = (e) => {
            e.preventDefault();
            props.onToggle(props.style)
        }
        return (
            <div onMouseDown={onClickButton}
                className="m-1 select-none text-black bg-white uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide hover:outline hover:outline-2 hover:outline-[#f8931f]">
                {props.label}
            </div>
        )
    }

    const BLOCK_TYPES = [
        { label: formatMessage({id: 'header-one'}), style: "header-one"},
        { label: formatMessage({id: 'header-two'}), style: "header-two"},
        { label: formatMessage({id: 'header-three'}), style: "header-three"},
        { label: formatMessage({id: 'header-four'}), style: "header-four"},
        { label: formatMessage({id: 'header-five'}), style: "header-five"},
        { label: formatMessage({id: 'header-six'}), style: "header-six"},
        { label: formatMessage({id: 'blockquote'}), style: "header-six"},
        { label: formatMessage({id: 'ordered'}), style: "ordered-list-item"},
        { label: formatMessage({id: 'unordered'}), style: "unordered-list-item"}
    ]

    const BlockStyleControls = (props) => {
        return (
            <>
                {BLOCK_TYPES.map((type) => {
                    return (
                        <StyleButton
                            key={type.label}
                            label={type.label}
                            style={type.style}
                            onToggle={props.onToggle}
                        />
                    )
                })}
            </>
        )
    }

    const onBlockClick = (e) => {
        let nextState = RichUtils.toggleBlockType(editorState, e)
        setEditorState(nextState)
    }

    return (
        <React.Fragment>
            <div className='flex justify-center flex-wrap mb-3'>
                <BlockStyleControls onToggle={onBlockClick} />
            </div>
            <span
                className="w-full p-4 pr-7 text-sm rounded-lg border-0 focus:outline-[#57be6d] mb-4 text-gray-500"
            >
                {
                    formatMessage({
                        id: 'steps'
                    })
                }
            </span>
            <div onClick={focusEditor} className="w-full bg-white p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d] mt-4">
                <Editor 
                    style={{ fontFamily: "Montserrat-Light"}}
                    ref={editor}
                    editorState={editorState} 
                    onChange={(editorState) => {
                        setEditorState(editorState)
                        setEditorData(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
                        handleSend()
                    }}
                />
            </div>
        </React.Fragment>
    )
}