/* This file is generated, do not edit directly */
riot.tag2('code-editor', '<div id="vsplit" ref="vsplit"> <div id="split" ref="split"> <input ref="file_input" id="file-input" type="file" style="display: none;"> <div id="tabs"> <button onclick="{this.newtab}" id="newtab">&nbsp;</button><span class="{selected: name==parent.title}" each="{name in list(files)}"><button class="{selected: name==parent.title}" onclick="{parent.switchtab}">{str(name)}</button><button if="{name==parent.title && len(files)>1}" id="closetab" onclick="{parent.closetab}">&nbsp;</button></span><button class="pull-right" id="tray-button" ref="traybutton">&nbsp;</button> </div> <textarea id="code-container" ref="code"></textarea> </div> <iframe allowtransparency="false" ref="vmframe"></iframe> </div>', 'code-editor { display: flex; flex: 1 1; height: 100%; } code-editor .CodeMirror,[data-is="code-editor"] .CodeMirror{ height: 100%; width: 100%; font-size: 15pt; font-family: "Noto Mono", "DejaVu Sans Mono", monospace, "Noto Emoji"; flex: 1 1; } code-editor .CodeMirror-cursor,[data-is="code-editor"] .CodeMirror-cursor{ width: auto; border: 0; background: transparent; background: rgba(0, 200, 0, .4); } code-editor .CodeMirror-linenumber,[data-is="code-editor"] .CodeMirror-linenumber{ font-size: 14pt; } code-editor .cm-s-solarized .CodeMirror-cursor,[data-is="code-editor"] .cm-s-solarized .CodeMirror-cursor{ border: 0; } code-editor .error-marker,[data-is="code-editor"] .error-marker{ border: 1px solid red; background-color: rgba(255, 0, 0,0.2); border-radius: 3px; } code-editor iframe,[data-is="code-editor"] iframe{ border: 0px; display: none; flex: 1 1; } code-editor #split,[data-is="code-editor"] #split{ display: flex; width: 100%; flex-direction: column; flex: 1 1; height: 100%; float: left; } code-editor #vsplit,[data-is="code-editor"] #vsplit{ display: flex; flex-direction: row; flex: 1 1; height: 100%; } code-editor #tabs button,[data-is="code-editor"] #tabs button{ font-size: 13pt; border-radius: 0; padding: 10px 10px; border: 0px; margin: 0px; } code-editor #tabs button.selected,[data-is="code-editor"] #tabs button.selected{ background-color: #282828; } code-editor #tabs span.selected,[data-is="code-editor"] #tabs span.selected{ white-space: nowrap; } code-editor #closetab,[data-is="code-editor"] #closetab{ background-image: url(lib/sugar-web/graphics/icons/actions/entry-cancel-active.svg); background-repeat: no-repeat; background-color: #282828; width: 28px; background-position: center; background-size: 16px 16px; } code-editor #closetab:active,[data-is="code-editor"] #closetab:active{ background-image: url(lib/sugar-web/graphics/icons/actions/entry-cancel.svg); } code-editor #newtab,[data-is="code-editor"] #newtab{ background-image: url(icons/tab-add.svg); background-repeat: no-repeat; width: 28px; background-position: center; background-size: 20px 20px; } code-editor #tray-button,[data-is="code-editor"] #tray-button{ background-image: url(icons/tray-show.svg); background-repeat: no-repeat; width: 28px; background-position: center; background-size: 20px 20px; }', '', function(opts) {
var ????_modules = {};
????_modules.re = {};

(function(){
    var _ALIAS_MAP, _ASCII_CONTROL_CHARS, _HEX_PAT, _NUM_PAT, _GROUP_PAT, _NAME_PAT, I, IGNORECASE, L, LOCALE, M, MULTILINE, D, DOTALL, U, UNICODE, X, VERBOSE, DEBUG, A, ASCII, supports_unicode, _RE_ESCAPE, _re_cache_map, _re_cache_items, error, has_prop;
    _ALIAS_MAP = (function(){
        var ????_d = {};
        ????_d["null"] = 0;
        ????_d["nul"] = 0;
        ????_d["start of heading"] = 1;
        ????_d["soh"] = 1;
        ????_d["start of text"] = 2;
        ????_d["stx"] = 2;
        ????_d["end of text"] = 3;
        ????_d["etx"] = 3;
        ????_d["end of transmission"] = 4;
        ????_d["eot"] = 4;
        ????_d["enquiry"] = 5;
        ????_d["enq"] = 5;
        ????_d["acknowledge"] = 6;
        ????_d["ack"] = 6;
        ????_d["alert"] = 7;
        ????_d["bel"] = 7;
        ????_d["backspace"] = 8;
        ????_d["bs"] = 8;
        ????_d["character tabulation"] = 9;
        ????_d["horizontal tabulation"] = 9;
        ????_d["ht"] = 9;
        ????_d["tab"] = 9;
        ????_d["line feed"] = 10;
        ????_d["new line"] = 10;
        ????_d["end of line"] = 10;
        ????_d["lf"] = 10;
        ????_d["nl"] = 10;
        ????_d["eol"] = 10;
        ????_d["line tabulation"] = 11;
        ????_d["vertical tabulation"] = 11;
        ????_d["vt"] = 11;
        ????_d["form feed"] = 12;
        ????_d["ff"] = 12;
        ????_d["carriage return"] = 13;
        ????_d["cr"] = 13;
        ????_d["shift out"] = 14;
        ????_d["locking-shift one"] = 14;
        ????_d["so"] = 14;
        ????_d["shift in"] = 15;
        ????_d["locking-shift zero"] = 15;
        ????_d["si"] = 15;
        ????_d["data link escape"] = 16;
        ????_d["dle"] = 16;
        ????_d["device control one"] = 17;
        ????_d["dc1"] = 17;
        ????_d["device control two"] = 18;
        ????_d["dc2"] = 18;
        ????_d["device control three"] = 19;
        ????_d["dc3"] = 19;
        ????_d["device control four"] = 20;
        ????_d["dc4"] = 20;
        ????_d["negative acknowledge"] = 21;
        ????_d["nak"] = 21;
        ????_d["synchronous idle"] = 22;
        ????_d["syn"] = 22;
        ????_d["end of transmission block"] = 23;
        ????_d["etb"] = 23;
        ????_d["cancel"] = 24;
        ????_d["can"] = 24;
        ????_d["end of medium"] = 25;
        ????_d["eom"] = 25;
        ????_d["substitute"] = 26;
        ????_d["sub"] = 26;
        ????_d["escape"] = 27;
        ????_d["esc"] = 27;
        ????_d["information separator four"] = 28;
        ????_d["file separator"] = 28;
        ????_d["fs"] = 28;
        ????_d["information separator three"] = 29;
        ????_d["group separator"] = 29;
        ????_d["gs"] = 29;
        ????_d["information separator two"] = 30;
        ????_d["record separator"] = 30;
        ????_d["rs"] = 30;
        ????_d["information separator one"] = 31;
        ????_d["unit separator"] = 31;
        ????_d["us"] = 31;
        ????_d["sp"] = 32;
        ????_d["delete"] = 127;
        ????_d["del"] = 127;
        ????_d["padding character"] = 128;
        ????_d["pad"] = 128;
        ????_d["high octet preset"] = 129;
        ????_d["hop"] = 129;
        ????_d["break permitted here"] = 130;
        ????_d["bph"] = 130;
        ????_d["no break here"] = 131;
        ????_d["nbh"] = 131;
        ????_d["index"] = 132;
        ????_d["ind"] = 132;
        ????_d["next line"] = 133;
        ????_d["nel"] = 133;
        ????_d["start of selected area"] = 134;
        ????_d["ssa"] = 134;
        ????_d["end of selected area"] = 135;
        ????_d["esa"] = 135;
        ????_d["character tabulation set"] = 136;
        ????_d["horizontal tabulation set"] = 136;
        ????_d["hts"] = 136;
        ????_d["character tabulation with justification"] = 137;
        ????_d["horizontal tabulation with justification"] = 137;
        ????_d["htj"] = 137;
        ????_d["line tabulation set"] = 138;
        ????_d["vertical tabulation set"] = 138;
        ????_d["vts"] = 138;
        ????_d["partial line forward"] = 139;
        ????_d["partial line down"] = 139;
        ????_d["pld"] = 139;
        ????_d["partial line backward"] = 140;
        ????_d["partial line up"] = 140;
        ????_d["plu"] = 140;
        ????_d["reverse line feed"] = 141;
        ????_d["reverse index"] = 141;
        ????_d["ri"] = 141;
        ????_d["single shift two"] = 142;
        ????_d["single-shift-2"] = 142;
        ????_d["ss2"] = 142;
        ????_d["single shift three"] = 143;
        ????_d["single-shift-3"] = 143;
        ????_d["ss3"] = 143;
        ????_d["device control string"] = 144;
        ????_d["dcs"] = 144;
        ????_d["private use one"] = 145;
        ????_d["private use-1"] = 145;
        ????_d["pu1"] = 145;
        ????_d["private use two"] = 146;
        ????_d["private use-2"] = 146;
        ????_d["pu2"] = 146;
        ????_d["set transmit state"] = 147;
        ????_d["sts"] = 147;
        ????_d["cancel character"] = 148;
        ????_d["cch"] = 148;
        ????_d["message waiting"] = 149;
        ????_d["mw"] = 149;
        ????_d["start of guarded area"] = 150;
        ????_d["start of protected area"] = 150;
        ????_d["spa"] = 150;
        ????_d["end of guarded area"] = 151;
        ????_d["end of protected area"] = 151;
        ????_d["epa"] = 151;
        ????_d["start of string"] = 152;
        ????_d["sos"] = 152;
        ????_d["single graphic character introducer"] = 153;
        ????_d["sgc"] = 153;
        ????_d["single character introducer"] = 154;
        ????_d["sci"] = 154;
        ????_d["control sequence introducer"] = 155;
        ????_d["csi"] = 155;
        ????_d["string terminator"] = 156;
        ????_d["st"] = 156;
        ????_d["operating system command"] = 157;
        ????_d["osc"] = 157;
        ????_d["privacy message"] = 158;
        ????_d["pm"] = 158;
        ????_d["application program command"] = 159;
        ????_d["apc"] = 159;
        ????_d["nbsp"] = 160;
        ????_d["shy"] = 173;
        ????_d["latin capital letter gha"] = 418;
        ????_d["latin small letter gha"] = 419;
        ????_d["cgj"] = 847;
        ????_d["alm"] = 1564;
        ????_d["syriac sublinear colon skewed left"] = 1801;
        ????_d["kannada letter llla"] = 3294;
        ????_d["lao letter fo fon"] = 3741;
        ????_d["lao letter fo fay"] = 3743;
        ????_d["lao letter ro"] = 3747;
        ????_d["lao letter lo"] = 3749;
        ????_d["tibetan mark bka- shog gi mgo rgyan"] = 4048;
        ????_d["fvs1"] = 6155;
        ????_d["fvs2"] = 6156;
        ????_d["fvs3"] = 6157;
        ????_d["mvs"] = 6158;
        ????_d["zwsp"] = 8203;
        ????_d["zwnj"] = 8204;
        ????_d["zwj"] = 8205;
        ????_d["lrm"] = 8206;
        ????_d["rlm"] = 8207;
        ????_d["lre"] = 8234;
        ????_d["rle"] = 8235;
        ????_d["pdf"] = 8236;
        ????_d["lro"] = 8237;
        ????_d["rlo"] = 8238;
        ????_d["nnbsp"] = 8239;
        ????_d["mmsp"] = 8287;
        ????_d["wj"] = 8288;
        ????_d["lri"] = 8294;
        ????_d["rli"] = 8295;
        ????_d["fsi"] = 8296;
        ????_d["pdi"] = 8297;
        ????_d["weierstrass elliptic function"] = 8472;
        ????_d["micr on us symbol"] = 9288;
        ????_d["micr dash symbol"] = 9289;
        ????_d["leftwards triangle-headed arrow with double vertical stroke"] = 11130;
        ????_d["rightwards triangle-headed arrow with double vertical stroke"] = 11132;
        ????_d["yi syllable iteration mark"] = 40981;
        ????_d["presentation form for vertical right white lenticular bracket"] = 65048;
        ????_d["vs1"] = 65024;
        ????_d["vs2"] = 65025;
        ????_d["vs3"] = 65026;
        ????_d["vs4"] = 65027;
        ????_d["vs5"] = 65028;
        ????_d["vs6"] = 65029;
        ????_d["vs7"] = 65030;
        ????_d["vs8"] = 65031;
        ????_d["vs9"] = 65032;
        ????_d["vs10"] = 65033;
        ????_d["vs11"] = 65034;
        ????_d["vs12"] = 65035;
        ????_d["vs13"] = 65036;
        ????_d["vs14"] = 65037;
        ????_d["vs15"] = 65038;
        ????_d["vs16"] = 65039;
        ????_d["byte order mark"] = 65279;
        ????_d["bom"] = 65279;
        ????_d["zwnbsp"] = 65279;
        ????_d["cuneiform sign nu11 tenu"] = 74452;
        ????_d["cuneiform sign nu11 over nu11 bur over bur"] = 74453;
        ????_d["byzantine musical symbol fthora skliron chroma vasis"] = 118981;
        ????_d["vs17"] = 917760;
        ????_d["vs18"] = 917761;
        ????_d["vs19"] = 917762;
        ????_d["vs20"] = 917763;
        ????_d["vs21"] = 917764;
        ????_d["vs22"] = 917765;
        ????_d["vs23"] = 917766;
        ????_d["vs24"] = 917767;
        ????_d["vs25"] = 917768;
        ????_d["vs26"] = 917769;
        ????_d["vs27"] = 917770;
        ????_d["vs28"] = 917771;
        ????_d["vs29"] = 917772;
        ????_d["vs30"] = 917773;
        ????_d["vs31"] = 917774;
        ????_d["vs32"] = 917775;
        ????_d["vs33"] = 917776;
        ????_d["vs34"] = 917777;
        ????_d["vs35"] = 917778;
        ????_d["vs36"] = 917779;
        ????_d["vs37"] = 917780;
        ????_d["vs38"] = 917781;
        ????_d["vs39"] = 917782;
        ????_d["vs40"] = 917783;
        ????_d["vs41"] = 917784;
        ????_d["vs42"] = 917785;
        ????_d["vs43"] = 917786;
        ????_d["vs44"] = 917787;
        ????_d["vs45"] = 917788;
        ????_d["vs46"] = 917789;
        ????_d["vs47"] = 917790;
        ????_d["vs48"] = 917791;
        ????_d["vs49"] = 917792;
        ????_d["vs50"] = 917793;
        ????_d["vs51"] = 917794;
        ????_d["vs52"] = 917795;
        ????_d["vs53"] = 917796;
        ????_d["vs54"] = 917797;
        ????_d["vs55"] = 917798;
        ????_d["vs56"] = 917799;
        ????_d["vs57"] = 917800;
        ????_d["vs58"] = 917801;
        ????_d["vs59"] = 917802;
        ????_d["vs60"] = 917803;
        ????_d["vs61"] = 917804;
        ????_d["vs62"] = 917805;
        ????_d["vs63"] = 917806;
        ????_d["vs64"] = 917807;
        ????_d["vs65"] = 917808;
        ????_d["vs66"] = 917809;
        ????_d["vs67"] = 917810;
        ????_d["vs68"] = 917811;
        ????_d["vs69"] = 917812;
        ????_d["vs70"] = 917813;
        ????_d["vs71"] = 917814;
        ????_d["vs72"] = 917815;
        ????_d["vs73"] = 917816;
        ????_d["vs74"] = 917817;
        ????_d["vs75"] = 917818;
        ????_d["vs76"] = 917819;
        ????_d["vs77"] = 917820;
        ????_d["vs78"] = 917821;
        ????_d["vs79"] = 917822;
        ????_d["vs80"] = 917823;
        ????_d["vs81"] = 917824;
        ????_d["vs82"] = 917825;
        ????_d["vs83"] = 917826;
        ????_d["vs84"] = 917827;
        ????_d["vs85"] = 917828;
        ????_d["vs86"] = 917829;
        ????_d["vs87"] = 917830;
        ????_d["vs88"] = 917831;
        ????_d["vs89"] = 917832;
        ????_d["vs90"] = 917833;
        ????_d["vs91"] = 917834;
        ????_d["vs92"] = 917835;
        ????_d["vs93"] = 917836;
        ????_d["vs94"] = 917837;
        ????_d["vs95"] = 917838;
        ????_d["vs96"] = 917839;
        ????_d["vs97"] = 917840;
        ????_d["vs98"] = 917841;
        ????_d["vs99"] = 917842;
        ????_d["vs100"] = 917843;
        ????_d["vs101"] = 917844;
        ????_d["vs102"] = 917845;
        ????_d["vs103"] = 917846;
        ????_d["vs104"] = 917847;
        ????_d["vs105"] = 917848;
        ????_d["vs106"] = 917849;
        ????_d["vs107"] = 917850;
        ????_d["vs108"] = 917851;
        ????_d["vs109"] = 917852;
        ????_d["vs110"] = 917853;
        ????_d["vs111"] = 917854;
        ????_d["vs112"] = 917855;
        ????_d["vs113"] = 917856;
        ????_d["vs114"] = 917857;
        ????_d["vs115"] = 917858;
        ????_d["vs116"] = 917859;
        ????_d["vs117"] = 917860;
        ????_d["vs118"] = 917861;
        ????_d["vs119"] = 917862;
        ????_d["vs120"] = 917863;
        ????_d["vs121"] = 917864;
        ????_d["vs122"] = 917865;
        ????_d["vs123"] = 917866;
        ????_d["vs124"] = 917867;
        ????_d["vs125"] = 917868;
        ????_d["vs126"] = 917869;
        ????_d["vs127"] = 917870;
        ????_d["vs128"] = 917871;
        ????_d["vs129"] = 917872;
        ????_d["vs130"] = 917873;
        ????_d["vs131"] = 917874;
        ????_d["vs132"] = 917875;
        ????_d["vs133"] = 917876;
        ????_d["vs134"] = 917877;
        ????_d["vs135"] = 917878;
        ????_d["vs136"] = 917879;
        ????_d["vs137"] = 917880;
        ????_d["vs138"] = 917881;
        ????_d["vs139"] = 917882;
        ????_d["vs140"] = 917883;
        ????_d["vs141"] = 917884;
        ????_d["vs142"] = 917885;
        ????_d["vs143"] = 917886;
        ????_d["vs144"] = 917887;
        ????_d["vs145"] = 917888;
        ????_d["vs146"] = 917889;
        ????_d["vs147"] = 917890;
        ????_d["vs148"] = 917891;
        ????_d["vs149"] = 917892;
        ????_d["vs150"] = 917893;
        ????_d["vs151"] = 917894;
        ????_d["vs152"] = 917895;
        ????_d["vs153"] = 917896;
        ????_d["vs154"] = 917897;
        ????_d["vs155"] = 917898;
        ????_d["vs156"] = 917899;
        ????_d["vs157"] = 917900;
        ????_d["vs158"] = 917901;
        ????_d["vs159"] = 917902;
        ????_d["vs160"] = 917903;
        ????_d["vs161"] = 917904;
        ????_d["vs162"] = 917905;
        ????_d["vs163"] = 917906;
        ????_d["vs164"] = 917907;
        ????_d["vs165"] = 917908;
        ????_d["vs166"] = 917909;
        ????_d["vs167"] = 917910;
        ????_d["vs168"] = 917911;
        ????_d["vs169"] = 917912;
        ????_d["vs170"] = 917913;
        ????_d["vs171"] = 917914;
        ????_d["vs172"] = 917915;
        ????_d["vs173"] = 917916;
        ????_d["vs174"] = 917917;
        ????_d["vs175"] = 917918;
        ????_d["vs176"] = 917919;
        ????_d["vs177"] = 917920;
        ????_d["vs178"] = 917921;
        ????_d["vs179"] = 917922;
        ????_d["vs180"] = 917923;
        ????_d["vs181"] = 917924;
        ????_d["vs182"] = 917925;
        ????_d["vs183"] = 917926;
        ????_d["vs184"] = 917927;
        ????_d["vs185"] = 917928;
        ????_d["vs186"] = 917929;
        ????_d["vs187"] = 917930;
        ????_d["vs188"] = 917931;
        ????_d["vs189"] = 917932;
        ????_d["vs190"] = 917933;
        ????_d["vs191"] = 917934;
        ????_d["vs192"] = 917935;
        ????_d["vs193"] = 917936;
        ????_d["vs194"] = 917937;
        ????_d["vs195"] = 917938;
        ????_d["vs196"] = 917939;
        ????_d["vs197"] = 917940;
        ????_d["vs198"] = 917941;
        ????_d["vs199"] = 917942;
        ????_d["vs200"] = 917943;
        ????_d["vs201"] = 917944;
        ????_d["vs202"] = 917945;
        ????_d["vs203"] = 917946;
        ????_d["vs204"] = 917947;
        ????_d["vs205"] = 917948;
        ????_d["vs206"] = 917949;
        ????_d["vs207"] = 917950;
        ????_d["vs208"] = 917951;
        ????_d["vs209"] = 917952;
        ????_d["vs210"] = 917953;
        ????_d["vs211"] = 917954;
        ????_d["vs212"] = 917955;
        ????_d["vs213"] = 917956;
        ????_d["vs214"] = 917957;
        ????_d["vs215"] = 917958;
        ????_d["vs216"] = 917959;
        ????_d["vs217"] = 917960;
        ????_d["vs218"] = 917961;
        ????_d["vs219"] = 917962;
        ????_d["vs220"] = 917963;
        ????_d["vs221"] = 917964;
        ????_d["vs222"] = 917965;
        ????_d["vs223"] = 917966;
        ????_d["vs224"] = 917967;
        ????_d["vs225"] = 917968;
        ????_d["vs226"] = 917969;
        ????_d["vs227"] = 917970;
        ????_d["vs228"] = 917971;
        ????_d["vs229"] = 917972;
        ????_d["vs230"] = 917973;
        ????_d["vs231"] = 917974;
        ????_d["vs232"] = 917975;
        ????_d["vs233"] = 917976;
        ????_d["vs234"] = 917977;
        ????_d["vs235"] = 917978;
        ????_d["vs236"] = 917979;
        ????_d["vs237"] = 917980;
        ????_d["vs238"] = 917981;
        ????_d["vs239"] = 917982;
        ????_d["vs240"] = 917983;
        ????_d["vs241"] = 917984;
        ????_d["vs242"] = 917985;
        ????_d["vs243"] = 917986;
        ????_d["vs244"] = 917987;
        ????_d["vs245"] = 917988;
        ????_d["vs246"] = 917989;
        ????_d["vs247"] = 917990;
        ????_d["vs248"] = 917991;
        ????_d["vs249"] = 917992;
        ????_d["vs250"] = 917993;
        ????_d["vs251"] = 917994;
        ????_d["vs252"] = 917995;
        ????_d["vs253"] = 917996;
        ????_d["vs254"] = 917997;
        ????_d["vs255"] = 917998;
        ????_d["vs256"] = 917999;
        return ????_d;
    }).call(this);
    _ASCII_CONTROL_CHARS = (function(){
        var ????_d = {};
        ????_d["a"] = 7;
        ????_d["b"] = 8;
        ????_d["f"] = 12;
        ????_d["n"] = 10;
        ????_d["r"] = 13;
        ????_d["t"] = 9;
        ????_d["v"] = 11;
        return ????_d;
    }).call(this);
    _HEX_PAT = /^[a-fA-F0-9]/;
    _NUM_PAT = /^[0-9]/;
    _GROUP_PAT = /<([^>]+)>/;
    _NAME_PAT = /^[a-zA-Z ]/;
    I = IGNORECASE = 2;
    L = LOCALE = 4;
    M = MULTILINE = 8;
    D = DOTALL = 16;
    U = UNICODE = 32;
    X = VERBOSE = 64;
    DEBUG = 128;
    A = ASCII = 256;
    supports_unicode = RegExp.prototype.unicode !== undefined;
    _RE_ESCAPE = /[-\/\\^$*+?.()|[\]{}]/g;
    _re_cache_map = {};
    _re_cache_items = [];
    error = SyntaxError;
    has_prop = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
    function _expand(groups, repl, group_name_map) {
        var i, ans, ch;
        i = 0;
        function next() {
            return repl[i++];
        };

        function peek() {
            return repl[(typeof i === "number" && i < 0) ? repl.length + i : i];
        };

        function read_digits(count, pat, base, maxval, prefix) {
            var ans, greedy, nval;
            ans = prefix || "";
            greedy = count === Number.MAX_VALUE;
            while (count > 0) {
                count -= 1;
                if (!pat.test(peek())) {
                    if (greedy) {
                        break;
                    }
                    return ans;
                }
                ans += next();
            }
            nval = parseInt(ans, base);
            if (nval > maxval) {
                return ans;
            }
            return nval;
        };
        if (!read_digits.__argnames__) Object.defineProperties(read_digits, {
            __argnames__ : {value: ["count", "pat", "base", "maxval", "prefix"]}
        });

        function read_escape_sequence() {
            var q, ans, m, gn, code, name, key;
            q = next();
            if (!q || q === "\\") {
                return "\\";
            }
            if ("\"'".indexOf(q) !== -1) {
                return q;
            }
            if (_ASCII_CONTROL_CHARS[(typeof q === "number" && q < 0) ? _ASCII_CONTROL_CHARS.length + q : q]) {
                return String.fromCharCode(_ASCII_CONTROL_CHARS[(typeof q === "number" && q < 0) ? _ASCII_CONTROL_CHARS.length + q : q]);
            }
            if ("0" <= q && q <= "9") {
                ans = read_digits(Number.MAX_VALUE, _NUM_PAT, 10, Number.MAX_VALUE, q);
                if (typeof ans === "number") {
                    return groups[(typeof ans === "number" && ans < 0) ? groups.length + ans : ans] || "";
                }
                return "\\" + ans;
            }
            if (q === "g") {
                m = _GROUP_PAT.exec(repl.slice(i));
                if (m !== null) {
                    i += m[0].length;
                    gn = m[1];
                    if (isNaN(parseInt(gn, 10))) {
                        if (!has_prop(group_name_map, gn)) {
                            return "";
                        }
                        gn = (????_expr_temp = group_name_map[(typeof gn === "number" && gn < 0) ? group_name_map.length + gn : gn])[????_expr_temp.length-1];
                    }
                    return groups[(typeof gn === "number" && gn < 0) ? groups.length + gn : gn] || "";
                }
            }
            if (q === "x") {
                code = read_digits(2, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    return String.fromCharCode(code);
                }
                return "\\x" + code;
            }
            if (q === "u") {
                code = read_digits(4, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    return String.fromCharCode(code);
                }
                return "\\u" + code;
            }
            if (q === "U") {
                code = read_digits(8, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    if (code <= 65535) {
                        return String.fromCharCode(code);
                    }
                    code -= 65536;
                    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                }
                return "\\U" + code;
            }
            if (q === "N" && peek() === "{") {
                next();
                name = "";
                while (_NAME_PAT.test(peek())) {
                    name += next();
                }
                if (peek() !== "}") {
                    return "\\N{" + name;
                }
                next();
                key = (name || "").toLowerCase();
                if (!name || !has_prop(_ALIAS_MAP, key)) {
                    return "\\N{" + name + "}";
                }
                code = _ALIAS_MAP[(typeof key === "number" && key < 0) ? _ALIAS_MAP.length + key : key];
                if (code <= 65535) {
                    return String.fromCharCode(code);
                }
                code -= 65536;
                return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
            }
            return "\\" + q;
        };

        ans = ch = "";
        while (ch = next()) {
            if (ch === "\\") {
                ans += read_escape_sequence();
            } else {
                ans += ch;
            }
        }
        return ans;
    };
    if (!_expand.__argnames__) Object.defineProperties(_expand, {
        __argnames__ : {value: ["groups", "repl", "group_name_map"]}
    });

    function transform_regex(source, flags) {
        var pos, previous_backslash, in_class, ans, group_map, group_count, ch, extension, close, flag_map, flgs, q, name;
        pos = 0;
        previous_backslash = in_class = false;
        ans = "";
        group_map = {};
        flags = flags || 0;
        group_count = 0;
        while (pos < source.length) {
            ch = source[pos++];
            if (previous_backslash) {
                ans += "\\" + ch;
                previous_backslash = false;
                continue;
            }
            if (in_class) {
                if (ch === "]") {
                    in_class = false;
                }
                ans += ch;
                continue;
            }
            if (ch === "\\") {
                previous_backslash = true;
                continue;
            }
            if (ch === "[") {
                in_class = true;
                if (source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos] === "]") {
                    pos += 1;
                    ch = "[\\]";
                }
            } else if (ch === "(") {
                if (source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos] === "?") {
                    extension = source[????_bound_index(pos + 1, source)];
                    if (extension === "#") {
                        close = source.indexOf(")", pos + 1);
                        if (close === -1) {
                            throw new ValueError("Expecting a closing )");
                        }
                        pos = close + 1;
                        continue;
                    }
                    if ("aiLmsux".indexOf(extension) !== -1) {
                        flag_map = (function(){
                            var ????_d = {};
                            ????_d["a"] = ASCII;
                            ????_d["i"] = IGNORECASE;
                            ????_d["L"] = LOCALE;
                            ????_d["m"] = MULTILINE;
                            ????_d["s"] = DOTALL;
                            ????_d["u"] = UNICODE;
                            ????_d["x"] = VERBOSE;
                            return ????_d;
                        }).call(this);
                        close = source.indexOf(")", pos + 1);
                        if (close === -1) {
                            throw new SyntaxError("Expecting a closing )");
                        }
                        flgs = source.slice(pos + 1, close);
                        for (var i = 0; i < flgs.length; i++) {
                            q = flgs[(typeof i === "number" && i < 0) ? flgs.length + i : i];
                            if (!has_prop(flag_map, q)) {
                                throw new SyntaxError("Invalid flag: " + q);
                            }
                            flags |= flag_map[(typeof q === "number" && q < 0) ? flag_map.length + q : q];
                        }
                        pos = close + 1;
                        continue;
                    }
                    if (extension === "<") {
                        throw new SyntaxError("Look behind assertions are not supported in JavaScript");
                    }
                    if (extension === "(") {
                        throw new SyntaxError("Group existence assertions are not supported in JavaScript");
                    }
                    if (extension === "P") {
                        pos += 2;
                        q = source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos];
                        if (q === "<") {
                            close = source.indexOf(">", pos);
                            if (close === -1) {
                                throw new SyntaxError("Named group not closed, expecting >");
                            }
                            name = source.slice(pos + 1, close);
                            if (!has_prop(group_map, name)) {
                                group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name] = [];
                            }
                            group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name].push(++group_count);
                            pos = close + 1;
                        } else if (q === "=") {
                            close = source.indexOf(")", pos);
                            if (close === -1) {
                                throw new SyntaxError("Named group back-reference not closed, expecting a )");
                            }
                            name = source.slice(pos + 1, close);
                            if (!isNaN(parseInt(name, 10))) {
                                ans += "\\" + name;
                            } else {
                                if (!has_prop(group_map, name)) {
                                    throw new SyntaxError("Invalid back-reference. The named group: " + name + " has not yet been defined.");
                                }
                                ans += "\\" + (????_expr_temp = group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name])[????_expr_temp.length-1];
                            }
                            pos = close + 1;
                            continue;
                        } else {
                            throw new SyntaxError("Expecting < or = after (?P");
                        }
                    }
                } else {
                    group_count += 1;
                }
            } else if (ch === "." && flags & DOTALL) {
                ans += "[\\s\\S]";
                continue;
            }
            ans += ch;
        }
        return [ans, flags, group_map];
    };
    if (!transform_regex.__argnames__) Object.defineProperties(transform_regex, {
        __argnames__ : {value: ["source", "flags"]}
    });

    function MatchObject() {
        if (this.????_object_id === undefined) Object.defineProperty(this, "????_object_id", {"value":++????_object_counter});
        MatchObject.prototype.__bind_methods__.call(this);
        MatchObject.prototype.__init__.apply(this, arguments);
    }
    Object.defineProperty(MatchObject.prototype, "__bind_methods__", {value: function () {
        this._compute_extents = MatchObject.prototype._compute_extents.bind(this);
        this.groups = MatchObject.prototype.groups.bind(this);
        this._group_number = MatchObject.prototype._group_number.bind(this);
        this._group_val = MatchObject.prototype._group_val.bind(this);
        this.group = MatchObject.prototype.group.bind(this);
        this.start = MatchObject.prototype.start.bind(this);
        this.end = MatchObject.prototype.end.bind(this);
        this.span = MatchObject.prototype.span.bind(this);
        this.expand = MatchObject.prototype.expand.bind(this);
        this.groupdict = MatchObject.prototype.groupdict.bind(this);
        this.captures = MatchObject.prototype.captures.bind(this);
        this.capturesdict = MatchObject.prototype.capturesdict.bind(this);
    }});
    MatchObject.prototype.__init__ = function __init__(regex, match, pos, endpos) {
        var self = this;
        var ????_unpack;
        self.re = regex;
        self.string = match.input;
        self._start_pos = match.index;
        self._groups = match;
        ????_unpack = [pos, endpos];
        self.pos = ????_unpack[0];
        self.endpos = ????_unpack[1];
    };
    if (!MatchObject.prototype.__init__.__argnames__) Object.defineProperties(MatchObject.prototype.__init__, {
        __argnames__ : {value: ["regex", "match", "pos", "endpos"]}
    });
    MatchObject.__argnames__ = MatchObject.prototype.__init__.__argnames__;
    MatchObject.__handles_kwarg_interpolation__ = MatchObject.prototype.__init__.__handles_kwarg_interpolation__;
    MatchObject.prototype._compute_extents = function _compute_extents() {
        var self = this;
        var match, offset, extent, loc, g;
        match = self._groups;
        self._start = Array(match.length);
        self._end = Array(match.length);
        self._start[0] = self._start_pos;
        self._end[0] = self._start_pos + match[0].length;
        offset = self._start_pos;
        extent = match[0];
        loc = 0;
        for (var i = 1; i < match.length; i++) {
            g = match[(typeof i === "number" && i < 0) ? match.length + i : i];
            loc = extent.indexOf(g, loc);
            if (loc === -1) {
                (????_expr_temp = self._start)[(typeof i === "number" && i < 0) ? ????_expr_temp.length + i : i] = (????_expr_temp = self._start)[????_bound_index(i - 1, ????_expr_temp)];
                (????_expr_temp = self._end)[(typeof i === "number" && i < 0) ? ????_expr_temp.length + i : i] = (????_expr_temp = self._end)[????_bound_index(i - 1, ????_expr_temp)];
            } else {
                (????_expr_temp = self._start)[(typeof i === "number" && i < 0) ? ????_expr_temp.length + i : i] = offset + loc;
                loc += g.length;
                (????_expr_temp = self._end)[(typeof i === "number" && i < 0) ? ????_expr_temp.length + i : i] = offset + loc;
            }
        }
    };
    if (!MatchObject.prototype._compute_extents.__argnames__) Object.defineProperties(MatchObject.prototype._compute_extents, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.groups = function groups() {
        var self = this;
        var defval = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? groups.__defaults__.defval : arguments[0];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "defval")){
            defval = ????_kwargs_obj.defval;
        }
        var ans, val;
        ans = [];
        for (var i = 1; i < self._groups.length; i++) {
            val = (????_expr_temp = self._groups)[(typeof i === "number" && i < 0) ? ????_expr_temp.length + i : i];
            if (val === undefined) {
                val = defval;
            }
            ans.push(val);
        }
        return ans;
    };
    if (!MatchObject.prototype.groups.__defaults__) Object.defineProperties(MatchObject.prototype.groups, {
        __defaults__ : {value: {defval:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["defval"]}
    });
    MatchObject.prototype._group_number = function _group_number(g) {
        var self = this;
        if (typeof g === "number") {
            return g;
        }
        if (has_prop(self.re.group_name_map, g)) {
            return (????_expr_temp = (????_expr_temp = self.re.group_name_map)[(typeof g === "number" && g < 0) ? ????_expr_temp.length + g : g])[????_expr_temp.length-1];
        }
        return g;
    };
    if (!MatchObject.prototype._group_number.__argnames__) Object.defineProperties(MatchObject.prototype._group_number, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype._group_val = function _group_val(q, defval) {
        var self = this;
        var val;
        val = undefined;
        if (typeof q === "number" && -1 < q && q < self._groups.length) {
            val = (????_expr_temp = self._groups)[(typeof q === "number" && q < 0) ? ????_expr_temp.length + q : q];
        } else {
            if (has_prop(self.re.group_name_map, q)) {
                val = (????_expr_temp = self._groups)[????_bound_index((????_expr_temp = (????_expr_temp = self.re.group_name_map)[(typeof q === "number" && q < 0) ? ????_expr_temp.length + q : q])[????_expr_temp.length-1], ????_expr_temp)];
            }
        }
        if (val === undefined) {
            val = defval;
        }
        return val;
    };
    if (!MatchObject.prototype._group_val.__argnames__) Object.defineProperties(MatchObject.prototype._group_val, {
        __argnames__ : {value: ["q", "defval"]}
    });
    MatchObject.prototype.group = function group() {
        var self = this;
        var ans, q;
        if (arguments.length === 0) {
            return self._groups[0];
        }
        ans = [];
        for (var i = 0; i < arguments.length; i++) {
            q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
            ans.push(self._group_val(q, null));
        }
        return (ans.length === 1) ? ans[0] : ans;
    };
    if (!MatchObject.prototype.group.__argnames__) Object.defineProperties(MatchObject.prototype.group, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.start = function start(g) {
        var self = this;
        var val;
        if (self._start === undefined) {
            self._compute_extents();
        }
        val = (????_expr_temp = self._start)[????_bound_index(self._group_number(g || 0), ????_expr_temp)];
        if (val === undefined) {
            val = -1;
        }
        return val;
    };
    if (!MatchObject.prototype.start.__argnames__) Object.defineProperties(MatchObject.prototype.start, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.end = function end(g) {
        var self = this;
        var val;
        if (self._end === undefined) {
            self._compute_extents();
        }
        val = (????_expr_temp = self._end)[????_bound_index(self._group_number(g || 0), ????_expr_temp)];
        if (val === undefined) {
            val = -1;
        }
        return val;
    };
    if (!MatchObject.prototype.end.__argnames__) Object.defineProperties(MatchObject.prototype.end, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.span = function span(g) {
        var self = this;
        return ????_list_decorate([ self.start(g), self.end(g) ]);
    };
    if (!MatchObject.prototype.span.__argnames__) Object.defineProperties(MatchObject.prototype.span, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.expand = function expand(repl) {
        var self = this;
        return _expand(repl, this._groups, this.re.group_name_map);
    };
    if (!MatchObject.prototype.expand.__argnames__) Object.defineProperties(MatchObject.prototype.expand, {
        __argnames__ : {value: ["repl"]}
    });
    MatchObject.prototype.groupdict = function groupdict() {
        var self = this;
        var defval = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? groupdict.__defaults__.defval : arguments[0];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "defval")){
            defval = ????_kwargs_obj.defval;
        }
        var gnm, names, ans, name, val;
        gnm = self.re.group_name_map;
        names = Object.keys(gnm);
        ans = {};
        for (var i = 0; i < names.length; i++) {
            name = names[(typeof i === "number" && i < 0) ? names.length + i : i];
            if (has_prop(gnm, name)) {
                val = (????_expr_temp = self._groups)[????_bound_index((????_expr_temp = gnm[(typeof name === "number" && name < 0) ? gnm.length + name : name])[????_expr_temp.length-1], ????_expr_temp)];
                if (val === undefined) {
                    val = defval;
                }
                ans[(typeof name === "number" && name < 0) ? ans.length + name : name] = val;
            }
        }
        return ans;
    };
    if (!MatchObject.prototype.groupdict.__defaults__) Object.defineProperties(MatchObject.prototype.groupdict, {
        __defaults__ : {value: {defval:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["defval"]}
    });
    MatchObject.prototype.captures = function captures(group_name) {
        var self = this;
        var ans, groups, val;
        ans = ????_list_decorate([]);
        if (!has_prop(self.re.group_name_map, group_name)) {
            return ans;
        }
        groups = (????_expr_temp = self.re.group_name_map)[(typeof group_name === "number" && group_name < 0) ? ????_expr_temp.length + group_name : group_name];
        for (var i = 0; i < groups.length; i++) {
            val = (????_expr_temp = self._groups)[????_bound_index(groups[(typeof i === "number" && i < 0) ? groups.length + i : i], ????_expr_temp)];
            if (val !== undefined) {
                ans.push(val);
            }
        }
        return ans;
    };
    if (!MatchObject.prototype.captures.__argnames__) Object.defineProperties(MatchObject.prototype.captures, {
        __argnames__ : {value: ["group_name"]}
    });
    MatchObject.prototype.capturesdict = function capturesdict() {
        var self = this;
        var gnm, names, ans, name;
        gnm = self.re.group_name_map;
        names = Object.keys(gnm);
        ans = {};
        for (var i = 0; i < names.length; i++) {
            name = names[(typeof i === "number" && i < 0) ? names.length + i : i];
            ans[(typeof name === "number" && name < 0) ? ans.length + name : name] = self.captures(name);
        }
        return ans;
    };
    if (!MatchObject.prototype.capturesdict.__argnames__) Object.defineProperties(MatchObject.prototype.capturesdict, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.__repr__ = function __repr__ () {
                return "<" + __name__ + "." + this.constructor.name + " #" + this.????_object_id + ">";
    };
    MatchObject.prototype.__str__ = function __str__ () {
        return this.__repr__();
    };
    Object.defineProperty(MatchObject.prototype, "__bases__", {value: []});

    function RegexObject() {
        if (this.????_object_id === undefined) Object.defineProperty(this, "????_object_id", {"value":++????_object_counter});
        RegexObject.prototype.__bind_methods__.call(this);
        RegexObject.prototype.__init__.apply(this, arguments);
    }
    Object.defineProperty(RegexObject.prototype, "__bind_methods__", {value: function () {
        this._do_search = RegexObject.prototype._do_search.bind(this);
        this.search = RegexObject.prototype.search.bind(this);
        this.match = RegexObject.prototype.match.bind(this);
        this.split = RegexObject.prototype.split.bind(this);
        this.findall = RegexObject.prototype.findall.bind(this);
        this.finditer = RegexObject.prototype.finditer.bind(this);
        this.subn = RegexObject.prototype.subn.bind(this);
        this.sub = RegexObject.prototype.sub.bind(this);
    }});
    RegexObject.prototype.__init__ = function __init__(pattern, flags) {
        var self = this;
        var ????_unpack, modifiers;
        self.pattern = (????_instanceof(pattern, RegExp)) ? pattern.source : pattern;
        ????_unpack = transform_regex(self.pattern, flags);
????_unpack = ????_unpack_asarray(3, ????_unpack);
        self.js_pattern = ????_unpack[0];
        self.flags = ????_unpack[1];
        self.group_name_map = ????_unpack[2];
        modifiers = "";
        if (self.flags & IGNORECASE) {
            modifiers += "i";
        }
        if (self.flags & MULTILINE) {
            modifiers += "m";
        }
        if (!(self.flags & ASCII) && supports_unicode) {
            modifiers += "u";
        }
        self._modifiers = modifiers + "g";
        self._pattern = new RegExp(self.js_pattern, self._modifiers);
    };
    if (!RegexObject.prototype.__init__.__argnames__) Object.defineProperties(RegexObject.prototype.__init__, {
        __argnames__ : {value: ["pattern", "flags"]}
    });
    RegexObject.__argnames__ = RegexObject.prototype.__init__.__argnames__;
    RegexObject.__handles_kwarg_interpolation__ = RegexObject.prototype.__init__.__handles_kwarg_interpolation__;
    RegexObject.prototype._do_search = function _do_search(pat, string, pos, endpos) {
        var self = this;
        var n;
        pat.lastIndex = 0;
        if (endpos !== null) {
            string = string.slice(0, endpos);
        }
        while (true) {
            n = pat.exec(string);
            if (n === null) {
                return null;
            }
            if (n.index >= pos) {
                return new MatchObject(self, n, pos, endpos);
            }
        }
    };
    if (!RegexObject.prototype._do_search.__argnames__) Object.defineProperties(RegexObject.prototype._do_search, {
        __argnames__ : {value: ["pat", "string", "pos", "endpos"]}
    });
    RegexObject.prototype.search = function search() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var pos = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? search.__defaults__.pos : arguments[1];
        var endpos = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? search.__defaults__.endpos : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "pos")){
            pos = ????_kwargs_obj.pos;
        }
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "endpos")){
            endpos = ????_kwargs_obj.endpos;
        }
        return self._do_search(self._pattern, string, pos, endpos);
    };
    if (!RegexObject.prototype.search.__defaults__) Object.defineProperties(RegexObject.prototype.search, {
        __defaults__ : {value: {pos:0, endpos:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "pos", "endpos"]}
    });
    RegexObject.prototype.match = function match() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var pos = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? match.__defaults__.pos : arguments[1];
        var endpos = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? match.__defaults__.endpos : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "pos")){
            pos = ????_kwargs_obj.pos;
        }
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "endpos")){
            endpos = ????_kwargs_obj.endpos;
        }
        return self._do_search(new RegExp("^" + self.js_pattern, self._modifiers), string, pos, endpos);
    };
    if (!RegexObject.prototype.match.__defaults__) Object.defineProperties(RegexObject.prototype.match, {
        __defaults__ : {value: {pos:0, endpos:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "pos", "endpos"]}
    });
    RegexObject.prototype.split = function split() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var maxsplit = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? split.__defaults__.maxsplit : arguments[1];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "maxsplit")){
            maxsplit = ????_kwargs_obj.maxsplit;
        }
        self._pattern.lastIndex = 0;
        return string.split(self._pattern, maxsplit || undefined);
    };
    if (!RegexObject.prototype.split.__defaults__) Object.defineProperties(RegexObject.prototype.split, {
        __defaults__ : {value: {maxsplit:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "maxsplit"]}
    });
    RegexObject.prototype.findall = function findall(string) {
        var self = this;
        self._pattern.lastIndex = 0;
        return ????_list_decorate(string.match(self._pattern) || []);
    };
    if (!RegexObject.prototype.findall.__argnames__) Object.defineProperties(RegexObject.prototype.findall, {
        __argnames__ : {value: ["string"]}
    });
    RegexObject.prototype.finditer = function finditer(string) {
        var self = this;
        var pat, ans;
        pat = new RegExp(this._pattern.source, this._modifiers);
        ans = {'_string':string, '_r':pat, '_self':self};
        ans[????_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            var m;
            m = this._r.exec(this._string);
            if (m === null) {
                return {'done':true};
            }
            return {'done':false, 'value':new MatchObject(this._self, m, 0, null)};
        };
        return ans;
    };
    if (!RegexObject.prototype.finditer.__argnames__) Object.defineProperties(RegexObject.prototype.finditer, {
        __argnames__ : {value: ["string"]}
    });
    RegexObject.prototype.subn = function subn() {
        var self = this;
        var repl = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var count = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? subn.__defaults__.count : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "count")){
            count = ????_kwargs_obj.count;
        }
        var expand, num, matches, m, start, end;
        expand = _expand;
        if (typeof repl === "function") {
            expand = (function() {
                var ????_anonfunc = function (m, repl, gnm) {
                    return "" + repl(new MatchObject(self, m, 0, null));
                };
                if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                    __argnames__ : {value: ["m", "repl", "gnm"]}
                });
                return ????_anonfunc;
            })();
        }
        this._pattern.lastIndex = 0;
        num = 0;
        matches = [];
        while (count < 1 || num < count) {
            m = this._pattern.exec(string);
            if (m === null) {
                break;
            }
            matches.push(m);
            num += 1;
        }
        for (var i = matches.length - 1; i > -1; i--) {
            m = matches[(typeof i === "number" && i < 0) ? matches.length + i : i];
            start = m.index;
            end = start + m[0].length;
            string = string.slice(0, start) + expand(m, repl, self.group_name_map) + string.slice(end);
        }
        return [string, matches.length];
    };
    if (!RegexObject.prototype.subn.__defaults__) Object.defineProperties(RegexObject.prototype.subn, {
        __defaults__ : {value: {count:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["repl", "string", "count"]}
    });
    RegexObject.prototype.sub = function sub() {
        var self = this;
        var repl = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var count = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? sub.__defaults__.count : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "count")){
            count = ????_kwargs_obj.count;
        }
        return self.subn(repl, string, count)[0];
    };
    if (!RegexObject.prototype.sub.__defaults__) Object.defineProperties(RegexObject.prototype.sub, {
        __defaults__ : {value: {count:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["repl", "string", "count"]}
    });
    RegexObject.prototype.__repr__ = function __repr__ () {
                return "<" + __name__ + "." + this.constructor.name + " #" + this.????_object_id + ">";
    };
    RegexObject.prototype.__str__ = function __str__ () {
        return this.__repr__();
    };
    Object.defineProperty(RegexObject.prototype, "__bases__", {value: []});

    function _get_from_cache(pattern, flags) {
        var key, ans;
        if (????_instanceof(pattern, RegExp)) {
            pattern = pattern.source;
        }
        key = JSON.stringify([pattern, flags]);
        if (has_prop(_re_cache_map, key)) {
            return _re_cache_map[(typeof key === "number" && key < 0) ? _re_cache_map.length + key : key];
        }
        if (_re_cache_items.length >= 100) {
            delete _re_cache_map[_re_cache_items.shift()];
        }
        ans = new RegexObject(pattern, flags);
        _re_cache_map[(typeof key === "number" && key < 0) ? _re_cache_map.length + key : key] = ans;
        _re_cache_items.push(key);
        return ans;
    };
    if (!_get_from_cache.__argnames__) Object.defineProperties(_get_from_cache, {
        __argnames__ : {value: ["pattern", "flags"]}
    });

    function compile() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var flags = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? compile.__defaults__.flags : arguments[1];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags);
    };
    if (!compile.__defaults__) Object.defineProperties(compile, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "flags"]}
    });

    function search() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? search.__defaults__.flags : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).search(string);
    };
    if (!search.__defaults__) Object.defineProperties(search, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function match() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? match.__defaults__.flags : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).match(string);
    };
    if (!match.__defaults__) Object.defineProperties(match, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function split() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var maxsplit = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? split.__defaults__.maxsplit : arguments[2];
        var flags = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? split.__defaults__.flags : arguments[3];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "maxsplit")){
            maxsplit = ????_kwargs_obj.maxsplit;
        }
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).split(string);
    };
    if (!split.__defaults__) Object.defineProperties(split, {
        __defaults__ : {value: {maxsplit:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "maxsplit", "flags"]}
    });

    function findall() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? findall.__defaults__.flags : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).findall(string);
    };
    if (!findall.__defaults__) Object.defineProperties(findall, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function finditer() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? finditer.__defaults__.flags : arguments[2];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).finditer(string);
    };
    if (!finditer.__defaults__) Object.defineProperties(finditer, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function sub() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var repl = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var string = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[2];
        var count = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? sub.__defaults__.count : arguments[3];
        var flags = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? sub.__defaults__.flags : arguments[4];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "count")){
            count = ????_kwargs_obj.count;
        }
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).sub(repl, string, count);
    };
    if (!sub.__defaults__) Object.defineProperties(sub, {
        __defaults__ : {value: {count:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "repl", "string", "count", "flags"]}
    });

    function subn() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var repl = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[1];
        var string = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[2];
        var count = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? subn.__defaults__.count : arguments[3];
        var flags = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? subn.__defaults__.flags : arguments[4];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "count")){
            count = ????_kwargs_obj.count;
        }
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "flags")){
            flags = ????_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).subn(repl, string, count);
    };
    if (!subn.__defaults__) Object.defineProperties(subn, {
        __defaults__ : {value: {count:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "repl", "string", "count", "flags"]}
    });

    function escape(string) {
        return string.replace(_RE_ESCAPE, "\\$&");
    };
    if (!escape.__argnames__) Object.defineProperties(escape, {
        __argnames__ : {value: ["string"]}
    });

    function purge() {
        _re_cache_map = {};
        _re_cache_items = [];
    };

    ????_modules.re._ALIAS_MAP = _ALIAS_MAP;
    ????_modules.re._ASCII_CONTROL_CHARS = _ASCII_CONTROL_CHARS;
    ????_modules.re._HEX_PAT = _HEX_PAT;
    ????_modules.re._NUM_PAT = _NUM_PAT;
    ????_modules.re._GROUP_PAT = _GROUP_PAT;
    ????_modules.re._NAME_PAT = _NAME_PAT;
    ????_modules.re.I = I;
    ????_modules.re.IGNORECASE = IGNORECASE;
    ????_modules.re.L = L;
    ????_modules.re.LOCALE = LOCALE;
    ????_modules.re.M = M;
    ????_modules.re.MULTILINE = MULTILINE;
    ????_modules.re.D = D;
    ????_modules.re.DOTALL = DOTALL;
    ????_modules.re.U = U;
    ????_modules.re.UNICODE = UNICODE;
    ????_modules.re.X = X;
    ????_modules.re.VERBOSE = VERBOSE;
    ????_modules.re.DEBUG = DEBUG;
    ????_modules.re.A = A;
    ????_modules.re.ASCII = ASCII;
    ????_modules.re.supports_unicode = supports_unicode;
    ????_modules.re._RE_ESCAPE = _RE_ESCAPE;
    ????_modules.re._re_cache_map = _re_cache_map;
    ????_modules.re._re_cache_items = _re_cache_items;
    ????_modules.re.error = error;
    ????_modules.re.has_prop = has_prop;
    ????_modules.re._expand = _expand;
    ????_modules.re.transform_regex = transform_regex;
    ????_modules.re.MatchObject = MatchObject;
    ????_modules.re.RegexObject = RegexObject;
    ????_modules.re._get_from_cache = _get_from_cache;
    ????_modules.re.compile = compile;
    ????_modules.re.search = search;
    ????_modules.re.match = match;
    ????_modules.re.split = split;
    ????_modules.re.findall = findall;
    ????_modules.re.finditer = finditer;
    ????_modules.re.sub = sub;
    ????_modules.re.subn = subn;
    ????_modules.re.escape = escape;
    ????_modules.re.purge = purge;
})();
var tag;
print("RapydScript-ng " + RapydScript.rs_version);
var re = ????_modules.re;

