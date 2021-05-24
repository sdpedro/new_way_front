<template>
	<v-app>
		<v-app-bar app color="grey lighten-5">
			<div class="d-flex align-center">
				<v-img
				contain
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAuCAMAAABTcAZJAAAAAXNSR0IB2cksfwAAAmFQTFRFAAAAsTD8si/+sS79rzD/sC/9sjD+sS/+si/+sS/9rzD7sS/9sTD9szD9sjD9sjD/sy7/sTD/si7+rzD/sjD+szD9sy79rzD/sS/9kSv/kSr9kSz/jzD/sS/+sS/9sTD+kCv9kCv9kSv+kSz+sjD8jyz/kSv9rzD/sTD9sC/9kSv9kSz+sS/+sS/+kSv+kCv9sjD/szD/kir/jyz9sS79sS/9jyv+jyr/tTD/si/+jyj/kiv+si7+szD8UFBQTExMUFBQTU1NTU1NTU1NTk5OTk5OTU1NTU1NTU1NTU1NTU1NTExMTU1NTU1NhSX/hyT/hyj/fyD/hib/hyX/hyX/iCX/iCX/iCT/hiT/hyb/hiT/hyX/kiv/sS7+TU1NTk5OSkpKTU1NTExMhyb/hyX/hyX/hyX/iCX/hyT/kCv9kCv9hyX/hyX/kSv+kCz+sS/+sC/+pSz5rC78sjD+TU1NTU1NhyX/hyX/kSz+kSv+jyn8si/+mij2mSf2nCj3oyv6ri78TU1NTExMjyv9nCn5mSj2nSn4pSn8kSz9si/+nSj4myj3jyv9mij3hyb/kSv9jyv9nyr2oin5TU1Njyr8nij3myj3kCz+mSf2nij4jyv9iyj5sjD+szD/nyr3myz0kCr+jyr8iif5hyb3jyn8nCj3TU1NkCr9iCX3hiX2iif4sDD+ki3/hiX2hyX2jin9oyr5mif2iCb3kCv9qS37oCr5nyn4oir4pyz7kSz+iCb3hyb2hSz0sjD+iCf4hyb2iCb3kS39jCn6iyf3jir8jCj6iSf4jCn7si/+jyz7kSz9AGDKUwAAAMt0Uk5TAF+vfxCf////70D/gKBwYH9fsCDvkKBA8F9/bxDv38+f///PYECQMJDgoP/P3+/fcEBggKDQsDAwvyC/wFAQfyCPv+/Pb2Cv359PQFBwMH8gEFCfv8/vrz+AcGBwsP+AMMCQ4P+g8I9Az++Q0LCv0OCA//CwoMDf4NBQ8OD/////4PCQLP//SpDgq+zg67D/cFUsP2C64fD2i9CAwFB6F/DAVf9kyNDwuv/0sWD2/9T/9nqD/////63vyP8X4IvguqD/Y////+TQQICqHw7EAAAHy0lEQVR4nN1Zi1/TVRS/5WIoKCVqVJht5RPzha9If+DAqY2NjQQaj425MVdiWbEZ1Cpm9rCil70sTSsxLOn9tHfZ66/q3nPOvb/7G4+BKFBnH9353Qec7/3e77nnd2Hs4u2KK2fYJjB9WtlVefb8mf8TNLPyC/incKrDuDQ2255fkGefPdVhXBqbKZixz5nqMC6JFQle8gv+Q5qxXT3jmhG65grFFMyd1HAmZMXz+NrPH7bLxnnJK8grmuSIJmALYPWvHa5rDtdLQX7JZEc0Nrvu+htKs9tsC0EXNw6ni0WQyxZMQmTjt5scTsfN2WhugZNk2LOkGHtmTUpw47TFHIvTsSSrdS7qwp6/dMiEZdC+fHKiG6etcDrKOJrFlkax+nZgYOWQCbdC+/C5YYqtdBUw41xtaZ2TZ8ezJM++JmvCWmwvnrwQx27rgBf+r1xvXVmQLz8zs8JeD60bJjPGMdtGp4M+m8zGzagX1M1t1gnzhuVrWlgF8OIs49zcbrYuE3qxL9+CutmqTygCvuyWlG1UVlbyr6ptruoa13bD7HDvcO3c6dp1h/A9fFBlLXV4Kyvdcoxolw/MV1dX50fXXycsAH79nbsbGnc31d0Fj8E6cxRjzeKpRXitDsWMo1UFsQV4mb8UdTNPj7wN2tosK1IbCoU8xrYQWrWMLFxNLaGadv4knAj2eISPbhUM2CN/VDQWiwXR7eBuLC6iDzbGlDXs9TFwmmlGAp5gzt1OqRlH2T0V8kcuB10Us0LUjXY+2rDFWsqIOGt2hpRViUbDZTaEqg3mDpkIIsJtB3ePOYNbiwisA4mBIPdxpyFmsSDrNEcxfIgKbxNysh+5uVdGN1/o4j7uHEDdrFVx3/+AeH7QgoV1hayWFFhqLE1hZCNkEhOCLWdU04SAGVkK3CBE7meBLCyxFrZPfB3U4MfqhbsE9PIQ60bd9Mj1f5ivvtD4WjxvzKrmkfSjjz2ev94KpleGnCEe1IqHQtQXYe0hRUeE8HHzEjGBfeIJt0xMuIFGWv5OwhCPkpMgAAFzGMJfDYwckgytklVNIdeFTXFkV1XNE4fT6fThJ5+ygiEkXoMZvbT+uPgZt4JFozyKmFCXWgeupCDEk4oRHXLF/URQPChCbyaofpONIOHj1oN64Vo5hLp5Wsa3gTRuewZPG6pqjqSFPWvFQoHDoocp8i6zCbozjGXk3kpKshgJiSOMp0xiILYorjiufNwHv6hZyiNOcmJ+yR+3FcBHN/dKn0NuZFWzuYQ0vhXPm0X49DyAOWIFgxF5mQKTYQY0QVozdlDkEdpbVbQBa+SGiwgehAQ6TDAJy46qx1/UIbdUn3Q6FJO8lOE6ecH5ovAX43mjqhqVr9rgXAEFsZcAS/plKxgCAJbE6ABfb/srlfzokbgkmKRUmMTlBh7k7sGsK8PVMgKxFZQUNcoZmMqPIhuYkSmjlbMss5UANwtFVfNqWmjmtawREaUA8vco+UuLSMxhzF9eBAPDelEgDJJUZx9E56e8xXRiVCPxph9FIn6hk/04tPR1PG82ZYXK1qBqRFXzBhDzZtaAjMpNpHIv5StlScMEE4b4MYdlTGJiKI+WIKhBqkNGDaaJHdMZCqoFe48BF0dpbA/ypKqat6TzNtZpx9kJAeVw+h0rFkOlKblvPBYwvcl26PMgmF74H4a5aX9CyAAgDhGncEPxKOvFdyf9oqiJDNJeQiUEZIZzcVK9ZJ7COo2qmnffe5/ai/HUX2g7DcScziIGk5mh+Yz1w3d/JOz1GJZxYTcOFpA8XUQpCARiRU5SPtg+koyUTgzGDvsrEVVMcas4yaNfp6KqOAPcUFXzwcBZueMKsUb7EHhJn8gC49X0HyYRSLHrBqemSxQGSRwAxVzGIDB7MS8Jlg42SV0HTTJ8WKD1mcCa9OTAdfJReYX261qxRsOq5tzgwMeyYwNy84kg5tMsLKhiqiC7yIeMVd2OILbjN1Mbr8osEKD0Cco0xg8Mn/ThhEfN7BUeFZuYuhJqlJ+NZN2Y0URV89ngwODg59Qu32+++PKrr7/JnkQJDKyfGMGjJ+Ta5RKpWU8OFH9YA2aCEZFpwHi1gn5DkyrQ6q1gOrKjMW1TGXDzLZfRdwODA+fPyo5ldCdgH+ZWpjbMTV98cVaqck3bb/30KMbWkg8ZvUWPzLrkqZhpcXHwYy0QkE2BkcGwcifd1XzPsfCP3IS2H+SdwIFRZmvFZLsOhvZgRHui+gyToFxnnxY+acGnYfGlYipNx/RNN4KJqgbuan4ELOdUxyx5JzDqrUwtJTMRbWYIGHpTqNXA9DINDMZPYOj0YC1xirvTJ7ooTRMz0dGIkbdoztU/ATM/mx1tdI826q1MbYRbEn3Di0xEku4qrTeCpYIBfgRfowMpMJRDM/h96mf6O0QGjooXy2AqRVQkrIhHsl/gPsD56/lBjuY3s91WYr+IW5n28Q0fyYakrBZ9K45spSeRm98v/HHhT73jOGhmmtzKYLWcyDmuR90JZN3Zir8L/HW5ohufYVHWl3sgO6XuayqsHUWF0+VPMvJ+ILdVnMF7NOexyx7URRq+X46alpXJu7TW3EOnxvTXmJzWjZoZ8heoaWJ4kDbnHgiGdzUbL2tEEzAosqO5x5EdFe85Q145p4v5EtzGon6yv/8pr8g9ajrZv3CydVM8juSxAAAAAElFTkSuQmCC"
				width="150"
				/>
			</div>

			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main>
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-tabs>
							<v-tab v-on:click="action = 1">Pesquisa</v-tab>
							<v-tab v-on:click="action = 2">Nova mensagem</v-tab>
						</v-tabs>
					</v-card>
				</v-col>
			</v-row>

			<div v-if="action == 1">
				<ListMessages />
			</div>

			<div v-if="action == 2">
				<Messages />
			</div>
		</v-main>
	</v-app>
</template>

<script>
import ListMessages from "./components/ListMessages";
import Messages from "./components/Messages";

export default {
	name: "App",

	components: {
		ListMessages,
		Messages
	},

	data: () => ({
		action: 1
	}),
};
</script>
