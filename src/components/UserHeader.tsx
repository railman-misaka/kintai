import React from 'react';
import { Mail, User } from 'lucide-react';
import type { Staff } from '../types';

interface Props {
  currentStaff: Staff | null;
}

export const UserHeader: React.FC<Props> = ({ currentStaff }) => {
  if (!currentStaff) return null;

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-end items-center space-x-6">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{currentStaff.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span className="font-medium">{currentStaff.name}</span>
            <span className="ml-2 text-sm text-gray-500">({currentStaff.staffCode})</span>
          </div>
        </div>
      </div>
    </div>
  );
};