import * as React from 'react';

import { Menu, MenuTrigger, MenuList, MenuItemCheckbox, MenuPopover } from '../index';

import { Button } from '@fluentui/react-button';
import {
  Cut20Regular as CutIcon,
  ClipboardPaste20Regular as PasteIcon,
  Edit20Regular as EditIcon,
} from '@fluentui/react-icons';

export const CheckboxItems = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
            Cut
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste">
            Paste
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit">
            Edit
          </MenuItemCheckbox>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

CheckboxItems.parameters = {
  docs: {
    description: {
      story: [
        'A variant of `MenuItem` that handles checkbox like selection. The `name` and `value` props are are used',
        'similar to [HTML checkboxes with `input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)',
        '',
        '```html',
        '<input type="checkbox" name="name" value="value" />',
        '```',
      ].join('\n'),
    },
  },
};
