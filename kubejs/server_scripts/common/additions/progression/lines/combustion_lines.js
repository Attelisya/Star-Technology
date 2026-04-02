ServerEvents.recipes(event => {
    const id = global.id;

    event.remove('gtceu:distillation_tower/distill_coal_tar')

    event.recipes.gtceu.distillation_tower(id('distill_coal_tar'))
        .inputFluids('gtceu:coal_tar 1000')
        .outputFluids('gtceu:naphthalene 400','gtceu:creosote 200', 'gtceu:kerosene 175', 'gtceu:hydrogen_sulfide 125', 'gtceu:phenol 100')
        .itemOutputs('1x gtceu:coke_dust')
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.large_chemical_reactor(id('hydrofined_kerosene'))
        .inputFluids('gtceu:hydrogen 300', 'gtceu:kerosene 500')
        .outputFluids('gtceu:hydrofined_kerosene 450', 'gtceu:hydrogen_sulfide 75')
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.distillation_tower(id('distill_hydrofined_kerosene'))
        .inputFluids('gtceu:hydrofined_kerosene 500')
        .outputFluids('gtceu:rp_1 350', 'gtceu:light_fuel 100', 'gtceu:refinery_gas 50')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

});