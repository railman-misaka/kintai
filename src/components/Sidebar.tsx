import React from 'react';
import { ClipboardList, Clock, Users } from 'lucide-react';

interface Props {
  onMenuSelect: (menu: 'attendance' | 'timeEdit' | 'staff') => void;
  selectedMenu: string;
}

export const Sidebar: React.FC<Props> = ({ onMenuSelect, selectedMenu }) => {
  const menuItems = [
    { id: 'attendance', icon: ClipboardList, label: '出勤簿' },
    { id: 'timeEdit', icon: Clock, label: '打刻修正' },
    { id: 'staff', icon: Users, label: 'スタッフ設定' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">勤怠管理</h1>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onMenuSelect(item.id as any)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                selectedMenu === item.id
                  ? 'bg-blue-600'
                  : 'hover:bg-gray-700'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};