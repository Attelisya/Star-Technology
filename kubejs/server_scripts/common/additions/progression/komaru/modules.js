ServerEvents.recipes (event => {
    const id = global.id;

    event.recipes.gtceu.rimula_extraction(id('riftion'))
        .chancedInput('kubejs:runic_wave_generator', 10, -1)
        .inputFluids('gtceu:kaleidoscope_agitation_serum 625000')
        .outputFluids('gtceu:riftion_extract 128000')
        .outputFluids('gtceu:highly_unstable_rift_source 27500')
        .duration(1800)
        .genericStartEU(25000000000) //consumes 25GEU to start the recipe
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.magmatic_drill(id('abydos'))
        .notConsumable('minecraft:sand')
        .inputFluids('gtceu:kaleidoscope_agitation_serum 250')
        .itemOutputsRanged('gtceu:zapolite_dust', 0, 8192)
        .itemOutputsRanged('gtceu:celestine_dust', 0, 3072)
        .itemOutputsRanged('gtceu:scheelite_dust', 0, 3072)
        .itemOutputsRanged('gtceu:crookesite_dust', 0, 6144)
        .itemOutputsRanged('gtceu:kitkaite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:naquadite_dust', 0, 8192)
        .itemOutputsRanged('gtceu:monazite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:lautarite_dust', 0, 3072)
        .itemOutputsRanged('gtceu:chromite_dust', 0, 5120)
        .itemOutputsRanged('gtceu:xenotime_dust', 0, 6144)
        .itemOutputsRanged('gtceu:strontianite_dust', 0, 6144)
        .itemOutputsRanged('gtceu:titanite_dust', 0, 8192)
        .outputFluidsRanged('gtceu:gritty_akreyrium', 0, 4096000)
        .duration(240)
        .genericStartEU(200000000) //consumes 200MEU to start the recipe
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.magmatic_drill(id('nether'))
        .notConsumable('minecraft:netherrack')
        .inputFluids('gtceu:kaleidoscope_agitation_serum 250')
        .itemOutputsRanged('gtceu:netherrack_dust', 0, 128)
        .itemOutputsRanged('gtceu:atomic_nether_sludge_dust', 0, 96)
        .itemOutputsRanged('gtceu:estaltadyne_dust', 0, 64)
        .itemOutputsRanged('gtceu:mythrillic_dust', 0, 64)
        .itemOutputsRanged('gtceu:adamantamite_dust', 0, 64)
        .itemOutputsRanged('gtceu:enriched_estalt_dust', 0, 32)
        .itemOutputsRanged('gtceu:ancient_debris_dust', 0, 128)
        .itemOutputsRanged('gtceu:debris_dust', 0, 512)
        .outputFluidsRanged('gtceu:infernal_concentrate', 0, 1024000)
        .duration(1332)
        .genericStartEU(2500000000) //consumes 2.5GEU to start the recipe
        .EUt(GTValues.VA[GTValues.UEV]);

    // event.create('magmatic_drill')
    //     .category('komaru')
    //     .setEUIO('in')
    //     .setMaxIOSize(2, 12, 2, 12)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    // event.create('voidic_refinement')
    //     .category('komaru')
    //     .setEUIO('in')
    //     .setMaxIOSize(2, 18, 2, 6)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    // event.create('riftic_infusion_assembly')
    //     .category('komaru')
    //     .setEUIO('in')
    //     .setHasResearchSlot(true)
    //     .setMaxIOSize(16, 1, 6, 0)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    // event.create('riftic_enhancement')
    //     .category('komaru')
    //     .setEUIO('in')
    //     .setMaxIOSize(2, 1, 2, 0)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    // event.create('rimula_extraction')
    //     .category('komaru')
    //     .setEUIO('in')
    //     .setMaxIOSize(2, 2, 0, 2)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

});