﻿/**
 * @file Planet class. Part of the "Age of Space" project.
 * @author github.com/azziliz
 * @author github.com/thyshimrod
 * {@link https://github.com/The-game-craftmen/age-of-space/ Project page}
 * @license MIT
 */

'use strict';
var aos = aos || {};


//debugger;

/**
 * The planet is part of solar system. Player will try to colonize it, according to constraint like breathable air,....
 * Player will certainly need to terraform it.
 *
 * @class
 */
aos.Planet = function () {
    /** @type {string} */
    this.id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    /** @type {number}
     * in Million km2
    */
    this.size = 0;
    /** @type {aos.Resource} */
    this.resources = [];
    this.storedResources = [];
    /** @type {number} */
    this.landSize = 0;

    /** @type {aos.building} */
    this.buildings = [];
    /** @type {Array.<string>} */
    this.tiles = [];
    /** @type {number}*/
    this.irradiance = 30;
    /** @type {aos.Polyhedron} */
    this.renderModel = null;
};

aos.Planet.prototype = {
    /**
     * addResource : allow to add a resource to a storage on a planet
     *
     * This method allows :
     *         -- to pass argument resource an aos.resource (type & quantity are optional in this case)
     *         -- to pass argument resource as a string, type & quantity are mandatory in this case
     *
     * Argument to if passed define which store is concerned by the resource :
     *         -- "planet" : to add resource to planet (water, oxygen, ...)
     *         -- "storage"  : to add resource to stored resource by the player (metal, food, ...)
     */
    addResource: function (resource, to, quantity) {
        let res = resource;
        let quant = quantity;
        if (typeof resource == "object") {
            res = resource.name;
            quant = resource.quantity;
        }
        let storage = null;
        if (to == "planet") {
            storage = this.resources;
        } else {
            storage = this.storedResources;
        }
        let resFound = null;

        for (let i = 0 ; i < storage.length && resFound == null ; i++) {
            if (storage[i].name == res) {
                resFound = storage[i];
            }
        }
        if (resFound == null) {
            resFound = new aos.Resource();
            resFound.constructResource(res);
            resFound.name = res;
            resFound.quantity = quant;
            storage.push(resFound);
        } else {
            resFound.quantity += quant;
        }
    },

    generate: function () {
        const rng = Math.random();
        if (rng < 0.25) {
            this.size = 8;
        } else if (rng < 0.5) {
            this.size = 12;
        } else if (rng < 0.75) {
            this.size = 20;
        } else {
            this.size = 60;
        }

        this.generateEarth();

        this.addResource('metal', 'storage', 20000);
        this.renderModel = new aos.Polyhedron();
        this.renderModel.initialize(this.size);
    },

    buildTiles: function () {
        const landTilesCount = Math.floor(this.size * this.landSize);
        const loop = new Array(this.size).join(' ').split(' ');
        loop.forEach(function (item, idx) {
            const t = new aos.Tile();
            t.isLand = idx < landTilesCount;
            t.color = idx < landTilesCount ?
                'hsl(' + (40 + Math.floor(10 * Math.random())) + ', ' + (30 + Math.floor(30 * Math.random())) + '%, ' + (25 + Math.floor(10 * Math.random())) + '%)' :
                'hsl(' + (230 + Math.floor(20 * Math.random())) + ', ' + (60 + Math.floor(30 * Math.random())) + '%, ' + (25 + Math.floor(10 * Math.random())) + '%)';
            this.tiles.push(t);
        }, this);
        this.tiles.sort(function (a, b) {
            return a.rng - b.rng;
        });
    },

    generateRandom: function () {
        this.landSize = Math.random();
        this.buildTiles();
        this.generateAir();
        this.generateGround();
        this.generateLiquid();
    },

    generateEarth: function () {
        this.landSize = 0.30; // (percent)
        this.buildTiles();
        aos.resources.forEach(function (resource, i) {
            this.addResource(resource.name, 'storage', 0);
            this.addResource(resource.name, 'planet', 0);
        }, this);

        this.addResource('oxygen', 'planet', 210000);
        this.addResource('inert gases', 'planet', 790000);
        this.addResource('oxocarbon', 'planet', 400);
        this.addResource('acid cloud', 'planet', 0);
        this.addResource('salt water', 'planet', 9750000);
        this.addResource('fresh water', 'planet', 250000);
        this.addResource('toxic waste', 'planet', 0);
        this.addResource('mineral', 'planet', 9700000);
        this.addResource('metal', 'planet', 200000);
        this.addResource('fissile material', 'planet', 10000);
        this.addResource('ground pollution', 'planet', 1000);

        this.addResource('bacteria', 'storage', 1000);
        this.addResource('flora', 'storage', 1000);
        this.addResource('fauna', 'storage', 1000);
        this.addResource('humans', 'storage', 1000);
        this.addResource('virus', 'storage', 1000);
        this.addResource('machines', 'storage', 1000);

    },

    generateAir: function () {
        var compositionPercent = 0;
        for (let i = 0 ; i < aos.resources.length ; i++) {
            if (aos.resources[i].category == "air") {
                let resource = new aos.Resource();
                resource.type = "air";
                resource.name = aos.resources[i].name;
                if (i == (aos.resources.length - 1)) {
                    resource.percent = 100 - compositionPercent;
                    resource.quantity = (100 - compositionPercent) * this.size * aos.volumeResources[resource.type];
                } else {
                    let itAirPrcent = Math.floor(Math.random() * (100 - compositionPercent))
                    resource.quantity = itAirPrcent * this.size * aos.volumeResources[resource.type];
                    resource.percent = itAirPrcent;
                    compositionPercent += itAirPrcent;
                }
                this.resources.push(resource);
            }
        }
    },

    generateLiquid: function () {
        var compositionPercent = 0;
        for (let i = 0 ; i < aos.resources.length ; i++) {
            if (aos.resources[i].category == "liquid") {
                let resource = new aos.Resource();
                resource.type = "liquid";
                resource.name = aos.resources[i].name;
                if (i == (aos.resources.length - 1)) {
                    resource.quantity = (100 - compositionPercent) * this.size * aos.volumeResources[resource.type];
                    resource.percent = (100 - compositionPercent) * this.size * aos.volumeResources[resource.type];
                } else {
                    let itPrcent = Math.floor(Math.random() * (100 - compositionPercent))
                    resource.quantity = itPrcent * this.size * aos.volumeResources[resource.type];
                    resource.percent = itPrcent;
                    compositionPercent += itPrcent;
                }
                this.resources.push(resource);
            }
        }
    },

    generateGround: function () {
        var compositionPercent = 0;
        for (let i = 0 ; i < aos.resources.length ; i++) {
            if (aos.resources[i].category == "ground") {
                let resource = new aos.Resource();
                resource.type = "ground";
                resource.name = aos.resources[i].name;
                if (i == (aos.resources.length - 1)) {
                    resource.percent = 100 - compositionPercent;
                    resource.quantity = resource.percent * this.size * aos.volumeResources[resource.type];
                    this.resources.push(resource);
                } else {
                    let itPrcent = Math.floor(Math.random() * (100 - compositionPercent))
                    resource.percent = itPrcent;
                    resource.quantity = itPrcent * this.size * aos.volumeResources[resource.type];
                    this.resources.push(resource);
                    compositionPercent += itPrcent;
                }
            }

        }
    },

    removeResource: function (name, quantity, planetResource, isChecking) {
        let qtyRemoved = 0;
        if (planetResource) {
            for (let itPlanetRes = 0 ; itPlanetRes < this.resources.length ; itPlanetRes++) {
                if (this.resources[itPlanetRes].name == name && this.resources[itPlanetRes].quantity >= quantity) {
                    if (!isChecking) this.resources[itPlanetRes].quantity -= quantity;
                    qtyRemoved = quantity;
                }
            }
        } else {
            for (let itRes = 0 ; itRes < this.storedResources.length ; itRes++) {
                if (this.storedResources[itRes].name == name && this.storedResources[itRes].quantity >= quantity) {
                    qtyRemoved = quantity;
                    if (!isChecking) this.storedResources[itRes].quantity -= qtyRemoved;
                }
            }
        }
        return qtyRemoved;
    },

    produce: function () {
        this.tiles.forEach(function (tile, i) {
            if (tile.buildingTemplate !== '') {
                tile.functional = true;
                const building = aos.buildingTemplates[tile.buildingTemplate];
                if (typeof building.produce.require !== 'undefined') {
                    building.produce.require.forEach(function (req, i) {
                        const removeRes = this.removeResource(req.name, req.quantity, req.planetResource, true);
                        if (removeRes !== req.quantity) {
                            tile.functional = false;
                        }
                    }, this);
                    if (tile.functional) {
                        building.produce.require.forEach(function (req, i) {
                            this.removeResource(req.name, req.quantity, req.planetResource, false);
                        }, this);
                    }
                }
                if (tile.functional) {
                    building.produce.product.forEach(function (prod, i) {
                        this.addResource(prod.name, prod.to, prod.quantity);
                    }, this);
                }
            }
        }, this);
    },

    runPopulation: function () {
        aos.resources.forEach(function (template, idx) {
            if (template.category === 'population' && typeof (aos.populations[template.name]) !== 'undefined') {
                const populationName = template.name;
                const populationRules = aos.populations[populationName];
                const storage = this.storedResources[idx];

                // check environment
                let environmentOk = true;
                populationRules.environment.forEach(function (rule, i) {
                    environmentOk = environmentOk && this.checkEnvironmentRule(rule);
                }, this);

                // decay
                storage.quantity -= 20;
                if (environmentOk) {
                    storage.quantity *= populationRules.naturalDecay;
                } else {
                    storage.quantity *= populationRules.hostileDecay;
                }
                if (storage.quantity < 0) {
                    storage.quantity = 0;
                }
                if (environmentOk && populationRules.spontaneousBirth) {
                    storage.quantity += 10;
                }

                // food / yield
                if (storage.quantity > 0) {
                    // food
                    const foodIntake = storage.quantity * populationRules.foodIntake;
                    let totalConsumedFood = 0;
                    populationRules.food.forEach(function (rule, i) {
                        let checkedValue = {};
                        if (typeof rule.resource !== 'undefined') {
                            checkedValue = this.resources[aos.resourcesIndex[rule.resource]];
                        } else if (typeof rule.population !== 'undefined') {
                            checkedValue = this.storedResources[aos.resourcesIndex[rule.resource]];
                        } else {
                            // TODO ?
                        }
                        const wishedQuantity = foodIntake * rule.ratio;
                        const availableQuantity = checkedValue.quantity * rule.limit;
                        const consumed = Math.min(wishedQuantity, availableQuantity);
                        checkedValue.quantity -= consumed;
                        totalConsumedFood += consumed;
                    }, this);
                    populationRules.yield.forEach(function (rule, i) {
                        let checkedValue = {};
                        if (typeof rule.resource !== 'undefined') {
                            checkedValue = this.resources[aos.resourcesIndex[rule.resource]];
                        } else if (typeof rule.population !== 'undefined') {
                            checkedValue = this.storedResources[aos.resourcesIndex[rule.resource]];
                        } else {
                            // TODO ?
                        }
                        const yieldQty = totalConsumedFood * rule.ratio;
                        checkedValue.quantity += yieldQty;
                    }, this);
                }

                // growth
                if (storage.quantity > 0) {
                    const growthFactor1 = this.evalFactors(populationRules.growthFactor1);
                    const growthFactor2 = this.evalFactors(populationRules.growthFactor2);
                    const growthFactor = growthFactor1 + growthFactor2;
                    storage.quantity *= growthFactor;
                    const habitatSize1 = this.evalFactors(populationRules.habitatSize1);
                    const habitatSize2 = this.evalFactors(populationRules.habitatSize2);
                    const habitatSize3 = this.evalFactors(populationRules.habitatSize3);
                    const habitatSize = habitatSize1 + habitatSize2 + habitatSize3;
                    if (storage.quantity > habitatSize) {
                        storage.quantity = habitatSize;
                    }
                }

            }
        }, this);

    },

    checkEnvironmentRule: function (rule) {
        let checkedValueCategory = '';
        let checkedValueQuantity = 0;
        if (typeof rule.resource !== 'undefined') {
            const checkedValue = this.resources[aos.resourcesIndex[rule.resource]];
            checkedValueCategory = checkedValue.type;
            checkedValueQuantity = checkedValue.quantity;
        } else if (typeof rule.group !== 'undefined') {
            if (rule.group === 'water') {
                checkedValueCategory = 'liquid';
                checkedValueQuantity = this.resources[aos.resourcesIndex['fresh water']].quantity + this.resources[aos.resourcesIndex['salt water']].quantity;
            }
        }
        if (typeof rule.minQuantity !== 'undefined' && checkedValueQuantity < rule.minQuantity) {
            return false;
        } else if (typeof rule.maxQuantity !== 'undefined' && checkedValueQuantity > rule.maxQuantity) {
            return false;
        } else if (typeof rule.minPercent !== 'undefined') {
            const sumFromCategory = this.resources.filter(function (r) { return r.type === checkedValueCategory; }).reduce(function (a, b) { return a.quantity + b.quantity; }, 0.1);
            if (checkedValueQuantity / sumFromCategory < rule.minPercent) {
                return false;
            }
        } else if (typeof rule.maxPercent !== 'undefined') {
            const sumFromCategory = this.resources.filter(function (r) { return r.type === checkedValueCategory; }).reduce(function (a, b) { return a.quantity + b.quantity; }, 0.1);
            if (checkedValueQuantity / sumFromCategory > rule.maxPercent) {
                return false;
            }
        }
        return true;
    },

    run: function () {
        this.produce();
        this.runPopulation();
    },

    updatePies: function () {
        aos.game.pies.forEach(function (pie, i) {
            pie.content.forEach(function (res, j) {
                const label = res.label;
                this.resources.forEach(function (resource, i) {
                    if (resource.name === label) {
                        res.value = resource.quantity;
                    }
                }, this);
            }, this);
            pie.update();
        }, this);
    },

    updateBars: function () {
        aos.game.planetResourceBars.forEach(function (bar, i) {
            bar.htmlElement.firstChild.childNodes[0].style = 'display: none';
            const label = bar.name;
            bar.quantity = 0;
            this.storedResources.forEach(function (resource, j) {
                if (resource.name === label) {
                    bar.quantity = resource.quantity;
                    if (resource.quantity > 0) {
                        bar.htmlElement.firstChild.childNodes[0].style = 'display: inline-block';
                    }
                }
            }, this);

            bar.update();
        }, this);
    },

    updateBuildingButtons: function () {
        const counterDictionary = {};
        this.tiles.forEach(function (tile, i) {
            if (tile.buildingTemplate !== '') {
                if (typeof counterDictionary[tile.buildingTemplate] === 'undefined') {
                    counterDictionary[tile.buildingTemplate] = 0;
                }
                counterDictionary[tile.buildingTemplate] += 1;
            }
        }, this);
        aos.game.buildingButtons.forEach(function (button, i) {
            button.update(counterDictionary);
        }, this);
        if (this.renderModel.selectedTile !== -1 && this.tiles[this.renderModel.selectedTile].buildingTemplate !== '') {
            document.getElementById('removeBuilding').style.display = 'inline-block';
        } else {
            document.getElementById('removeBuilding').style.display = 'none';
        }
    },

    showStats: function () {
        this.updatePies();
        this.updateBars();
        this.updateBuildingButtons();
    },

    setupEvents: function () {
        window.addEventListener('gameplayTick', function (e) {
            this.run();
        }.bind(this), false);
    },

    animateModel: function () {
        this.renderModel.animateAndRender(this.tiles);
    },

    onBuildingButtonClicked: function (templateName) {
        if (this.renderModel.selectedTile !== -1) {
            const tile = this.tiles[this.renderModel.selectedTile];
            const building = aos.buildingTemplates[templateName];
            if ((tile.isLand && building.buildOnLand) || (!tile.isLand && building.buildOnWater)) {
                let constructOk = true;
                building.constructionCost.forEach(function (cost, i) {
                    const qty = this.removeResource(cost.name, cost.quantity, false, true);
                    if (qty != cost.quantity) {
                        constructOk = false;
                    }
                }, this);
                if (constructOk) {
                    building.constructionCost.forEach(function (cost, i) {
                        this.removeResource(cost.name, cost.quantity, false, false);
                    }, this);
                    if (building.type === 'ship') {
                        aos.game.selectedStar.hasShip = true;
                        aos.game.selectedStar.ship = new aos.Ship();
                        aos.game.selectedStar.ship.init();
                        aos.game.selectedStar.ship.storedResources[7].quantity = 2000; // oxygen
                    } else {
                        tile.buildingTemplate = templateName;
                    }
                    this.renderModel.selectedTile = -1;
                    aos.game.emitEvent('requestUiSlowRefresh', {});
                }
            }
        }
    },

    onRemoveButtonClicked: function () {
        if (this.renderModel.selectedTile !== -1 && this.tiles[this.renderModel.selectedTile].buildingTemplate !== '') {
            this.tiles[this.renderModel.selectedTile].buildingTemplate = '';
            this.renderModel.selectedTile = -1;
            aos.game.emitEvent('requestUiSlowRefresh', {});
        }
    },

    getAttribute: function (rule) {
        if (rule.attribute === 'emptyOceanTilesCount') {
            return this.tiles.filter(function (t) { return !t.isLand && t.buildingTemplate === ''; }).length;
        } else if (rule.attribute === 'buildingCount') {
            return this.tiles.filter(function (t) { return t.buildingTemplate === rule.buildingName; }).length;
        } else {
            return this[rule.attribute];
        }
    },

    evalFactors: function (factorArray) {
        let ret = 1;
        factorArray.forEach(function (factor) {
            ret *= this.evalFactor(factor);
        }, this);
        return ret;
    },

    evalFactor: function (factor) {
        if (typeof (factor.constant) !== 'undefined') {
            return factor.constant;
        } else if (typeof (factor.attribute) !== 'undefined') {
            return this.getAttribute(factor);
        } else if (typeof factor.group !== 'undefined') {
            if (factor.group === 'water') {
                return this.resources[aos.resourcesIndex['fresh water']].quantity
                    + this.resources[aos.resourcesIndex['salt water']].quantity;
            } else {
                throw 'unexpected group factor in aos.populations';
            }
        } else {
            throw 'unexpected factor in aos.populations';
        }
    },
};
