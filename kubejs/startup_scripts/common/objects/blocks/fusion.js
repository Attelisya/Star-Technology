
StartupEvents.registry('block', event => {

    ['basic','advanced','complex','reinforced','borealic','dragonic','prismalic'].forEach((reflector,i) => {
        event.create(`${reflector}_reflector_casing`, 'gtceu:fusion_reflector')
            .tier(i+1)    
            .hardness(5)
            .resistance(10)
            .soundType('metal')
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .requiresTool(false)
            .texture(`kubejs:item/progression/neutron_reflector/${reflector}`);
    });   

});

