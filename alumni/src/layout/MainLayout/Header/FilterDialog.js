import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_FILTER_DIALOG, OPEN_FILTER_DIALOG } from 'store/actions';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

const FilterDialog = () => {
	const dispatch = useDispatch();
	const { filterDialogOpen } = useSelector((state) => state.customization);

	const handleClickOpen = () => {
		dispatch({ type: OPEN_FILTER_DIALOG });
	};

	const handleClose = () => {
		dispatch({ type: CLOSE_FILTER_DIALOG });
	};

	return (
		<div>
			<Dialog open={filterDialogOpen} onClose={handleClose}>
				<div>
					<DialogTitle>Serch User</DialogTitle>
					<DialogContent>
						{/* <DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates
						occasionally.
					</DialogContentText> */}
						<Box
							component="form"
							sx={{
								'& .MuiTextField-root' : { m: 1, width: '25ch' }
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Name"
								type="email"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Branch"
								type="email"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Batch Year"
								type="number"
								fullWidth
								variant="standard"
							/>
						</Box>
					</DialogContent>
				</div>
				<Divider />
				<div>
					<DialogTitle>Search Job Posts</DialogTitle>
					<DialogContent>
						{/* <DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates
						occasionally.
					</DialogContentText> */}
						<Box
							component="form"
							sx={{
								'& .MuiTextField-root' : { m: 1, width: '25ch' }
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Title"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Description"
								type="texxt"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Skills"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Company"
								type="text"
								fullWidth
								variant="standard"
							/>
						</Box>
					</DialogContent>
				</div>
				<Divider />
				<div>
					<DialogTitle>Search Events</DialogTitle>
					<DialogContent>
						{/* <DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates
						occasionally.
					</DialogContentText> */}
						<Box
							component="form"
							sx={{
								'& .MuiTextField-root' : { m: 1, width: '25ch' }
							}}
							noValidate
							autoComplete="off"
						>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Title"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Message"
								type="texxt"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Action"
								type="text"
								fullWidth
								variant="standard"
							/>
						</Box>
					</DialogContent>
				</div>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FilterDialog;
