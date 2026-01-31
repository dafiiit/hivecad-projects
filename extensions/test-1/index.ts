// Test 1
// asdfönasöfgjk

import { Extension } from '@/lib/extensions/Extension';

export const extension: Extension = {
    manifest: {
        id: 'test-1',
        name: 'Test 1',
        version: '1.0.0',
        description: 'asdfönasöfgjk',
        author: 'david.metzler.2003@gmail.com',
        icon: 'Package',
        category: 'modifier',
    },
    onRegister: () => {
        console.log('Test 1 registered');
    },
};
