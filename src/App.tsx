import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TimeRecordForm } from './components/TimeRecordForm';
import { UserHeader } from './components/UserHeader';
import type { TimeRecord, Staff, AppState } from './types';

const initialState: AppState = {
  currentStaff: {
    id: '1',
    name: '山田太郎',
    team: '開発',
    email: 'yamada.taro@company.jp',
    staffCode: 'EMP001'
  },
  timeRecords: [],
  staffList: [
    { id: '1', name: '山田太郎', team: '開発', email: 'yamada.taro@company.jp', staffCode: 'EMP001' },
    { id: '2', name: '鈴木花子', team: 'デザイン', email: 'suzuki.hanako@company.jp', staffCode: 'EMP002' },
  ],
};

function App() {
  const [state, setState] = useState<AppState>(initialState);
  const [selectedMenu, setSelectedMenu] = useState('attendance');
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleTimeRecord = (teamName: string, note: string) => {
    if (!state.currentStaff) return;

    const now = new Date();
    const newRecord: TimeRecord = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      startTime: isCheckedIn ? state.timeRecords[0].startTime : now.toLocaleTimeString('ja-JP'),
      endTime: isCheckedIn ? now.toLocaleTimeString('ja-JP') : null,
      teamName,
      note,
      staffId: state.currentStaff.id,
    };

    setState((prev) => ({
      ...prev,
      timeRecords: [newRecord, ...prev.timeRecords],
    }));
    setIsCheckedIn(!isCheckedIn);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onMenuSelect={setSelectedMenu} selectedMenu={selectedMenu} />
      
      <div className="flex-1 flex flex-col">
        <UserHeader currentStaff={state.currentStaff} />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <ul className="space-y-4">
                    {state.timeRecords.map((record) => (
                      <li key={record.id} className="border-b pb-4">
                        <div className="flex justify-between">
                          <span className="font-medium">{record.date}</span>
                          <span>{record.teamName}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <div>出勤: {record.startTime}</div>
                          {record.endTime && <div>退勤: {record.endTime}</div>}
                        </div>
                        {record.note && (
                          <div className="mt-2 text-sm text-gray-500">
                            {record.note}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-span-7">
                <TimeRecordForm
                  onRecord={handleTimeRecord}
                  isCheckedIn={isCheckedIn}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;