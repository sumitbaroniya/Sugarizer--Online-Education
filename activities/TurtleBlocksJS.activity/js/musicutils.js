// Copyright (c) 2016-17 Walter Bender
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the The GNU Affero General Public
// License as published by the Free Software Foundation; either
// version 3 of the License, or (at your option) any later version.
//
// You should have received a copy of the GNU Affero General Public
// License along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA

// Scalable sinewave graphic
const SYNTHSVG = '<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" y="0px" xml:space="preserve" x="0px" width="SVGWIDTHpx" viewBox="0 0 SVGWIDTH 55" version="1.1" height="55px" enable-background="new 0 0 SVGWIDTH 55"><g transform="scale(XSCALE,1)"><path d="m 1.5,27.5 c 0,0 2.2,-17.5 6.875,-17.5 4.7,0.0 6.25,11.75 6.875,17.5 0.75,6.67 2.3,17.5 6.875,17.5 4.1,0.0 6.25,-13.6 6.875,-17.5 C 29.875,22.65 31.1,10 35.875,10 c 4.1,0.0 5.97,13.0 6.875,17.5 1.15,5.7 1.75,17.5 6.875,17.5 4.65,0.0 6.875,-17.5 6.875,-17.5" style="stroke:#90c100;fill-opacity:1;fill:none;stroke-width:STROKEWIDTHpx;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" /></g></svg>';

// Notes graphics
const WHOLENOTE = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg6468" viewBox="0 0 5.1680003 12.432" height="12.432" width="5.1680002"> <g transform="translate(-375.23523,-454.37592)"> <g transform="translate(7.9606,5.6125499)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 369.80263,457.99537 q 1.104,0 1.872,0.432 0.768,0.416 0.768,1.2 0,0.752 -0.752,1.168 -0.752,0.4 -1.808,0.4 -1.104,0 -1.856,-0.416 -0.752,-0.416 -0.752,-1.232 0,-0.576 0.464,-0.944 0.48,-0.368 1.008,-0.48 0.528,-0.128 1.056,-0.128 z m -0.864,1.136 q 0,0.672 0.304,1.184 0.304,0.512 0.784,0.512 0.736,0 0.736,-0.8 0,-0.64 -0.304,-1.136 -0.288,-0.512 -0.8,-0.512 -0.72,0 -0.72,0.752 z" /> </g> </g> </svg>';

const HALFNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.84 12.432" height="3.5085866mm" width="1.0837333mm"> <g transform="translate(-375.23523,-454.37592)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 375.23523,465.70392 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-9.472 0.352,0 0,10.352 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 0.736,0.48 q 0.848,0 1.712,-0.72 0.88,-0.72 0.88,-1.072 0,-0.224 -0.192,-0.224 -0.592,0 -1.632,0.688 -1.024,0.672 -1.024,1.12 0,0.208 0.256,0.208 z" /> </g> </g> </svg>';

const QUARTERNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.0859801 11.74224" height="3.313921mm" width="1.1531544mm"> <g transform="translate(-226.1339,-457.841)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 229.60268,457.841 0.5625,0 0.0547,0.0625 0,10.02344 q 0,1.27344 -1.53125,1.625 l -0.375,0.0313 -0.27343,0 q -1.65625,0 -1.875,-1.03906 l -0.0313,-0.24219 q 0,-1.01562 1.64843,-1.20312 l 0.25782,-0.0391 q 0.77343,0 1.47656,0.5 l 0.0313,0 0,-9.65625 0.0547,-0.0625 z" /> </g> </g> </svg>';

const EIGHTHNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.5234898 11.7422" height="3.3139098mm" width="2.123296mm"> <g transform="translate(-244.80575,-403.5553)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 248.14955,403.5553 0.67969,0 0.0625,0.0547 0,0.30468 q 0.21094,0.42188 1.5625,0.91407 1.875,0.54687 1.875,1.625 0,1.14062 -0.95313,1.89062 l -0.0313,0 -0.23437,-0.25 q 0.47656,-0.38281 0.47656,-1.03906 0,-0.54688 -1.78125,-1.10156 -0.71875,-0.32813 -0.91406,-0.53125 l 0,8.32812 q 0,1.19531 -1.75,1.54688 l -0.44531,0 q -1.89063,0 -1.89063,-1.3125 0,-1.02344 1.65625,-1.20313 l 0.17969,0 q 0.75,0 1.44531,0.5 l 0,-9.67187 0.0625,-0.0547 z" /> </g> </g> </svg>';

const SIXTEENTHNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 12.432" height="3.5085866mm" width="1.9778134mm"> <g transform="translate(-182.21292,-431.51877)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 182.21292,442.84677 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-9.472 0.336,0 q 0.064,0.56 0.4,1.088 0.352,0.512 0.8,0.944 0.448,0.416 0.88,0.864 0.448,0.432 0.752,1.024 0.304,0.576 0.304,1.232 0,0.544 -0.256,1.104 0.304,0.448 0.304,1.184 0,1.232 -0.608,2.24 l -0.384,0 q 0.56,-1.12 0.56,-2.032 0,-0.512 -0.256,-0.96 -0.24,-0.448 -0.752,-0.816 -0.496,-0.368 -0.832,-0.56 -0.32,-0.192 -0.896,-0.48 l 0,5.52 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.464,-5.904 q 0,-1.648 -2.624,-3.072 0,0.464 0.192,0.88 0.192,0.416 0.512,0.752 0.32,0.32 0.656,0.592 0.336,0.272 0.688,0.608 0.352,0.32 0.544,0.608 0.032,-0.256 0.032,-0.368 z" /> </g> </g> </svg>';

const THIRTYSECONDNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 14.496001" height="4.0910935mm" width="1.9778134mm"> <g transform="translate(-630.78433,-240.88335)">  <g  style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">  <path  d="m 630.78433,254.27535 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-11.536 0.352,0 q 0.048,0.56 0.384,1.072 0.336,0.496 0.768,0.912 0.432,0.4 0.864,0.848 0.432,0.448 0.72,1.104 0.304,0.656 0.304,1.456 0,0.48 -0.16,1.056 0.224,0.416 0.224,0.912 0,0.512 -0.24,0.976 0.304,0.448 0.304,1.168 0,1.232 -0.608,2.24 l -0.384,0 q 0.56,-1.12 0.56,-2.032 0,-0.512 -0.256,-0.96 -0.24,-0.448 -0.752,-0.816 -0.496,-0.368 -0.832,-0.56 -0.32,-0.192 -0.896,-0.48 l 0,5.52 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.448,-7.872 q 0,-0.496 -0.208,-0.928 -0.192,-0.432 -0.64,-0.832 -0.432,-0.416 -0.784,-0.672 -0.352,-0.256 -0.976,-0.656 0.032,0.448 0.352,0.896 0.32,0.432 0.704,0.752 0.4,0.32 0.848,0.8 0.464,0.464 0.704,0.912 l 0,-0.272 z m 0,2.096 q 0,-0.4 -0.16,-0.768 -0.144,-0.368 -0.32,-0.608 -0.16,-0.256 -0.592,-0.608 -0.416,-0.352 -0.672,-0.528 -0.256,-0.176 -0.848,-0.576 0.064,0.48 0.4,0.976 0.336,0.48 0.72,0.816 0.4,0.336 0.832,0.784 0.448,0.432 0.64,0.784 l 0,-0.272 z" /> </g> </g> </svg>';

const SIXTYFOURTHNOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 14.528" height="4.1001244mm" width="1.9778134mm"> <g transform="translate(-345.3223,-325.39492)"> <g transform="translate(3.1093785,1.6864426)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 342.21292,337.13248 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-11.568 0.336,0 q 0.064,0.64 0.384,1.104 0.336,0.464 0.752,0.768 0.416,0.304 0.832,0.656 0.416,0.336 0.688,0.928 0.288,0.592 0.288,1.44 0,0.24 -0.144,0.768 0.256,0.608 0.256,1.376 0,0.32 -0.16,0.896 0.224,0.416 0.224,0.912 0,0.496 -0.24,0.96 0.304,0.448 0.304,1.024 0,0.384 -0.08,0.688 -0.08,0.304 -0.16,0.448 -0.08,0.144 -0.368,0.608 l -0.384,0 q 0.08,-0.16 0.192,-0.368 0.112,-0.224 0.16,-0.32 0.064,-0.096 0.112,-0.24 0.064,-0.144 0.08,-0.288 0.016,-0.144 0.016,-0.32 0,-0.272 -0.096,-0.512 -0.08,-0.256 -0.176,-0.432 -0.096,-0.192 -0.32,-0.4 -0.224,-0.208 -0.368,-0.32 -0.144,-0.128 -0.464,-0.304 -0.304,-0.192 -0.432,-0.256 -0.128,-0.064 -0.48,-0.224 -0.336,-0.176 -0.4,-0.208 l 0,4.064 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.352,-8.384 q 0,-0.352 -0.144,-0.688 -0.128,-0.352 -0.288,-0.576 -0.16,-0.224 -0.48,-0.496 -0.32,-0.272 -0.512,-0.4 -0.192,-0.144 -0.592,-0.384 -0.384,-0.24 -0.496,-0.32 0.032,0.432 0.352,0.832 0.32,0.384 0.704,0.656 0.4,0.272 0.816,0.72 0.432,0.432 0.624,0.912 0.016,-0.176 0.016,-0.256 z m 0.016,2.128 q 0,-0.208 -0.048,-0.4 -0.032,-0.192 -0.08,-0.336 -0.048,-0.16 -0.176,-0.336 -0.128,-0.176 -0.208,-0.288 -0.08,-0.112 -0.272,-0.272 -0.192,-0.176 -0.288,-0.256 -0.096,-0.08 -0.352,-0.256 -0.24,-0.176 -0.336,-0.224 -0.096,-0.064 -0.384,-0.24 -0.288,-0.192 -0.384,-0.256 0.032,0.464 0.368,0.88 0.336,0.416 0.736,0.704 0.4,0.272 0.816,0.688 0.416,0.416 0.576,0.864 0.032,-0.192 0.032,-0.272 z m -0.016,1.936 q 0,-0.848 -0.624,-1.504 -0.608,-0.672 -1.872,-1.392 0.064,0.464 0.384,0.896 0.336,0.416 0.72,0.688 0.4,0.272 0.8,0.704 0.4,0.416 0.576,0.88 0.016,-0.064 0.016,-0.272 z" /> </g> </g> </svg>';

const SHARP = '???';
const FLAT = '???';
const BTOFLAT = {'Eb': 'E???', 'Gb': 'G???', 'Ab': 'A???', 'Bb': 'B???', 'Db': 'D???', 'Cb': 'B', 'Fb': 'E', 'eb': 'E???', 'gb': 'G???', 'ab': 'A???', 'bb': 'B???', 'db': 'D???', 'cb': 'B', 'fb': 'E'};
const STOSHARP = {'E#': 'F', 'G#': 'G???', 'A#': 'A???', 'B#': 'C', 'D#': 'D???', 'C#': 'C???', 'F#': 'F???', 'e#': 'F', 'g#': 'G???', 'a#': 'A???', 'b#': 'C', 'd#': 'D???', 'c#': 'C???', 'f#': 'F???'};
const NOTESSHARP = ['C', 'C???', 'D', 'D???', 'E', 'F', 'F???', 'G', 'G???', 'A', 'A???', 'B'];
const NOTESFLAT = ['C', 'D???', 'D', 'E???', 'E', 'F', 'G???', 'G', 'A???', 'A', 'B???', 'B'];
const NOTESFLAT2 = ['c', 'd???', 'd', 'e???', 'e', 'f', 'g???', 'g', 'a???', 'a', 'b???', 'b'];
const EQUIVALENTNOTES = {'C???': 'D???', 'D???': 'E???', 'F???': 'G???', 'G???': 'A???', 'A???': 'B???', 'D???': 'C???', 'E???': 'D???', 'G???': 'F???', 'A???': 'G???', 'B???': 'A???'};
const EXTRATRANSPOSITIONS = {'E???': ['F', 0], 'B???': ['C', 1], 'C???': ['B', -1], 'F???': ['E', 0], 'e???': ['F', 0], 'b???': ['C', 1], 'c???': ['B', -1], 'f???': ['E', 0]};
const SOLFEGENAMES = ['do', 're', 'mi', 'fa', 'sol', 'la', 'ti'];
const SOLFEGECONVERSIONTABLE = {'C': 'do', 'C???': 'do' + '???', 'D': 're', 'D???': 're' + '???', 'E': 'mi', 'F': 'fa', 'F???': 'fa' + '???', 'G': 'sol', 'G???': 'sol' + '???', 'A': 'la', 'A???': 'la' + '???', 'B': 'ti', 'D???': 're' + '???', 'E???': 'mi' + '???', 'G???': 'sol' + '???', 'A???': 'la' + '???', 'B???': 'ti' + '???', 'R': _('rest')};
const WESTERN2EISOLFEGENAMES = {'do': 'sa', 're': 're', 'mi': 'ga', 'fa': 'ma', 'sol': 'pa', 'la': 'dha', 'ti': 'ni'};

const PITCHES = ['C', 'D???', 'D', 'E???', 'E', 'F', 'G???', 'G', 'A???', 'A', 'B???', 'B'];
const PITCHES1 = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const PITCHES2 = ['C', 'C???', 'D', 'D???', 'E', 'F', 'F???', 'G', 'G???', 'A', 'A???', 'B'];
const PITCHES3 = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTESTABLE = {1: "do", 2: "do???", 3: "re", 4: "re???", 5: "mi", 6: "fa", 7: "fa???", 8: "sol", 9: "sol???", 10: "la", 11: "la???", 0: "ti"};
const NOTESTEP = {'C': 1, 'D': 3, 'E': 5, 'F': 6, 'G': 8, 'A': 10, 'B': 12};

// Halfsteps used in calculating absolute intervals
const AUGMENTED = {1: 1, 2: 2, 3: 5, 4: 6, 5: 8, 6: 9, 7: 11, 8: 13};
const PERFECT = {1: 0, 4: 5, 5: 7, 8: 12};
const DIMINISHED = {1: -1, 2: 0, 3: 2, 4: 4, 5: 6, 6: 7, 7: 9, 8: 11};
const MAJOR = {2: 2, 3: 4, 6: 9, 7: 11};
const MINOR = {2: 1, 3: 3, 6: 8, 7: 10};

// SOLFNOTES is the internal representation used in selectors
const SOLFNOTES = ['ti', 'la', 'sol', 'fa', 'mi', 're', 'do'];
const EASTINDIANSOLFNOTES = ['ni', 'dha', 'pa', 'ma', 'ga', 're', 'sa']
const SOLFATTRS = ['??????', '???', '???', '???', '??????'];

function mod12(a) {
    while (a < 0) {
        a += 12;
    }

    return a % 12;
}


function calcAugmented(obj) {
    var interval = obj[0];
    var deltaOctave = obj[1];
    if (interval < 0) {
	return -AUGMENTED[-interval] + (12 * deltaOctave);
    } else {
	return AUGMENTED[interval] + (12 * deltaOctave);
    }
}


function calcPerfect(obj) {
    var interval = obj[0];
    var deltaOctave = obj[1];
    if (interval < 0) {
	return -PERFECT[-interval] + (12 * deltaOctave);
    } else {
	return PERFECT[interval] + (12 * deltaOctave);
    }
}


