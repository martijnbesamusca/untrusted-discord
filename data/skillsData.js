module.exports = [
    { id: 1,name: "Hack Target", aliases: "hack target,ht,hack",classes: [1], type: "Day", cooldown: 0, targets: "Node", uses: 0, rng: true, description: "Try pwning the machine (targets node, leaves log). The more people try hacking the same node, the more likely the capture." },
    { id: 4,name: "0-Day Exploit", aliases: "0-day exploit,0day,0 day,exploit",classes: [1], type: "Day", cooldown: 0, targets: "Node", uses: 1, rng: false, description: "You have been saving this 0-day exploit for a special occasion. This is likely it. Try not to waste it. (100% chance to capture a node)" },
    { id: 6,name: "Grant root Access", aliases: "grant root access,root,grant root",classes: [1], type: "Day", cooldown: 0, targets: "Other Players", uses: 1, visits: true, description: "Grant root access to the whole operation to a specific member. If you die or get arrested, that user will become the new OP Leader." },
    { id: 2,name: "Emergency Extraction", aliases: "emergency extraction,ee,extraction",classes: [1], type: "Night", cooldown: 2, targets: "Other Players", uses: 3, description: "Send a hired team to move a member to a safe hideout." },
    { id: 5,name: "Move Hideout", aliases: "move hideout,move",classes: [1,2], type: "Night", cooldown: 0, targets: "None", uses: 1, description: "Move to a safer hideout, making you safe from arrest, murder and deals attempts." },
    { id: 49,name: "Not a Snitch", aliases: "not a snitch,snitch,no snitch",classes: [1], type: "Passive", description: "You will never accept a plea deal - you'd rather go to jail." },
    { id: 67,name: "Covert Broadcast", aliases: "covert broadcast,broadcast,ol broadcast",classes: [1], type: "Passive", description: "You hold root access of the NETSEC operation: you can anonimously message everyone." },
    { id: 17,name: "Create Hideout", aliases: "create hideout,hideout",classes: [2], type: "Day", cooldown: 3, targets: "None", uses: 2, description: "Create a new hideout for you to escape to. Better safe than sorry, right? (Adds 1 charge to 'Move Hideout')" },
    { id: 50,name: "Bait Law Enforcement", aliases: "bait law enforcement,ble,bait,bait law",classes: [2], type: "Day", cooldown: "2", targets: "Other Players", uses: 3, description: "Send an anoymous tip to agents about your target being a NETSEC member. Hopefully they will think a bounty hunter did it..." },
    { id: 64,name: "Desperate Measures", aliases: "desperate measures,dm",classes: [2], type: "Day", targets: "None", uses: 1, description: "Desperate times require desperate measures. Become an Improvised Hacker (usable from Day 4)." },
    { id: 19,name: "Install CCTV Surveillance", aliases: "install cctv surveillance,install cctv,cctv",classes: [2], type: "Night", cooldown: 2, visits: true, targets: "Other Players", uses: 2, description: "Install a CCTV system at the subject location. Allows for CCTV surveillance as long as the target is alive and does not move hideout (Visits the target)." },
    { id: 18,name: "Perform CCTV Surveillance", aliases: "perform cctv surveillance",classes: [2], type: "Passive", description: "keep tabs on a person tonight. You will know if he/she has been visited tonight (Requires installation of CCTV first)" },
    { id: 43,name: "All In", aliases: "all in,allin",classes: [15], type: "Day", targets: "None", uses: 0, description: "Becomes the field agent. (permanentely lose all AGENT LEADER skills - can be used only if the original field agent is out of play)" },
    { id: 48,name: "Rollback", aliases: "all in,allin",classes: [15], type: "Day", targets: "None", uses: 1, description: "Secure back a pwned target machine, as best as you can, adding fake logs in the process." },
    { id: 70,name: "Computer forensics background", aliases: "computer forensics background,cfb,computer background",classes: [15], type: "Day", targets: "Node", uses: 0, description: "You don't know everything: you know enough for the job. (Assigns a random skill between Unskilled Attack, Hack, Denial of Service)" },
    { id: 12,name: "Midnight Meeting", aliases: "midnight meeting,mm,meeting",classes: [15], type: "Night", targets: "Other Players", cooldown: 2, visits: true, occupies: true, uses: 0, description: "Meet with a target player tonight to discuss important matters. (Occupies player, visits the target)" },
    { id: 41,name: "Strike Deal", aliases: "strike deal,strike a deal,deal",classes: [15], type: "Night", targets: "Other Players", cooldown: 2, visits: true, uses: 2, description: "Coerce a NETSEC member to flip to your side, in exchange for a pardon. (1 less available use for <= 12 players game, does not deplete on failure)" },
    { id: 42,name: "Intelligence Informer", aliases: "intelligence informer,ii,informer",classes: [15], type: "Night", targets: "Other Players", cooldown: 2, uses: 2, description: "Use an undercover contact to obtain information about the target (Learn the target faction and class type)" },
    { id: 44,name: "Cover Checks Out", aliases: "cover checks out,cover,cco",classes: [15], type: "Passive", description: "Your cover will hold for the first three days, in the event of doxxing or death. (Appear as a netsec class to non-agents)" },
    { id: 65,name: "Topology Knowledge", aliases: "topology knowledge,toplogy,tk",classes: [15], type: "Passive", description: "You have unrestricted access to the physical network, thus know everything about the network topology." },
]