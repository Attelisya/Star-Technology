
GTCEuStartupEvents.registry('gtceu:element', event => {

    const setCounts = (name, protons, neutrons) => {
        let elem = GTElements.get(name);
        elem.protons(protons);
        elem.neutrons(neutrons);
    }

    [
        { name: 'Tritanium', protons: 125, neutrons: 198 },
        { name: 'Trinium', protons: 150, neutrons: 251 },
        { name: 'Naquadah', protons: 154, neutrons: 252 },
        { name: 'Naquadria', protons: 155, neutrons: 255 },
        { name: 'NaquadahEnriched', protons: 156, neutrons: 256 }
    ].forEach(e => setCounts(e.name, e.protons, e.neutrons));

});