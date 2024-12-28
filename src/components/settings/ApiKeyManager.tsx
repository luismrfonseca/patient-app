import React, { useState } from 'react';
import { Plus, Key, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import type { ApiKey } from '@/types/api';

export const ApiKeyManager = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);

  const generateNewKey = () => {
    // Implementation for generating new API key
  };

  const revokeKey = (keyId: string) => {
    // Implementation for revoking API key
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">API Keys</h2>
        <Button onClick={generateNewKey} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Generate New Key
        </Button>
      </div>

      <div className="space-y-4">
        {apiKeys.map((key) => (
          <div
            key={key.id}
            className="p-4 border rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{key.name}</p>
                <p className="text-sm text-gray-500">
                  Created on {key.createdAt.toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => revokeKey(key.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};