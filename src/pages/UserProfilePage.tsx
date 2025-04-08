import React from 'react';
import Card from '../components/Card';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon, KeyIcon, ShieldIcon } from 'lucide-react';
const UserProfilePage = () => {
  return <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        User Profile
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <UserIcon className="h-16 w-16 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Admin User
              </h2>
              <p className="text-gray-500">System Administrator</p>
              <div className="mt-6 w-full border-t border-gray-200 pt-4">
                <div className="flex items-center py-2">
                  <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">admin@finesys.com</span>
                </div>
                <div className="flex items-center py-2">
                  <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">(555) 123-4567</span>
                </div>
                <div className="flex items-center py-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Municipal Office</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                Edit Profile
              </button>
            </div>
          </Card>
          <Card className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              System Access
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">Admin Access</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Granted
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">Fine Management</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Granted
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">License Management</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Granted
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">Payment Processing</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Granted
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">User Management</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Granted
                </span>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Account Settings
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" id="firstName" defaultValue="Admin" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" id="lastName" defaultValue="User" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" defaultValue="admin@finesys.com" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input type="tel" id="phone" defaultValue="(555) 123-4567" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select id="department" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option>Administration</option>
                  <option>License Department</option>
                  <option>Fine Management</option>
                  <option>IT Support</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Office Address
                </label>
                <input type="text" id="address" defaultValue="Municipal Office, 123 Civic Center Blvd" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md mr-3 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </Card>
          <Card className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Security Settings
            </h2>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Change Password
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <div className="relative">
                    <input type="password" id="currentPassword" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <KeyIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input type="password" id="newPassword" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <KeyIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input type="password" id="confirmPassword" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <KeyIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                  Update Password
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Two-Factor Authentication
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="flex items-center">
                  <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};
export default UserProfilePage;