tag = this;
this.marker = null;
window.files = {};
function compile() {
    var inputcode = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? compile.__defaults__.inputcode : arguments[0];
    var ????_kwargs_obj = arguments[arguments.length-1];
    if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "inputcode")){
        inputcode = ????_kwargs_obj.inputcode;
    }
    var editor, options, file, session, result, code;
    editor = window.editor;
    options = (function(){
        var ????_d = {};
        ????_d["basedir"] = "__stdlib__";
        ????_d["bare"] = true;
        ????_d["js_version"] = 5;
        ????_d["omit_baselib"] = true;
        return ????_d;
    }).call(this);
    var ????_Iter0 = ????_Iterable(window.files);
    for (var ????_Index0 = 0; ????_Index0 < ????_Iter0.length; ????_Index0++) {
        file = ????_Iter0[????_Index0];
        if (file !== tag.title) {
            (????_expr_temp = RapydScript.file_data)[????_bound_index("__stdlib__/" + file, ????_expr_temp)] = (????_expr_temp = window.files)[(typeof file === "number" && file < 0) ? ????_expr_temp.length + file : file].getValue();
        }
    }
    session = editor.getDoc();
    if (tag.marker && !inputcode) {
        tag.marker.clear();
    }
    try {
        result = RapydScript.compile(inputcode || editor.getValue(), tag.title, options);
        if (????_in("print;", result)) {
            throw new SyntaxError("Missing parentheses in call to \"print\"");
        }
    } catch (????_Exception) {
        ????_last_exception = ????_Exception;
        if (????_Exception instanceof Error) {
            var e = ????_Exception;
            console.log(e);
            code = "print ('''" + e.name + ": " + e.message + "''')";
            if (e.line && e.col && !inputcode) {
                tag.marker = editor.markText(CodeMirror.Pos(e.line - 1, e.col), CodeMirror.Pos(e.line - 1, e.col + 1), (function(){
                    var ????_d = {};
                    ????_d["className"] = "error-marker";
                    return ????_d;
                }).call(this));
                editor.scrollIntoView(e.line - 1, e.col + 1);
            }
            result = compiler.compile(code);
        } else {
            throw ????_Exception;
        }
    }
    return result;
};
if (!compile.__defaults__) Object.defineProperties(compile, {
    __defaults__ : {value: {inputcode:null}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["inputcode"]}
});

