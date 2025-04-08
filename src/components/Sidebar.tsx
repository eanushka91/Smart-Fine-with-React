import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, FileTextIcon, AlertCircleIcon, HistoryIcon, UserIcon, XIcon } from 'lucide-react';
const Sidebar: React.FC<{ open: boolean; setOpen: (open: boolean) => void }> = ({
  open,
  setOpen
}) => {
  const location = useLocation();
  const navigation = [{
    name: 'Dashboard',
    href: '/',
    icon: HomeIcon
  }, {
    name: 'E-License',
    href: '/e-license',
    icon: FileTextIcon
  }, {
    name: 'Fine Issuance',
    href: '/fine-issuance',
    icon: AlertCircleIcon
  }, {
    name: 'Fine History',
    href: '/fine-history',
    icon: HistoryIcon
  }, {
    name: 'Profile',
    href: '/profile',
    icon: UserIcon
  }];
  return <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setOpen(false)} />
        {/* Sidebar component */}
        <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-64 bg-white shadow-lg">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-blue-700">
                Smart Fine
              </span>
            </div>
            <button type="button" className="text-gray-500 hover:text-gray-600" onClick={() => setOpen(false)}>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map(item => {
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setOpen(false)}>
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>;
          })}
          </nav>
        </div>
      </div>
      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-4 bg-white border-b border-gray-200">
            <span className="text-xl font-semibold text-blue-700">Smart Fine</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map(item => {
              const isActive = location.pathname === item.href;
              return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>;
            })}
            </nav>
          </div>
        </div>
      </div>
    </>;
};
export default Sidebar;