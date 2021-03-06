import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import './index.css'
// import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Shri Vitthal Hindu Mandir</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            aria-label='Menu toggle button'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className='navbar-item' to='/'>
              Home
            </Link>
            <Link className='navbar-item' to='/about'>
              About Us
            </Link>
            <Link className='navbar-item' to='/pricing'>
              Our Services
            </Link>
            <Link className='navbar-item' to='/contact'>
              Contact Us
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a
                    className='button is-primary is-outlined'
                    href='https://us4.list-manage.com/subscribe?u=08406db9cc49d8dd58bd3a28a&id=f70b74727c'>
                    Events
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
