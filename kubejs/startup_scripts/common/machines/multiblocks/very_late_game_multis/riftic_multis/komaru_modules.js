GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(`basic_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("assembler")
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AFA', 'ADA', 'ADA', 'AAA')
            .aisle('ABA', 'CEC', 'CEC', 'CCC')
            .aisle('AAA', 'A@A', 'AAA', 'AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities($StarTPartAbility.MODULAR_AUTO_SCALING_NODE_CONDUIT))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing',
            'gtceu:block/multiblock/hpca');

    event.create(`advanced_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("assembler")
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'AAA', 'AAA', 'AAA', 'AAA')
            .aisle('CCC', 'DED', 'DED', 'DED', 'AFA')
            .aisle('CCC', 'CBC', 'CBC', 'CBC', 'ABA')
            .aisle('CCC', 'A@A', 'AAA', 'AAA', 'AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities($StarTPartAbility.MODULAR_AUTO_SCALING_NODE_CONDUIT))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing',
            'gtceu:block/multiblock/hpca');

    $KomaruFrameMachine.addModule("gtceu:basic_test_module", "basic");
    $KomaruFrameMachine.addModule("gtceu:advanced_test_module", "advanced");
});