import HamburgerMenu from './HamburgerMenu';
import HorizontalMenu from './HorizontalMenu';

const Header = () => {
  return (
    <header className="header bg-blue-600 text-white p-4 shadow-md">
    <div className='container mx-auto flex justify-between items-center'>
    <h1 className='text-2xl font-bold'>My Website</h1>
      <HorizontalMenu />
      <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
