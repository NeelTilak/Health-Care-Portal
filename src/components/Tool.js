import "./css/ToolCardStyles.css"
import ToolCard from "./ToolCard"
import ToolCardData from "./ToolCardData"

import React from 'react'

const Tool = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Tools</h1>
        <div className="project-container">
            {ToolCardData.map((val, ind) => {
                    return (
                        <ToolCard
                        key = {ind}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        text = {val.text}
                        view = {val.view}
                        />
                    )
                })}
        </div>
    </div>
  )
}

export default Tool