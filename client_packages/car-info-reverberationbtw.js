let showInfoCars = false;
mp.events.add("switchmode_infocars", () => {
    showInfoCars = !showInfoCars;
});

mp.events.add('render', () => { 
    if(showInfoCars) { 
    mp.vehicles.forEachInStreamRange((veh) => {
            var playerPos = mp.players.local.position;
            var vehDist = mp.game.gameplay.getDistanceBetweenCoords(playerPos.x, playerPos.y, playerPos.z, veh.position.x, veh.position.y, veh.position.z, true);
            if (vehDist > 15) return; // If the distance is less than 15, then there will be no render
            mp.game.graphics.drawText(`ID: ${veh.id} MODEL: ${mp.game.vehicle.getDisplayNameFromVehicleModel(veh.getModel())}\nX: ${veh.position.x.toFixed(3)} Y: ${veh.position.y.toFixed(3)} Z: ${veh.position.z.toFixed(3)}`,
                [veh.position.x, veh.position.y, veh.position.z], {
                    font: 4,
                    color: [255, 255, 255, 185],
                    scale: [0.5, 0.5]
                });
        })
    }
});
