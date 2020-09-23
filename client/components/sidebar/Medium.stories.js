import React from 'react';
import { Box, ActionButton } from '@rocket.chat/fuselage';

import Medium from './Medium';
import * as Status from '../basic/UserStatus';
import UserAvatar from '../basic/avatar/UserAvatar';


export default {
	title: 'Sidebar/medium',
	component: Medium,
};

const actions = <>
	<ActionButton primary success icon='phone'/>
	<ActionButton primary danger icon='circle-cross'/>
	<ActionButton primary icon='trash'/>
	<ActionButton icon='phone'/>
</>;

const avatar = <UserAvatar size='x28' url='https://via.placeholder.com/16' />;

export const Normal = () => <Box maxWidth='x300' bg='neutral-800' borderRadius='x4'>
	<Medium
		clickable
		title='John Doe'
		titleIcon={<Box mi='x4'>{<Status.Online />}</Box>}
		avatar={avatar}
		actions={actions}
	/>
</Box>;

export const Selected = () => <Box maxWidth='x300' bg='neutral-800' borderRadius='x4'>
	<Medium
		clickable
		selected
		title='John Doe'
		titleIcon={<Box mi='x4'>{<Status.Online />}</Box>}
		avatar={avatar}
		actions={actions}
	/>
</Box>;

export const Menu = () => <Box maxWidth='x300' bg='neutral-800' borderRadius='x4'>
	<Medium
		clickable
		title='John Doe'
		titleIcon={<Box mi='x4'>{<Status.Online />}</Box>}
		avatar={avatar}
		menuOptions={{
			hide: {
				label: { label: 'Hide', icon: 'eye-off' },
				action: () => {},
			},
			read: {
				label: { label: 'Mark_read', icon: 'flag' },
				action: () => {},
			},
			favorite: {
				label: { label: 'Favorite', icon: 'star' },
				action: () => {},
			},
		}}
	/>
</Box>;