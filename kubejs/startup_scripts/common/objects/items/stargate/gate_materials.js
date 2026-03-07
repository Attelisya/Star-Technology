StartupEvents.registry('item', event => {
    
    // Quantum Core (csg)
    // ---
    // Inferno Fragment (asg)
    // Infernal Core (asg)
    // -
    // Abyss Fragment (asg)
    // Abyssal Core (asg)
    // -
    // Draconic Core (asg)
    // ---
    // Prismalic Fragment (dsg)
    // Prismafae Illuminatus Core (dsg)
    // -
    // Riftic Fragment (dsg)
    // Spatium Ruptura Core (dsg)
    // -
    // Primordial Fragment (dsg)
    // Primus Tempus Core (dsg)
    // -
    // Ascension Core

//OLD
    // === Cores and Fragments
    event.create('empty_coordinate_core')
        .texture('kubejs:item/stargate/gate_items/empty_coordinate_core');

    event.create('draconic_coordinate_core')
        .tooltip(Text.translate('item.kubejs.draconic_coordinate_core.tooltip'))
        .texture('kubejs:item/stargate/gate_items/draconic_core');

    event.create('inferno_fragment')
        .texture('kubejs:item/stargate/gate_items/inferno_fragment');

    event.create('abyss_fragment')
        .texture('kubejs:item/stargate/gate_items/abyss_fragment');

    event.create('hell_core')
        .texture('kubejs:item/stargate/gate_items/hell_core');

    event.create('void_core')
        .texture('kubejs:item/stargate/gate_items/void_core');

});