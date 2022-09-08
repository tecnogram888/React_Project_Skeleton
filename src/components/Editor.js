import React from 'react'

import css from './Editor.css'

export default class Editor extends React.Component {
    render() {
        const title = this.props.value.title
        const children = this.props.value.children
        let expanded

        if (children.length) {
            expanded = children.map((child, i) => {
                if (child instanceof Object) {
                    return <Editor value={child} key={i} />
                } else {
                    return <li key={i}>Value is {child.toString()}</li>
                }
            })
        }
        const titleString = `Title is ${title}`;
        return <div className="editorBox">
            <div key={0}>{titleString}</div>
            {expanded}
        </div>
    }
}
