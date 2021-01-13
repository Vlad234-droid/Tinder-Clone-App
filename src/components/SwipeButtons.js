import {LaptopMacRounded} from '@material-ui/icons';
import React from 'react';
// STYLES
import '../styles/SwypeButtons.css';
// icons
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
	return (
		<div className="swipeButtons">
			<IconButton className="swiperButtons__repeat">
				<ReplayIcon fontSize="large" />
			</IconButton>
			<IconButton className="swiperButtons__left">
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton className="swiperButtons__star">
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton className="swiperButtons__right">
				<FavouriteIcon fontSize="large" />
			</IconButton>
			<IconButton className="swiperButtons__lighting">
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	);
};
export default SwipeButtons;