function calcDiminished(obj) {
    var interval = obj[0];
    var deltaOctave = obj[1];
    if (interval < 0) {
	return -DIMINISHED[-interval] + (12 * deltaOctave);
    } else {
	return DIMINISHED[interval] + (12 * deltaOctave);
    }
}


function calcMajor(obj) {
    var interval = obj[0];
    var deltaOctave = obj[1];
    if (interval < 0) {
	return -MAJOR[-interval] + (12 * deltaOctave);
    } else {
	return MAJOR[interval] + (12 * deltaOctave);
    }
}


function calcMinor(obj) {
    var interval = obj[0];
    var deltaOctave = obj[1];
    if (interval < 0) {
	return -MINOR[-interval] + (12 * deltaOctave);
    } else {
	return MINOR[interval] + (12 * deltaOctave);
    }
}


const SEMITONES = 12;
const POWER2 = [1, 2, 4, 8, 16, 32, 64, 128];
const TWELTHROOT2 = 1.0594630943592953;
const TWELVEHUNDRETHROOT2 = 1.0005777895065549;
const A0 = 27.5;
const C8 = 4186.01;

const RHYTHMRULERHEIGHT = 100;

const SLIDERHEIGHT = 200;
const SLIDERWIDTH = 50;

const MATRIXBUTTONCOLOR = '#c374e9';
const MATRIXLABELCOLOR = '#90c100';
const MATRIXNOTECELLCOLOR = '#b1db00';
const MATRIXTUPLETCELLCOLOR = '#57e751';
const MATRIXRHYTHMCELLCOLOR = '#c8c8c8';

const MATRIXBUTTONCOLORHOVER = '#c894e0';
const MATRIXNOTECELLCOLORHOVER = '#c2e820';

const MATRIXSOLFEWIDTH = 52;
const EIGHTHNOTEWIDTH = 24;
const MATRIXBUTTONHEIGHT = 40;
const MATRIXBUTTONHEIGHT2 = 66;
const MATRIXSOLFEHEIGHT = 30;

const wholeNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(WHOLENOTE)));
const halfNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(HALFNOTE)));
const quarterNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(QUARTERNOTE)));
const eighthNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(EIGHTHNOTE)));
const sixteenthNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(SIXTEENTHNOTE)));
const thirtysecondNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(THIRTYSECONDNOTE)));
const sixtyfourthNoteImg = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(SIXTYFOURTHNOTE)));

const NOTESYMBOLS = {1: wholeNoteImg, 2: halfNoteImg, 4: quarterNoteImg, 8: eighthNoteImg, 16: sixteenthNoteImg, 32: thirtysecondNoteImg, 64: sixtyfourthNoteImg};

