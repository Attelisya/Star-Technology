global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const id = global.id;

        event.shaped(`gtceu:greenhouse`, [
            `FAF`,
            `MHM`,
            `PCP`
        ], {
            F: `gtceu:fertilizer`,
            A: `gtceu:iron_axe`,
            M: `gtceu:lv_electric_motor`,
            H: `gtceu:lv_machine_hull`,
            P: `gtceu:steel_plate`,
            C: `#gtceu:circuits/mv`
        }).id(`gtceu:greenhouse`);
    })
})