const fetch = require('request-promise');
const prettyMilliseconds = require('pretty-ms');
const app = document.querySelector('#app');
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener('keypress', async function (event) {
	if (event.key === 'Enter') {
		await delay(150);
		getInputValue();
		removeInput();
		await delay(150);
		nextLine();
	}
});

app.addEventListener('click', function (event) {
	const input = document.querySelector('input');
	input.focus();
});

async function runTerminal() {
	terminalText('/*');
	terminalText(" * hi, i'm monochromish");
	terminalText(' * use the `help` command for more information');
	terminalText(' */');
	await delay(700);
	nextLine();
}

function nextLine() {
	const p = document.createElement('p');
	p.setAttribute('class', 'path');
	p.textContent = '';
	app.appendChild(p);
	const div = document.createElement('div');
	div.setAttribute('class', 'type');
	const i = document.createElement('i');
	i.setAttribute('class', 'fas fa-angle-right icone');
	const input = document.createElement('input');
	div.appendChild(i);
	div.appendChild(input);
	app.appendChild(div);
	input.focus();
}

function removeInput() {
	const div = document.querySelector('.type');
	app.removeChild(div);
}

async function getInputValue() {
	const value = document.querySelector('input').value;
	if (value === 'help') {
		validInput(value);
		terminalSpanText('about', 'displays information about me :]');
		terminalSpanText('projects', 'displays some of my open source projects');
		terminalSpanText('recently played', 'displays my recently played music');
		terminalSpanText('status', 'displays current status');
		terminalSpanText('contact', 'displays all of my social media accounts');
		terminalSpanText('cls', 'clears the konsole');
	} else if (value === 'about') {
		validInput(value);
		terminalText("oh hey there, didn't think you would make it so far... but anyways");
		terminalText(
			'My name is Monochromish, or you can call me Mono! I am a 16 year old student, a Front-end Developer and a tech enthusiast.'
		);
	} else if (value === 'projects') {
		validInput(value);
		terminalSpanText(
			"<a href='https://prizmbot.com' target='_blank'>Prizm</a> & <a href='https://github.com/prizm-project/Prizm-Website' target='_blank'>Prizm's Website</a>:",
			"Discord's Best Utilitarian & Fun Bot // Slash-Only."
		);
		terminalSpanText(
			"<a href='https://github.com/Monochromish/Last.fm-Discord-Rich-Presence' target='_blank'>Last.fm-Discord-Rich-Presence</a>:",
			'An elegant, efficient, easy-to-setup and arguably the best Last.fm discord rich presence!'
		);
		terminalSpanText(
			"<a href='https://github.com/Monochromish/Kalopsia-Bot' target='_blank'>Kalopsia-Bot</a>:",
			'♠️ A Powerful Open-Source Discord Bot written in JavaScript with many moderation, fun, economy, music, utility commands ♠️'
		);
		terminalText(
			"<a href='https://github.com/Monochromish?tab=repositories' target='_blank'><i class='fab fa-github white'></i> view more</a>"
		);
	} else if (value === 'recently played') {
		validInput(value);
		var data = await fetchCurrentScrobble();
		let detailsStatus = 'Listening to';
		if (data.scrobbleStatus !== 'Now scrobbling') detailsStatus = `Was ${detailsStatus}`;
		let albumName = data.album;
		if (data.album.length < 2) albumName = `${albumName}  `;
		await delay(500);
		terminalSpanText(
			`${detailsStatus} <a href=${data.trackUrl} target='_blank'>${data.trackName}</a>`,
			`by ${data.artist} on ${data.album}`
		);
	} else if (value === 'status') {
		validInput(value);
		var data = await fetchDiscordStatus();
		let emoji;
		if (data.presence.startsWith('online')) {
			emoji = '🟢';
		} else if (data.presence.startsWith('idle')) {
			emoji = '🌙';
		} else if (data.presence.startsWith('dnd')) {
			emoji = '🚫';
		} else if (data.presence.startsWith('offline')) {
			emoji = '⚪';
		}
		await delay(500);
		terminalText(`${emoji} currently ${data.presence}`);
	} else if (value === 'contact') {
		validInput(value);
		terminalText(
			"<a href='https://discord.com/users/500315184510795819' target='_blank'><i class='fa fa-comments white'></i> discord</a>"
		);
		terminalText(
			"<a href='https://github.com/Monochromish' target='_blank'><i class='fab fa-github white'></i> github</a>"
		);
		terminalText("<a href='mailto:monolul@outlook.com' target='_blank'><i class='fas fa-envelope white'></i> mail</a>");
		terminalText(
			"<a href='https://twitter.com/Monochromish' target='_blank'><i class='fab fa-twitter white'></i> twitter</a>"
		);
	} else if (value === 'cls') {
		document.querySelectorAll('p').forEach(e => e.parentNode.removeChild(e));
		document.querySelectorAll('section').forEach(e => e.parentNode.removeChild(e));
	} else if (value === 'no bitches') {
		terminalText('———————————No bitches?———————————');
		terminalText('⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝');
		terminalText('⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇');
		terminalText('⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀');
		terminalText('⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀');
		terminalText('⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀');
		terminalText('⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀');
	} else {
		invalidInput(value);
		terminalText(`command not found: ${value}`);
	}
}

