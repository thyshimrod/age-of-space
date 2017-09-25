﻿/**
 * @file Orchestrator class. Part of the "Age of Space" project.
 * @author github.com/azziliz
 * @author github.com/thyshimrod
 * {@link https://github.com/The-game-craftmen/age-of-space/ Project page}
 * @license MIT
 */

'use strict';
var aos = aos || {};
//debugger;

/**
 * The orchestrator is responsible for initial instanciations and time management.
 * It also maintains an instance reference.
 *
 * @class
 */
aos.Orchestrator = function () {
    this.galaxy = {};
};

aos.Orchestrator.prototype = {

    instanciate: function () {
        this.galaxy = new aos.Galaxy();
        this.galaxy.generate();
        this.setupEvents();
    },

    setupEvents: function () {
        document.getElementById('galaxyOverlayCanvas').addEventListener('mousemove', function (e) {
            e.preventDefault(); // usually, keeping the left mouse button down triggers a text selection or a drag & drop.
            const galaxyCoordX = e.offsetX * 1200 / document.getElementById('galaxyOverlayCanvas').offsetWidth - 600;
            const galaxyCoordY = e.offsetY * 1200 / document.getElementById('galaxyOverlayCanvas').offsetWidth - 450;
            //document.getElementById('debug').innerHTML = '' + galaxyCoordX + '/' + galaxyCoordY + '/' + '<br/>';
            document.getElementById('galaxyOverlayCanvas').style.cursor = 'default';
            document.getElementById('contextualBlock').style.display = 'none';

            const canvas = document.getElementById('galaxyOverlayCanvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 1200, 900);
            const constellationId = this.galaxy.getConstellationId(galaxyCoordX, galaxyCoordY);
            this.galaxy.constellations.forEach(function (c, i) {
                c.render(i === constellationId);
            });
            if (constellationId === 0) {
                //ctx.beginPath();
                //ctx.strokeStyle = '#600';
                //ctx.lineWidth = 2;
                //ctx.arc(600, 450, 100, 0, 2 * Math.PI);
                //ctx.stroke();
                document.getElementById('contextualBlock').style.display = 'block';
                document.getElementById('contextualTitle').innerHTML = 'Galactic Core' +
                    '<br><em>&nbsp;</em>';
                document.getElementById('contextualTxt').innerHTML = '';
                document.getElementById('contextualTxt').innerHTML +=
                    '<div>DANGER<br><br>Black hole<br><br>Don\'t come close !</div>';
            }
            else {
                document.getElementById('contextualBlock').style.display = 'block';
                document.getElementById('contextualTitle').innerHTML = '' + this.galaxy.constellations[constellationId].reference.name +
                    '<br><em>Constellation</em>';
                document.getElementById('contextualTxt').innerHTML = '';
                {
                    let radical = this.galaxy.constellations[constellationId].loreStarCount;
                    let power = 8;
                    while (radical > 10.0) {
                        radical /= 10.0;
                        power++;
                    }
                    document.getElementById('contextualTxt').innerHTML +=
                        '<dl><dt>' + 'Stars (total)' + '</dt><dd>' + radical.toFixed(1) + ' × 10<sup>' + power + '</sup></dd></dl>';
                }
                const constellationStars = this.galaxy.constellations[constellationId].stars;
                {
                    document.getElementById('contextualTxt').innerHTML +=
                        '<dl><dt>' + 'Notable stars' + '</dt><dd>' + constellationStars.length + '</dd></dl>';
                }
                {
                    document.getElementById('contextualTxt').innerHTML +=
                        '<dl><dt>' + 'Stars with at least' + '</dt><dd>' + '</dd></dl>';
                    document.getElementById('contextualTxt').innerHTML +=
                        '<dl><dt>' + 'one planet in the' + '</dt><dd>' + constellationStars.filter(function (star) {
                            return star.isNotable;
                        }).length + '</dd></dl>';
                    document.getElementById('contextualTxt').innerHTML +=
                        '<dl><dt>' + 'habitable zone' + '</dt><dd>' + '</dd></dl>';
                }
            }

            //document.getElementById('debug').innerHTML = '' + constellationId + '/' + '<br/>';

            this.galaxy.constellations[constellationId].stars.forEach(function (star) {
                const deltaX = star.x - galaxyCoordX;
                const deltaY = star.y - galaxyCoordY;
                const dist = deltaX * deltaX + deltaY * deltaY;
                const radius = star.isNotable ? 225.0 : 100.0; // 15² , 10²
                const label = star.isNotable ? 'Star' : 'Star';
                if (dist < radius) { // sqrt(dist) < 20.0
                    document.getElementById('galaxyOverlayCanvas').style.cursor = 'pointer';
                    document.getElementById('contextualBlock').style.display = 'block';
                    document.getElementById('contextualTitle').innerHTML = '' +
                        star.greekLetter.name.charAt(0).toUpperCase() + star.greekLetter.name.slice(1) + ' ' +
                        this.galaxy.constellations[constellationId].reference.gen +
                    '<br><em>' + label + '</em>';
                    document.getElementById('contextualTxt').innerHTML = '';
                    {
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Proper name' + '</dt><dd>' + star.properName.name + '</dd></dl>';
                    }
                    {
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Type' + '</dt><dd>' +
                            (star.spectralClass === 'M' ? 'Red dwarf' :
                            star.spectralClass === 'K' ? 'Orange dwarf' :
                            star.spectralClass === 'G' ? 'Yellow dwarf' :
                            star.spectralClass === 'F' ? 'Yellow-white dwarf' :
                            star.spectralClass === 'A' ? 'White main sequence' :
                            star.spectralClass === 'B' ? 'Blue subgiant' : 'Blue giant') + '</dd></dl>';
                    }
                    {
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Spectral class' + '</dt><dd>' + star.spectralClass + star.subSpectral + '</dd></dl>';
                    }
                    {
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Luminosity class' + '</dt><dd>' + star.luminosityClass + '</dd></dl>';
                    }
                    {
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Surface temperature' + '</dt><dd>' + 100 * Math.floor(star.temperature / 100) + ' K</dd></dl>';
                    }
                    {
                        let radical = star.mass;
                        let power = 29;
                        while (radical > 10.0) {
                            radical /= 10.0;
                            power++;
                        }
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Mass' + '</dt><dd>' + radical.toFixed(1) + ' × 10<sup>' + power + '</sup> kg</dd></dl>';
                    }
                    {
                        let radical = star.radius;
                        let power = 8;
                        while (radical > 10.0) {
                            radical /= 10.0;
                            power++;
                        }
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Radius' + '</dt><dd>' + radical.toFixed(1) + ' × 10<sup>' + power + '</sup> m</dd></dl>';
                    }
                    {
                        let radical = star.bolometricLuminosity;
                        let power = 22;
                        while (radical > 10.0) {
                            radical /= 10.0;
                            power++;
                        }
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Bolometric luminosity' + '</dt><dd>' + radical.toFixed(1) + ' × 10<sup>' + power + '</sup> W</dd></dl>';
                    }
                    {
                        const mbol = -2.5 * Math.log(star.bolometricLuminosity / 4000.0) * Math.LOG10E + 5;
                        document.getElementById('contextualTxt').innerHTML +=
                            '<dl><dt>' + 'Absolute magnitude' + '</dt><dd>' + mbol.toFixed(1) + '</dd></dl>';
                    }
                }
                //document.getElementById('debug').innerHTML += dist + '<br/>';
            }, this);
        }.bind(this), false);
    },

};

aos.game = new aos.Orchestrator();

window.onload = function () {
    aos.game.instanciate();
    window.requestAnimationFrame(function () {
        document.getElementById('starSystemBlock').style.display = 'none';
        document.getElementById('contextualBlock').style.display = 'block';
        document.getElementById('contextualTxt').innerHTML = '';

        const chart = new aos.PieChart();
        chart.render(document.getElementById('contextualTxt'));
    });
};