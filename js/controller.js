var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

    $scope.hero = [
        {
            "nickname": "Sniper",
            "imagename": "sniper",
            "name": "Kardel Sharpeye",
            "lore": "Kardel Sharpeye was born deep in the mountainous valleys of Knollen where, since time immemorial, the folk have survived by hunting the strange, cliff-dwelling steepstalkers above their village—killing them from a distance and collecting their carcasses where they fell. Sharpeye was among the best of these strange folk for whom projectile weapons are but another appendage, and to shoot is as natural as to touch."
    },
        {
            "nickname": "Earthshaker",
            "imagename": "earthshaker",
            "name": "Raigor Stonehoof",
            "lore": "Like a golem or gargoyle, Earthshaker was one with the earth but now walks freely upon it. Unlike those other entities, he created himself through an act of will, and serves no other master. In restless slumbers, encased in a deep seam of stone, he became aware of the life drifting freely above him. He grew curious. During a season of tremors, the peaks of Nishai shook themselves loose of avalanches, shifting the course of rivers and turning shallow valleys into bottomless chasms. When the land finally ceased quaking, Earthshaker stepped from the settling dust, tossing aside massive boulders as if throwing off a light blanket. He had shaped himself in the image of a mortal beast, and named himself Raigor Stonehoof. He bleeds now, and breathes, and therefore he can die. But his spirit is still that of the earth; he carries its power in the magical totem that never leaves him. And on the day he returns to dust, the earth will greet him as a prodigal son."
    },
        {
            "nickname": "Sven",
            "imagename": "sven",
            "name": "Rogue Knight",
            "lore": "Sven is the bastard son of a Vigil Knight, born of a Pallid Meranth, raised in the Shadeshore Ruins. With his father executed for violating the Vigil Codex, and his mother shunned by her wild race, Sven believes that honor is to be found in no social order, but only in himself. After tending his mother through a lingering death, he offered himself as a novice to the Vigil Knights, never revealing his identity. For thirteen years he studied in his father's school, mastering the rigid code that declared his existence an abomination. Then, on the day that should have been his In-Swearing, he seized the Outcast Blade, shattered the Sacred Helm, and burned the Codex in the Vigil's Holy Flame. He strode from Vigil Keep, forever solitary, following his private code to the last strict rune. Still a knight, yes...but a Rogue Knight. He answers only to himself."
    },
        {
            "nickname": "Templar Assassin",
            "imagename": "templar_assassin",
            "name": "Lanaya",
            "lore": "Lanaya, the Templar Assassin, came to her calling by a path of curious inquiry. Possessed of a scientific bent, she spent her early years engaged in meticulous study of nature's laws--peering into grimoires of magic and alchemy, recreating experiments from charred fragments of the Violet Archives, and memorizing observations of the Keen recordkeepers. Already quiet and secretive by nature, the difficulty of acquiring these objects further reinforced her skills of stealth. Had she been less retiring, she might have become notorious among the guilds as a thief-scholar. Instead her investigations led her into far more obscure corners. As she devoted her furtive talents to unlocking the secrets of the universe, she instead unlocked a secret door that exists in nature itself: the entryway to the most Hidden Temple. The intelligences that waited beyond that portal, proved to be expecting her, and whatever mysteries they revealed in the moment of their discovery was nothing compared to the answers they held out to Lanaya should she continue in their service. She swore to protect the mysteries, but more to the point, in service to the Hidden Temple she satisfies her endless craving for understanding. In the eyes of each foe she expunges, a bit more of the mystery is revealed."
    },
        {
            "nickname": "Kunkka",
            "imagename": "kunkka",
            "name": "Admiral",
            "lore": "As Admiral of the mighty Claddish Navy, Kunkka was charged with protecting the isles of his homeland when the Demons of the Cataract made a concerted grab at the lands of men. After years of small sorties, and increasingly bold and devastating attacks, the Demon Fleet flung all its carnivorous ships at the Trembling Isle. Desperate, the Suicide-Mages of Cladd committed their ultimate rite, summoning a host of ancestral spirits to protect the fleet. Against the Demons, this was just barely enough to turn the tide. As Kunkka watched the Demons take his ships down one by one, he had the satisfaction of wearing away their fleet with his ancestral magic. But at the battle's peak, something in the clash of demons, men and atavistic spirits must have stirred a fourth power that had been slumbering in the depths. The waves rose up in towering spouts around the few remaining ships, and Maelrawn the Tentacular appeared amid the fray. His tendrils wove among the ships, drawing demon and human craft together, churning the water and wind into a raging chaos. What happened in the crucible of that storm, none may truly say. The Cataract roars off into the void, deserted by its former denizens. Kunkka is now Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess. Not even Tidehunter, who summoned Maelrawn, knows for sure."
    },
        {
            "nickname": "Dragon Knight",
            "imagename": "dragon_knight",
            "name": "Davion",
            "lore": "After years on the trail of a legendary Eldwurm, the skilled dragon-slayer found himself facing a disappointing foe: the dreaded Slyrak had grown ancient and frail, its wings tattered, its few remaining scales stricken with scale-rot, its fangs ground to nubs, and its fire-gouts no more threatening than a pack of wet matchsticks. Seeing no honor to be gained in dragon-murder, the young knight prepared to turn away and leave his old foe to die in peace. But a voice crept into his thoughts, and Slyrak gave a whispered plea that the knight might honor him with death in combat. The knight agreed, and found himself rewarded beyond expectation for his act of mercy: As he sank his blade in Slyrak's breast, the dragon sank a claw into his throat. As their blood mingled, Slyrak sent his power out along the Blood Route, offering all its strength and centuries of wisdom to the knight. The dragon's death sealed their bond, and Dragon Knight was born. The ancient power slumbers in the knight, waking when he calls it; or perhaps it is the Dragon that calls the Knight..."
    },
        {
            "nickname": "Huskar",
            "imagename": "huskar",
            "name": "Sacred Warrior",
            "lore": "Emerging from the throes of the sacred Nothl Realm, Huskar opened his eyes to see the prodigal shadow priest Dazzle working a deep incantation over him. Against the ancient rites of the Dezun Order, Huskar’s spirit had been saved from eternity, but like all who encounter the Nothl he found himself irrevocably changed. No longer at the mercy of a mortal body, his very lifeblood became a source of incredible power; every drop spilled was returned tenfold with a fierce, burning energy. However this newfound gift infuriated Huskar, for in his rescue from the Nothl, Dazzle had denied him a place among the gods. He had been denied his own holy sacrifice. In time the elders of the order sought to expand their influence and Huskar, they agreed, would be a formidable tool in their campaign. Yet becoming a mere weapon for the order that denied him his birthright only upset him further. As the first embers of war appeared on the horizon, he fled his ancestral home to find new allies, all the while seeking a cause worthy of unleashing the power his total sacrifice could bring."
    },
        {
            "nickname": "Io",
            "imagename": "io",
            "name": "Wisp",
            "lore": "Io is everywhere, and in all things. Denounced by enemies as the great unmaker, worshiped by scholars as the twinkling of a divine eye, Io occupies all planes at once, the merest fraction of its being crossing into physical existence at any one moment."
    },
        {
            "nickname": "Timbersaw",
            "imagename": "timbersaw",
            "name": "Rizzrack",
            "lore": "Rizzrack could still hear the screams in his mind. He worked, frantically turning wrenches, twisting screws, building and carving and forging. Sleep eluded him; he only built. Months had passed since he had shut himself in his uncle's workshop, and his deliverance was nearly complete. He rubbed his back as his eyes drifted shut, and saw a blanket of flowers floating on the placid waves of Augury Bay before exploding into a cloud of pollen that silenced lives as it seized the lungs. He woke with a choking start. For hours the rhythmic sound of a whetstone filled the shop as he sharpened a set of massive blades, his mind filled with images of strangling vines garroting neighbors, enwrapping homes. The flooding of Augury Bay had been nothing compared to the violent horrors the waters left to take root beyond the city walls. But the saw-suit would make him strong and safe he thought, allowing himself this sliver of hope before the full might of his fear crashed into his fading mind. Branches and blood."
    }
]

});