function validInput(value) {
	const div = document.createElement('section');
	div.setAttribute('class', 'type2');
	const i = document.createElement('i');
	i.setAttribute('class', 'fas fa-angle-right icone');
	const message = document.createElement('h2');
	message.setAttribute('class', 'sucess');
	message.textContent = `${value}`;
	div.appendChild(i);
	div.appendChild(message);
	app.appendChild(div);
}

function invalidInput(value) {
	const div = document.createElement('section');
	div.setAttribute('class', 'type2');
	const i = document.createElement('i');
	i.setAttribute('class', 'fas fa-angle-right icone error');
	const message = document.createElement('h2');
	message.setAttribute('class', 'error');
	message.textContent = `${value}`;
	div.appendChild(i);
	div.appendChild(message);
	app.appendChild(div);
}

function terminalText(text) {
	const p = document.createElement('p');
	p.innerHTML = text;
	app.appendChild(p);
}

function terminalSpanText(code, text) {
	const p = document.createElement('p');
	p.setAttribute('class', 'code');
	p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
	app.appendChild(p);
}

async function fetchCurrentScrobble() {
	var TrackOptions = {
		uri: 'http://ws.audioscrobbler.com/2.0/',
		json: true,
		qs: {
			method: 'user.getrecenttracks',
			user: 'Monochromish',
			api_key: '0086cc8ae78aec53c6f8b90dba9553fc',
			format: 'json',
			limit: '1'
		}
	};
	var lastTrack = await fetch(TrackOptions);
	if (!lastTrack) return;
	let lastArtist = lastTrack.recenttracks.track[0].artist['#text'];
	let lastTrackName = lastTrack.recenttracks.track[0].name;
	var UserOptions = {
		uri: 'http://ws.audioscrobbler.com/2.0/',
		json: true,
		qs: {
			method: 'track.getInfo',
			user: 'Monochromish',
			track: lastTrackName,
			artist: lastArtist,
			api_key: '0086cc8ae78aec53c6f8b90dba9553fc',
			format: 'json'
		}
	};
	var fetchedData = await fetch(UserOptions);
	if (fetchedData.message && fetchedData.message === 'Track not found') {
		var data = {
			artist: lastTrack.recenttracks.track[0].artist['#text'],
			album: lastTrack.recenttracks.track[0].album['#text'],
			trackName: lastTrack.recenttracks.track[0].name,
			trackUrl: lastTrack.recenttracks.track[0].url,
			scrobbleStatus: !lastTrack.recenttracks.track[0]['@attr']
				? `Last scrobbled ${prettyMilliseconds(Date.now() - lastTrack.recenttracks.track[0].date.uts * 1000)} ago`
				: 'Now scrobbling'
		};
	} else {
		var data = {
			artist: lastTrack.recenttracks.track[0].artist['#text'],
			album: lastTrack.recenttracks.track[0].album['#text'],
			trackName: lastTrack.recenttracks.track[0].name,
			trackUrl: lastTrack.recenttracks.track[0].url,
			scrobbleStatus: !lastTrack.recenttracks.track[0]['@attr']
				? `Last scrobbled ${prettyMilliseconds(Date.now() - lastTrack.recenttracks.track[0].date.uts * 1000)} ago`
				: 'Now scrobbling'
		};
	}
	return data;
}

async function fetchDiscordStatus() {
	var StatusOptions = {
		uri: 'https://api.lanyard.rest/v1/users/500315184510795819',
		json: true
	};
	var fetchDiscordStatus = await fetch(StatusOptions);
	if (!fetchDiscordStatus) return;
	console.log(fetchDiscordStatus);
	var data = {
		presence: fetchDiscordStatus.data.discord_status
	};
	return data;
}

runTerminal();
