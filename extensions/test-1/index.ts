import { Extension } from '@/lib/extensions/Extension';
import { Tool } from '@/lib/tools/types';

const tool: Tool = {
    metadata: {
        id: 'my-extension',
        label: 'My Extension',
        icon: 'Package',
        category: 'modifier'
    },
    uiProperties: [
        { 
            key: 'width', 
            label: 'Width', 
            type: 'number', 
            default: 10, 
            unit: 'mm' 
        }
    ],
    create(codeManager, params) {
        const { width = 10 } = params;
        return codeManager.addFeature('makeBaseBox', null, [width, width, width]);
    }
};

export const extension: Extension = {
    manifest: {
        id: 'my-extension',
        name: 'My Extension',
        version: '1.0.0',
        description: 'Creates custom boxes',
        author: 'you@example.com',
        icon: 'Package',
        category: 'primitive',
    },
    tool,
    onRegister: () => {
        console.log('My extension registered');
    },
};
