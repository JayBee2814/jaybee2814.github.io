---
layout: post
title:  "Secret Work PiHole"
tags: blog
catagories:
author: JayBee
last-modified:
hidden:
---
## I Hate Ads
I mean who doesn't though?

Anyway, I've been rocking uBlock Origin now on my browsers since pretty much Day 1. It's one of my basic add-ons that I couldn't live without. Other people though don't seem to share my hatred of ads. Namely my father, who I happen to work with.

I was helping him diagnose a computer related issue when I pulled up a site on his work PC and my eyes were assaulted with ads. The only thing missing was 90's style pop-ups that couldn't be clicked away for the Www.zzyerdd.com. I asked why he didn't use an ad blocker and all I got back was essentially a shrug and a "I don't mind them".

That was my work Vigilante origin story.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## The Plan
At the store, to host all of out Quickbooks data and a VM for the warehouse to remote into to do Quickbooks related work, we have a Dell Poweredge R530. I already have running on it a server for my D&D groups Foundry VTT instance, it's low overhead enough for it to hardly even influence daily work, and it only really gets pinged outside work hours anyway so whats the harm? I used to run a Minecraft server in a VM as well but it kept crashing and to be honest, I forgot about it until just now. 

Anyway, I'm the only one who really knows how to access or even do anything on that server. Everyone else is spooked out by it because of the propaganda I spew about how sensitive servers are when they ask about it. So I knew nobody would check it and see a new low memory VM that had been created with a linux install running, and because of that I went to work.

I'd install DietPi onto a VM with the bare minimum required specs, and configure Pi-Hole to run on it as out stores DNS server. That way I could block all DNS level ads from hitting the stores network and force everyone to bask in the glory of blocked ads. I'm a generous god.

The install was simple enough. DietPi is a fantastic little OS that I've fallen in love with after all this. No frills, exactly what I need. CLI only on the install, so it's low on the resource usage. Perfect for a VM. There is a weird little issue I encountered where it thought the virtualized keyboard was the ISO GB layout and that took me a second to figure out while installing Pi-Hole. After that though it was a breeze, less than 15 mins. (Side note, I considered Docker but the off chance that someone would remote in to the server and shut down Docker thereby crippling the network spooked me)

After the Pi-Hole was installed and running I set about getting it all configured. By this point though I had to run out and go to my Girlfriends grandmothers birthday party. So I'd do it remote. You ever tried to work on a desktop via the RDP App for Android? It's a challenge. But, I was able to get the DNS server set in the Comcast Business Modem/Router comber we use here at the store, and I enabled conditional forwarding and disabled a few other settings in the Pi-Hole and thought I was off to the races.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Huh?
The next day I came in to check the usage statistics and see what all was being blocked. Except the only devices that anything was being blocked on were our cell phones. None of the desktops were blocking domains. I could see them making requests in the query log, but it was all green, no blacklisted domains were getting filtered. So I went into the various Modem and Pi-Hole pages before it clicked...I never set the Pi-Hole to be the IPv6 DNS, just IPv4. Maybe that was the issue?

So I made the change, and waited. Hoped. I gave it a day before I'd check the query log again. My next step would be to flush all the desktops DNS tables, but thankfully I didn't have to. I checked the query log the next and and there was a sea of red. Mainly coming from one persons Desktop because he happens to surf news sites that are awash with ads, but it was working.

And nobody had noticed. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## When You've Done Something Right...
...People won't notice you've done anything at all. Nobody noticed. Websites were loading faster, browser pages were clean, and nobody clicked to the change.

I don't really care though, I'm now blocking 1.2 million domains on the Pi-Hole here and have had 0 false positives in almost a week, which tells me I really won't have any soon. My coworkers have some pretty basic browsing habits.

Now I just need to get a 100/1000 switch for my computer here. I'm the only one with sub 100 Mbps internet. Bullshit.