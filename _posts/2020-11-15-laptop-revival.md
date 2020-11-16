---
layout: post
title:  "X1 Carbon 2nd Gen Repair"
tags: blog
categories: project
author: JayBee
last-modified: 
hidden: 
---

## Background
My Dad is really bad with electronics. Like really bad. Anything he has will eventually be broken or lost. In the case of this ThinkPad, it was dropped, hard, apparently. Just based on looking at it, there was a massive chunk that had been chipped off from the initial impact, and when the laptop was turned on, two cracks that ran the entire length of the screen were visible. To go along with the physical damage, the ThinkPad was also stored in a storage unit without AC, then a garage, for around 4 years. This led to the battery being...very dead. All in all, it could be worse, but I had my work cut out for me.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## First Pass
A dead battery, a cracked screen, and god knows what else.

So first thing, I set out to getting a new screen for the device. Lenovo no longer offered the exact part I needed officially, so I had to go through a third party seller of "compatible" screens. After about three days it came in, and I set out to taking apart the original screen to slot in the new one. Except I had a bit of an issue. The screen wasn't coming out. It was attached to the bezel, and there was this extra connector that wasn't on the new monitor. 

Shit. It's a touch screen.

So I returned the screen I bought, then got a total screen assembly off eBay. This honestly worked out in the end. I got a new screen, and a new back LCD cover, for cheaper than if I had gotten them separately.

On every boot I would get a message saying the battery couldn't be charged, which I knew about, but before the system fully POSTed, it would throw up an error about the BIOS not having a proper time. Ok, so a dead CMOS battery too. Fun.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## New Parts
The parts I needed finally came in the mail, and I got myself a replacement coin cell battery from the gas station. The original battery was a CR2016, so I got a two pack of those, but I also had an idea. Maybe I could wedge a CR2032 in there. Same diameter, but twice the width/capacity. Worth a shot and if it didn't work, I could always use the batteries on my car keys. No harm no foul really.

Opening the ThinkPad was simple enough. 7 screws along the edge of the bottom plate and bam. Replacing the screen and CMOS battery was a different story though. To get to either part fully, I'd have to completely remove the mainboard from its housing. Another 5 screws and way to many ribbon cables later, I was there. I unscrewed the hinge, de-routed all the wires, and had the top half of the laptop free from the bottom. Putting in the new monitor was as simple as sliding it into the grooves and routing the cables and boom, replaced.

The CMOS battery was a simple connector that I just undid. The original battery was soldered (I think) to the power connectors, then wrapped in heat-shrink to keep it from shorting anything out. I tried to de-solder the wires from the battery, but I couldn't get anywhere, so I ended up just snipping the soldered sections off and using electrical tape as a sort of pseudo heat-shrink. The 2032 battery was way too thick, so I ended up having to use a 2016, disappointing but oh well. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Buttoning Everything Up
After having a hell of a time getting all the wires and ribbon cables routed the right way again, I screwed everything back together, closed the laptop up and hoped.

I hooked it up to the AC power again (still need to get a battery) and prayed. 

I got a BIOS error for time again, but I expected that, since it didn't have anything in memory, but the screen was working wonderfully. Bright and crisp, perfect. So I fixed the time and got into the OS. Everything seemed to be working ok, Wi-Fi was still working, that keyboard was working fine, the adaptive keys were still going strong, it seemed like aside from the battery and a slightly squeaky trackpad, it was working fine. 

So I did a shutdown, and pulled the power, which was essentially a battery pull since it couldn't be charged. After a few tense seconds of waiting I plugged her back in and noticed it didn't immediately boot. A good sign, the MoBo remembered being shutdown. I pressed the power button and hoped. 

One POST screen later and I was in the OS, no BIOS error message. My hacked together CMOS battery was working as intended.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Almost Done
I still need to source a new battery, heat shrink the battery instead of using tape, replace the trackpad with the three button version I ordered off eBay, and if I can, get a new non-yellowed adaptive key row. 

Otherwise though, I can use the laptop as normal as long as I'm attached to AC power. In fact, I wrote this entire post on my new-to-me X1 Carbon. 

Sweet.
