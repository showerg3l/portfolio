import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = (props) => {
  let navitems = [
    {
      name: 'about',
      url: '/about',
      label: 'Who am I'
    },
    {
      name: 'projects',
      url: '/projects',
      label: 'What I have done'
    },
    {
      name: 'contact',
      url: '/contact',
      label: 'How to get in touch'
    }
  ]
  return (
    <div className='sidebar'>
      <div className='name'>
        <Link to='/'>
          <h1>
            <span className='text-red d-block w-100'>Callum</span>
            <span className='text-red-50 d-block w-100'>Booth</span>
          </h1>
        </Link>
      </div>
      <div className='job-title'>
        <h4 className='text-light'>Web Developer</h4>
      </div>
      <div className='socials'>
        <Link
          to='https://twitter.com/showerg3l'
          className='twitter'
          target='_blank'
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </Link>
        <Link
          to='https://github.com/callumbooth'
          className='github'
          target='_blank'
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Link>
      </div>
      <div className='contact-info'>
        <div className='email'>
          <span className='text-red'>e: &nbsp;</span>
          <span className='text-bold'>
            <a href='mailto:callumbooth@live.co.uk'>callum-booth@live.co.uk</a>
          </span>
        </div>
      </div>
      <div className='nav'>
        <ul className='list-unstyled'>
          {navitems.map((item, i) => {
            let additionalclasses = ''
            if (item.url === props.location.pathname) {
              additionalclasses = 'active'
            }
            return (
              <li key={i} className='nav-item'>
                <Link className={'nav-link ' + additionalclasses} to={item.url}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
