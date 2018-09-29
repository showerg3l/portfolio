import React from 'react';

import ProjectCard from '../components/projectcard';
const Project = () => {
    let projects = [
        {
            slug: 'super-theme',
            name: 'super theme',
            featured: true
        },
        {
            slug: 'contentbuilder',
            name: 'Content Builder',
            featured: false
        },
        {
            slug: 'htm-app',
            name: 'HTM App',
            featured: false
        }
    ]
    return (
        <div id="projects" className="page-content">
            <div className="content">
                <div className="row">
                {
                    projects.map((project, i) => {
                        return <ProjectCard key={i} data={project} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Project;