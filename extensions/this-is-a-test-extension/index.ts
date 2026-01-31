// This is a test extension
// j efaböj 

import { Extension } from '@/lib/extensions/Extension';

export const extension: Extension = {
    manifest: {
        id: 'this-is-a-test-extension',
        name: 'This is a test extension',
        version: '1.0.0',
        description: 'j efaböj ',
        author: 'david.metzler.2003@gmail.com',
        icon: 'Package',
        category: 'modifier',
    },
    onRegister: () => {
        console.log('This is a test extension registered');
    },
};
