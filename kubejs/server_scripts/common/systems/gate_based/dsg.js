ServerEvents.recipes(event => {
    const id = global.id;

    const cpa = 'component_part_assembly';
    const assline = 'assembly_line';
    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const cut = event.recipes.gtceu.cutter;
    const assembler = event.recipes.gtceu.assembler;
    const circAss = event.recipes.gtceu.circuit_assembler;
    const rotor = event.recipes.gtceu.large_rotor_machine;
    const heat = event.recipes.gtceu.heat_chamber;
    const pressureHeat = event.recipes.gtceu.pressure_heat_chamber;
    const stargateComponent = event.recipes.gtceu.stargate_component_assembly;

    let u_rune = 'kubejs:transcension_engraved_undina_sigil';
    let s_rune = 'kubejs:transcension_engraved_sylvestris_sigil';
    let g_rune = 'kubejs:transcension_engraved_gnomus_sigil';
    let v_rune = 'kubejs:transcension_engraved_vulcanus_sigil';
    let i_rune = 'kubejs:transcension_engraved_illustris_sigil';
    let t_rune = 'kubejs:transcension_engraved_tenebrosus_sigil';

    // Classic Gate Components
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)

    // researchBuilder(assline, 'asg_field_stabilizer', 
    //     ['gtceu:stellarized_weapon_grade_naquadah_frame', '8x gtceu:uhv_field_generator', 'kubejs:asg_energy_modulator',
    //         '2x gtceu:neutronium_ultradense_plate','32x gtceu:fine_stellarium_wire','32x gtceu:fine_melodium_wire'
    //         ,'32x gtceu:fine_enderium_wire', '12x gtceu:zalloy_screw'], 
    //     ['gtceu:naquadated_soldering_alloy 1296', 'gtceu:utopian_akreyrium 2500'], 
    //     ['kubejs:asg_field_stabilizer'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_field_stabilizer');

    // researchBuilder(cpa, 'asg_stellar_dialer', 
    //     ['gtceu:neutronium_ultradense_plate', 'gtceu:monitor', 'kubejs:asg_computational_matrix', 
    //         '2x #gtceu:circuits/uev', '4x gtceu:stellarium_bolt'], 
    //     ['gtceu:naquadated_soldering_alloy 1296'], 
    //     ['kubejs:asg_stellar_dialer'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_stellar_dialer');

    // researchBuilder(cpa, 'asg_computational_matrix', 
    //     ['3x kubejs:runic_printed_circuit_board','32x gtceu:fine_stellarium_wire','24x kubejs:asg_dpu',
    //         '8x gtceu:highly_advanced_soc','18x gtceu:ancient_runicalium_bolt','64x kubejs:uepic_chip'], 
    //     ['gtceu:naquadated_soldering_alloy 2592', 'gtceu:sterilized_growth_medium 5000'], 
    //     ['kubejs:asg_computational_matrix'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_computational_matrix');

    // researchBuilder(assline, 'asg_dimensional_supercomputer', 
    //     ['3x gtceu:void_frame', '10x kubejs:asg_computational_matrix', 'kubejs:draconic_core', '4x kubejs:asg_energy_modulator', 
    //         '6x gtceu:stellarium_foil_ream', '4x gtceu:ancient_runicalium_foil_ream','64x #gtceu:circuits/uev','32x #gtceu:circuits/uev',
    //         '8x gtceu:uhv_fluid_regulator', '4x gtceu:zapolgium_large_fluid_pipe', '56x gtceu:perfluoroelastomer_rubber_ring',
    //         '64x gtceu:polyether_ether_ketone_tiny_fluid_pipe'], 
    //     ['gtceu:polyether_ether_ketone 1728', 'gtceu:naquadated_soldering_alloy 1296', 'gtceu:utopian_akreyrium 1250'], 
    //     ['kubejs:asg_dimensional_supercomputer'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:runic_processor_mainframe');

    // researchBuilder(cpa, 'asg_dhd', 
    //     ['sgjourney:classic_dhd', 'kubejs:asg_stellar_dialer', '2x kubejs:runic_reinforced_plating', 
    //         '3x kubejs:runic_stabilization_casing', '4x kubejs:runic_pathway_casing', '3x kubejs:runic_transportation_casing'], 
    //     ['gtceu:naquadated_soldering_alloy 3888', 'gtceu:runic_convergence_infusion 2500'], 
    //     ['sgjourney:milky_way_dhd'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'sgjourney:classic_dhd');

    // researchBuilder(assline, 'asg_energy_modulator', 
    //     ['gtceu:void_frame', '2x gtceu:uhv_emitter', '6x gtceu:ancient_runicalium_foil', '6x gtceu:stellarium_foil',
    //         '2x gtceu:energy_cluster', '8x kubejs:reinforced_neutron_reflector', '4x gtceu:uv_voltage_coil', '12x gtceu:zalloy_foil'], 
    //     ['gtceu:naquadated_soldering_alloy 1728', 'gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 7500'], 
    //     ['kubejs:asg_energy_modulator'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_energy_modulator');

    // researchBuilder(assline, 'asg_chevron', 
    //     ['gtceu:ancient_runicalium_frame', 'gtceu:exquisite_akreyriadic_runixium_gem', '2x kubejs:asg_field_stabilizer','2x kubejs:asg_computational_matrix',
    //         '8x gtceu:uhv_sensor', '48x kubejs:naquadic_netherite_fibers', '2x gtceu:uhv_electric_motor', '2x gtceu:long_ancient_runicalium_rod'], 
    //     ['gtceu:naquadated_soldering_alloy 3888', 'gtceu:utopian_akreyrium 3750'], 
    //     ['kubejs:asg_chevron'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_chevron');

    // researchBuilder(assline, 'asg_reinforced_plating', 
    //     ['gtceu:neutronium_ultradense_plate', 'gtceu:titan_steel_ultradense_plate', 'gtceu:zalloy_ultradense_plate', 'gtceu:naquadria_ultradense_plate', 
    //         '2x kubejs:runic_reinforced_plating', '2x gtceu:uhv_electric_piston', '2x #gtceu:circuits/uev', '18x gtceu:cerium_tritelluride_single_cable'], 
    //     ['gtceu:naquadated_soldering_alloy 1728', 'gtceu:runic_convergence_infusion 2250', 'gtceu:utopian_akreyrium 1750'], 
    //     ['kubejs:asg_reinforced_plating'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_reinforced_plating');

    // researchBuilder(assline, 'asg_stellar_access_point', 
    //     ['gtceu:stellarium_frame','2x kubejs:asg_computational_matrix','2x gtceu:uhv_sensor', 'gtceu:ancient_runicalium_double_wire', 
    //         'gtceu:polyimide_foil_ream','gtceu:aerogel_foil_ream','gtceu:neutronium_silicon_carbide_foil_ream','2x gtceu:dense_neutronium_plate'], 
    //     ['gtceu:naquadated_soldering_alloy 1296', 'gtceu:polyether_ether_ketone 1152'], 
    //     ['kubejs:asg_stellar_access_point'], 
    //     6000, 144, 144 * 1200, GTValues.VHA[GTValues.UHV], 'kubejs:csg_stellar_access_point');

    // researchBuilder(cpa, 'abyss_fragment', 
    //     ['gtceu:neutronium_frame', '16x gtceu:gravi_star', '12x gtceu:polyether_ether_ketone_foil', 
    //         '6x gtceu:neutronium_tiny_fluid_pipe', '16x minecraft:echo_shard'], 
    //     ['gtceu:naquadated_soldering_alloy 1584', 'gtceu:utopian_akreyrium 1875'], 
    //     ['kubejs:abyss_fragment'], 
    //     6000, 192, 192 * 1200, GTValues.VHA[GTValues.UHV], 'minecraft:echo_shard');

    // researchBuilder(cpa, 'inferno_fragment', 
    //     ['gtceu:neutronium_frame', '16x gtceu:gravi_star', '12x gtceu:polyether_ether_ketone_foil', 
    //         '6x gtceu:neutronium_tiny_fluid_pipe', '16x minecraft:blaze_rod'], 
    //     ['gtceu:naquadated_soldering_alloy 1584', 'gtceu:utopian_akreyrium 1875'], 
    //     ['kubejs:inferno_fragment'], 
    //     6000, 192, 192 * 1200, GTValues.VHA[GTValues.UHV], 'minecraft:blaze_rod');

    // injectMix(id('voidic_core'))
    //     .itemInputs('kubejs:quantum_core','8x kubejs:abyss_fragment')
    //     .inputFluids('thermal:ender 50000')
    //     .itemOutputs('kubejs:voidic_core')
    //     .duration(3000)
    //     .EUt(GTValues.VA[GTValues.UHV]);

    // injectMix(id('helish_core'))
    //     .itemInputs('kubejs:quantum_core','8x kubejs:inferno_fragment')
    //     .inputFluids('gtceu:blaze 57600')
    //     .itemOutputs('kubejs:helish_core')
    //     .duration(3000)
    //     .EUt(GTValues.VA[GTValues.UHV]);

    // pressureHeat(id('draconic_core'))
    //     .itemInputs('kubejs:voidic_core','kubejs:helish_core')
    //     .inputFluids('minecraft:lava 50000','gtceu:echo_r 7200')
    //     .itemOutputs('kubejs:draconic_core')
    //     .duration(3000)
    //     .EUt(GTValues.VA[GTValues.UEV]);

    // vcr(id('asg_enscription_plate'))
    //     .itemInputs('2x kubejs:csg_enscription_plate', '16x gtceu:void_foil', '#gtceu:circuits/uev')
    //     .inputFluids('gtceu:ancient_runicalium 720', 'gtceu:utopian_akreyrium 2250')
    //     .itemOutputs('kubejs:asg_enscription_plate')
    //     .duration(4000)
    //     .EUt(GTValues.VHA[GTValues.UHV])
    //     .vacuumLevel(90);

    // cut(id('asg_enscription_chip'))
    //     .itemInputs('kubejs:asg_enscription_plate')
    //     .inputFluids('gtceu:runic_convergence_infusion 5000')
    //     .itemOutputs('2x kubejs:asg_enscription_chip')
    //     .duration(3000)
    //     .cleanroom(CleanroomType.STERILE_CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UHV]);

    rotor(id('dsg_stargate_rod_base'))
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:awakened_abyss_stargate_rod','kubejs:awakened_inferno_stargate_rod','#gtceu:circuits/uxv','2x gtceu:draco_abyssal_ring')
            .next()
            .itemInputs('gtceu:long_raging_rimulatia_rod','gtceu:long_borealic_steel_rod','gtceu:aurourium_wire_spool')
            .inputFluids('gtceu:pure_dragon_breath 3750')
            .next()
            .itemInputs('kubejs:awakened_abyss_stargate_rod','kubejs:awakened_inferno_stargate_rod','gtceu:draco_abyssal_wire_spool')
            .inputFluids('gtceu:pure_dragon_breath 3750')
            .next()
            .itemInputs('gtceu:long_raging_rimulatia_rod','gtceu:long_borealic_steel_rod','gtceu:stellarium_wire_spool')
            .inputFluids('gtceu:pure_dragon_breath 3750')
            .next()
            .itemInputs('kubejs:awakened_abyss_stargate_rod','kubejs:awakened_inferno_stargate_rod','gtceu:lepton_resonant_thallium_antimonide_wire_spool')
            .inputFluids('gtceu:pure_dragon_breath 3750')
        )
        .itemOutputs('kubejs:dsg_stargate_rod_base')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('primordicly_infused_stargate_rod'))
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:dsg_stargate_rod_base','kubejs:primordial_fragment','2x gtceu:raging_rimulatia_plate')
            .next()
            .itemInputs('gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:abyssal_alloy_foil_ream','gtceu:nyanium_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:draconyallium_foil_ream','gtceu:hvga_steel_foil_ream','gtceu:rhenium_super_composite_alloy_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:rhenium_super_composite_alloy_foil_ream','gtceu:hvga_steel_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:draconyallium_foil_ream','gtceu:nyanium_foil_ream','gtceu:abyssal_alloy_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:primordicly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('kaleidoscopicly_infused_stargate_rod'))
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:dsg_stargate_rod_base','kubejs:riftic_fragment','2x gtceu:raging_rimulatia_plate')
            .next()
            .itemInputs('gtceu:nyanium_foil_ream','gtceu:draconyallium_foil_ream','gtceu:abyssal_alloy_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:rhenium_super_composite_alloy_foil_ream','gtceu:hvga_steel_foil_ream','gtceu:nyanium_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:rhenium_super_composite_alloy_foil_ream','gtceu:hvga_steel_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:abyssal_alloy_foil_ream','gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:rhenium_super_composite_alloy_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:kaleidoscopicly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    rotor(id('prismaticly_infused_stargate_rod'))
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:dsg_stargate_rod_base','kubejs:prismalic_fragment','2x gtceu:raging_rimulatia_plate')
            .next()
            .itemInputs('gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:draconyallium_foil_ream','gtceu:nyanium_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:rhenium_super_composite_alloy_foil_ream','gtceu:hvga_steel_foil_ream','gtceu:abyssal_alloy_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:primordially_stellarized_weapon_grade_naquadah_foil_ream','gtceu:rhenium_super_composite_alloy_foil_ream','gtceu:draconyallium_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
            .next()
            .itemInputs('gtceu:abyssal_alloy_foil_ream','gtceu:hvga_steel_foil_ream','gtceu:nyanium_foil_ream')
            .inputFluids('gtceu:netherite_triselex_oxide 12240')
        )
        .itemOutputs('kubejs:prismaticly_infused_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    pressureHeat(id('faetic_stargate_rod'))
        .itemInputs('kubejs:prismaticly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:faetic_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    pressureHeat(id('riftic_stargate_rod'))
        .itemInputs('kubejs:kaleidoscopicly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:riftic_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    pressureHeat(id('temporic_stargate_rod'))
        .itemInputs('kubejs:primordicly_infused_stargate_rod')
        .inputFluids('gtceu:faematter 25000')
        .itemOutputs('kubejs:temporic_stargate_rod')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_ring')
        .layeredRecipe((layers) => layers
            .itemInputs('gtceu:raging_rimulatia_frame','24x kubejs:riftic_stargate_rod','24x kubejs:temporic_stargate_rod','24x kubejs:faetic_stargate_rod')
            .next()
            .itemInputs('8x ' + u_rune,'6x ' + t_rune,'4x ' + g_rune,'2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('8x ' + v_rune,'6x ' + u_rune,'4x ' + t_rune,'2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('8x ' + i_rune,'6x ' + v_rune,'4x ' + u_rune,'2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('8x ' + s_rune,'6x ' + i_rune,'4x ' + v_rune,'2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('8x ' + g_rune,'6x ' + s_rune,'4x ' + i_rune,'2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('8x ' + t_rune,'6x ' + g_rune,'4x ' + s_rune,'2x kubejs:dsg_reinforced_plating')
        )
        .inputFluids('gtceu:draconic_stabilization_mixture 100000')
        .itemOutputs('kubejs:draconic_stargate_ring_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_chevron')
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:draconic_stargate_ring_block','kubejs:dsg_chevron','8x kubejs:dsg_field_stabilizer','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + t_rune,'4x ' + i_rune,'4x kubejs:temporic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + s_rune,'4x ' + u_rune,'4x kubejs:faetic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + i_rune,'4x ' + v_rune,'4x kubejs:riftic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + u_rune,'4x ' + g_rune,'4x kubejs:temporic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + v_rune,'4x ' + t_rune,'4x kubejs:faetic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('6x ' + g_rune,'4x ' + s_rune,'4x kubejs:riftic_stargate_rod','2x kubejs:dsg_reinforced_plating')
        )
        .inputFluids('gtceu:draconic_stabilization_mixture 100000')
        .itemOutputs('kubejs:draconic_stargate_chevron_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    stargateComponent('dsg_base')
        .layeredRecipe((layers) => layers
            .itemInputs('kubejs:draconic_stargate_ring_block','kubejs:dsg_dimensional_supercomputer','8x kubejs:dsg_stellar_access_point','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + s_rune,'4x ' + i_rune,'8x kubejs:riftic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + g_rune,'4x ' + t_rune,'8x kubejs:temporic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + u_rune,'4x ' + s_rune,'8x kubejs:faetic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + v_rune,'4x ' + g_rune,'8x kubejs:riftic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + t_rune,'4x ' + u_rune,'8x kubejs:temporic_stargate_rod','2x kubejs:dsg_reinforced_plating')
            .next()
            .itemInputs('10x ' + i_rune,'4x ' + v_rune,'8x kubejs:faetic_stargate_rod','2x kubejs:dsg_reinforced_plating')
        )
        .inputFluids('gtceu:draconic_stabilization_mixture 100000')
        .itemOutputs('kubejs:draconic_stargate_base_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.create.mechanical_crafting(`sgjourney:pegasus_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}`, [
		' CRCRC ',
		'RR   RR',
		'C     C',
		'R     R',
		'R     R',
		'CR   RC',
		' RCBCR '
	], {
		R: 'kubejs:draconic_stargate_ring_block',
		C: 'kubejs:draconic_stargate_chevron_block',
		B: 'kubejs:draconic_stargate_base_block'
	}).id('start:shaped/dsg');

});