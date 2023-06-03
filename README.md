<h1 align='center'>GoogleBard <img width="50" src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif" /></h1> 
<p align='center'>An NPM module for creating GoogleBard chatbot using Bard's reverse-engineered API. With reverse-engineered API functionalities, it empowers developers to harness the full potential of Bard.</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/googlebard" style="text-decoration: none">
    <img src="https://img.shields.io/npm/v/googlebard.svg?label=NPM&logo=npm&color=CB3837" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/googlebard" alt="NPM downloads" style="text-decoration: none">
    <img src="https://img.shields.io/npm/dm/googlebard?label=Downloads&color=CB3837&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKoSURBVEiJ7ZZLTBNRFIb%2FedDS6UNKVQgZAkJTlJdACoZgGhKj0QSNwUVxIbrRhSaasCJh58atcaExkYXogoRISF2UxJVReYkWK6gTB9KK1bZjBQlMNcz0ujAlJe3QamSl%2F%2B7m3PP995w592aAbRaVy6bqanujycZeSa4TKlGXo2qvKIpStlw2FwOdjnG5zvFnS%2BuMAIDJoci3icHoLQB%2FxwAATDYWBSX5AADOwiZyzaNz3fin%2Bm%2FwDxhojSlTW19xgaXz9ACgqIpr05WkQOWb6dMNDVUHAUBJrP%2BY9S%2FcBpA2vpo3udHpeNx0sqiNrzExFEVQWm8Gq%2FtVsLysIPxeBgB8nFtVfZ7o2MspwZWJo9kiKSwf9Xujs9YSHfY4d2zAAYArYFHRbEEhr4ffK71VgsvHtDiMVmBlZUXRMeaRRd9qZ%2B0RmzXVAAASCsHA5XcLkWC8XQiFlrQ4W37kQCAQlhbXOwd7hVBCIZvg%2FlFpms6nnYFAILwVQ7OCpGKxWMRssIhRUT60r73QCACeawuSbyTWN%2FXkzYts%2BRtTVNfc9ojhOCtREsxaJHhRFMXxZMzvEz163V7H0%2Fuf%2BmhC6KBv7cbMjDCUCrLb7a3GorKbFEurqiwvvX7%2B7PAmp5YO93yPQEhXv5c4yivdmU7jbK0acLY57maKOcor3V39XtIjENLS4Z5PqyApmmHA6jkuE2R6XOjW6ARYPcfRTHrH0wxsNU5wFfarDcXFl7RgmZRnMO0urG3ewiChqgCQZ7HCdX2YB8D%2FjkGqiKqoaQbxr1%2BmPowO8Tv3HzCAYcDtKoEcDQGEgCviEZc%2Bg6hKVrj0aiL%2BfSk2mVynPhV0dVPLeZ3B2ApCkcoTZ4bnHw6cAoCy490Pgp57naBI1p%2BE9TV5bG5m8g4yvEvbop%2BZL%2FJtWVlNhAAAAABJRU5ErkJggg%3D%3D" />
  </a>
  <a href="https://github.com/PawanOsman/GoogleBard/issues" style="text-decoration: none">
    <img src="https://img.shields.io/github/issues/PawanOsman/GoogleBard?label=Issues&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ7SURBVEiJtZVZaFxVGMf/d19mbnMzk5lskzShmSS0Seto0xgliEFwaWmTPlhFiFIKpSLik1CLKGgVfPKhIj4oVSiVUI1GQytYrKYWbYpQa0vTdJLQmjQzk7mzpJnc9VwfpgmTmEmi0P/LvZxv+Z3vfGcB7rOogv8NNMe9yHN8BAC9MEiI6xBiT9im+Q2AK/8XUMkL4oWqusYayeNlljuZhu4mY5Mzc7OZG5ah9wBI/CcAL0j99c2te/4eu56wDCMBCqTAhwUotTRQKav+gDJ+/c9x09DbAKTWXYYgSjfCLdtdnuc/KDYRhuH2ezeo8fDWHTYniEPrzZ1fa4qiCXFACClWuus41mfG/Nxb2WQsq5aVtzAMswcAFEXpDoVCd4LB4G0A4ZUBBeIFYZAXpVGGYXYtt1mW9XFqJj5eVl6tMix3FABkWe46fOTNiu6evT5VVfsA1K8GEDleioRbHmrgOL53OYATxQO2bValZqYzguTxAahYsFEUjfaHOx7w+/0HVgMsblvXXbKFwXHcIUUp+VCSPUImmZhT/UEfgEcLfSRJAsUwwmqAYqqgaPZ9uISpra0RLVP38qIksCzbsFYguzBzx7EXB3lBggu3A6BfBogNAI5tXkxr6QHFI7+hlqhBhmVBMVz5egAK7Zrl5O4EKnzMwfRczpfLTKNpW3v1bFr7yHXzR2L69njc0HO74/H4MEAN+QAGS2+ClQF1VeInn77dJHe1qwBQldMJDr4bdc5d1gyXlq17fq7rEhsAmZ+f/10QpSiA5rWSL1QQ6WpXKQT2AXwl5NhxfPEOzTz5yk1Zpyvh8/lBCMEvqQRtGvoTAEzHdpRMMgHiWBt1XV8TkJcVz3+JCYoCvnyvDk3dwy7nKTcF0UPUQAXnLQ2cKoidrwjVP5XV4rn1AdI/LTH4Slhc+LyVev5wVNCyWQAAt0IChrL5NQHXojkc64shpxP07vSja4cKAAjXSrh0ouVfQad/TeHkaQ2yRCGmeVZtNGvbLv/0q1FI/jBohsHPR8dxqGcOr79UvWLAkWO3cPJHE2LpRjiOjfTUCLZ35S/WQDAIjmFeqK4OdQOAZZl3KFX13Krf0lHTs/sZKF4v+r7+DlMjQxjpb4XALz2H2bsOWvddRe3mx/Bszy4kkhoGBs9AT0+js7Nzrv+rU1lRlBZ7YlnmNGuYFFWiqni88xEAwKU/LmNiRMo27LyYYFnKLAQYFhFpOVjW2FCvRLbll+7sufMYuzqZ+X7g2yvJZHIvlj1GrOOQVErTQoM/nIWieDEaHYeWzMwa80YzABtLJYlyauzayE3l/G/DSCQ1zM5mYZjm6Gw201mkDVy7JHunNm150A23trnektI4x4n7izWNE4TXNqhlicatbe6mzREiSvIkgNZi/gs7IMSyfC9N04pp6icA/FUs4J4ivCA8RxxHs237OIDYGv73T/8AEAmYFH31lroAAAAASUVORK5CYII=" alt="GitHub issues">
  </a>
  <a href="https://github.com/PawanOsman/GoogleBard/network" style="text-decoration: none">
    <img src="https://img.shields.io/github/forks/PawanOsman/GoogleBard?label=Forks&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ7SURBVEiJtZVZaFxVGMf/d19mbnMzk5lskzShmSS0Seto0xgliEFwaWmTPlhFiFIKpSLik1CLKGgVfPKhIj4oVSiVUI1GQytYrKYWbYpQa0vTdJLQmjQzk7mzpJnc9VwfpgmTmEmi0P/LvZxv+Z3vfGcB7rOogv8NNMe9yHN8BAC9MEiI6xBiT9im+Q2AK/8XUMkL4oWqusYayeNlljuZhu4mY5Mzc7OZG5ah9wBI/CcAL0j99c2te/4eu56wDCMBCqTAhwUotTRQKav+gDJ+/c9x09DbAKTWXYYgSjfCLdtdnuc/KDYRhuH2ezeo8fDWHTYniEPrzZ1fa4qiCXFACClWuus41mfG/Nxb2WQsq5aVtzAMswcAFEXpDoVCd4LB4G0A4ZUBBeIFYZAXpVGGYXYtt1mW9XFqJj5eVl6tMix3FABkWe46fOTNiu6evT5VVfsA1K8GEDleioRbHmrgOL53OYATxQO2bValZqYzguTxAahYsFEUjfaHOx7w+/0HVgMsblvXXbKFwXHcIUUp+VCSPUImmZhT/UEfgEcLfSRJAsUwwmqAYqqgaPZ9uISpra0RLVP38qIksCzbsFYguzBzx7EXB3lBggu3A6BfBogNAI5tXkxr6QHFI7+hlqhBhmVBMVz5egAK7Zrl5O4EKnzMwfRczpfLTKNpW3v1bFr7yHXzR2L69njc0HO74/H4MEAN+QAGS2+ClQF1VeInn77dJHe1qwBQldMJDr4bdc5d1gyXlq17fq7rEhsAmZ+f/10QpSiA5rWSL1QQ6WpXKQT2AXwl5NhxfPEOzTz5yk1Zpyvh8/lBCMEvqQRtGvoTAEzHdpRMMgHiWBt1XV8TkJcVz3+JCYoCvnyvDk3dwy7nKTcF0UPUQAXnLQ2cKoidrwjVP5XV4rn1AdI/LTH4Slhc+LyVev5wVNCyWQAAt0IChrL5NQHXojkc64shpxP07vSja4cKAAjXSrh0ouVfQad/TeHkaQ2yRCGmeVZtNGvbLv/0q1FI/jBohsHPR8dxqGcOr79UvWLAkWO3cPJHE2LpRjiOjfTUCLZ35S/WQDAIjmFeqK4OdQOAZZl3KFX13Krf0lHTs/sZKF4v+r7+DlMjQxjpb4XALz2H2bsOWvddRe3mx/Bszy4kkhoGBs9AT0+js7Nzrv+rU1lRlBZ7YlnmNGuYFFWiqni88xEAwKU/LmNiRMo27LyYYFnKLAQYFhFpOVjW2FCvRLbll+7sufMYuzqZ+X7g2yvJZHIvlj1GrOOQVErTQoM/nIWieDEaHYeWzMwa80YzABtLJYlyauzayE3l/G/DSCQ1zM5mYZjm6Gw201mkDVy7JHunNm150A23trnektI4x4n7izWNE4TXNqhlicatbe6mzREiSvIkgNZi/gs7IMSyfC9N04pp6icA/FUs4J4ivCA8RxxHs237OIDYGv73T/8AEAmYFH31lroAAAAASUVORK5CYII=" alt="GitHub forks">
  </a>
  <a href="https://github.com/PawanOsman/GoogleBard/stargazers" alt="GitHub stars" style="text-decoration: none">
    <img src="https://img.shields.io/github/stars/PawanOsman/GoogleBard?label=Stars&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPYSURBVEiJrZZdaFtlGMf/7/lKs6StadIm/UhOk9jFFvuxrdt0tEJjM0Sdil6oFwqKeCG72Xbj5lgR2cVAmSCCMEGcMtCbga7Fbc0KOkGkDETXbf1YsmZt0jZJm+yctuck57xedKZp2qQB91yd9/n68Rz+z3sOoZSiHHM6Dxh5Q8VbWY1k6qyp70dHRzPl1HFldQfQUCcMH/DK+ySV0FtR0yEAr5ZTx5STJHoDPW5rZu/Z12LcuTejfJVBe6HR4/c9MkCTNfPVEX+C/+98xJ8UWuzZrx8JwOXt666spA37u7WcL9Aqo4Kj+5ubA63/G2Ctxqcn3pMtcBmBhoqc/5g/wYv1yrZTlAT4fP2v2Kpp1zN71DWH3QDYBABAoE2GWdD37e7se6NUD0IphdP5XA1ls50g1NfcyPQSoGMpnbV1+TT+y+Mpa5U5T8o6Be5IwKoOSWFwarBO+228QnnnWWnkg5ceXDj5bc30d8PmpK7TVCQSnCEub9/7Dit3tnevSXhc3MF5RSPcjVmIlhvgi4l4WVuDbGGRJI/4Kqd/dLFWCS3wn5P2jn7p2oVWk82S101LAis3Sk0OjEuArBUNyyqDp840rzA8h9nbU6sF4TK22yqUDAdv74BBoGPM3BJ98djpkPTnX/J6lJQuBgBY+KKhy2MmfDJkS84tsC8z96eGx6NRvevwQCh9fVQqH8AQgN8swl9umnDy57r4wiJ9MhIJzjAAMD0dnLof1zqOng4vjvyRXgOQMq4pgWw4Dv1jxqlLtfPxRdIeDv8aBfL2YPZu8F50Vmv/8My95GRYAVhrGYD1CcIJHh8P1can0xXtodBILDdofn4kEpyZmdPevngloYNvAARPaUB2XQyDN800IZHDscnL8/kpW2wysxxbUCh41/YAVc89pldYoqrs5m6FDl5Au89jZsE7AS1RNqDNocDtyAS2BYj1TH+L2wiY/QDvAUgROT7IbliXVocCnqU92wK0LHa1iAaAqwH0FGBoy8UUlUBaeaicuLqhzlObQUpmmgr7bdJiWqa2xvpKQJl4mFGLyVknBr5IL43d5VIsSxWLmToGDqpVPd71zzLHUFQbNd7t7nssFBpZ2hLQ0vK8wVxJGAIFWPoBs/MZfHZuRv99VI3H4vy74alrgwAgiv49J36yn7dXZncePxjndrvWrhqzkVKVEDuAHIAU/lV07uofO+Sv3qlpFFevS7K0rB+9c6v3G0oHdBRYU3P/0x575ryrJiM2WLK48rcpnpLgCYVGVosCRLHXojHC6yCQjazhx4mJIaWwcaG5vH3dlLJPcFS7lP96AOBfSCCA1HW3a3EAAAAASUVORK5CYII=" />
  </a>
  <a href="https://github.com/PawanOsman/GoogleBard" alt="GitHub license" style="text-decoration: none">
    <img src="https://img.shields.io/github/license/PawanOsman/GoogleBard?label=License&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQrSURBVEiJpZVvbFNVGMZ/t/e2ZW2XDUZvhwLt1rUyYOA2FJNFiRsYjREGBlCmJgiOPzKDET4gBqaSoEGREOOiY5kRI2QxETUyAigxCskQmQaSwcKEjsJYN7uO/W3Xe48fll3ZGCvom5zkzXnu+/zuveec90gMD8scn78uApPtDrvGGCFJkmQdl2QzyYoZIbSBaPTImd/qnh2rxpLv9V0q8k8T39UeFd0DIuHojAkR7B0cS54riQL3jTRVhszzMrPOr3/4EW8w0mGIf9TXU1VZiaaN/jGqy0XZm9uRZRnVlW4CUoDrIwGWfG9WQ9ncgsxC/wNU150yxE8rKigsXsX4NOeogK8qP6Cp8QL+7Bl3/C1Knt//g97Xn3k62MzpYDNnWq7xfPZ0AJxOJ8e+/ZLX33qfg59/Qke4fVhx08VzpKSOv6M5gNKnmD01P9YaE86JThzJyQC8vWMHV5ubmTI5iXWrS+jr7xtW7EjejDklbWyAySSLjIzMUUVJkpjqdgOQPmnSbbomoCs+mPunz9CBjpHPmMbE30NkT88RgDRyfmgX0REOU11VmdCoaMETzH4wF4DAlctU7/uYQNNFVDlgnffQ/Zd6+uPHtLh+ob6hbSugGQBHcjKPF81PCHC7PUa+ecOLbFnlxbPIizs9B60rbDvf2L7o0InAwp7egVBjILLbAJjNZnLz8hMChqJi7y5m+2zMmuZi0ztHuNYSQdN0li9ws+mlHOnwyeC21FTbCQMQam3ljY1lCY1Xl65Fdbn4/ZcaDux5iqVrDrKy0EW+z4MuBNv2nUVNs/H9nvkpT756tNYAqC4X+w/U3NXbd0YiIFno6okhBgbI9w2eBZMksXmZm61fNFCQOwmrRQ4ZgPa2NvZ+9GFC82eKF+PxZCDLErJJIq7pw3RNEyiyCUWR0AUWAzAhLY2Vr5QmBKiqixst1+nu7sVqUUidkMzxsyHm56nEBnTK9//F2pI5hDujaJpmNwAmk4nxCY49gNVqxZvlo3jFRsreraZi50LKd//EwT3n0HWddUtnkZs9kcLS2vb6hrZ50oyZsxrr6v/0hVpb2VG+LSFg+YoSCh59bDBfVEjpYhWX087cmSp94RAn61uo/fWa+OZEYO3lYOdnBiCh8yhxozXE8oVF5KT3cjMG4Ug/CiJ2+sLf793sjpUDQklkMlY4VRWPewpblgi6++KkOsxUHb4SPX6m5WdAwC2tItLRQXVVJUIIw8But7Nm/Ya7gplMEop8e2szADa7nbz8Oej6v9vO7nAkNJYVCztrLnEjmqY3njsVmOqyOYH4kP6/1kATcL6xievBqwgtHl329IIMoAA4NARRYrGoFo/HUZT/thzuTC/uTC+vvfyCxGC7/vpWXenq6d4+Nzdn17ikJOu9GEuSJFmsNrusyIoQQotFo7WMuPAB/gHPaKaziaM8GAAAAABJRU5ErkJggg==" />
  </a>
  <a href="https://discord.pawan.krd" alt="Discord server" style="text-decoration: none">
    <img src="https://img.shields.io/discord/1055397662976905229?color=5865F2&label=Discord&logo=discord&logoColor=white" />
  </a>
</p>


## Table Of Contents
- [Features](#features)
- [Prerequisites](#prerequisite---how-to-get-cookies)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)

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
