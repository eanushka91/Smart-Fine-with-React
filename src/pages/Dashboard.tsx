import React from 'react';
import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, FileTextIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';
const Dashboard = () => {
  // Mock data
  const stats = [{
    name: 'Total Fines',
    value: '$12,456',
    change: '+12%',
    icon: DollarSignIcon,
    trend: 'up'
  }, {
    name: 'Active Licenses',
    value: '1,893',
    change: '+5%',
    icon: FileTextIcon,
    trend: 'up'
  }, {
    name: 'Pending Fines',
    value: '45',
    change: '-3%',
    icon: AlertTriangleIcon,
    trend: 'down'
  }, {
    name: 'Collection Rate',
    value: '94%',
    change: '+2%',
    icon: CheckCircleIcon,
    trend: 'up'
  }];
  const recentFines: { 
    id: string; 
    name: string; 
    amount: string; 
    date: string; 
    status: 'Paid' | 'Pending' | 'Overdue'; 
  }[] = [{
    id: 'F-1234',
    name: 'John Smith',
    amount: '$150.00',
    date: '2023-06-15',
    status: 'Pending'
  }, {
    id: 'F-1233',
    name: 'Sarah Johnson',
    amount: '$75.00',
    date: '2023-06-14',
    status: 'Paid'
  }, {
    id: 'F-1232',
    name: 'Michael Brown',
    amount: '$200.00',
    date: '2023-06-10',
    status: 'Overdue'
  }, {
    id: 'F-1231',
    name: 'Emily Davis',
    amount: '$125.00',
    date: '2023-06-08',
    status: 'Paid'
  }];
  const recentLicenses: { 
      id: string; 
      name: string; 
      type: string; 
      expiry: string; 
      status: 'Active' | 'Expired'; 
  }[] = [{
      id: 'L-5678',
      name: 'Robert Wilson',
      type: 'Driver',
      expiry: '2024-05-20',
      status: 'Active'
    }, {
      id: 'L-5677',
      name: 'Jennifer Lee',
      type: 'Business',
      expiry: '2023-12-15',
      status: 'Active'
    }, {
      id: 'L-5676',
      name: 'David Taylor',
      type: 'Driver',
      expiry: '2023-04-30',
      status: 'Expired'
    }, {
      id: 'L-5675',
      name: 'Lisa Anderson',
      type: 'Professional',
      expiry: '2024-02-28',
      status: 'Active'
    }];
  return <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map(stat => <Card key={stat.name} className="flex items-center">
            <div className="p-3 rounded-md bg-blue-50">
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <div className="flex items-center text-sm">
                {stat.trend === 'up' ? <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" /> : <TrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
              </div>
            </div>
          </Card>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Recent Fines">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentFines.map(fine => <tr key={fine.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {fine.id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {fine.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {fine.amount}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <StatusBadge status={fine.status} />
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
        <Card title="Recent Licenses">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLicenses.map(license => <tr key={license.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {license.id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {license.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {license.type}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <StatusBadge status={license.status} />
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>;
};
export default Dashboard;