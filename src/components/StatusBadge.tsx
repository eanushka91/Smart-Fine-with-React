import React from 'react';
interface StatusBadgeProps {
  status: 'Paid' | 'Pending' | 'Overdue' | 'Active' | 'Expired';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status
}) => {
  let bgColor = 'bg-gray-100 text-gray-800';
  if (status === 'Paid') {
    bgColor = 'bg-green-100 text-green-800';
  } else if (status === 'Pending') {
    bgColor = 'bg-yellow-100 text-yellow-800';
  } else if (status === 'Overdue') {
    bgColor = 'bg-red-100 text-red-800';
  } else if (status === 'Active') {
    bgColor = 'bg-blue-100 text-blue-800';
  } else if (status === 'Expired') {
    bgColor = 'bg-gray-100 text-gray-800';
  }
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
      {status}
    </span>;
};
export default StatusBadge;