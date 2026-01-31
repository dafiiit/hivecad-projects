// test 2
// <sdavasdvj

import { Extension } from '@/lib/extensions/Extension';

export const extension: Extension = {
    manifest: {
        id: 'test-2',
        name: 'test 2',
        version: '1.0.0',
        description: '<sdavasdvj',
        author: 'david.metzler.2003@gmail.com',
        icon: 'Package',
        category: 'modifier',
    },
    onRegister: () => {
        console.log('test 2 registered');
    },
};