window.compile = compile;
function init() {
    var editor, iframe;
    editor = CodeMirror.fromTextArea(this.refs.code, (function(){
        var ????_d = {};
        ????_d["lineNumbers"] = true;
        ????_d["matchBrackets"] = true;
        ????_d["indentUnit"] = 4;
        ????_d["fixedGutter"] = false;
        ????_d["mode"] = "python";
        ????_d["styleActiveLine"] = true;
        ????_d["theme"] = "solarized light";
        return ????_d;
    }).call(this));
    editor.setOption("extraKeys", (function(){
        var ????_d = {};
        ????_d["Ctrl-Enter"] = run;
        ????_d["Alt-R"] = run;
        ????_d["F9"] = toggle_tray;
        ????_d["Tab"] = function () {
            if (editor.somethingSelected()) {
                editor.indentSelection("add");
            } else {
                editor.execCommand("insertSoftTab");
            }
        };
        return ????_d;
    }).call(this));
    iframe = this.refs.vmframe;
    function load_datastore(activity) {
        var datastore, savedSession;
        datastore = activity.getDatastoreObject();
        function check_load(error, metadata, data) {
            var parsed_data, new_session, file;
            if (data) {
                window.files = {};
                parsed_data = JSON.parse(data);
                var ????_Iter1 = ????_Iterable(parsed_data);
                for (var ????_Index1 = 0; ????_Index1 < ????_Iter1.length; ????_Index1++) {
                    file = ????_Iter1[????_Index1];
                    if (parsed_data[(typeof file === "number" && file < 0) ? parsed_data.length + file : file]) {
                        new_session = CodeMirror.Doc(parsed_data[(typeof file === "number" && file < 0) ? parsed_data.length + file : file]);
                        (????_expr_temp = window.files)[(typeof file === "number" && file < 0) ? ????_expr_temp.length + file : file] = new_session;
                    }
                }
            }
            if (len(window.files) > 0) {
                tag.title = list(parsed_data)[0];
                editor.swapDoc((????_expr_temp = window.files)[????_bound_index(tag.title, ????_expr_temp)]);
                editor.setOption("mode", "python");
            }
            tag.update();
        };
        if (!check_load.__argnames__) Object.defineProperties(check_load, {
            __argnames__ : {value: ["error", "metadata", "data"]}
        });

        if (datastore.objectId !== undefined) {
            datastore.loadAsText(check_load);
        } else {
            event_bus.trigger("enable-standalone");
            savedSession = localStorage.getItem("jappySession");
            if (savedSession !== null) {
                check_load(null, null, savedSession);
            }
        }
        tag.update();
        window.activity = activity;
    };
    if (!load_datastore.__argnames__) Object.defineProperties(load_datastore, {
        __argnames__ : {value: ["activity"]}
    });

    event_bus.on("activity-ready", load_datastore);
    function update_tabs() {
        var toolbar_div, toolbar_style, tabs_div, tabs_style, target_size;
        toolbar_div = document.getElementById("main-toolbar");
        if ((getComputedStyle(toolbar_div).display === "none" || typeof getComputedStyle(toolbar_div).display === "object" && ????_equals(getComputedStyle(toolbar_div).display, "none"))) {
            return;
        }
        toolbar_style = window.getComputedStyle(toolbar_div);
        tabs_div = document.getElementById("tabs");
        tabs_style = window.getComputedStyle(tabs_div);
        target_size = window.innerHeight - int(toolbar_style.height) - int(tabs_style.height);
        editor.setSize(null, target_size);
        if (????_equals(len(window.files), 0)) {
            tag.title = get_new_untitled();
            window.files = (function(){
                var ????_d = {};
                ????_d[tag.title] = editor.getDoc();
                return ????_d;
            }).call(this);
        }
    };

    this.on("update", update_tabs);
    window.addEventListener("resize", update_tabs);
    function make_do() {
        tag.update();
    };

    event_bus.on("activity-not-ready", make_do);
    function switchtab(e) {
        var editbox;
        if (tag.title !== e.target.innerHTML) {
            tag.title = e.target.innerHTML;
            editor.swapDoc((????_expr_temp = window.files)[????_bound_index(e.target.innerHTML, ????_expr_temp)]);
            editor.setOption("mode", "python");
            editor.focus();
        } else {
            e.target.style.display = "none";
            editbox = document.createElement("input");
            editbox.value = tag.title;
            function rename_tab() {
                if (!(????_in(editbox.value, window.files))) {
                    (????_expr_temp = window.files)[????_bound_index(editbox.value, ????_expr_temp)] = editor.getDoc();
                    ????_delitem(window.files, tag.title);
                    tag.title = editbox.value;
                }
                e.target.style.display = "inline-block";
                e.target.parentNode.removeChild(editbox);
                tag.update();
                editor.focus();
            };

            editbox.onblur = rename_tab;
            editbox.onkeyup = (function() {
                var ????_anonfunc = function (e) {
                    if ((e.keyCode === 13 || typeof e.keyCode === "object" && ????_equals(e.keyCode, 13))) {
                        editor.focus();
                    }
                    if ((e.keyCode === 27 || typeof e.keyCode === "object" && ????_equals(e.keyCode, 27))) {
                        editbox.value = tag.title;
                        editor.focus();
                    }
                };
                if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                    __argnames__ : {value: ["e"]}
                });
                return ????_anonfunc;
            })();
            e.target.parentNode.insertBefore(editbox, e.target);
            editbox.focus();
            if (tag.title.indexOf(".") > 0) {
                editbox.setSelectionRange(0, tag.title.indexOf("."));
            } else {
                editbox.select();
            }
        }
    };
    if (!switchtab.__argnames__) Object.defineProperties(switchtab, {
        __argnames__ : {value: ["e"]}
    });

    tag.switchtab = switchtab;
    function closetab(e) {
        var file, index;
        if (len(window.files) > 1) {
            file = tag.title;
            index = list(window.files).index(file);
            ????_delitem(window.files, file);
            if (????_in("__stdlib__/" + file, RapydScript.file_data)) {
                ????_delitem(RapydScript.file_data, ("__stdlib__/" + file));
            }
            if (index > 0) {
                index = index - 1;
            }
            tag.title = (????_expr_temp = list(window.files))[(typeof index === "number" && index < 0) ? ????_expr_temp.length + index : index];
            editor.swapDoc((????_expr_temp = window.files)[????_bound_index(tag.title, ????_expr_temp)]);
            editor.setOption("mode", "python");
            tag.update();
            editor.focus();
        }
    };
    if (!closetab.__argnames__) Object.defineProperties(closetab, {
        __argnames__ : {value: ["e"]}
    });

    tag.closetab = closetab;
    function get_new_untitled() {
        var file = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? get_new_untitled.__defaults__.file : arguments[0];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "file")){
            file = ????_kwargs_obj.file;
        }
        var basename, extension, i;
        basename = file.substr(0, file.indexOf("."));
        extension = file.substr(file.indexOf("."));
        i = 1;
        while (????_in(file, files)) {
            file = basename + "-" + i + extension;
            i = i + 1;
        }
        return file;
    };
    if (!get_new_untitled.__defaults__) Object.defineProperties(get_new_untitled, {
        __defaults__ : {value: {file:"untitled.pyj"}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["file"]}
    });

    function newtab(e) {
        var file, new_session;
        file = get_new_untitled();
        new_session = CodeMirror.Doc("");
        (????_expr_temp = window.files)[(typeof file === "number" && file < 0) ? ????_expr_temp.length + file : file] = new_session;
        editor.swapDoc(new_session);
        editor.setOption("mode", "python");
        editor.focus();
        tag.title = file;
        tag.update();
    };
    if (!newtab.__argnames__) Object.defineProperties(newtab, {
        __argnames__ : {value: ["e"]}
    });

    tag.newtab = newtab;
    function toggle_tray() {
        if ((getComputedStyle(iframe).display === "none" || typeof getComputedStyle(iframe).display === "object" && ????_equals(getComputedStyle(iframe).display, "none"))) {
            event_bus.trigger("traybutton-open");
        } else {
            event_bus.trigger("traybutton-close");
        }
    };

    event_bus.on("toggle-tray", toggle_tray);
    this.refs.traybutton.onclick = toggle_tray;
    function traybutton_close() {
        iframe.style.display = "none";
        iframe.style.width = "0%";
        tag.refs.split.style.width = "100%";
        tag.refs.traybutton.style.backgroundImage = "url(icons/tray-show.svg)";
    };

    event_bus.on("traybutton-close", traybutton_close);
    function traybutton_open() {
        iframe.style.display = "block";
        iframe.style.width = "50%";
        iframe.style.height = "100%";
        tag.refs.split.style.width = "50%";
        tag.refs.traybutton.style.backgroundImage = "url(icons/tray-hide.svg)";
    };

    event_bus.on("traybutton-open", traybutton_open);
    function run() {
        var js_output;
        window.state = "run";
        event_bus.trigger("traybutton-open");
        riot.update();
        event_bus.trigger("activity-save");
        js_output = compile();
        function write_script() {
			var script = iframe.contentDocument.createElement("script");
			script.innerHTML = js_output;
            iframe.contentDocument.body.appendChild(script);
            iframe.contentDocument.close();
        };

        iframe.onload = write_script;
        iframe.contentWindow.location = "template.html";
        return iframe;
    };

    event_bus.on("run-code", run);
    function break_code() {
        var iwindow, highestTimeoutId, i, highestIntervalId, inputs;
        iwindow = iframe.contentWindow;
        highestTimeoutId = iwindow.setTimeout(";");
        for (var ????_Index2 = 0; ????_Index2 < highestTimeoutId; ????_Index2++) {
            i = ????_Index2;
            iwindow.clearTimeout(i);
        }
        highestIntervalId = iwindow.setInterval(";");
        for (var ????_Index3 = 0; ????_Index3 < highestIntervalId; ????_Index3++) {
            i = ????_Index3;
            iwindow.clearInterval(i);
        }
        iwindow.stop();
        iwindow.document.body.style.opacity = "0.5";
        inputs = iwindow.document.getElementsByTagName("input");
        var ????_Iter4 = ????_Iterable(inputs);
        for (var ????_Index4 = 0; ????_Index4 < ????_Iter4.length; ????_Index4++) {
            i = ????_Iter4[????_Index4];
            i.disabled = true;
        }
        iwindow.addEventListener("click", (function() {
            var ????_anonfunc = function (ev) {
                ev.stopPropagation();
            };
            if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                __argnames__ : {value: ["ev"]}
            });
            return ????_anonfunc;
        })(), true);
    };

    event_bus.on("break-code", break_code);
    function clear_output() {
        iframe.contentWindow.document.getElementById("__terminal__").innerHTML="";
    };

    event_bus.on("clear-output", clear_output);
    function serialize() {
        var result, file;
        result = {};
        var ????_Iter5 = ????_Iterable(window.files);
        for (var ????_Index5 = 0; ????_Index5 < ????_Iter5.length; ????_Index5++) {
            file = ????_Iter5[????_Index5];
            result[(typeof file === "number" && file < 0) ? result.length + file : file] = (????_expr_temp = window.files)[(typeof file === "number" && file < 0) ? ????_expr_temp.length + file : file].getValue();
        }
        return JSON.stringify(result);
    };

    function save_without_datastore() {
        localStorage.jappySession = serialize();
    };

    function save() {
        var activity = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? save.__defaults__.activity : arguments[0];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "activity")){
            activity = ????_kwargs_obj.activity;
        }
        var datastore;
        if (activity !== undefined) {
            datastore = activity.getDatastoreObject();
        }
        if (activity && datastore.objectId !== undefined) {
            datastore.setDataAsText(serialize());
            function check_save(error) {
                if (error === null) {
                    console.log("Saved");
                } else {
                    console.log("NOT Saved");
                }
            };
            if (!check_save.__argnames__) Object.defineProperties(check_save, {
                __argnames__ : {value: ["error"]}
            });

            datastore.save(check_save);
        } else {
            save_without_datastore();
        }
    };
    if (!save.__defaults__) Object.defineProperties(save, {
        __defaults__ : {value: {activity:window.activity}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["activity"]}
    });

    event_bus.on("activity-save", save);
    function example_load() {
        var file = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) ? undefined : arguments[0];
        var execute = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? example_load.__defaults__.execute : arguments[1];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "execute")){
            execute = ????_kwargs_obj.execute;
        }
        var url_base;
        if (????_in(file, window.files)) {
            tag.title = file;
            editor.swapDoc((????_expr_temp = window.files)[(typeof file === "number" && file < 0) ? ????_expr_temp.length + file : file]);
            editor.setOption("mode", "python");
            tag.update();
            editor.focus();
            if (execute) {
                if (window.innerWidth > 720) {
                    event_bus.trigger("run-code");
                } else {
                    event_bus.trigger("run-fullscreen");
                }
            }
            return;
        }
        url_base = window.location.protocol;
        requirejs(????_list_decorate([ "text!examples/" + file ]), (function() {
            var ????_anonfunc = function (data) {
                var new_session;
                new_session = CodeMirror.Doc(data);
                files[(typeof file === "number" && file < 0) ? files.length + file : file] = new_session;
                editor.swapDoc(new_session);
                editor.setOption("mode", "python");
                tag.title = file;
                tag.update();
                editor.focus();
                if (execute) {
                    if (window.innerWidth > 720) {
                        event_bus.trigger("run-code");
                    } else {
                        event_bus.trigger("run-fullscreen");
                    }
                }
            };
            if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                __argnames__ : {value: ["data"]}
            });
            return ????_anonfunc;
        })());
    };
    if (!example_load.__defaults__) Object.defineProperties(example_load, {
        __defaults__ : {value: {execute:true}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["file", "execute"]}
    });

    event_bus.on("example-load", example_load);
    function process_file() {
        var file, reader;
        file = tag.refs.file_input.files[0];
        reader = new FileReader;
        if ((file.type === "application/zip" || typeof file.type === "object" && ????_equals(file.type, "application/zip"))) {
            JSZip.loadAsync(file).then((function() {
                var ????_anonfunc = function (zip) {
                    zip.forEach((function() {
                        var ????_anonfunc = function (relpath, zippedfile) {
                            var basepath;
                            if (????_equals(relpath.slice(0, 4), "src/") && (relpath !== "src/" && (typeof relpath !== "object" || ????_not_equals(relpath, "src/")))) {
                                if (????_equals(relpath.slice(-4), ".pyj")) {
                                    basepath = relpath.slice(4);
                                    zippedfile.async("text").then((function() {
                                        var ????_anonfunc = function (data) {
                                            var new_session;
                                            new_session = CodeMirror.Doc(str(data));
                                            (????_expr_temp = window.files)[(typeof basepath === "number" && basepath < 0) ? ????_expr_temp.length + basepath : basepath] = new_session;
                                            editor.swapDoc(new_session);
                                            editor.setOption("mode", "python");
                                            tag.title = basepath;
                                            tag.update();
                                        };
                                        if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                                            __argnames__ : {value: ["data"]}
                                        });
                                        return ????_anonfunc;
                                    })());
                                }
                            }
                        };
                        if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                            __argnames__ : {value: ["relpath", "zippedfile"]}
                        });
                        return ????_anonfunc;
                    })());
                };
                if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                    __argnames__ : {value: ["zip"]}
                });
                return ????_anonfunc;
            })());
        } else {
            reader.onload = function () {
                return (function() {
                    var ????_anonfunc = function (evt) {
                        var new_session;
                        new_session = CodeMirror.Doc(evt.target.result);
                        (????_expr_temp = window.files)[????_bound_index(file.name, ????_expr_temp)] = new_session;
                        tag.update();
                    };
                    if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                        __argnames__ : {value: ["evt"]}
                    });
                    return ????_anonfunc;
                })();
            }();
            reader.readAsText(file);
        }
    };

    tag.refs.file_input.onchange = process_file;
    function import_file() {
        tag.refs.file_input.click();
    };

    event_bus.on("import-file", import_file);
    function restore(e) {
        var code_editor, toolbar, toolbar_height, canvas;
        code_editor = tag.refs.split;
        code_editor.style.display = "block";
        toolbar = document.getElementById("main-toolbar");
        toolbar.style.display = "block";
        e.target.parentNode.removeChild(e.target);
        toolbar_height = window.getComputedStyle(toolbar)["height"];
        canvas = document.getElementById("canvas");
        canvas.style.top = toolbar_height;
        if (window.innerWidth > 720) {
            iframe.style.width = "50%";
        } else {
            window.state = "clean";
            event_bus.trigger("clear-output");
            event_bus.trigger("traybutton-close");
            riot.update();
        }
    };
    if (!restore.__argnames__) Object.defineProperties(restore, {
        __argnames__ : {value: ["e"]}
    });

    function run_fullscreen() {
        var execute = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true)) ? run_fullscreen.__defaults__.execute : arguments[0];
        var ????_kwargs_obj = arguments[arguments.length-1];
        if (????_kwargs_obj === null || typeof ????_kwargs_obj !== "object" || ????_kwargs_obj [????_kwargs_symbol] !== true) ????_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(????_kwargs_obj, "execute")){
            execute = ????_kwargs_obj.execute;
        }
        var code_editor, toolbar, canvas, restore_button;
        code_editor = tag.refs.split;
        code_editor.style.display = "none";
        toolbar = document.getElementById("main-toolbar");
        toolbar.style.display = "none";
        canvas = document.getElementById("canvas");
        canvas.style.top = "0";
        if (execute) {
            run();
        }
        restore_button = document.createElement("button");
        restore_button.onclick = restore;
        restore_button.style.opacity = "0.5";
        restore_button.style.position = "fixed";
        restore_button.style.right = restore_button.style.top = "0";
        restore_button.style.padding = "0px";
        restore_button.style["border-radius"] = "0px";
        restore_button.style["background-image"] = "url(icons/view-return.svg)";
        restore_button.style["background-repeat"] = "no-repeat";
        restore_button.style["background-position"] = "center";
        restore_button.style.width = restore_button.style.height = "55px";
        document.body.appendChild(restore_button);
        iframe.style.width = "100%";
    };
    if (!run_fullscreen.__defaults__) Object.defineProperties(run_fullscreen, {
        __defaults__ : {value: {execute:true}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["execute"]}
    });

    event_bus.on("run-fullscreen", run_fullscreen);
    function save_zip() {
        var bundle_name, js_output, url_base;
        event_bus.trigger("activity-save", activity);
        bundle_name = tag.title.slice(0, tag.title.indexOf("."));
        js_output = compile();
        url_base = window.location.protocol;
        requirejs(????_list_decorate([ "text!template" ]), (function() {
            var ????_anonfunc = function (data) {
                var script, enc_js, closing_tag, html, external_files, ref, match, zip, name;
                script = iframe.contentDocument.createElement("script");
                script.innerHTML = js_output;
                enc_js = script.outerHTML + "\n";
                closing_tag = data.indexOf("</body>");
                html = data.slice(0, closing_tag) + enc_js + data.slice(closing_tag);
                external_files = ????_list_decorate([]);
                var ????_Iter6 = ????_Iterable(re.findall("script.*src=\"(.*)\"", data));
                for (var ????_Index6 = 0; ????_Index6 < ????_Iter6.length; ????_Index6++) {
                    match = ????_Iter6[????_Index6];
                    ref = "text!" + match.slice(match.indexOf("=") + 2, -1);
                    ref = ref.replace("lib/", "");
                    external_files.append(ref);
                }
                zip = new JSZip;
                zip.file("index.html", html);
                var ????_Iter7 = ????_Iterable(window.files);
                for (var ????_Index7 = 0; ????_Index7 < ????_Iter7.length; ????_Index7++) {
                    name = ????_Iter7[????_Index7];
                    zip.file("src/" + name, (????_expr_temp = window.files)[(typeof name === "number" && name < 0) ? ????_expr_temp.length + name : name].getValue());
                }
                requirejs(external_files, function () {
                    var data = Array.prototype.slice.call(arguments, 0);
                    if (arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [????_kwargs_symbol] === true) data.pop();
                    var index, file;
                    index = 0;
                    var ????_Iter8 = ????_Iterable(external_files);
                    for (var ????_Index8 = 0; ????_Index8 < ????_Iter8.length; ????_Index8++) {
                        file = ????_Iter8[????_Index8];
                        file = file.slice(5);
                        if (!(????_in("/", file))) {
                            file = "lib/" + file;
                        }
                        zip.file(file, data[(typeof index === "number" && index < 0) ? data.length + index : index]);
                        index = index + 1;
                    }
                    zip.generateAsync((function(){
                        var ????_d = {};
                        ????_d["type"] = "blob";
                        return ????_d;
                    }).call(this)).then((function() {
                        var ????_anonfunc = function (blob) {
                            saveAs(blob, bundle_name + ".zip");
                        };
                        if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                            __argnames__ : {value: ["blob"]}
                        });
                        return ????_anonfunc;
                    })());
                });
            };
            if (!????_anonfunc.__argnames__) Object.defineProperties(????_anonfunc, {
                __argnames__ : {value: ["data"]}
            });
            return ????_anonfunc;
        })());
    };

    event_bus.on("save-as-zip", save_zip);
    this.editor = editor;
    window.editor = editor;
    editor.focus();
};

this.on("mount", init);
});
