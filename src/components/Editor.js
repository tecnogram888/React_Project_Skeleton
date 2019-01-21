import React from 'react'

export default class Editor extends React.Component {
    render() {
        const title = this.props.value.title
        const children = this.props.value.children
        let expanded

        if (children.length) {
            expanded = children.map(child => {
                if (child instanceof Object) {
                    return <Editor value = { child } />
                } else {
                    return <div>Value is {child.toString()}</div>
                }
            })
        }

        return <div>
            <div>Title is {title}</div>
            {expanded}
        </div>
    }
}