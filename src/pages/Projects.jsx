import React from 'react';
import {Link} from 'react-router-dom';

import ProjectCard from '../components/projectcard';

import imgSuper from '../images/rawpixel-603646-unsplash.jpg';

const Project = (props) => {
    let projects = [
        {
            slug: 'super-theme',
            name: 'super theme',
            image: imgSuper,
            featured: true,
            tags: [
                "PHP",
                "SCSS",
                "Moodle",
                "JS",
                "Design"
            ]
        },
        {
            slug: 'content-builder',
            name: 'Content Builder',
            image: imgSuper,
            featured: true,
            tags: [
                "PHP",
                "SCSS",
                "React",
                "Moodle",
                "Design"
            ]
        }
    ];

    let tags = [];
    projects.map(project => {
        project.tags.map(tag => {
            if (!tags.includes(tag)) {
                tags.push(tag);
                return null;
            }
            return null;
        });
        return null;
    });
    return (
        <div id="projects" className="page-content">
            <div className="content">
                <div className="tags">
                    <div className="tag-row">
                        <Link className="btn btn-red" to="/projects">All</Link>
                        {tags.map((tag,i) => {
                            if (props.match.params.tag === tag) {
                                return <Link key={i} className="btn btn-red" to={props.match.url}>{tag}</Link>
                            } else {
                                return <Link key={i} className="btn btn-red" to={"/projects/" + tag}>{tag}</Link>
                            }
                        })}
                    </div>
                </div>
                <div className="projects">
                    <div className="row">
                        {
                            projects.map((project, i) => {
                                if (props.match.params.tag && project.tags.includes(props.match.params.tag)) {
                                    return <ProjectCard key={i} data={project} />
                                } else if (!props.match.params.tag) {
                                    return <ProjectCard key={i} data={project} />
                                }
                                return "";
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;