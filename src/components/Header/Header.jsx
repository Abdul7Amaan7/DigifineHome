import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';


// Navigation Courses (Location-based)
const navCourses = [
  { 
    name: 'Mumbai',
    slug: '',
    children: [
      { 
        name: 'Digital Marketing',
        slug: '',
        children: [
          { name: 'Master in Digital Marketing', slug: '/courses/masterdm' },
          { name: 'Graduate in Digital Marketing', slug: '/courses/graduate-dm' },
          { name: 'Executive Program', slug: '/courses/executive-dm' },
        ]
      },
      { 
        name: 'Graphic Design',
        slug: '',
        children: [
          { name: 'Advanced Graphic Design', slug: '/courses/advanced-gd' },
          { name: 'Diploma in Graphic Design', slug: '/courses/diploma-gd' },
        ]
      },
      { 
        name: 'IT Courses',
        slug: '',
        children: [
          { name: 'Full Stack Development', slug: '/courses/full-stack' },
          { name: 'Data Science', slug: '/courses/data-science' },
          { name: 'Cloud Computing', slug: '/courses/cloud-computing' },
        ]
      }
    ]
  },
  { 
    name: 'Navi Mumbai',
    slug: '',
    children: [
      { 
        name: 'Digital Marketing',
        slug: '',
        children: [
          { name: 'MBA in Digital Marketing', slug: '/courses/digitalmarketing/mba' },
          { name: 'PG in Digital Marketing', slug: '/courses/digitalmarketing/pgdm' },
          { name: 'Executive Program', slug: '/courses/executive-dm' },
        ]
      },
      { 
        name: 'Graphic Design',
        slug: '',
        children: [
          { name: 'Advanced Graphic Design', slug: '/courses/advanced-gd' },
          { name: 'Diploma in Graphic Design', slug: '/courses/diploma-gd' },
        ]
      },
      { 
        name: 'IT Courses',
        slug: '',
        children: [
          { name: 'Full Stack Development', slug: '/courses/full-stack' },
          { name: 'Data Science', slug: '/courses/data-science' },
          { name: 'Cloud Computing', slug: '/courses/cloud-computing' },
        ]
      },
    ]
  },
  { 
    name: 'Pune',
    slug: '',
    children: [
      { name: 'Programming Fundamentals', slug: '/courses/programming' },
      { name: 'UI/UX Design', slug: '/courses/ui-ux' },
    ]
  },
];

// Explore Courses (Category-based)
const exploreCourses = [
  { 
    name: 'Digital Marketing',
    slug: '',
    children: [
      { name: 'Master Program', slug: '/Courses/MasterDM' },
      { name: 'Advanced Certification', slug: '/courses/adv-dm' },
      { name: 'Professional Diploma', slug: '/courses/pro-dm' },
    ]
  },
  { 
    name: 'Graphic Design',
    slug: '',
    children: [
      { name: 'UI/UX Design', slug: '/courses/ui-ux' },
      { name: 'Motion Graphics', slug: '/courses/motion-graphics' },
      { name: '3D Modeling', slug: '/courses/3d-modeling' },
    ]
  },
  { 
    name: 'IT Courses',
    slug: '',
    children: [
      { name: 'Full Stack Development', slug: '/courses/full-stack' },
      { name: 'Data Science', slug: '/courses/data-science' },
      { name: 'Cloud Computing', slug: '/courses/cloud-computing' },
    ]
  }
];

const navItems = [
  { name: 'Home', slug: '/' },
  { name: 'About Us', slug: '/about' },
  { 
    name: 'Courses', 
    slug: '/courses',
    children: navCourses
  },
  { name: 'Contact Us', slug: '/contact' },
  { name: 'Blog', slug: '/blog' },
];

const searchOptions = [
  { name: 'React JS Course', slug: '/Courses/react' },
  { name: 'Data Structures Course', slug: '/courses/data-structures' },
  { name: 'Python Programming', slug: '/courses/python' },
  { name: 'Machine Learning', slug: '/courses/ml' },
  { name: 'Web Development', slug: '/courses/web-dev' },
];

const recentSearches = [
  { name: 'React JS', slug: '/courses/react' },
  { name: 'Data Structures', slug: '/courses/data-structures' },
  { name: 'MERN Stack', slug: '/courses/mern' },
];

const Dropdown = ({ items, onClose, position = 'left' }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div 
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} mt-2 w-48 bg-white shadow-lg rounded-md z-20`}
      onMouseLeave={() => setOpenSubmenu(null)}
    >
      {items.map((item) => (
        <div key={item.name} className="relative">
          <div 
            className="flex justify-between items-center hover:bg-blue-50 cursor-pointer"
            onClick={() => {
              if (item.children) {
                setOpenSubmenu(item.name === openSubmenu ? null : item.name);
              }
            }}
          >
            {item.children ? (
              <>
                <span className="block px-4 py-2 text-gray-700 text-sm">
                  {item.name}
                </span>
                <button className="pr-2">
                  <svg 
                    className="w-4 h-4 text-gray-500"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            ) : (
              <Link
                to={item.slug}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 text-sm w-full"
                onClick={onClose}
              >
                {item.name}
              </Link>
            )}
          </div>
          
          {item.children && openSubmenu === item.name && (
            <Dropdown 
              items={item.children} 
              onClose={onClose}
              position="right"
            />
          )}
        </div>
      ))}
    </div>
  );
};

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSearchOptions, setFilteredSearchOptions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setIsExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = searchOptions.filter((option) =>
      option.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSearchOptions(filtered);
  };

  const handleSearchSubmit = () => {
    if (searchQuery) {
      const selectedOption = searchOptions.find((option) =>
        option.name.toLowerCase() === searchQuery.toLowerCase()
      );
      if (selectedOption) {
        window.location.href = selectedOption.slug;
      }
    }
  };

  const toggleCourses = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setIsExploreOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
    setActiveDropdown(null);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow w-full z-10 relative top-0">
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">
              <Logo />
            </Link>
          </h1>

          <div className="relative flex-1 md:flex-none">
            <div className="flex items-center border border-gray-300 rounded-md w-full">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button
                onClick={handleSearchSubmit}
                className="px-4 py-2 text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {(isSearchFocused || searchQuery) && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                <ul className="space-y-2 p-4">
                  {!searchQuery && (
                    <>
                      <p className="text-sm text-gray-500">Recent Searches</p>
                      {recentSearches.map((option) => (
                        <li key={option.name}>
                          <Link
                            to={option.slug}
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setSearchQuery('')}
                          >
                            {option.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                  {searchQuery && filteredSearchOptions.map((option) => (
                    <li key={option.name}>
                      <Link
                        to={option.slug}
                        className="block text-gray-700 hover:text-blue-600"
                        onClick={() => setSearchQuery('')}
                      >
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleCourses(item.name)}
                      className={`text-gray-700 font-medium hover:text-blue-600 ${
                        activeDropdown === item.name ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <Dropdown 
                        items={item.children} 
                        onClose={() => setActiveDropdown(null)}
                      />
                    )}
                  </>
                ) : (
                  <Link
                    to={item.slug}
                      className={`font-medium hover:text-blue-600 ${
                        isActive(item.slug) ? 'text-blue-600' : 'text-gray-700'
                      }`}
                      aria-current={isActive(item.slug) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="relative dropdown-container">
            <button
              onClick={toggleExplore}
              className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Explore Courses
            </button>
            {isExploreOpen && (
              <Dropdown 
                items={exploreCourses} 
                onClose={() => setIsExploreOpen(false)}
                position="right"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
