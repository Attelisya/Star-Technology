ServerEvents.recipes(event => {
    const id = global.id;
    const assembler = event.recipes.gtceu.assembler;
    const polarizer = event.recipes.gtceu.polarizer;

    const log = (text) => {
        console.log("-------------------------------");
        console.log(text);
        console.log("-------------------------------");
    };

    const getSmdDetails = (smdType) => {
        const count = (smdType == 'living_smd') ? 16 : (smdType == 'advanced_smd') ? 4 : 1;
        const recipeTier = (smdType == 'living_smd') ? 'ZPM' : (smdType == 'advanced_smd') ? 'IV' : 'HV';
        const prefix = (smdType == 'living_smd') ? 'kubejs:' : 'gtceu:';

        const smdDetails = {
            count: count,
            consTier: recipeTier,
            prefix: prefix
        }

        return smdDetails;
    }

    const getEpoxyMultiplier = (tier) => {
        if (tier == 'uhv' || tier == 'uv') {
            return 4;
        }
        else if (tier == 'zpm' || tier == 'luv') {
            return 2;
        }
        else {
            return 1;
        }
    }

    //Photovoltaic Cells and Panels
    let recipe;
    let recipeTier;
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier, index, tiers) => {
        recipeTier = (tier == 'luv') ? 'LuV' : tier.toUpperCase();
        if (tier == 'ev') {
            //Basic Cores
            ['smd', 'advanced_smd', 'living_smd'].forEach(smdType => {
                const {
                    count,
                    consTier,
                    prefix
                } = getSmdDetails(smdType);

                assembler(id(`ev_energy_core_from_${smdType}`))
                    .itemInputs('3x gtceu:iron_foil', `2x ${prefix + smdType}_diode`, `2x ${prefix + smdType}_capacitor`)
                    .inputFluids('gtceu:glass 288')
                    .itemOutputs(`${count}x kubejs:ev_energy_core`)
                    .duration(400)
                    .EUt(GTValues.VHA[GTValues[consTier]]);

            });
        }
        else {
            //Other Cores
            polarizer(id(`${tier}_energy_core`))
                .itemInputs(`kubejs:${tiers[index - 1]}_energy_core`)
                .itemOutputs(`kubejs:${tier}_energy_core`)
                .duration(600)
                .EUt(GTValues.VA[GTValues[recipeTier]]);
        }

        const {
            tierMaterial,
            cable,
            solder,
            superconductor
        } = global.componentMaterials[tier].materials;
        
        //Photovoltaic Cells
        recipe = assembler(id(`${tier}_photovoltaic_cell`));

        if (tier != 'ev') {
            recipe.itemInputs(`kubejs:${tiers[index - 1]}_photovoltaic_cell`);
        }

        recipe
            .itemInputs(
                `gtceu:double_${tierMaterial}_plate`, `kubejs:${tier}_energy_core`, 
                `16x gtceu:fine_${superconductor}_wire`, `2x #gtceu:circuits/${tier}` 
            )
            .inputFluids(`gtceu:${solder} 576`)
            .itemOutputs(`kubejs:${tier}_photovoltaic_cell`)
            .duration(400)
            .EUt(GTValues.VHA[GTValues[recipeTier]]);

        //Solar Cells
        log(`2x kubejs:${tier}_photovoltaic_cell, gtceu:${tierMaterial}_frame, 2x gtceu:${cable}_double_cable, #gtceu:circuits/${tier}`);
        assembler(id(`${tier}_solar_cell`))
            .itemInputs(
                `2x kubejs:${tier}_photovoltaic_cell`, `gtceu:${tierMaterial}_frame`, 
                `2x gtceu:${cable}_double_cable`, `#gtceu:circuits/${tier}`
            )
            .inputFluids(`gtceu:epoxy ${288 * getEpoxyMultiplier(tier)}`)
            .itemOutputs(Item.of(`2x start_core:${tier}_solar_cell`))
            .duration(600)
            .EUt(GTValues.VHA[GTValues[recipeTier]]);
            
    });

});