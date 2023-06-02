<h1 align='center'>GoogleBard <img width="50" src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif" /></h1> 
<p align='center'>An NPM module for creating GoogleBard chatbot using Bard's reverse-engineered API. With reverse-engineered API functionalities, it empowers developers to harness the full potential of Bard.</p>

<br>

## Table Of Contents
- [Status](#status)
- [Features](#features)
- [Prerequisites](#prerequisite---how-to-get-cookies)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)

<br>

## Status
[![NPM](https://img.shields.io/npm/v/googlebard?color=CB3837&label=NPM&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/googlebard)
[![NPM](https://img.shields.io/npm/dm/googlebard?color=28A75C&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKoSURBVEiJ7ZZLTBNRFIb%2FedDS6UNKVQgZAkJTlJdACoZgGhKj0QSNwUVxIbrRhSaasCJh58atcaExkYXogoRISF2UxJVReYkWK6gTB9KK1bZjBQlMNcz0ujAlJe3QamSl%2F%2B7m3PP995w592aAbRaVy6bqanujycZeSa4TKlGXo2qvKIpStlw2FwOdjnG5zvFnS%2BuMAIDJoci3icHoLQB%2FxwAATDYWBSX5AADOwiZyzaNz3fin%2Bm%2FwDxhojSlTW19xgaXz9ACgqIpr05WkQOWb6dMNDVUHAUBJrP%2BY9S%2FcBpA2vpo3udHpeNx0sqiNrzExFEVQWm8Gq%2FtVsLysIPxeBgB8nFtVfZ7o2MspwZWJo9kiKSwf9Xujs9YSHfY4d2zAAYArYFHRbEEhr4ffK71VgsvHtDiMVmBlZUXRMeaRRd9qZ%2B0RmzXVAAASCsHA5XcLkWC8XQiFlrQ4W37kQCAQlhbXOwd7hVBCIZvg%2FlFpms6nnYFAILwVQ7OCpGKxWMRssIhRUT60r73QCACeawuSbyTWN%2FXkzYts%2BRtTVNfc9ojhOCtREsxaJHhRFMXxZMzvEz163V7H0%2Fuf%2BmhC6KBv7cbMjDCUCrLb7a3GorKbFEurqiwvvX7%2B7PAmp5YO93yPQEhXv5c4yivdmU7jbK0acLY57maKOcor3V39XtIjENLS4Z5PqyApmmHA6jkuE2R6XOjW6ARYPcfRTHrH0wxsNU5wFfarDcXFl7RgmZRnMO0urG3ewiChqgCQZ7HCdX2YB8D%2FjkGqiKqoaQbxr1%2BmPowO8Tv3HzCAYcDtKoEcDQGEgCviEZc%2Bg6hKVrj0aiL%2BfSk2mVynPhV0dVPLeZ3B2ApCkcoTZ4bnHw6cAoCy490Pgp57naBI1p%2BE9TV5bG5m8g4yvEvbop%2BZL%2FJtWVlNhAAAAABJRU5ErkJggg%3D%3D&style=for-the-badge)](https://www.npmjs.com/package/googlebard)
[![GitHub issues](https://img.shields.io/github/issues/PawanOsman/GoogleBard?color=orange&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVEiJtVRrbBRVFP7mzt153Nnd7i67dLfvdt1uW7ZUaLtBIVBjYjQBLGI1YviBGjX4Q6iJBiiiJmpIlKSJkGhUiCYGY4yJ4QcmJqhQomgLFZIWY2iFYAiPwm7Z99y5/ugrtbt0S/Qkk8ycc77vO+eeMxf4n01eQK7mstmeViS5JSOs8wDM/7IQqUpnxw80tWYPNC3P1OjGTwCkYoBFdeDVtOdfqgxu7jMvsws8Jq91VXrO3Y6NJTjvnw9LiuB3LJaVXXV25ly6ZhzNa+IIOpjDS9WdAEqKKfCOVqmxg18tu99cHWTi9m9EJPuJWB1k4pvlK80aZhyaDz/fETWucHnesjHufOzF62gOA5QCLi/HmQEbSaYRuJBMfAfg6l1VX6sbvxyLdoj1bZqwzpFZz4aoLo5FO0SYGYN3Re5WlKd21DXe7LrHJ4aOEHH1OBGRel1EQrq4doKIoSNEdIW8oqcimA5r7JlCPIWGzHxUfafd7XLVtsURrgHODAsYRhCGPYjTQwLhGqC2LY5lDrvqkOn7AFjRApWqvvfN0JLy3pu/Y+e23ERHJRKANCDSk+9Az3YTvek/0O3xu9oN54fFCtTVGvaNf1kx23NbMnDaJ5xlPkChHJyn4HVN+OwMeHZzDqPGOHyy7XEAdfMKVGnGwT3BpsAPZBSbOq1pf8AH1Ncy5MwMvO6Z/CcflPEju4btHr/Waji/vaOAU5YfeXRxWeTT2DDe3Z2B9K/L4NTgZVjchKFPOgQgTIK3t8r4TL+IB5izsUJRNhYSUBYp2v6HfaUed2MMLQ1zz44SC5TOdMUzBBDAkhoCI5TCKsMgi6j6EQB1jkC5xvbsDjYF9t0axBuvZueyA2iuz6E5lJv+thIz/+nrWyh6lRFs8/g9raxk35R/KqO8ye7Y3+A23Es7r2BVu8gr4PdytEc4KkoBK03Ak3Q6pqsSMrCQGNVwMWFGRrKpQwDGJQCo0tjRTyLtD+1NnpKOHs6A5Nmt8QTQ+sTEqvcfTkFN2SCs2UOyBLDulRxei4ex49qlXwcS8aisUdqx1ud/eVi6bnT33EJlIG/xUGxA34CEMp+FrvsIBJ9bhSQBoSoJX5xOojpn91+ycidJKVU/2FRW7eVVN7CiJT/5FPjL97L4fJeAMAvf8tFGAl6dwDqHS66W1Y+pndKSk8kruEGAF7q1wgpCQMgmhMQB8FmhDSsp/vzbwtmRiQ0biwM/0zHYiOShKW6eULPq+q08yqSxfMSAyKQhEklA5B++/TzBvUKgYTIuhMDZbEpkrWSfBEDWZbkzoGjRfGCVEJtTokbh1vLbcCr+fYzzrxeKW7D9Az4tT6FlbcIZAAAAAElFTkSuQmCC&style=for-the-badge)](https://github.com/PawanOsman/GoogleBard/issues)
[![GitHub forks](https://img.shields.io/github/forks/pawanosman/googlebard?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ7SURBVEiJtZVZaFxVGMf%2Fd19mbnMzk5lskzShmSS0Seto0xgliEFwaWmTPlhFiFIKpSLik1CLKGgVfPKhIj4oVSiVUI1GQytYrKYWbYpQa0vTdJLQmjQzk7mzpJnc9VwfpgmTmEmi0P%2FLvZxv%2BZ3vfGcB7rOogv8NNMe9yHN8BAC9MEiI6xBiT9im%2BQ2AK%2F8XUMkL4oWqusYayeNlljuZhu4mY5Mzc7OZG5ah9wBI%2FCcAL0j99c2te%2F4eu56wDCMBCqTAhwUotTRQKav%2BgDJ%2B%2Fc9x09DbAKTWXYYgSjfCLdtdnuc%2FKDYRhuH2ezeo8fDWHTYniEPrzZ1fa4qiCXFACClWuus41mfG%2FNxb2WQsq5aVtzAMswcAFEXpDoVCd4LB4G0A4ZUBBeIFYZAXpVGGYXYtt1mW9XFqJj5eVl6tMix3FABkWe46fOTNiu6evT5VVfsA1K8GEDleioRbHmrgOL53OYATxQO2bValZqYzguTxAahYsFEUjfaHOx7w%2B%2F0HVgMsblvXXbKFwXHcIUUp%2BVCSPUImmZhT%2FUEfgEcLfSRJAsUwwmqAYqqgaPZ9uISpra0RLVP38qIksCzbsFYguzBzx7EXB3lBggu3A6BfBogNAI5tXkxr6QHFI7%2BhlqhBhmVBMVz5egAK7Zrl5O4EKnzMwfRczpfLTKNpW3v1bFr7yHXzR2L69njc0HO74%2FH4MEAN%2BQAGS2%2BClQF1VeInn77dJHe1qwBQldMJDr4bdc5d1gyXlq17fq7rEhsAmZ%2Bf%2F10QpSiA5rWSL1QQ6WpXKQT2AXwl5NhxfPEOzTz5yk1Zpyvh8%2FlBCMEvqQRtGvoTAEzHdpRMMgHiWBt1XV8TkJcVz3%2BJCYoCvnyvDk3dwy7nKTcF0UPUQAXnLQ2cKoidrwjVP5XV4rn1AdI%2FLTH4Slhc%2BLyVev5wVNCyWQAAt0IChrL5NQHXojkc64shpxP07vSja4cKAAjXSrh0ouVfQad%2FTeHkaQ2yRCGmeVZtNGvbLv%2F0q1FI%2FjBohsHPR8dxqGcOr79UvWLAkWO3cPJHE2LpRjiOjfTUCLZ35S%2FWQDAIjmFeqK4OdQOAZZl3KFX13Krf0lHTs%2FsZKF4v%2Br7%2BDlMjQxjpb4XALz2H2bsOWvddRe3mx%2FBszy4kkhoGBs9AT0%2Bjs7Nzrv%2BrU1lRlBZ7YlnmNGuYFFWiqni88xEAwKU%2FLmNiRMo27LyYYFnKLAQYFhFpOVjW2FCvRLbll%2B7sufMYuzqZ%2BX7g2yvJZHIvlj1GrOOQVErTQoM%2FnIWieDEaHYeWzMwa80YzABtLJYlyauzayE3l%2FG%2FDSCQ1zM5mYZjm6Gw201mkDVy7JHunNm150A23trnektI4x4n7izWNE4TXNqhlicatbe6mzREiSvIkgNZi%2Fgs7IMSyfC9N04pp6icA%2FFUs4J4ivCA8RxxHs237OIDYGv73T%2F8AEAmYFH31lroAAAAASUVORK5CYII%3D&style=for-the-badge)](https://github.com/PawanOsman/GoogleBard/network)
[![GitHub stars](https://img.shields.io/github/stars/PawanOsman/GoogleBard?color=magenta&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3%2FOAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPYSURBVEiJrZZdaFtlGMf%2F7%2FlKs6StadIm%2FUhOk9jFFvuxrdt0tEJjM0Sdil6oFwqKeCG72Xbj5lgR2cVAmSCCMEGcMtCbga7Fbc0KOkGkDETXbf1YsmZt0jZJm%2Byctuck57xedKZp2qQB91yd9%2Fn68Rz%2Bz3sOoZSiHHM6Dxh5Q8VbWY1k6qyp70dHRzPl1HFldQfQUCcMH%2FDK%2BySV0FtR0yEAr5ZTx5STJHoDPW5rZu%2FZ12LcuTejfJVBe6HR4%2Fc9MkCTNfPVEX%2BC%2F%2B98xJ8UWuzZrx8JwOXt666spA37u7WcL9Aqo4Kj%2B5ubA63%2FG2Ctxqcn3pMtcBmBhoqc%2F5g%2FwYv1yrZTlAT4fP2v2Kpp1zN71DWH3QDYBABAoE2GWdD37e7se6NUD0IphdP5XA1ls50g1NfcyPQSoGMpnbV1%2BTT%2By%2BMpa5U5T8o6Be5IwKoOSWFwarBO%2B228QnnnWWnkg5ceXDj5bc30d8PmpK7TVCQSnCEub9%2F7Dit3tnevSXhc3MF5RSPcjVmIlhvgi4l4WVuDbGGRJI%2F4Kqd%2FdLFWCS3wn5P2jn7p2oVWk82S101LAis3Sk0OjEuArBUNyyqDp840rzA8h9nbU6sF4TK22yqUDAdv74BBoGPM3BJ98djpkPTnX%2FJ6lJQuBgBY%2BKKhy2MmfDJkS84tsC8z96eGx6NRvevwQCh9fVQqH8AQgN8swl9umnDy57r4wiJ9MhIJzjAAMD0dnLof1zqOng4vjvyRXgOQMq4pgWw4Dv1jxqlLtfPxRdIeDv8aBfL2YPZu8F50Vmv%2F8My95GRYAVhrGYD1CcIJHh8P1can0xXtodBILDdofn4kEpyZmdPevngloYNvAARPaUB2XQyDN800IZHDscnL8%2FkpW2wysxxbUCh41%2FYAVc89pldYoqrs5m6FDl5Au89jZsE7AS1RNqDNocDtyAS2BYj1TH%2BL2wiY%2FQDvAUgROT7IbliXVocCnqU92wK0LHa1iAaAqwH0FGBoy8UUlUBaeaicuLqhzlObQUpmmgr7bdJiWqa2xvpKQJl4mFGLyVknBr5IL43d5VIsSxWLmToGDqpVPd71zzLHUFQbNd7t7nssFBpZ2hLQ0vK8wVxJGAIFWPoBs%2FMZfHZuRv99VI3H4vy74alrgwAgiv49J36yn7dXZncePxjndrvWrhqzkVKVEDuAHIAU%2FlV07uofO%2BSv3qlpFFevS7K0rB%2B9c6v3G0oHdBRYU3P%2F0x575ryrJiM2WLK48rcpnpLgCYVGVosCRLHXojHC6yCQjazhx4mJIaWwcaG5vH3dlLJPcFS7lP96AOBfSCCA1HW3a3EAAAAASUVORK5CYII%3D&style=for-the-badge)](https://github.com/PawanOsman/GoogleBard/stargazers)
[![GitHub license](https://img.shields.io/github/license/PawanOsman/GoogleBard?color=gold&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQrSURBVEiJpZVvbFNVGMZ%2Ft%2Fe2ZW2XDUZvhwLt1rUyYOA2FJNFiRsYjREGBlCmJgiOPzKDET4gBqaSoEGREOOiY5kRI2QxETUyAigxCskQmQaSwcKEjsJYN7uO%2FW3Xe48fll3ZGCvom5zkzXnu%2B%2Fzuveec90gMD8scn78uApPtDrvGGCFJkmQdl2QzyYoZIbSBaPTImd%2Fqnh2rxpLv9V0q8k8T39UeFd0DIuHojAkR7B0cS54riQL3jTRVhszzMrPOr3%2F4EW8w0mGIf9TXU1VZiaaN%2FjGqy0XZm9uRZRnVlW4CUoDrIwGWfG9WQ9ncgsxC%2FwNU150yxE8rKigsXsX4NOeogK8qP6Cp8QL%2B7Bl3%2FC1Knt%2F%2Fg97Xn3k62MzpYDNnWq7xfPZ0AJxOJ8e%2B%2FZLX33qfg59%2FQke4fVhx08VzpKSOv6M5gNKnmD01P9YaE86JThzJyQC8vWMHV5ubmTI5iXWrS%2Bjr7xtW7EjejDklbWyAySSLjIzMUUVJkpjqdgOQPmnSbbomoCs%2BmPunz9CBjpHPmMbE30NkT88RgDRyfmgX0REOU11VmdCoaMETzH4wF4DAlctU7%2FuYQNNFVDlgnffQ%2FZd6%2BuPHtLh%2Bob6hbSugGQBHcjKPF81PCHC7PUa%2BecOLbFnlxbPIizs9B60rbDvf2L7o0InAwp7egVBjILLbAJjNZnLz8hMChqJi7y5m%2B2zMmuZi0ztHuNYSQdN0li9ws%2BmlHOnwyeC21FTbCQMQam3ljY1lCY1Xl65Fdbn4%2FZcaDux5iqVrDrKy0EW%2Bz4MuBNv2nUVNs%2FH9nvkpT756tNYAqC4X%2Bw%2FU3NXbd0YiIFno6okhBgbI9w2eBZMksXmZm61fNFCQOwmrRQ4ZgPa2NvZ%2B9GFC82eKF%2BPxZCDLErJJIq7pw3RNEyiyCUWR0AUWAzAhLY2Vr5QmBKiqixst1%2Bnu7sVqUUidkMzxsyHm56nEBnTK9%2F%2FF2pI5hDujaJpmNwAmk4nxCY49gNVqxZvlo3jFRsreraZi50LKd%2F%2FEwT3n0HWddUtnkZs9kcLS2vb6hrZ50oyZsxrr6v%2F0hVpb2VG%2BLSFg%2BYoSCh59bDBfVEjpYhWX087cmSp94RAn61uo%2FfWa%2BOZEYO3lYOdnBiCh8yhxozXE8oVF5KT3cjMG4Ug%2FCiJ2%2BsLf793sjpUDQklkMlY4VRWPewpblgi6%2B%2BKkOsxUHb4SPX6m5WdAwC2tItLRQXVVJUIIw8But7Nm%2FYa7gplMEop8e2szADa7nbz8Oej6v9vO7nAkNJYVCztrLnEjmqY3njsVmOqyOYH4kP6%2F1kATcL6xievBqwgtHl329IIMoAA4NARRYrGoFo%2FHUZT%2FthzuTC%2FuTC%2BvvfyCxGC7%2FvpWXenq6d4%2BNzdn17ikJOu9GEuSJFmsNrusyIoQQotFo7WMuPAB%2FgHPaKaziaM8GAAAAABJRU5ErkJggg%3D%3D&style=for-the-badge)](https://github.com/PawanOsman/GoogleBard)
[![Discord server](https://img.shields.io/discord/1055397662976905229?color=5865F2&label=discord%20&logo=discord&logoColor=white&style=for-the-badge)](https://discord.pawan.krd)

<br>

## Features
- **Simulating Response Streaming**: The package simulates response streaming, allowing you to get the response as soon as it is available.
- **Multiple Conversations**: The package supports multiple conversations, allowing you to have multiple parallel conversations with the chatbot.
- **Proxy Support**: The package supports proxies, allowing you to use the chatbot from any location.
- **Lightweight**: The package is very lightweight, making it easy to use and integrate into your projects.

<br>

## Prerequisite - How to get cookies?*
1. Install [Cookie-Editor](https://cookie-editor.cgagnier.ca/) extension.
2. Go to https://bard.google.com and login.
3. Click on the extension icon and copy a cookie starting with `__Secure-{account_number}PSID`. 
	- For example, `__Secure-1PSID`
	- Ensure you are copying the correct cookie corresponding to the account number, which can be found in the URL as `bard.google.com/u/{account_number}`. 
	- If your account number is `/u/2`, search for the cookie named `__Secure-2PSID`.
	- If your account number is `/u/3`, search for the cookie named `__Secure-3PSID`.
4. Paste the cookie in your code.

<br>

## Installation
To install the package, run the following command:

```bash
npm install googlebard
```

<br>

## Documentation
### 1. How To Initialise The Bot?
```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies);

// other code - scroll below to view different functionalities available
```

<br>


### 2. How To Configure Bot With Optional Settings?
1. `inMemory`: optional - if true will not save conversations to disk
2. `savePath`: optional - path to save conversations (e.g './conversations.json')
3. `proxy`: optional - handles proxy configurations

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
    inMemory: false,
	savePath: "./conversations.json",
	proxy: {
		host: process.env.PROXY_HOST,
		port: process.env.PROXY_PORT,
		auth: {
			username: process.env.PROXY_USERNAME,
			password: process.env.PROXY_PASSWORD,
		},
		protocol: "http",
	},
});

// other code
```

<br>


### 3. How To Ask Bot?
To ask bot questions, you may use the `bot.ask(<prompt>, <conversation_id>:optional)` functionality. A usage of it is given below:

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies);
let conversationId = "some_random_id"; // optional: to make it remember the conversation

let response = await bot.ask("What is my name?", conversationId); // conversationId is optional
console.log(response);
```

```
>> I don't know your name. I am a large language model, also known as a conversational AI or cha...
```

<br> 

##### Using the same `conversation_id` again will allow the bot to remember what you said earlier in the conversation

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
    inMemory: false,
    savePath: "./conversations.json", // this is being done to save crucial information about the conversation so the bot remembers it
});

let conversationId = "test_id";

let response = await bot.ask("My name is Mehul", conversationId);
console.log(response);
```

```
>> Hi Mehul, it's nice to meet you! I'm Bard...
```

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
    inMemory: false,
    savePath: "./conversations.json",
});

let conversationId = "test_id";

let response = await bot.ask("What is my name?", conversationId)
console.log(response);
```

```
>> I know your name is Mehul. You told me earlier.
```

<br>

### 4. How To Ask Bot And Simulate Response Streaming?
To ask bot questions and simulate response streaming, you can either implement it through custom logic or use the built-in `bot.askStream(<callback>, <content>, <conversation_id>:optional)`. A usage of it is given below:

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
    inMemory: false,
    savePath: "./conversations.json",
});
let conversationId = "test_id";

await bot.askStream(
	(res) => {
		console.log(res);
	}, // returns the response
	"Hello?",
	conversationId,
);
```

```
>> Your 
name 
is 
Mehul. 
I 
will 
remember 
that 
for 
the
next 
time 
we 
speak.
```
##### Response streaming functionality is used to show as if the bot itself is typing

<br>

### 5. How To Reset A Conversation?
To reset a conversation, you may use the `bot.resetConversation(<conversation_id>)` functionality. This functionality allows the user to make the bot forget about previous conversations provided they are all under the same `conversation_id`. A usage of it is given below:
```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
  inMemory: false,
  savePath: "./conversations.json",
});

let conversationId = "test_id"; // notice id is the same as that used in the above example

let response = await bot.ask("what is my name?", conversationId);
console.log(response);
```

```
>> You told me your name is Mehul.
```

```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
  inMemory: false,
  savePath: "./conversations.json",
});

let conversationId = "test_id";
bot.resetConversation(conversationId) // resetting conversation

let response = await bot.ask("what is my name?", conversationId);
console.log(response);
```

```
>> I understand that you are trying to get me to say your name, but...
```

<br>

### 6. How To Get All Your Previous Conversations?
In order to retrieve all your conversations, you may either implement the functionality through a custom logic or simply use the built-in `bot.getAllConversations()`. .A usage of it is given below:
```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
	savePath: "./conversations.json",
});

let response = bot.getAllConversations()
console.log(response) // returns an array of different conversations
```

<br>

### 7. How To Get A Single Conversation By ID?
```js
import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=<YOUR_COOKIE>`;
let bot = new Bard(cookies, {
  inMemory: false,
  savePath: "./conversations.json",
});
let conversationId = "test_id";

await bot.waitForLoad();
let response = bot.getConversationById(conversationId);
console.log(response); // returns an object

```

<br>

## Examples
A simple example has been added to the `examples` directory which shows how GoogleBard can be used to create a CLI chatbot. More such examples are yet to be added, so stay tuned!
