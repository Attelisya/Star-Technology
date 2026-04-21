StartupEvents.registry('item', event => {

    //KOMARU Filament
    event.create('komaru_filament_t1')
        .texture('kubejs:item/progression/riftic/komaru/filament_t1');

    // KOMARU Parts
    event.create('komaru_gravitational_stabilizers')
        .texture('kubejs:item/progression/riftic/komaru/gravitational_stabilizers');

    event.create('komaru_rift_caller')
        .texture('kubejs:item/progression/riftic/komaru/rift_caller');

    event.create('komaru_plating')
        .texture('kubejs:item/progression/riftic/komaru/plating');

    //Riftions
    for(let j = 0; j<= 2; j++) {

        let charge = ['up','down','neutral'];

        let chargeSymbol = ['⁺','⁻','⁰'];

        for(let i = 0; i<= 5; i++) {

            let riftion = ['undina','sylvestris','gnomus','vulcanus','illustris','tenebrosus'];
            //water, air, earth, fire, light, dark
            let symbol = ['ᵁ','ˢ','ᴳ','ⱽ','ᴵ','ᵀ']

            event.create(`${charge[j]}_${riftion[i]}_riftion`)
                .textureJson({ 
                    layer0: `kubejs:item/progression/riftic/riftion/${riftion[i]}`,
                    layer1: `kubejs:item/progression/riftic/riftion/${riftion[i]}_id`,
                    layer2: `kubejs:item/progression/riftic/riftion/${charge[j]}`
                })
            .tooltip('ψ' + symbol[i] + ' : q' + chargeSymbol[j] + ' : s=1/3'); //spin is fixed and known for NM, HM however.... Far:tm:

        };
    };

    event.create(`wild_riftion`)
        .textureJson({ 
            layer0: 'kubejs:item/progression/riftic/riftion/wild',
            layer1: `kubejs:item/progression/riftic/riftion/wild_id`
        })
        .tooltip('ψ? : q? : s=1/3'); //spin is fixed and known for NM, HM however.... Far:tm:

});