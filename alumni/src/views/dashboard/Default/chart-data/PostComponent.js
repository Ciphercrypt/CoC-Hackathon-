import React from 'react';

import { Card, CardHeader, CardMedia, Avatar, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	card   : {
		maxWidth : '100%'
	},
	media  : {
		height     : 0,
		paddingTop : '56.25%' // 16:9
	},
	avatar : {
		backgroundColor : theme.palette.secondary.main
	}
}));

const InstagramPost = (props) => {
	const classes = useStyles();
	const { username, profile_picture, caption, media_url, branch, year ,batch,branch_of_post,event_desc} = props;

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar} src={profile_picture}>
						{username[0]}
					</Avatar>
				}
				title={`${username} , ${branch} , ${year}`}
			/>
			<CardMedia className={classes.media} image={media_url} />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{caption}
				</Typography>
				<Typography variant="body2" color="textPrimary" component="p">
					{caption}
				</Typography>

				Batch:
				<Typography variant="body2" color="green" component="p">
					{batch}
				</Typography>
				Branch:
				<Typography variant="body2" color="green" component="p">
					{branch_of_post}
				</Typography>
				event:
				<Typography variant="body2" color="green" component="p">
					{event_desc}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default InstagramPost;
