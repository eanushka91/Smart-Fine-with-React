import React, { useState } from 'react';
import Card from '../components/Card';
import { SearchIcon, UserIcon, CalendarIcon, DollarSignIcon, ClipboardIcon } from 'lucide-react';
const FineIssuancePage = () => {
  const [step, setStep] = useState(1);
  // Mock violation types
  const violationTypes = [{
    id: 1,
    code: 'SPD-01',
    description: 'Speeding (1-10 mph over)',
    amount: 75
  }, {
    id: 2,
    code: 'SPD-02',
    description: 'Speeding (11-20 mph over)',
    amount: 150
  }, {
    id: 3,
    code: 'SPD-03',
    description: 'Speeding (21+ mph over)',
    amount: 300
  }, {
    id: 4,
    code: 'STP-01',
    description: 'Failure to stop at sign/signal',
    amount: 125
  }, {
    id: 5,
    code: 'PKG-01',
    description: 'Illegal parking',
    amount: 50
  }, {
    id: 6,
    code: 'DUI-01',
    description: 'Driving under influence',
    amount: 500
  }, {
    id: 7,
    code: 'REG-01',
    description: 'Expired registration',
    amount: 100
  }, {
    id: 8,
    code: 'INS-01',
    description: 'No insurance',
    amount: 200
  }];
  return <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Fine Issuance
      </h1>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <UserIcon className="h-5 w-5" />
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <ClipboardIcon className="h-5 w-5" />
            </div>
            <div className={`h-1 w-16 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <DollarSignIcon className="h-5 w-5" />
            </div>
          </div>
          <button onClick={() => setStep(1)} className="text-sm text-blue-600 hover:text-blue-800">
            Reset
          </button>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className={step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}>
            Offender Information
          </span>
          <span className={step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}>
            Violation Details
          </span>
          <span className={step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}>
            Review & Submit
          </span>
        </div>
      </div>
      {step === 1 && <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Offender Information
          </h2>
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search by license ID or name..." className="pl-10 pr-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Search existing license holders or enter new offender details
              below
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input type="text" id="firstName" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input type="text" id="lastName" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="licenseID" className="block text-sm font-medium text-gray-700 mb-1">
                License ID
              </label>
              <input type="text" id="licenseID" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="date" id="dateOfBirth" className="pl-10 pr-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input type="tel" id="phone" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input type="text" id="address" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Continue to Violation Details
            </button>
          </div>
        </Card>}
      {step === 2 && <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Violation Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="violationDate" className="block text-sm font-medium text-gray-700 mb-1">
                Violation Date & Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="datetime-local" id="violationDate" className="pl-10 pr-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input type="text" id="location" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter address or coordinates" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Violation Type
            </label>
            <div className="overflow-y-auto max-h-80 border border-gray-300 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Select
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fine Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {violationTypes.map(violation => <tr key={violation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="radio" name="violationType" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {violation.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {violation.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${violation.amount.toFixed(2)}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea id="notes" rows={4} className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter any additional details about the violation..."></textarea>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attach Evidence (optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button onClick={() => setStep(1)} className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
              Back
            </button>
            <button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Continue to Review
            </button>
          </div>
        </Card>}
      {step === 3 && <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Review & Submit
          </h2>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-medium text-gray-900 mb-2">
              Offender Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <span className="ml-2 text-gray-900">John Smith</span>
              </div>
              <div>
                <span className="text-gray-500">License ID:</span>
                <span className="ml-2 text-gray-900">L-1234</span>
              </div>
              <div>
                <span className="text-gray-500">Date of Birth:</span>
                <span className="ml-2 text-gray-900">1985-06-12</span>
              </div>
              <div>
                <span className="text-gray-500">Contact:</span>
                <span className="ml-2 text-gray-900">
                  john.smith@example.com
                </span>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Address:</span>
                <span className="ml-2 text-gray-900">
                  123 Main St, Anytown, ST 12345
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-medium text-gray-900 mb-2">
              Violation Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div>
                <span className="text-gray-500">Date & Time:</span>
                <span className="ml-2 text-gray-900">2023-06-15 14:30</span>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>
                <span className="ml-2 text-gray-900">Main St & Oak Ave</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Violation Type:</span>
                <span className="ml-2 text-gray-900">
                  SPD-02: Speeding (11-20 mph over)
                </span>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Fine Amount:</span>
                <span className="ml-2 text-gray-900 font-medium">$150.00</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Additional Notes:</span>
                <p className="mt-1 text-gray-900">
                  Recorded speed was 48 mph in a 30 mph zone. Driver was
                  cooperative.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md mb-6 border border-yellow-200">
            <h3 className="font-medium text-yellow-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important Notice
            </h3>
            <p className="text-sm text-yellow-800">
              By submitting this fine, you confirm that all information provided
              is accurate and complete. The offender will be notified via email
              and mail about this fine.
            </p>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I confirm that the information provided is accurate
              </label>
              <p className="text-gray-500">
                I understand that providing false information may result in
                disciplinary action.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button onClick={() => setStep(2)} className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
              Back
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Submit Fine
            </button>
          </div>
        </Card>}
    </div>;
};
export default FineIssuancePage;