// The table contains the intervals that define the modes.
// All of these modes assume 12 semitones per octave.
// See http://www.pianoscales.org
const MUSICALMODES = {
     // 12 notes in an octave
    'chromatic': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

     // 8 notes in an octave
    'algerian': [2, 1, 2, 1, 1, 1, 3, 1],
    'diminished': [2, 1, 2, 1, 2, 1, 2, 1],
    'spanish': [1, 2, 1, 1, 1, 2, 2, 2],
    'ocatonic': [1, 2, 1, 2, 1, 2, 1, 2],

     // 7 notes in an octave
    'major': [2, 2, 1, 2, 2, 2, 1],
    'ionian': [2, 2, 1, 2, 2, 2, 1],
    'dorian': [2, 1, 2, 2, 2, 1, 2],
    'phrygian': [1, 2, 2, 2, 1, 2, 2],
    'lydian': [2, 2, 2, 1, 2, 2, 1],
    'mixolydian': [2, 2, 1, 2, 2, 1, 2],
    'minor': [2, 1, 2, 2, 1, 2, 2],
    'aeolian': [2, 1, 2, 2, 1, 2, 2],
    'locrian': [1, 2, 2, 1, 2, 2, 2],

    'jazz minor': [2, 1, 2, 2, 2, 2, 1],
    'bebop': [1, 1, 1, 2, 2, 1, 2],

    'arabic': [2, 2, 1, 1, 2, 2, 2],
    'byzantine': [1, 3, 1, 2, 1, 3, 1],
    'enigmatic': [1, 3, 2, 2, 2, 1, 1],
    'ethiopian': [2, 1, 2, 2, 1, 2, 2],
    'geez': [2, 1, 2, 2, 1, 2, 2],
    'hindu': [2, 2, 1, 2, 1, 2, 2],
    'hungarian': [2, 1, 3, 1, 1, 3, 1],
    'maqam': [1, 3, 1, 2, 1, 3, 1],
    'romanian minor': [2, 1, 3, 1, 2, 1, 2],
    'spanish gypsy': [1, 3, 1, 2, 1, 2, 2],

    // 6 notes in an octave
    'blues': [3, 2, 1, 1, 3, 2],
    'major blues': [2, 1, 1, 3, 2, 2],
    'whole tone': [2, 2, 2, 2, 2, 2],

    // 5 notes in an octave
    'pentatonic': [3, 2, 2, 3, 2],
    'chinese': [4, 2, 1, 4, 1],
    'egyptian': [2, 3, 2, 3, 2],
    'hirajoshi': [1, 4, 1, 4, 2],
    'japanese': [1, 4, 2, 3, 2],
    'fibonacci': [1, 1, 2, 3, 5],

    // User definition overrides this constant
    'custom': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

const MAQAMTABLE = {
    'hijaz kar': 'C maqam',
    'hijaz kar maqam': 'C maqam',
    'shahnaz': 'D maqam',
    'maqam mustar': 'Eb maqam',
    'maqam jiharkah': 'F maqam',
    'shadd araban': 'G maqam',
    'suzidil': 'A maqam',
    'ajam': 'Bb maqam',
    'ajam maqam': 'Bb maqam',
};

var MODENAMES = [
    //.TRANS: twelve semi-tone scale for music
    [_('chromatic'), 'chromatic'],
    [_('algerian'), 'algerian'],
    //.TRANS: modal scale for music
    [_('diminished'), 'diminished'],
    [_('spanish'), 'spanish'],
    //.TRANS: modal scale for music
    [_('octatonic'), 'octatonic'],
    //.TRANS: major scales in music
    [_('major'), 'major'],
    //.TRANS: modal scale for music
    [_('ionian'), 'ionian'],
    //.TRANS: modal scale for music
    [_('dorian'), 'dorian'],
    //.TRANS: modal scale for music
    [_('phrygian'), 'phrygian'],
    //.TRANS: modal scale for music
    [_('lydian'), 'lydian'],
    //.TRANS: modal scale for music
    [_('mixolydian'), 'mixolydian'],
    //.TRANS: natural minor scales in music
    [_('minor'), 'minor'],
    //.TRANS: modal scale for music
    [_('aeolian'), 'aeolian'],
    //.TRANS: modal scale for music
    [_('locrian'), 'locrian'],
    //.TRANS: minor jazz scale for music
    [_('jazz minor'), 'jazz minor'],
    //.TRANS: bebop scale for music
    [_('bebop'), 'bebop'],
    [_('arabic'), 'arabic'],
    [_('byzantine'), 'byzantine'],
    //.TRANS: musical scale for music by Verdi
    [_('enigmatic'), 'enigmatic'],
    [_('ethiopian'), 'ethiopian'],
    //.TRANS: Ethiopic scale for music
    [_('geez'), 'geez'],
    [_('hindu'), 'hindu'],
    [_('hungarian'), 'hungarian'],
    //.TRANS: minor Romanian scale for music
    [_('romanian minor'), 'romanian minor'],
    [_('spanish gypsy'), 'spanish gypsy'],
    //.TRANS: musical scale for Mid-Eastern music
    [_('maqam'), 'maqam'],
    //.TRANS: minor blues scale for music
    [_('blues'), 'blues'],
    //.TRANS: major blues scale for music
    [_('major blues'), 'major blues'],
    [_('whole tone'), 'whole tone'],
    //.TRANS: pentatonic scale in music
    [_('pentatonic'), 'pentatonic'],
    [_('chinese'), 'chinese'],
    [_('egyptian'), 'egyptian'],
    //.TRANS: Japanese pentatonic scale for music
    [_('hirajoshi'), 'hirajoshi'],
    [_('japanese'), 'japanese'],
    //.TRANS: Italian mathematician
    [_('fibonacci'), 'fibonacci'],
    [_('custom'), 'custom'],
];

var VOICENAMES = [
    //.TRANS: musical instrument
    [_('violin'), 'violin', 'images/voices.svg'],
    //.TRANS: musical instrument
    [_('cello'), 'cello', 'images/voices.svg'],
    //.TRANS: musical instrument
    // [_('basse'), 'basse', 'images/voices.svg'],
    //.TRANS: polytone synthesizer
    [_('poly'), 'poly', 'images/synth.svg'],
    //.TRANS: sine wave
    [_('sine'), 'sine', 'images/synth.svg'],
    //.TRANS: square wave
    [_('square'), 'square', 'images/synth.svg'],
    //.TRANS: sawtooth wave
    [_('sawtooth'), 'sawtooth', 'images/synth.svg'],
    //.TRANS: triangle wave
    [_('triangle'), 'triangle', 'images/synth.svg'],
];

var DRUMNAMES = [
    //.TRANS: musical instrument
    [_('snare drum'), 'snare drum', 'images/snaredrum.svg'],
    //.TRANS: musical instrument
    [_('kick drum'), 'kick drum', 'images/kick.svg'],
    //.TRANS: musical instrument
    [_('tom tom'), 'tom tom', 'images/tom.svg'],
    //.TRANS: musical instrument
    [_('floor tom tom'), 'floor tom tom', 'images/floortom.svg'],
    //.TRANS: a drum made from an inverted cup
    [_('cup drum'), 'cup drum', 'images/cup.svg'],
    //.TRANS: musical instrument
    [_('darbuka drum'), 'darbuka drum', 'images/darbuka.svg'],
    //.TRANS: musical instrument
    [_('hi hat'), 'hi hat', 'images/hihat.svg'],
    //.TRANS: a small metal bell
    [_('ride bell'), 'ride bell', 'images/ridebell.svg'],
    //.TRANS: musical instrument
    [_('cow bell'), 'cow bell', 'images/cowbell.svg'],
    //.TRANS: musical instrument
    [_('triangle bell'), 'trianglebell', 'images/trianglebell.svg'],
    //.TRANS: musical instrument
    [_('finger cymbals'), 'finger cymbals', 'images/fingercymbals.svg'],
    //.TRANS: a musically tuned set of bells
    [_('chine'), 'chine', 'images/chine.svg'],
    //.TRANS: sound effect
    [_('clang'), 'clang', 'images/clang.svg'],
    //.TRANS: sound effect
    [_('crash'), 'crash', 'images/crash.svg'],
    //.TRANS: sound effect
    [_('bottle'), 'bottle', 'images/bottle.svg'],
    //.TRANS: sound effect
    [_('clap'), 'clap', 'images/clap.svg'],
    //.TRANS: sound effect
    [_('slap'), 'slap', 'images/slap.svg'],
    //.TRANS: sound effect
    [_('splash'), 'splash', 'images/splash.svg'],
    //.TRANS: sound effect
    [_('bubbles'), 'bubbles', 'images/bubbles.svg'],
    //.TRANS: animal sound effect
    [_('cat'), 'cat', 'images/cat.svg'],
    //.TRANS: animal sound effect
    [_('cricket'), 'cricket', 'images/cricket.svg'],
    //.TRANS: animal sound effect
    [_('dog'), 'dog', 'images/dog.svg'],
    //.TRANS: animal sound effect
    [_('duck'), 'duck', 'images/duck.svg'],
];

const DEFAULTVOICE = 'sine';
const DEFAULTDRUM = 'kick drum';
const DEFAULTMODE = 'major';

var customMode = MUSICALMODES['custom'];

// The sample has a pitch which is subsequently transposed. This
// number is that starting pitch.
const SAMPLECENTERNO = {'violin': 63, 'cello': 39, 'basse': 15};


function getModeName(name) {
    for (var mode in MODENAMES) {
        if (MODENAMES[mode][0] === name || MODENAMES[mode][1].toLowerCase() === name.toLowerCase()) {
            if (MODENAMES[mode][0] != '') {
                return MODENAMES[mode][0];
            } else {
                console.log('I18n for mode name is misbehaving.');
                console.log(name + ' ' + name.toLowerCase() + ' ' + MODENAMES[mode][0].toLowerCase() + ' ' + MODENAMES[mode][1].toLowerCase());
                return MODENAMES[mode][1];
            }
        }
    }

    console.log(name + ' not found in MODENAMES');
    return name;
};


function initModeI18N() {
    for (var i = 0; i < MODENAMES.length; i++) {
      if (MODENAMES[i][0] == null) {
            MODENAMES[i][0] = _(MODENAMES[i][1]);
          }

        if (MODENAMES[i][0] == null) {
            MODENAMES[i][0] = MODENAMES[i][1];
        }
    }
};


function initVoiceI18N() {
    for (var i = 0; i < VOICENAMES.length; i++) {
        if (VOICENAMES[i][0] == null) {
            VOICENAMES[i][0] = _(VOICENAMES[i][1]);
        }

        if (VOICENAMES[i][0] == null) {
            VOICENAMES[i][0] = VOICENAMES[i][1];
        }
    }
};


function initDrumI18N() {
    for (var i = 0; i < DRUMNAMES.length; i++) {
        if (DRUMNAMES[i][0] == null || DRUMNAMES[i][0] === '') {
            DRUMNAMES[i][0] = _(DRUMNAMES[i][1]);
        }

        if (DRUMNAMES[i][0] == null) {
            DRUMNAMES[i][0] = DRUMNAMES[i][1];
        }
    }
};


function getDrumName(name) {
    if (name === '') {
        console.log('getDrumName passed blank name. Returning ' + DEFAULTDRUM);
        name = DEFAULTDRUM;
    } else if (name.slice(0, 4) == 'http') {
        return null;
    }

    for (var drum = 0; drum < DRUMNAMES.length; drum++) {
	if (DRUMNAMES[drum][0].toLowerCase() === name.toLowerCase() || DRUMNAMES[drum][1].toLowerCase() === name.toLowerCase()) {
            if (DRUMNAMES[drum][0] != '') {
                return DRUMNAMES[drum][0];
            } else {
                console.log('I18n is misbehaving when parsing drum name: ' + name);
                return DRUMNAMES[drum][1];
            }
        }
    }

    return null;
};


function getDrumIcon(name) {
    if (name === '') {
        console.log('getDrumIcon passed blank name. Returning ' + DEFAULTDRUM);
        name = DEFAULTDRUM;
    } else if (name.slice(0, 4) == 'http') {
        return 'images/drum.svg';
    }

    for (var i = 0; i < DRUMNAMES.length; i++) {
        // if (DRUMNAMES[i].indexOf(name) !== -1) {
        if (DRUMNAMES[i][0] === name || DRUMNAMES[i][1].toLowerCase() === name.toLowerCase()) {
            return DRUMNAMES[i][2];
        }
    }
    return 'images/drum.svg';
};


function getDrumSynthName(name) {
    if (name == null || name == undefined) {
        console.log('getDrumSynthName passed null name. Returning null');
        return null;
    } else if (name === '') {
        console.log('getDrumSynthName passed blank name. Returning ' + DEFAULTDRUM);
        name = DEFAULTDRUM;
    } else if (name.slice(0, 4) == 'http') {
        return name;
    }

    for (var i = 0; i < DRUMNAMES.length; i++) {
        // if (DRUMNAMES[i].indexOf(name) !== -1) {
        if (DRUMNAMES[i][0] === name || DRUMNAMES[i][1].toLowerCase() === name.toLowerCase()) {
            return DRUMNAMES[i][1];
        }
    }
    return null;
};


function getVoiceName(name) {
    if (name === '') {
        console.log('getVoiceName passed blank name. Returning ' + DEFAULTVOICE);
        name = DEFAULTVOICE;
    } else if (name.slice(0, 4) == 'http') {
        return null;
    }

    for (var i = 0; i < VOICENAMES.length; i++) {
        if (VOICENAMES[i][0] === name || VOICENAMES[i][1] === name) {
            if (VOICENAMES[i][0] != '') {
                return VOICENAMES[i][0];
            } else {
                console.log('I18n is misbehaving when parsing voice name: ' + name);
                return VOICENAMES[i][1];
            }
        }
    }
    return null;
};


function getVoiceIcon(name) {
    if (name === '') {
        console.log('getVoiceIcon passed blank name. Returning ' + DEFAULTVOICE);
        name = DEFAULTVOICE;
    } else if (name.slice(0, 4) == 'http') {
        return 'images/voices.svg';
    }

    for (var i = 0; i < VOICENAMES.length; i++) {
        if (VOICENAMES[i][0] === name || VOICENAMES[i][1] === name) {
            return VOICENAMES[i][2];
        }
    }
    return 'images/voices.svg';
};


function getVoiceSynthName(name) {
    if (name == null || name == undefined) {
        console.log('getVoiceSynthName passed null name. Returning null');
        return null;
    } else if (name === '') {
        console.log('getVoiceSynthName passed blank name. Returning ' + DEFAULTVOICE);
        name = DEFAULTVOICE;
    } else if (name.slice(0, 4) == 'http') {
        return name;
    }

    for (var i = 0; i < VOICENAMES.length; i++) {
        if (VOICENAMES[i][0] === name || VOICENAMES[i][1] === name) {
            return VOICENAMES[i][1];
        }
    }
    return null;
};


function keySignatureToMode(keySignature) {
    // Convert from "A Minor" to "A" and "MINOR"
    if (keySignature === '') {
        console.log('No key signature provided; reverting to C major.');
       return ['C', 'major'];
    }

    // Maqams have special names for certain keys.
    if (keySignature.toLowerCase() in MAQAMTABLE) {
        keySignature = MAQAMTABLE[keySignature.toLowerCase()];
    }

    var parts = keySignature.split(' ');

    // A special case to test: m used for minor.
    var minorMode = false;
    if (parts.length === 1 && parts[0][parts[0].length - 1] === 'm') {
        minorMode = true;
        parts[0] = parts[0].slice(0, parts[0].length - 1);
    }

    if (parts[0] in BTOFLAT) {
        var key = BTOFLAT[parts[0]];
    } else if (parts[0] in STOSHARP) {
        var key = STOSHARP[parts[0]];
    } else {
        var key = parts[0];
    }

    if (NOTESSHARP.indexOf(key) === -1 && NOTESFLAT.indexOf(key) === -1) {
        console.log('Invalid key or missing name; reverting to C.');
        // Is is possible that the key was left out?
        var keySignature = 'C ' + keySignature;
        var parts = keySignature.split(' ');
        key = 'C';
    }

    if (minorMode) {
        return [key, 'minor'];
    }

    // Reassemble remaining parts to get mode name
    var mode = '';
    for (var i = 1; i < parts.length; i++) {
        if (parts[i] !== '') {
            if (mode === '') {
                mode = parts[i];
            } else {
                mode += ' ' + parts[i];
            }
        }
    }

    if (mode === '') {
        mode = 'major';
    } else {
        mode = mode.toLowerCase();
    }

    mode = getModeName(mode);

    for (var i = 0; i < MODENAMES.length; i++) {
        if (MODENAMES[i][0] === mode) {
            mode = MODENAMES[i][1];
            break;
        }
    }

    if (mode in MUSICALMODES) {
        return [key, mode];
    } else {
        console.log('Invalid mode name: ' + mode + ' reverting to major.');
        return [key, 'major'];
    }
};


function getStepSizeUp(keySignature, pitch) {
    return _getStepSize(keySignature, pitch, 'up');
};


function getStepSizeDown(keySignature, pitch) {
    return _getStepSize(keySignature, pitch, 'down');
};


function _getStepSize(keySignature, pitch, direction) {
    // Returns how many half-steps to the next note in this key.
    var obj = _buildScale(keySignature);
    var scale = obj[0];
    var halfSteps = obj[1];

    if (pitch in BTOFLAT) {
        pitch = BTOFLAT[pitch];
    } else if (pitch in STOSHARP) {
        pitch = STOSHARP[pitch];
    }

    ii = scale.indexOf(pitch);
    if (ii !== -1) {
        if (direction === 'up') {
            return halfSteps[ii];
        } else {
            if (ii > 0) {
                return -halfSteps[ii - 1];
            } else {
                return -last(halfSteps);
            }
        }
    }

    if (pitch in EQUIVALENTNOTES) {
        pitch = EQUIVALENTNOTES[pitch];
    }

    ii = scale.indexOf(pitch);
    if (ii !== -1) {
        if (direction === 'up') {
            return halfSteps[ii];
        } else {
            if (ii > 0) {
                return -halfSteps[ii - 1];
            } else {
                return -last(halfSteps);
            }
        }
    }

    // current Note not in the consonant scale if this key.
    console.log(pitch + ' not found in key of ' + keySignature);
    return 1;
};

function _buildScale(keySignature) {
    var obj = keySignatureToMode(keySignature);
    var myKeySignature = obj[0];
    if (obj[1] === 'CUSTOM') {
        var halfSteps = customMode;
    } else {
        var halfSteps = MUSICALMODES[obj[1]];
    }

    if (NOTESFLAT.indexOf(myKeySignature) !== -1) {
        var thisScale = NOTESFLAT;
    } else {
        var thisScale = NOTESSHARP;
    }

    var idx = thisScale.indexOf(myKeySignature);

    if (idx === -1) {
        idx = 0;
    }

    var scale = [myKeySignature];
    var ii = idx;
    for (var i = 0; i < halfSteps.length; i++) {
        ii += halfSteps[i];
        scale.push(thisScale[ii % SEMITONES]);
    }

    return [scale, halfSteps];
}


function scaleDegreeToPitch(keySignature, scaleDegree) {
    // Returns note corresponding to scale degree in current key
    // signature. Used for moveable solfege.
    var obj = _buildScale(keySignature);
    var scale = obj[0];

    // Scale degree is specified as do == 1, re == 2, etc., so we need
    // to subtract 1 to make it zero-based.
    scaleDegree -= 1;

    // We mod to ensure we don't run out of notes.
    // FixMe: bump octave if we wrap.
    scaleDegree %= (scale.length - 1);
    return (scale[scaleDegree]);
};


function getScaleAndHalfSteps(keySignature) {
    // Determine scale and half-step pattern from key signature
    var obj = keySignatureToMode(keySignature);
    var myKeySignature = obj[0];
    if (obj[1] === 'CUSTOM') {
        var halfSteps = customMode;
    } else {
        var halfSteps = MUSICALMODES[obj[1]];
    }

    var solfege = [];
    for (var i = 0; i < halfSteps.length; i++) {
        solfege.push(SOLFEGENAMES[i]);
        for (var j = 1; j < halfSteps[i]; j++) {
            solfege.push('');
        }
    }
    
    if (NOTESFLAT.indexOf(myKeySignature) !== -1) {
        var thisScale = NOTESFLAT;
    } else {
        var thisScale = NOTESSHARP;
    }

    if (myKeySignature in EXTRATRANSPOSITIONS) {
        myKeySignature = EXTRATRANSPOSITIONS[myKeySignature][0];
    }

    return [thisScale, solfege, myKeySignature, obj[1]];
};


// Relative interval (used by the Interval Block) is based on the
// steps within the current key and mode.
function getInterval (interval, keySignature, pitch) {
    // Step size interval based on the position (pitch) in the scale
    var obj = _buildScale(keySignature);
    var scale = obj[0];
    var halfSteps = obj[1];
 
    if (pitch in BTOFLAT) {
        pitch = BTOFLAT[pitch];
        ii = scale.indexOf(pitch);
    } else if (pitch in STOSHARP) {
        pitch = STOSHARP[pitch];
        ii = scale.indexOf(pitch);
    } else if (scale.indexOf(pitch) !== -1) {
        ii = scale.indexOf(pitch);
    } else if (pitch in EQUIVALENTNOTES) {
        pitch = EQUIVALENTNOTES[pitch];
        if (scale.indexOf(pitch) !== -1) {
            ii = scale.indexOf(pitch);
        } else {
            console.log('Note ' + pitch + ' not in scale ' + keySignature);
            ii = 0;
        }
    } else {
        // In case pitch is solfege, convert it.
        var ii = SOLFEGENAMES.indexOf(pitch);
    }

    if (interval > 0) {
        var myOctave = Math.floor(interval / SEMITONES);
        var myInterval = Math.floor(interval) % SEMITONES;
        var j = 0;
        for (var i = 0; i < (myInterval - 1); i++) {
            j += halfSteps[(ii + i) % halfSteps.length];
        }
        return j + myOctave * SEMITONES;
    } else {
        var myOctave = Math.ceil(interval / SEMITONES);
        var myInterval = Math.ceil(interval) % SEMITONES;
        var j = 0;
        for (var i = 0; i > myInterval + 1; i--) {
            var z = (ii + i - 1) % halfSteps.length;
            while (z < 0) {
                z += halfSteps.length;
            }
            j -= halfSteps[z];
        }
        return j + myOctave * SEMITONES;
    }
};


function calcNoteValueToDisplay(a, b) {
    var noteValue = a / b;
    var noteValueToDisplay = null;

    if (NOTESYMBOLS != undefined && noteValue in NOTESYMBOLS) {
        noteValueToDisplay = '1<br>&mdash;<br>' + noteValue.toString() + '<br>' + '<img src="' + NOTESYMBOLS[noteValue] + '" height=' + (MATRIXBUTTONHEIGHT / 2) * this.cellScale + '>';
    } else {
        noteValueToDisplay = reducedFraction(b, a);
    }

    if (parseInt(noteValue) < noteValue) {
        noteValueToDisplay = parseInt((noteValue * 1.5))
        if (NOTESYMBOLS != undefined && noteValueToDisplay in NOTESYMBOLS) {
            noteValueToDisplay = '1.5<br>&mdash;<br>' + noteValueToDisplay.toString() + '<br>' + '<img src="' + NOTESYMBOLS[noteValueToDisplay] + '" height=' + (MATRIXBUTTONHEIGHT / 2) * this.cellScale + '> .';
        } else {
            noteValueToDisplay = parseInt((noteValue * 1.75))
            if (NOTESYMBOLS != undefined && noteValueToDisplay in NOTESYMBOLS) {
                noteValueToDisplay = '1.75<br>&mdash;<br>' + noteValueToDisplay.toString() + '<br>' + '<img src="' + NOTESYMBOLS[noteValueToDisplay] + '" height=' + (MATRIXBUTTONHEIGHT / 2) * this.cellScale + '> ..';
            } else {
                noteValueToDisplay = reducedFraction(b, a);
            }
        }
    }
    return noteValueToDisplay;
};


function durationToNoteValue(duration) {
    // returns [note value, no. of dots, tuplet factor]

    // Try to find a match or a dotted match.
    for (var dotCount = 0; dotCount < 3; dotCount++) {
        var currentDotFactor = 2 - (1 / Math.pow(2, dotCount));
        var d = duration * currentDotFactor;
        if (POWER2.indexOf(d) !== -1) {
            return [d, dotCount, null];
        }
    }

    // First, round down.
    var roundDown = duration;
    for (var i = 1; i < POWER2.length; i++) {
        // Rounding down
        if (roundDown < POWER2[i]) {
            roundDown = POWER2[i - 1];
            break;
        }
    }

    if (POWER2.indexOf(roundDown) === -1) {
        roundDown = 128;
   }

    // Next, see if the note has a factor of 2.
    var factorOfTwo = 1;
    var tupletValue = duration;
    while (Math.floor(tupletValue / 2) * 2 === tupletValue) {
        factorOfTwo *= 2;
        tupletValue /= 2;
    }

    if (factorOfTwo > 1) {
        // We have a tuplet of sorts
        return [duration, 0, tupletValue, roundDown];
    }

    // Next, generate a fauve tuplet for a singleton.
    return [1, 0, duration, roundDown];
};


function toFraction(d) {
    // Convert float to its approximate fractional representation.
    if (d > 1) {
        var flip = true;
        d = 1 / d;
    } else {
        var flip = false;
    }

    var df = 1.0;
    var top = 1;
    var bot = 1;

    while (Math.abs(df - d) > 0.00000001) {
        if (df < d) {
            top += 1
        } else {
            bot += 1
            top = parseInt(d * bot);
        }
        df = top / bot;
    }

    if (flip) {
        var tmp = top;
        top = bot;
        bot = tmp;
    }

    return([top, bot]);
};


function frequencyToPitch(hz) {
    // Calculate the pitch and octave based on frequency, rounding to
    // the nearest cent.

    if (hz < A0) {
        return ['A', 0];
    } else if (hz > C8) {
        // FIXME: set upper bound of C10
        return ['C', 8];
    }

    // Calculate cents to keep track of drift
    var cents = 0;
    for (var i = 0; i < 8800; i++) {
        var f = A0 * Math.pow(TWELVEHUNDRETHROOT2, i);
        if (hz < f * 1.0003 && hz > f * 0.9997) {
            var cents = i % 100;
            var j = Math.floor(i / 100);
            return [PITCHES[(j + PITCHES.indexOf('A')) % 12], Math.floor((j + PITCHES.indexOf('A')) / 12), cents];
        }
    }

    console.log('Could not find note/octave/cents for ' + hz);
    return ['?', -1, 0];
};


function numberToPitch(i) {
    // Calculate the pitch and octave based on index.
    // We start at A0.
    if (i < 0) {
        var n = 0;
        while (i < 0) {
            i += 12;
            n += 1;  // Count octave bump ups.
        }

	return [PITCHES[(i + PITCHES.indexOf('A')) % 12], Math.floor((i + PITCHES.indexOf('A')) / 12) - n];
    } else {
	return [PITCHES[(i + PITCHES.indexOf('A')) % 12], Math.floor((i + PITCHES.indexOf('A')) / 12)];
    }
};

function noteToPitchOctave(note) {
    var len = note.length;
    var octave = last(note);
    var pitch = note.substring(0, len - 1);

    return [pitch, Number(octave)];
};


function noteToFrequency(note, keySignature) {
    var obj = noteToPitchOctave(note);

    return pitchToFrequency(obj[0], obj[1], 0, keySignature);
};


function pitchToFrequency(pitch, octave, cents, keySignature) {
    // Calculate the frequency based on pitch and octave.
    var pitchNumber = pitchToNumber(pitch, octave, keySignature);

    if (cents === 0) {
        return A0 * Math.pow(TWELTHROOT2, pitchNumber);
    } else {
        return A0 * Math.pow(TWELVEHUNDRETHROOT2, pitchNumber * 100 + cents);
    }
};


function pitchToNumber(pitch, octave, keySignature) {
    // Calculate the pitch index based on pitch and octave.
    if (pitch.toUpperCase() === 'R') {
        return 0;
    }

    // Check for flat, sharp, double flat, or double sharp.
    var transposition = 0;
    var len = pitch.length;
    if (len > 1) {
        if (len > 2) {
            var lastTwo = pitch.slice(len - 2);
            if (lastTwo === 'bb' || lastTwo === '??????') {
                pitch = pitch.slice(0, len - 2);
                transposition -= 2;
            } else if (lastTwo === '##' || lastTwo === '??????') {
                pitch = pitch.slice(0, len - 2);
                transposition += 2;
            } else if (lastTwo === '#b' || lastTwo === '??????' || lastTwo === 'b#' || lastTwo === '??????') {
                // Not sure this could occur... but just in case.
                pitch = pitch.slice(0, len - 2);
            }
	}

        if (pitch.length > 1) {
            var lastOne = pitch.slice(len - 1);
            if (lastOne === 'b' || lastOne === '???') {
                pitch = pitch.slice(0, len - 1);
                transposition -= 1;
            } else if (lastOne === '#' || lastOne === '???') {
                pitch = pitch.slice(0, len - 1);
                transposition += 1;
            }
        }
    }

    var pitchNumber = 0;
    if (PITCHES.indexOf(pitch) !== -1) {
        pitchNumber = PITCHES.indexOf(pitch.toUpperCase());
    } else {
        // obj[1] is the solfege mapping for the current key/mode
        var obj = getScaleAndHalfSteps(keySignature)
        if (obj[1].indexOf(pitch.toLowerCase()) !== -1) {
            pitchNumber = obj[1].indexOf(pitch.toLowerCase());
        } else {
            console.log('pitch ' + pitch + ' not found.');
            pitchNumber = 0;
        }
    }

    // We start at A0.
    return octave * 12 + pitchNumber - PITCHES.indexOf('A') + transposition;
};


function noteIsSolfege(note) {
    if (SOLFEGECONVERSIONTABLE[note] == undefined) {
        return true;
    } else {
        return false;
    }
};


function getSolfege(note) {
    // FIXME: Use mode-specific conversion.
    if (noteIsSolfege(note)) {
        return note;
    } else {
        return SOLFEGECONVERSIONTABLE[note];
    }
};


function i18nSolfege(note) {
    // solfnotes_ is used in the interface for i18n
    //.TRANS: the note names must be separated by single spaces 
    var solfnotes_ = _('ti la sol fa mi re do').split(' ');
    var obj = splitSolfege(note);

    var i = SOLFNOTES.indexOf(obj[0]);
    if (i !== -1) {
        return solfnotes_[i] + obj[1];
    } else {
        console.log(note + ' not found.');
        return note;
    }
};


function splitSolfege(value) {
    // Separate the pitch from any attributes, e.g., # or b
    if (value != null) {
        if (SOLFNOTES.indexOf(value) !== -1) {
            var note = value;
            var attr = '';
        } else if (value.slice(0, 3) === 'sol') {
            var note = 'sol';
            if (value.length === 4) {
                var attr = value[3];
            } else {
                var attr = value[3] + value[3];
            }
        } else {
            var note = value.slice(0, 2);
            if (value.length === 3) {
                var attr = value[2];
            } else {
                var attr = value[2] + value[2];
            }
        }
    } else {
        var note = 'sol';
        var attr = ''
    }

    return [note, attr];
};


function getNumber(notename, octave) {
    // Converts a note, e.g., C, and octave to a number
    if (octave < 0) {
        var num = 0;
    } else if (octave > 10) {
        var num = 9 * 12;
    } else {
        var num = 12 * (octave - 1);
    }

    notename = String(notename);
    if (notename.substring(0, 1) in NOTESTEP) {
        num += NOTESTEP[notename.substring(0, 1)];
        if (notename.length >= 1) {
            var delta = notename.substring(1);
            if (delta === 'bb' || delta === '??????') {
                num -= 2;
            } else if (delta === '##' || delta === '??????') {
                num += 2;
            } else if (delta === 'b' || delta === '???') {
                num -= 1;
            } else if (delta === '#' || delta === '???') {
                num += 1;
            }
        }
    }
    return num;
};


function getNumNote(value, delta) {
    // Converts from number to note
    var num = value + delta;
    /*
    if (num < 0) {
        num = 1;
        var octave = 1;
    } else if (num > 10 * 12) {
        num = 12;
        var octave = 10;
    } else {
        var octave = Math.floor(num / 12);
        num = num % 12;
    }
    */
    var octave = Math.floor(num / 12);
    num = num % 12;

    var note = NOTESTABLE[num];

    if (note[num] === "ti") {
        octave -= 1;
    }

    return [note, octave + 1];
};


calcOctave = function (current, arg) {
    switch(arg) {
    case _('next'):
    case 'next':
        return Math.min(current + 1, 10);
    case _('previous'):
    case 'previous':
        return Math.max(current - 1, 1);
    case _('current'):
    case 'current':
        return current;
    default:
        return Math.floor(arg);
    }
};


calcOctaveInterval = function (arg) {
    // Used by intervals to determine octave to use in an interval.
    var value = 0;
    switch(arg) {
    case 1:
    case _('next'):
    case 'next':
        value = 1;
        break;
    case -1:
    case _('previous'):
    case 'previous':
        value = -1;
        break;
    case _('current'):
    case 'current':
    case 0:
        value = 0;
        break;
    case 2:
	value = 2;
        break;
    case -2:
	value = -2;
        break;
    default:
        console.log('Interval octave must be between -2 and 2.');
        value = 0;
        break;
    }

    return value;
};


function isInt(value) {
    return !isNaN(value) && 
    parseInt(Number(value)) == value && 
    !isNaN(parseInt(value, 10));
};


function reducedFraction(a, b) {
    greatestCommonMultiple = function (a, b) {
        return b === 0 ? a : greatestCommonMultiple(b, a % b);
    }

    var gcm = greatestCommonMultiple(a, b);
    if (NOTESYMBOLS != undefined && [1, 2, 4, 8, 16, 32, 64].indexOf(b/gcm) !== -1) {
        return (a / gcm) + '<br>&mdash;<br>' + (b / gcm) + '<br><img src=' + NOTESYMBOLS[b / gcm] + '>';
    } else {
        return (a / gcm) + '<br>&mdash;<br>' + (b / gcm) + '<br><br>';
    }
};


function Synth () {
    // Isolate synth functions here.

    if (_THIS_IS_MUSIC_BLOCKS_) {
        // Using Tone.js
        this.tone = new Tone();
    }

    this.synthset = {
        // builtin synths
        'poly': [null, null],
        'sine': [null, null],
        'triangle': [null, null],
        'sawtooth': [null, null],
        'square': [null, null],
        'pluck': [null, null],

        // voiced samples
        'violin': [VIOLINSOUNDSAMPLE, null],
        'cello': [CELLOSOUNDSAMPLE, null],
        'basse': [BASSESOUNDSAMPLE, null],

        // drum samples
        'bottle': [BOTTLESOUNDSAMPLE, null],
        'clap': [CLAPSOUNDSAMPLE, null],
        'darbuka drum': [DARBUKASOUNDSAMPLE, null],
        'hi hat': [HIHATSOUNDSAMPLE, null],
        'splash': [SPLASHSOUNDSAMPLE, null],
        'bubbles': [BUBBLESSOUNDSAMPLE, null],
        'cow bell': [COWBELLSOUNDSAMPLE, null],
        'dog': [DOGSOUNDSAMPLE, null],
        'kick drum': [KICKSOUNDSAMPLE, null],
        'tom tom': [TOMSOUNDSAMPLE, null],
        'cat': [CATSOUNDSAMPLE, null],
        'crash': [CRASHSOUNDSAMPLE, null],
        'duck': [DUCKSOUNDSAMPLE, null],
        'ride bell': [RIDEBELLSOUNDSAMPLE, null],
        'triangle bell': [TRIANGLESOUNDSAMPLE, null],
        'chine': [CHINESOUNDSAMPLE, null],
        'cricket': [CRICKETSOUNDSAMPLE, null],
        'finger cymbals': [FINGERCYMBALSSOUNDSAMPLE, null],
        'slap': [SLAPSOUNDSAMPLE, null],
        'clang': [CLANGSOUNDSAMPLE, null],
        'cup drum': [CUPSOUNDSAMPLE, null],
        'floor tom tom': [FLOORTOMSOUNDSAMPLE, null],
        'snare drum': [SNARESOUNDSAMPLE, null],
    };

    if (_THIS_IS_MUSIC_BLOCKS_) {
        Tone.Buffer.onload = function (){
            console.log('drum loaded');
        };
    }

    this.getSynthByName = function (name) {
        if (name == null || name == undefined) {
            return this.synthset['poly'][1];
        }

        switch (name) {    
        case 'pluck':
        case 'triangle':
        case 'square':
        case 'sawtooth':
        case 'sine':
            return this.synthset[name][1];
            break;
        case 'violin':
        case 'cello':
        case 'basse':
            return this.synthset[name][1];
            break;
        case 'default':
        case 'poly':
            return this.synthset['poly'][1];
            break;
        default:
            var drumName = getDrumSynthName(name);
            if (name.slice(0, 4) == 'http') {
                if (name in this.synthset) {
                    return this.synthset[name][1];
                } else {
                    console.log('no synth by that name');
                    return null;
                }
            } else if (drumName != null) {
                return this.synthset[drumName][1];
            } else if (name === 'drum') {
                return this.synthset[DEFAULTDRUM][1];
            }
            break;
        }

        // Use polysynth if all else fails.
        return this.synthset['poly'][1];
    };

    this.loadSynth = function (name) {
        var thisSynth = this.getSynthByName(name);
        if (thisSynth == null) {
            console.log('loading synth for ' + name);
            switch (name) {
            case 'pluck':
                this.synthset['pluck'][1] = new Tone.PluckSynth();
                break;
            case 'triangle':
            case 'square':
            case 'sawtooth':
            case 'sine':
                var synthOptions = {
                    oscillator: {
                        type: name
                    },
                    envelope: {
                        attack: 0.03,
                        decay: 0,
                        sustain: 1,
                        release: 0.03
                    },
                };
                this.synthset[name][1] = new Tone.Synth(synthOptions);
                break;
            case 'poly':
            case 'default':
                this.synthset['poly'][1] = new Tone.PolySynth(6, Tone.AMSynth);
                break;
            case 'violin':
            case 'cello':
            case 'basse':
                this.synthset[name][1] = new Tone.Sampler(this.synthset[name][0]);
                break;
            default:
                if (name.slice(0, 4) == 'http') {
                    this.synthset[name] = [name, new Tone.Sampler(name)];
                } else if (name.slice(0, 4) == 'file') {
                    this.synthset[name] = [name, new Tone.Sampler(name)];
                } else {
                    this.synthset[name][1] = new Tone.Sampler(this.synthset[name][0]);
                }
                break;
            }
        }

        this.getSynthByName(name).toMaster();
    };

    this.performNotes = function (synth, notes, beatValue, doVibrato, vibratoIntensity, vibratoFrequency) {
        if (doVibrato) {
            var vibrato = new Tone.Vibrato(1 / vibratoFrequency, vibratoIntensity);
            synth.chain(vibrato, Tone.Master);
            synth.triggerAttackRelease(notes, beatValue);
            setTimeout(function () {
                vibrato.dispose();
            }, beatValue * 1000);  //disable vibrato effect when beat is over
        } else {
            synth.triggerAttackRelease(notes, beatValue);
        }
    }

    this.trigger = function (notes, beatValue, name, vibratoArgs) {
        var doVibrato = false;
        var vibratoIntensity = 0;
        var vibratoFrequency = 0;
        if (vibratoArgs.length == 2 && vibratoArgs[0] != 0) {
            doVibrato = true;
            vibratoIntensity = vibratoArgs[0];
            vibratoFrequency = vibratoArgs[1];
        }

        switch (name) {
        case 'pluck':
        case 'triangle':
        case 'square':
        case 'sawtooth':
        case 'sine':
            if (typeof(notes) === 'object') {
                var noteToPlay = notes[0];
            } else {
                var noteToPlay = notes;
            }
            this.performNotes(this.synthset[name][1], noteToPlay, beatValue, doVibrato, vibratoIntensity, vibratoFrequency);
            break;
        case 'violin':
        case 'cello':
        case 'basse':
            // The violin sample is tuned to C6
            // The cello sample is tuned to C4???
            // The basse sample is tuned to C2???
            var centerNo = SAMPLECENTERNO[name];
            var obj = noteToPitchOctave(notes);
            var noteNo = pitchToNumber(obj[0], obj[1], 'C Major');
            this.performNotes(this.synthset[name][1], noteNo - centerNo, beatValue, doVibrato, vibratoIntensity, vibratoFrequency);
            break;
        case 'default':
        case 'poly':
            this.performNotes(this.synthset['poly'][1], notes, beatValue, doVibrato, vibratoIntensity, vibratoFrequency);
            break;
        default:
            var drumName = getDrumSynthName(name);
            if (drumName != null) {
                // Work around i8n bug in Firefox.
                if (drumName === '' && name in this.synthset) {
                    this.synthset[name][1].triggerAttack(0, beatValue);
                } else if (drumName in this.synthset) {
                    if (this.synthset[drumName][1] == null) {
                        console.log('Something has gone terribly wrong: ' + name + ', ' + drumName);
                    } else {
                        this.synthset[drumName][1].triggerAttack(0);
                    }
                } else if (name.slice(0, 4) == 'http') {
                    this.synthset[name][1].triggerAttack(0, beatValue);
                } else if (name.slice(0, 4) == 'file') {
                    this.synthset[name][1].triggerAttack(0, beatValue);
                } else {
                    console.log('Something has gone terribly wrong: ' + name + ', ' + drumName);
                }
            } else if (name === 'drum') {
                this.synthset[DEFAULTDRUM][1].triggerAttack(0, beatValue, 1);
            } else if (name.slice(0, 4) == 'http') {
                this.synthset[name][1].triggerAttack(0, beatValue, 1);
            } else if (name.slice(0, 4) == 'file') {
                this.synthset[name][1].triggerAttack(0, beatValue, 1);
            } else {
                this.performNotes(this.synthset['poly'][1], notes, beatValue, doVibrato, vibratoIntensity, vibratoFrequency);
            }
            break;
        }
    };

    this.stopSound = function (name) {
        this.getSynthByName(name).triggerRelease();
    };

    this.start = function () {
        Tone.Transport.start();
    };

    this.stop = function () {
        Tone.Transport.stop();
    };

    this.setVolume = function (vol) {
        var db = this.tone.gainToDb(vol / 100);
        Tone.Master.volume.rampTo(db, 0.01);
    };

    this.getOscillator = function (oscillatorName, frequency) {
        return new Tone.Oscillator(oscillatorName, frequency).toMaster();
    };
};
