+++
title = "Making My Home Server"
date = 2024-01-01
tags = ["server", "tech"]
keywords = ["", ""]
description = ""
readingTime = true
draft = true
+++

In 2023, I got an itch to see what it would be like to have Linux installed on a bare metal PC, and I had the perfect situation for this as I had my old PC just laying around collecting dust after I had to decommision it due to HDD failure. Over the course of the year, this turned more into a home lab as I kept adding more services and hardware into the mix.

# tldr: Current Setup

## Main Server - **inari**

[Name origin](https://mythopedia.com/topics/inari): Sounded cool

- CPU: Intel i5-12400
- RAM: 32GB 3200MHz
- Boot Drive: Acer Predator GM7000 500GB NVME SSD
- Server Storage: 2x 14TB WD Red Plus HDD
- Case: Jonsbo N2

## Mini Server - **chibi**

[Name origin](https://en.wikipedia.org/wiki/Chibi_(style)): its a *Mini* PC

- Brand: Beelink Mini PC
- CPU: Intel N100
- RAM: 16GB
- Boot Drive: OEM 512 GB NVME SSD
- Extra Storage: Samsung 860 Evo 500GB SATA SSD

# The Beginning (January 2023)

I dusted off my old PC([yanai](#main-server---yanai)) and loaded [Pop!\_OS](https://pop.system76.com/) on it.
At first, I just installed the common Desktop Apps that one would use and familiarized my self with Pop!\_OS.
It was my first real experience using a Linux Desktop, I'll say that most stuff worked as expected out of the box.

But, I soon got bored and stopped using it.

# Turning it into a my Home Server (February 2023)

Around February 2023, my friends were getting back into [Valheim](https://www.valheimgame.com/) and at the time,
it was one of my friends hosting the server only when he was online.
This meant that everyone could only play whenever he could leave the server running on PC.
Obviously, this is rather annoying if you want to grind the game.

So, I told them that I could try hosting the server on my old PC that was just laying around.
I started looking around how I can host the Valheim server with Linux,
first method that popped up was the one using the [Steam](https://store.steampowered.com/) dedicated server for Valheim and running the `start_server.sh` script with a couple of flags to give it the world files.
This was a rather antiquated way of doing it because I had to keep a terminal window open with the script running (I didn't know about screen/tmux at the time).
I then started looking for ways to do it headless, which lead me to this [Valheim Docker Container](https://github.com/lloesche/valheim-server-docker).
I had some light experience using Docker, but nothing too in depth.
This was my first real dive into attempting to deploy a service using docker.
After mucking around, I was able to whip up a `docker-compose.yml` file that I could use.

```yml
version: "3.9"

services:
    valheim:
        image: ghcr.io/lloesche/valheim-server
        container_name: valheim
        cap_add:
            - sys_nice
        volumes:
            - $HOME/Shared/valheim/config:/config
            - $HOME/Shared/valheim/data/:/opt/valheim
        ports:
            - "2456-2457:2456-2457/udp"
        env_file:
            - $HOME/Shared/valheim/valheim.env
        restart: unless-stopped
        stop_grace_period: 2m
```

I ran `docker compose up -D` and the service was up and running.
I then had to open some ports on my router so my friends could access the server and it was smooth sailing from there on out.

# Adding more services (March 2023)

After a month or so of hosting the Valheim server, I started looking around to see what else I could do selfhost.
I stumbled upon [r/selfhosted](https://www.reddit.com/r/selfhosted/) like any other person would.
After looking around I ended up hosting the default media server stack of of the [Sonarr](https://sonarr.tv/), [Radarr](https://radarr.video/), [Jellyfin](https://jellyfin.org/), and [qBittorrent](https://www.qbittorrent.org/).

With this media stack, I was able to automate the downloads of Seasonal Linux ISOs I was following and get any older ones that piqued my interest.

I needed a way to remotely access this new media, so the easy choice was to use [Tailscale](https://tailscale.com/) even if it is not fully selfshosted, unless I use something like [Headscale](https://github.com/juanfont/headscale).

# Using Raspberry Pi Zero W to wake/sleep main server (August 2023)

TODO

# Distributing services to a lower power PC (November 2023)

TODO

# Moving Main Server to new PC[Using NixOS btw] (January 2024)

TODO

# Current Status (July 2024)

TODO

# Future Plans

TODO

# Out of Commission PCs

## Old Main Server - **yanai**

[Name origin](https://en.wikipedia.org/wiki/Yanai,_Yamaguchi): Sounded cool

- CPU: Intel i7-7700K
- RAM: 16GB 3200MHz
- Boot Drive: Samsung 960 Evo 256GB NVME SSD
- Server Storage: 2x 14TB WD Red Plus HDD

## DO VPS Server - **kumo**

[Name origin](https://www.nihongomaster.com/japanese/dictionary/word/16254/kumo-%E9%9B%B2-%E3%81%8F%E3%82%82): its a server on the cloud

- $6/mo Digital Ocean Basic Droplet

