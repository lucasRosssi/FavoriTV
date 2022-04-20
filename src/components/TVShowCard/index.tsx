import React from 'react';

import {
	Container,
	TitleWrapper,
	Title,
	RowWrapper,
	Image,
	Content,
	About,
	AboutWrapper,
} from './styles';

export function TVShowCard() {
	return (
		<Container>
			<TitleWrapper>
				<Title numberOfLines={1}>The Avengers</Title>
			</TitleWrapper>

			<RowWrapper>
				<Image
					source={{
						uri: 'https://c7nema.net/wp-content/uploads/2018/04/bab.jpg',
					}}
				/>

				<Content>
					<AboutWrapper>
						<About numberOfLines={3}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
							sapiente hic excepturi cupiditate perspiciatis labore. Provident
							at aperiam dolores autem dolore, alias totam voluptatibus natus
							maxime est dignissimos, suscipit quisquam.
						</About>
					</AboutWrapper>
				</Content>
			</RowWrapper>
		</Container>
	);
}
