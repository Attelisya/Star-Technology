// priority: 1000

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L424
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingDuration = (itemOutputs) => {
  return (
    itemOutputs.reduce((duration, item) => {
      const is = Item.of(item);
      const ms = global.getGtMaterial(is);
      if (!ms) return duration;
      const matDuration = ms.amount() * ms.material().getMass() * is.getCount();
      return duration + matDuration;
    }, 0) / GTValues.M
  );
};

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L389
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingVoltageMultiplier = (itemOutputs) => {
  const highestTemp = itemOutputs.reduce((temp, item) => {
    const ms = global.getGtMaterial(item);
    if (!ms) return temp;

    let material = ms.material();

    if (
      material.hasFlag(GTMaterialFlags.IS_MAGNETIC) &&
      material.hasProperty(PropertyKey.INGOT)
    ) {
      material = material.getProperty(PropertyKey.INGOT).getSmeltingInto();
    }

    if (!material.hasProperty(PropertyKey.BLAST)) return temp;

    return Math.max(
      temp,
      material.getProperty(PropertyKey.BLAST).getBlastTemperature()
    );
  }, 0);

  if (highestTemp == 0) return 1;
  if (highestTemp < 2000) return 4;
  return 16;
};

// breaks components down into their base materials
global.getComponentTotal = (components) => {
  const componentRecycleCount = global.componentRecycleCount;
  let totalCounts = {
    primCount: 0,
    cableCount: 0,
    secCount: 0,
    tertCount: 0
  }
  let componentCounts = {
    primCount: 0,
    cableCount: 0,
    secCount: 0,
    tertCount: 0
  }

  // adds all sent component ingredients together
  components.forEach(component => {
    console.log(`component: ${component}`);
    switch (component) { //finds location of given component
      case "sensor": {
        componentCounts.primCount = componentRecycleCount.sensor.primCount;
        componentCounts.cableCount = componentRecycleCount.sensor.cableCount;
        componentCounts.secCount = componentRecycleCount.sensor.secCount;
        componentCounts.tertCount = componentRecycleCount.sensor.tertCount;
      }
      case "emitter": {
        componentCounts.primCount = componentRecycleCount.emitter.primCount;
        componentCounts.cableCount = componentRecycleCount.emitter.cableCount;
        componentCounts.secCount = componentRecycleCount.emitter.secCount;
        componentCounts.tertCount = componentRecycleCount.emitter.tertCount;
      }
      case "field_generator": {
        componentCounts.primCount = componentRecycleCount.field_generator.primCount;
        componentCounts.cableCount = componentRecycleCount.field_generator.cableCount;
        componentCounts.secCount = componentRecycleCount.field_generator.secCount;
        componentCounts.tertCount = componentRecycleCount.field_generator.tertCount;
      }
      case "robot_arm": {
        componentCounts.primCount = componentRecycleCount.robot_arm.primCount;
        componentCounts.cableCount = componentRecycleCount.robot_arm.cableCount;
        componentCounts.secCount = componentRecycleCount.robot_arm.secCount;
        componentCounts.tertCount = componentRecycleCount.robot_arm.tertCount;
      }
      case "electric_piston": {
        componentCounts.primCount = componentRecycleCount.electric_piston.primCount;
        componentCounts.cableCount = componentRecycleCount.electric_piston.cableCount;
        componentCounts.secCount = componentRecycleCount.electric_piston.secCount;
        componentCounts.tertCount = componentRecycleCount.electric_piston.tertCount;
      }
      case "conveyor_module": {
        componentCounts.primCount = componentRecycleCount.conveyor_module.primCount;
        componentCounts.cableCount = componentRecycleCount.conveyor_module.cableCount;
        componentCounts.secCount = componentRecycleCount.conveyor_module.secCount;
        componentCounts.tertCount = componentRecycleCount.conveyor_module.tertCount;
      }
      case "fluid_regulator": {
        componentCounts.primCount = componentRecycleCount.fluid_regulator.primCount;
        componentCounts.cableCount = componentRecycleCount.fluid_regulator.cableCount;
        componentCounts.secCount = componentRecycleCount.fluid_regulator.secCount;
        componentCounts.tertCount = componentRecycleCount.fluid_regulator.tertCount;
      }
      case "electric_pump": {
        componentCounts.primCount = componentRecycleCount.electric_pump.primCount;
        componentCounts.cableCount = componentRecycleCount.electric_pump.cableCount;
        componentCounts.secCount = componentRecycleCount.electric_pump.secCount;
        componentCounts.tertCount = componentRecycleCount.electric_pump.tertCount;
      }
      case "electric_motor": {
        componentCounts.primCount = componentRecycleCount.electric_motor.primCount;
        componentCounts.cableCount = componentRecycleCount.electric_motor.cableCount;
        componentCounts.secCount = componentRecycleCount.electric_motor.secCount;
        componentCounts.tertCount = componentRecycleCount.electric_motor.tertCount;
      }
    }
    console.log(`output2 componentCounts: ${componentCounts}`)
    totalCounts.primCount += componentCounts.primCount;
    totalCounts.cableCount += componentCounts.cableCount;
    totalCounts.secCount += componentCounts.secCount;
    totalCounts.tertCount += componentCounts.tertCount;
  });
  
  return totalCounts;
}

// checks if input value is too big for one output slot, then breaks down into block form (built for component recycling) 
global.checkComponentCount = (values) => {
  const blocksBools = {
    primBlock: false,
    cableBlock: false,
    secBlock: false,
    tertBlock: false
  }
  if (values.primCount > 64) {blocksBools.primBlock = true; values.primCount = Math.floor(values.primCount/9);};
  if (values.cableCount > 64) {blocksBools.cableBlock = true; values.cableCount = Math.floor(values.cableCount/9);}; 
  if (values.secCount > 64) {blocksBools.secBlock = true; values.secCount = Math.floor(values.secCount/9);};
  if (values.tertCount > 64) {blocksBools.tertBlock = true; values.tertCount = Math.floor(values.tertCount/9);};

  return [blocksBools, values];
}