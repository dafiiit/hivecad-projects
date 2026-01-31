// Test 2 
// has a wave icon

import { Extension } from '@/lib/extensions/Extension';

export const extension: Extension = {
    manifest: {
        id: 'test-2',
        name: 'Test 2 ',
        version: '1.0.0',
        description: 'has a wave icon',
        author: 'david.metzler.2003@gmail.com',
        icon: 'AudioWaveform',
        category: 'modifier',
    },
    onRegister: () => {
        console.log('Test 2  registered');
    },
};
