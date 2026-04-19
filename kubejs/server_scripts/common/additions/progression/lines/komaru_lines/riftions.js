ServerEvents.recipes (event => {

    const id = global.id;
    
    event.recipes.gtceu.reflector_fusion_reactor(id(`riftion_plasma_from_riftion_extract_and_neutronium`))
        .inputFluids(`gtceu:riftion_extract`, `gtceu:neutronium`)
        .outputFluids(`gtceu:riftion_plasma`)
        .duration(800)
        .fusionStartEU(1500000000)
        .addData("reflector_tier", 7)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.riftion_accelerator(id('riftion_scattering'))
        .inputFluids(`gtceu:riftion_plasma`)
        .itemOutputsRanged('kubejs:up_undina_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_undina_riftion', 0, 256)
        .itemOutputsRanged('kubejs:up_sylvestris_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_sylvestris_riftion', 0, 256)
        .itemOutputsRanged('kubejs:up_gnomus_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_gnomus_riftion', 0, 256)
        .itemOutputsRanged('kubejs:up_vulcanus_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_vulcanus_riftion', 0, 256)
        .itemOutputsRanged('kubejs:up_illustris_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_illustris_riftion', 0, 256)
        .itemOutputsRanged('kubejs:up_tenebrosus_riftion', 0, 256)
        .itemOutputsRanged('kubejs:down_tenebrosus_riftion', 0, 256)
        .CWUt(500)
        .totalCWU(10000000)
        .EUt(GTValues.VHA[GTValues.UXV]);

    let riftion = ['undina','sylvestris','gnomus','vulcanus','illustris','tenebrosus'];

    riftion.forEach(riftion => {

        event.recipes.gtceu.riftion_slammer(id(riftion + '_stabilization'))
            .itemInputs(`16x kubejs:up_${riftion}_riftion`,`16x kubejs:down_${riftion}_riftion`)
            .itemOutputsRanged(`kubejs:neutral_${riftion}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);

    });

    for(let i = 0; i <=5; i++) {

        event.recipes.gtceu.riftion_slammer(id(riftion[i] + '_flipping_down'))
            .itemInputs(`16x kubejs:up_${riftion[i]}_riftion`,`16x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:down_${riftion[i]}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);       

        event.recipes.gtceu.riftion_slammer(id(riftion[i] + '_flipping_up'))
            .itemInputs(`16x kubejs:down_${riftion[i]}_riftion`,`16x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:up_${riftion[i]}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);

    }

    event.recipes.gtceu.kaledoscopic_fractalizer(id('riftion_fractalization'))
        .inputFluids('gtceu:true_rimula_foundation')
        .itemInputs('16x kubejs:neutral_undina_riftion','16x kubejs:neutral_sylvestris_riftion','16x kubejs:neutral_gnomus_riftion',
            '16x kubejs:neutral_vulcanus_riftion','16x kubejs:neutral_illustris_riftion','16x kubejs:neutral_tenebrosus_riftion')
        .outputFluids('gtceu:primordial_extract','gtceu:condensed_rimula','gtceu:faetic_extract')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.cyclonic_sifter(id('highly_unstable_rift_source'))
        .inputFluids('gtceu:highly_unstable_rift_source')
        .outputFluids('gtceu:destabilized_rift_source')
        .duration(10)
        .EUt(1);
    
    event.recipes.gtceu.injection_mixer(id('accension_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source','gtceu:borealic_concentrate')
        .outputFluids('gtceu:accension_rift_slurry')
        .duration(10)
        .EUt(1);
    
    event.recipes.gtceu.injection_mixer(id('abyssal_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source','gtceu:abyssal_alloy')
        .outputFluids('gtceu:abyssal_rift_slurry')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.pressure_heat_chamber(id('rimula_t_foundation'))
        .inputFluids('gtceu:accension_rift_slurry')
        .outputFluids('gtceu:rimula_t_foundation')
        .duration(10)
        .EUt(1);


    event.recipes.gtceu.pressure_heat_chamber(id('rimula_s_foundation'))
        .inputFluids('gtceu:abyssal_rift_slurry')
        .outputFluids('gtceu:rimula_s_foundation')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.abyssal_akreyriadix_stabilizer(id('true_rimula_foundation'))
        .inputFluids('gtceu:rimula_s_foundation','gtceu:rimula_t_foundation')
        .outputFluids('gtceu:true_rimula_foundation')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.supreme_chemist(id('primordial_residue'))
            .layeredRecipe((layers) => layers
                .inputFluids('gtceu:primordial_extract')
        )
        .fluidOutputs('gtceu:primordial_residue')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.supreme_chemist(id('riftic_concentrate'))
            .layeredRecipe((layers) => layers
                .inputFluids('gtceu:condensed_rimula')
        )
        .fluidOutputs('gtceu:riftic_concentrate')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.supreme_chemist(id('prismatic_hypergurmalium'))
            .layeredRecipe((layers) => layers
                .inputFluids('gtceu:faetic_extract')
        )
        .fluidOutputs('gtceu:prismatic_hypergurmalium')
        .duration(10)
        .EUt(1);

});