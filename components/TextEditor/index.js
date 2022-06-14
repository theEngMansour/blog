import React, {useEffect, useState} from 'react';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function TextEditor(props) {
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty()
    )

    const StyleButton = (props) => {
        let onClickButton = (e) => {
            e.preventDefault();
            props.onToggle(props.style)
        }

        return (
            <span onMouseDown={onClickButton} className="mx-2">{props.label}</span>
        )
    }

    const BLOCK_TYPES = [
        { label: "H1", style: "header-one"},
        { label: "H2", style: "header-two"},
        { label: "H3", style: "header-three"},
        { label: "H4", style: "header-four"},
        { label: "H5", style: "header-five"},
        { label: "H6", style: "header-six"},
        { label: "blockquote", style: "blockquote"},
        { label: "code-block", style: "code-block"},
        { label: "unordered", style: "unordered-list-item"},
        { label: "ordered", style: "ordered-list-item"}
    ]

    const BlockStyleControls = (props) => {
        return (
            <div>
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
            </div>
        )
    }

    const onBlockClick = (e) => {
        let nextState = RichUtils.toggleBlockType(editorState, e)
        setEditorState(nextState)
    }

    console.log(convertToRaw(editorState.getCurrentContent()))

    return (
        <React.Fragment>
            <div className='RichEditor-controls'>
                <BlockStyleControls onToggle={onBlockClick} />
            </div>
            <div className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none my-2">
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
        </React.Fragment>
    )
}