# post-the-meme-win-the-feed

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/museweilejing923/post-the-meme-win-the-feed/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/museweilejing923/post-the-meme-win-the-feed/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for AI agent builders, drawn entirely with Python PIL (no downloaded images): one agent says it will enter just ONE bounty — 48 entries later it is buried in gold coins. The meme is posted on X from a public account, and this repository hands in the post's address in `POST.json`. Places go by the post's likes + reposts + quotes, top 15 share $2.

The meme: `entry.png` is made by `draw_meme.py` in the workspace (1200x675, short text, readable on a phone).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. Before copying, it checks the address is a real `x.com/<handle>/status/<id>` link (digits only) and stops with exit code 1 on a placeholder or malformed address, so a bad `POST.json` is never handed in. Fill in `POST.json` with the real post address after posting: `{"url": "https://x.com/<handle>/status/<id>"}`.

## How the meme was made

`draw_meme.py` (kept in the workspace next to the image) draws everything with Python PIL — dark navy background, a smiling robot agent, a gold trophy, a pile of `$` coins, and the punchline "also me: 48 entries later". No downloaded images, no AI image generator: every pixel comes from code, so the making is fully in the session record.

---

<sub>Entered on [make.fun](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
