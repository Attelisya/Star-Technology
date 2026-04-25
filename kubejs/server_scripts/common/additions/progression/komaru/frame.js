ServerEvents.recipes (event => {
    const id = global.id;

    event.recipes.create.mechanical_crafting(`gtceu:komaru_frame_test`, [
		'   G G   ',
        '  GGFGG  ',
        ' Gg1m2bG ',
        '  s345a  ',
        'R  FPF  R',
        'PPFPPPFPP',
        '  fFPFf  ',
        'RfFPPPFfR',
        'PPPPPPPPP'
	], {
		G: 'kubejs:komaru_gravitational_stabilizers',
		F: 'gtceu:hvga_steel_frame',
		f: 'gtceu:draco_abyssal_frame',
		P: 'kubejs:komaru_plating',
		R: 'kubejs:komaru_rift_caller',
		g: 'gtceu:gravitational_compression_chamber',
		b: 'gtceu:byteforce_unified_incomparable_logistics_depot',
		m: 'gtceu:multithreaded_component_synthesis_forge',
		s: 'gtceu:superior_particulate_isolation_nexus',
		a: 'gtceu:ascendant_engraving_matrix',
        1: 'placeablemaxwell:mars',
        2: 'placeablemaxwell:vasilisa',
        3: 'placeablemaxwell:valenok',
        4: 'placeablemaxwell:maxwell',
        5: 'placeablemaxwell:poomba',
	}).id('start:shaped/komaru_frame');

    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = 'riftic_infusion_assembly';


    researchBuilder(riftAss, 'komaru_frame_test', 
        ['3x gtceu:hvga_steel_frame','gtceu:multithreaded_component_synthesis_forge','gtceu:byteforce_unified_incomparable_logistics_depot','gtceu:superior_particulate_isolation_nexus',
            'gtceu:ascendant_engraving_matrix','gtceu:gravitational_compression_chamber','8x kubejs:komaru_gravitational_stabilizers',
            '4x kubejs:komaru_rift_caller','21x kubejs:komaru_plating','placeablemaxwell:maxwell','placeablemaxwell:poomba','placeablemaxwell:mars',
            'placeablemaxwell:vasilisa','placeablemaxwell:valenok'], 
        ['gtceu:neutrindium_soldering_alloy 2304', 'gtceu:hvga_steel 2160', 'gtceu:draco_abyssal 1152'], 
        ['gtceu:komaru_frame_test'], 
        1200, 500, 500 * 1200, GTValues.VHA[GTValues.UIV], 'kubejs:komaru_plating');

});