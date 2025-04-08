import React from 'react';
import { UserIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
import StatusBadge from './StatusBadge';
interface LicenseCardProps {
  license: {
    id: string;
    name: string;
    type: string;
    category: string;
    issueDate: string;
    expiryDate: string;
    status: string;
  };
}
const LicenseCard = ({
  license
}: LicenseCardProps) => {
  return <div className="h-[400px] perspective">
      <div className="relative h-full w-full transition-all duration-500 preserve-3d hover:rotate-y-180">
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full rounded-xl bg-gradient-to-br from-white to-gray-100 p-6 shadow-xl ring-1 ring-gray-200/50">
            <div className="relative h-full">
              {/* Holographic effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-blue-100/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Security pattern */}
              <div className="absolute inset-0 rounded-xl opacity-5">
                <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px'
              }} />
              </div>
              {/* License content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Driver License
                    </h3>
                    <p className="text-sm text-gray-500">{license.category}</p>
                  </div>
                  <StatusBadge status={license.status} />
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {license.name}
                    </p>
                    <p className="text-sm text-gray-500">{license.id}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Issue Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {license.issueDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Expiry Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {license.expiryDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-2">
                  <MapPinIcon className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-500">Municipal Authority</p>
                </div>
              </div>
              {/* Bottom security strip */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-b-xl overflow-hidden">
                <div className="h-full opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 10px)'
              }} />
              </div>
            </div>
          </div>
        </div>
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-xl ring-1 ring-gray-200/50">
            <div className="relative h-full">
              {/* Black magnetic strip */}
              <div className="absolute top-4 left-0 right-0 h-12 bg-gray-900" />
              <div className="mt-20">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500">License Type</p>
                    <p className="text-sm font-medium text-gray-900">
                      {license.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Restrictions</p>
                    <p className="text-sm font-medium text-gray-900">None</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Authority</p>
                    <p className="text-sm font-medium text-gray-900">
                      Department of Transportation
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      Scan for verification
                    </p>
                    <div className="mt-2 inline-block rounded-lg bg-white p-2">
                      <div className="h-20 w-20 bg-gradient-to-br from-gray-900 to-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LicenseCard;