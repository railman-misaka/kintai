import React, { useState } from 'react';
import { Clock } from './Clock';

interface Props {
  onRecord: (teamName: string, note: string) => void;
  isCheckedIn: boolean;
}

export const TimeRecordForm: React.FC<Props> = ({ onRecord, isCheckedIn }) => {
  const [teamName, setTeamName] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    onRecord(teamName, note);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          {isCheckedIn ? '入室中' : '退室中'}
        </h2>
        <Clock />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            チーム名
          </label>
          <select
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">選択してください</option>
            <option value="開発">開発</option>
            <option value="デザイン">デザイン</option>
            <option value="営業">営業</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            備考
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          打刻する
        </button>
      </div>
    </div>
  );
};