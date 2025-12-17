/**
 * Callsign Lookup - Kompletna baza prefiksów DXCC
 * Zawiera wszystkie ~340 encji DXCC z ich prefiksami
 * Źródło: ITU/ARRL DXCC List
 */

// Kompletna baza DXCC z prefiksami
// Format: dxcc_id -> { name, continent, prefixes: [array of prefix patterns] }
const DXCC_DATABASE = {
    // ==================== EUROPA (EU) ====================
    1: { name: "Sovereign Military Order of Malta", continent: "EU", prefixes: ["1A"] },
    5: { name: "Bulgaria", continent: "EU", prefixes: ["LZ"] },
    7: { name: "Albania", continent: "EU", prefixes: ["ZA"] },
    9: { name: "Crete", continent: "EU", prefixes: ["SV9"] },
    14: { name: "Corsica", continent: "EU", prefixes: ["TK"] },
    15: { name: "Faroe Islands", continent: "EU", prefixes: ["OY"] },
    20: { name: "Dodecanese", continent: "EU", prefixes: ["SV5"] },
    21: { name: "Balearic Islands", continent: "EU", prefixes: ["EA6", "EC6", "ED6", "EE6", "EF6", "EG6", "EH6"] },
    27: { name: "Belarus", continent: "EU", prefixes: ["EU", "EV", "EW"] },
    29: { name: "Canary Islands", continent: "AF", prefixes: ["EA8", "EC8", "ED8", "EE8", "EF8", "EG8", "EH8"] },
    32: { name: "Ceuta & Melilla", continent: "AF", prefixes: ["EA9", "EC9", "ED9", "EE9", "EF9", "EG9", "EH9"] },
    40: { name: "European Turkey", continent: "EU", prefixes: ["TA1", "TB1", "TC1", "YM1"] },
    45: { name: "Aland Islands", continent: "EU", prefixes: ["OF0", "OG0", "OH0", "OI0", "OJ0"] },
    50: { name: "Sardinia", continent: "EU", prefixes: ["IS", "IM0"] },
    52: { name: "Estonia", continent: "EU", prefixes: ["ES"] },
    54: { name: "European Russia", continent: "EU", prefixes: ["R", "RA", "RB", "RC", "RD", "RE", "RF", "RG", "RJ", "RK", "RL", "RM", "RN", "RO", "RP", "RQ", "RR", "RS", "RT", "RU", "RV", "RW", "RX", "RY", "RZ", "U", "UA", "UB", "UC", "UD", "UE", "UF", "UG", "UH", "UI"] },
    61: { name: "Franz Josef Land", continent: "EU", prefixes: ["RI1F"] },
    62: { name: "Kaliningrad", continent: "EU", prefixes: ["RA2", "RN2", "UA2", "UN2"] },
    74: { name: "Madeira Islands", continent: "AF", prefixes: ["CT3", "CQ3", "CR3", "CS3", "CT9", "CQ9"] },
    78: { name: "Moldova", continent: "EU", prefixes: ["ER"] },
    95: { name: "Croatia", continent: "EU", prefixes: ["9A"] },
    96: { name: "Slovenia", continent: "EU", prefixes: ["S5"] },
    97: { name: "Bosnia-Herzegovina", continent: "EU", prefixes: ["E7", "T9"] },
    98: { name: "North Macedonia", continent: "EU", prefixes: ["Z3"] },
    99: { name: "Czech Republic", continent: "EU", prefixes: ["OK", "OL"] },
    100: { name: "Slovak Republic", continent: "EU", prefixes: ["OM"] },
    103: { name: "Ireland", continent: "EU", prefixes: ["EI", "EJ"] },
    104: { name: "Armenia", continent: "AS", prefixes: ["EK"] },
    105: { name: "Italy", continent: "EU", prefixes: ["I", "IA", "IB", "IC", "ID", "IE", "IF", "IG", "IH", "II", "IJ", "IK", "IL", "IM", "IN", "IO", "IP", "IQ", "IR", "IS", "IT", "IU", "IV", "IW", "IX", "IY", "IZ"] },
    106: { name: "Vatican City", continent: "EU", prefixes: ["HV"] },
    107: { name: "San Marino", continent: "EU", prefixes: ["T7"] },
    108: { name: "Monaco", continent: "EU", prefixes: ["3A"] },
    109: { name: "Gibraltar", continent: "EU", prefixes: ["ZB", "ZG"] },
    110: { name: "Jan Mayen", continent: "EU", prefixes: ["JX"] },
    111: { name: "Svalbard", continent: "EU", prefixes: ["JW"] },
    112: { name: "Andorra", continent: "EU", prefixes: ["C3"] },
    114: { name: "Liechtenstein", continent: "EU", prefixes: ["HB0", "HE0"] },
    117: { name: "Malta", continent: "EU", prefixes: ["9H"] },
    120: { name: "Asiatic Turkey", continent: "AS", prefixes: ["TA", "TB", "TC", "YM"] },
    122: { name: "Market Reef", continent: "EU", prefixes: ["OJ0"] },
    126: { name: "Azerbaijan", continent: "AS", prefixes: ["4J", "4K"] },
    129: { name: "Latvia", continent: "EU", prefixes: ["YL"] },
    132: { name: "Lithuania", continent: "EU", prefixes: ["LY"] },
    135: { name: "Luxembourg", continent: "EU", prefixes: ["LX"] },
    136: { name: "Romania", continent: "EU", prefixes: ["YO", "YP", "YQ", "YR"] },
    138: { name: "Serbia", continent: "EU", prefixes: ["YT", "YU"] },
    140: { name: "Poland", continent: "EU", prefixes: ["3Z", "HF", "SN", "SO", "SP", "SQ", "SR"] },
    142: { name: "Finland", continent: "EU", prefixes: ["OF", "OG", "OH", "OI", "OJ"] },
    145: { name: "Germany", continent: "EU", prefixes: ["DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR"] },
    146: { name: "Montenegro", continent: "EU", prefixes: ["4O"] },
    148: { name: "Hungary", continent: "EU", prefixes: ["HA", "HG"] },
    149: { name: "Switzerland", continent: "EU", prefixes: ["HB", "HE"] },
    150: { name: "Greece", continent: "EU", prefixes: ["J4", "SV", "SW", "SX", "SY", "SZ"] },
    151: { name: "Mount Athos", continent: "EU", prefixes: ["SV2"] },
    152: { name: "Netherlands", continent: "EU", prefixes: ["PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI"] },
    153: { name: "Austria", continent: "EU", prefixes: ["OE"] },
    154: { name: "Belgium", continent: "EU", prefixes: ["ON", "OO", "OP", "OQ", "OR", "OS", "OT"] },
    155: { name: "Denmark", continent: "EU", prefixes: ["OU", "OV", "OW", "OZ", "5P", "5Q"] },
    156: { name: "Norway", continent: "EU", prefixes: ["LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LJ", "LK", "LL", "LM", "LN"] },
    157: { name: "Portugal", continent: "EU", prefixes: ["CQ", "CR", "CS", "CT", "CU"] },
    158: { name: "France", continent: "EU", prefixes: ["F", "TM", "TO", "TX"] },
    159: { name: "Spain", continent: "EU", prefixes: ["AM", "AN", "AO", "EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH"] },
    160: { name: "Sweden", continent: "EU", prefixes: ["7S", "8S", "SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SL", "SM"] },
    161: { name: "Ukraine", continent: "EU", prefixes: ["EM", "EN", "EO", "UR", "US", "UT", "UU", "UV", "UW", "UX", "UY", "UZ"] },
    163: { name: "England", continent: "EU", prefixes: ["2E", "G", "M"] },
    164: { name: "Northern Ireland", continent: "EU", prefixes: ["GI", "MI", "2I"] },
    165: { name: "Scotland", continent: "EU", prefixes: ["2M", "GM", "MM"] },
    166: { name: "Wales", continent: "EU", prefixes: ["2W", "GW", "MW"] },
    167: { name: "Isle of Man", continent: "EU", prefixes: ["GD", "GT", "MD", "2D"] },
    168: { name: "Jersey", continent: "EU", prefixes: ["GJ", "MJ", "2J"] },
    169: { name: "Guernsey", continent: "EU", prefixes: ["GP", "GU", "MU", "2U"] },
    170: { name: "Kosovo", continent: "EU", prefixes: ["Z6"] },

    // ==================== AZJA (AS) ====================
    2: { name: "Spratly Islands", continent: "AS", prefixes: ["1S", "9M0S", "BV9S"] },
    6: { name: "Agalega & St Brandon", continent: "AF", prefixes: ["3B6", "3B7"] },
    8: { name: "Afghanistan", continent: "AS", prefixes: ["T6", "YA"] },
    11: { name: "Annobon Island", continent: "AF", prefixes: ["3C0"] },
    12: { name: "Asiatic Russia", continent: "AS", prefixes: ["RA0", "RA8", "RA9", "RC8", "RC9", "RD8", "RD9", "RE8", "RE9", "RF8", "RF9", "RG8", "RG9", "RJ8", "RJ9", "RK8", "RK9", "RL8", "RL9", "RM8", "RM9", "RN8", "RN9", "RO8", "RO9", "RQ8", "RQ9", "RT8", "RT9", "RU8", "RU9", "RV8", "RV9", "RW8", "RW9", "RX8", "RX9", "RY8", "RY9", "RZ8", "RZ9", "U0", "UA0", "UA8", "UA9", "UB8", "UB9", "UC8", "UC9", "UD8", "UD9", "UE8", "UE9", "UF8", "UF9", "UG8", "UG9", "UH8", "UH9", "UI8", "UI9"] },
    17: { name: "Bangladesh", continent: "AS", prefixes: ["S2", "S3"] },
    18: { name: "Bhutan", continent: "AS", prefixes: ["A5"] },
    22: { name: "Taiwan", continent: "AS", prefixes: ["BM", "BN", "BO", "BP", "BQ", "BU", "BV", "BW", "BX"] },
    23: { name: "China", continent: "AS", prefixes: ["3H", "3I", "3J", "3K", "3L", "3M", "3N", "3O", "3P", "3Q", "3R", "3S", "3T", "3U", "B", "XS"] },
    24: { name: "Sri Lanka", continent: "AS", prefixes: ["4P", "4Q", "4R", "4S"] },
    25: { name: "Hong Kong", continent: "AS", prefixes: ["VR", "VR2"] },
    26: { name: "India", continent: "AS", prefixes: ["AT", "AU", "AV", "AW", "AX", "VT", "VU", "VV", "VW", "8T", "8U", "8V", "8W", "8X", "8Y"] },
    28: { name: "Maldives", continent: "AS", prefixes: ["8Q"] },
    30: { name: "Nepal", continent: "AS", prefixes: ["9N"] },
    31: { name: "Brunei", continent: "OC", prefixes: ["V8"] },
    33: { name: "Cambodia", continent: "AS", prefixes: ["XU"] },
    34: { name: "Laos", continent: "AS", prefixes: ["XW"] },
    35: { name: "Thailand", continent: "AS", prefixes: ["E2", "HS"] },
    37: { name: "Vietnam", continent: "AS", prefixes: ["3W", "XV"] },
    38: { name: "Indonesia", continent: "OC", prefixes: ["7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "JZ", "PK", "PL", "PM", "PN", "PO", "YB", "YC", "YD", "YE", "YF", "YG", "YH"] },
    39: { name: "Iraq", continent: "AS", prefixes: ["HN", "YI"] },
    41: { name: "Iran", continent: "AS", prefixes: ["9B", "9C", "9D", "EP", "EQ"] },
    42: { name: "Israel", continent: "AS", prefixes: ["4X", "4Z"] },
    44: { name: "Japan", continent: "AS", prefixes: ["7J", "7K", "7L", "7M", "7N", "8J", "8K", "8L", "8M", "8N", "JA", "JB", "JC", "JD", "JE", "JF", "JG", "JH", "JI", "JJ", "JK", "JL", "JM", "JN", "JO", "JP", "JQ", "JR", "JS"] },
    46: { name: "Jordan", continent: "AS", prefixes: ["JY"] },
    48: { name: "Mongolia", continent: "AS", prefixes: ["JT", "JU", "JV"] },
    49: { name: "Kuwait", continent: "AS", prefixes: ["9K"] },
    51: { name: "Kazakhstan", continent: "AS", prefixes: ["UN", "UO", "UP", "UQ"] },
    53: { name: "Kyrgyzstan", continent: "AS", prefixes: ["EX"] },
    55: { name: "Lebanon", continent: "AS", prefixes: ["OD"] },
    57: { name: "Macau", continent: "AS", prefixes: ["XX9"] },
    60: { name: "Malaysia West", continent: "AS", prefixes: ["9M2", "9M4", "9W2", "9W4"] },
    63: { name: "East Malaysia", continent: "OC", prefixes: ["9M6", "9M8", "9W6", "9W8"] },
    64: { name: "Myanmar", continent: "AS", prefixes: ["XY", "XZ"] },
    65: { name: "Oman", continent: "AS", prefixes: ["A4"] },
    66: { name: "Pakistan", continent: "AS", prefixes: ["6P", "6Q", "6R", "6S", "AP", "AQ", "AR", "AS"] },
    67: { name: "Palestine", continent: "AS", prefixes: ["E4"] },
    68: { name: "Philippines", continent: "OC", prefixes: ["4D", "4E", "4F", "4G", "4H", "4I", "DU", "DV", "DW", "DX", "DY", "DZ"] },
    69: { name: "Qatar", continent: "AS", prefixes: ["A7"] },
    70: { name: "Saudi Arabia", continent: "AS", prefixes: ["7Z", "8Z", "HZ"] },
    72: { name: "Singapore", continent: "AS", prefixes: ["9V", "S6"] },
    75: { name: "South Korea", continent: "AS", prefixes: ["6K", "6L", "6M", "6N", "D7", "D8", "D9", "DS", "DT", "HL"] },
    76: { name: "North Korea", continent: "AS", prefixes: ["HM", "P5", "P6", "P7", "P8", "P9"] },
    79: { name: "Syria", continent: "AS", prefixes: ["6C", "YK"] },
    80: { name: "Tajikistan", continent: "AS", prefixes: ["EY"] },
    81: { name: "Turkmenistan", continent: "AS", prefixes: ["EZ"] },
    82: { name: "United Arab Emirates", continent: "AS", prefixes: ["A6"] },
    83: { name: "Uzbekistan", continent: "AS", prefixes: ["UJ", "UK", "UL", "UM"] },
    84: { name: "Yemen", continent: "AS", prefixes: ["7O"] },
    86: { name: "East Timor", continent: "OC", prefixes: ["4W"] },

    // ==================== AFRYKA (AF) ====================
    47: { name: "Mauritius", continent: "AF", prefixes: ["3B8"] },
    56: { name: "Rodriguez Island", continent: "AF", prefixes: ["3B9"] },
    88: { name: "Algeria", continent: "AF", prefixes: ["7R", "7T", "7U", "7V", "7W", "7X", "7Y"] },
    90: { name: "Angola", continent: "AF", prefixes: ["D2", "D3"] },
    91: { name: "Botswana", continent: "AF", prefixes: ["8O", "A2"] },
    93: { name: "Burundi", continent: "AF", prefixes: ["9U"] },
    94: { name: "Cameroon", continent: "AF", prefixes: ["TJ"] },
    101: { name: "Cape Verde", continent: "AF", prefixes: ["D4"] },
    102: { name: "Central African Republic", continent: "AF", prefixes: ["TL"] },
    113: { name: "Chad", continent: "AF", prefixes: ["TT"] },
    115: { name: "Comoros", continent: "AF", prefixes: ["D6"] },
    116: { name: "Republic of the Congo", continent: "AF", prefixes: ["TN"] },
    118: { name: "Kenya", continent: "AF", prefixes: ["5Y", "5Z"] },
    119: { name: "Democratic Republic of the Congo", continent: "AF", prefixes: ["9O", "9P", "9Q", "9R", "9S", "9T"] },
    121: { name: "Djibouti", continent: "AF", prefixes: ["J2"] },
    123: { name: "Egypt", continent: "AF", prefixes: ["6A", "6B", "SS", "SU"] },
    124: { name: "Equatorial Guinea", continent: "AF", prefixes: ["3C"] },
    125: { name: "Eritrea", continent: "AF", prefixes: ["E3"] },
    127: { name: "Ethiopia", continent: "AF", prefixes: ["9E", "9F", "ET"] },
    128: { name: "Gabon", continent: "AF", prefixes: ["TR"] },
    130: { name: "Nicaragua", continent: "NA", prefixes: ["H6", "H7", "HT", "YN"] },
    131: { name: "Libya", continent: "AF", prefixes: ["5A"] },
    133: { name: "Gambia", continent: "AF", prefixes: ["C5"] },
    134: { name: "Ghana", continent: "AF", prefixes: ["9G"] },
    137: { name: "El Salvador", continent: "NA", prefixes: ["HU", "YS"] },
    139: { name: "Guinea", continent: "AF", prefixes: ["3X"] },
    141: { name: "Guinea-Bissau", continent: "AF", prefixes: ["J5"] },
    144: { name: "Ivory Coast", continent: "AF", prefixes: ["TU"] },
    147: { name: "Lesotho", continent: "AF", prefixes: ["7P"] },
    171: { name: "Liberia", continent: "AF", prefixes: ["5L", "5M", "6Z", "A8", "D5", "EL"] },
    172: { name: "Madagascar", continent: "AF", prefixes: ["5R", "5S", "6X"] },
    173: { name: "Malawi", continent: "AF", prefixes: ["7Q"] },
    174: { name: "Mali", continent: "AF", prefixes: ["TZ"] },
    175: { name: "Mauritania", continent: "AF", prefixes: ["5T"] },
    176: { name: "Morocco", continent: "AF", prefixes: ["5C", "5D", "5E", "5F", "5G", "CN"] },
    177: { name: "Mozambique", continent: "AF", prefixes: ["C8", "C9"] },
    178: { name: "Namibia", continent: "AF", prefixes: ["V5"] },
    179: { name: "Niger", continent: "AF", prefixes: ["5U"] },
    180: { name: "Nigeria", continent: "AF", prefixes: ["5N", "5O"] },
    181: { name: "Reunion Island", continent: "AF", prefixes: ["FR"] },
    182: { name: "Rwanda", continent: "AF", prefixes: ["9X"] },
    183: { name: "Sao Tome & Principe", continent: "AF", prefixes: ["S9"] },
    184: { name: "Senegal", continent: "AF", prefixes: ["6V", "6W"] },
    185: { name: "Seychelles", continent: "AF", prefixes: ["S7"] },
    186: { name: "Sierra Leone", continent: "AF", prefixes: ["9L"] },
    187: { name: "Somalia", continent: "AF", prefixes: ["6O", "T5"] },
    188: { name: "South Africa", continent: "AF", prefixes: ["H5", "S4", "S8", "V9", "ZR", "ZS", "ZT", "ZU"] },
    189: { name: "South Sudan", continent: "AF", prefixes: ["Z8"] },
    190: { name: "Sudan", continent: "AF", prefixes: ["6T", "6U", "ST"] },
    191: { name: "Eswatini", continent: "AF", prefixes: ["3D6", "3DA"] },
    192: { name: "Tanzania", continent: "AF", prefixes: ["5H", "5I"] },
    193: { name: "Togo", continent: "AF", prefixes: ["5V"] },
    194: { name: "Tunisia", continent: "AF", prefixes: ["3V", "TS"] },
    195: { name: "Uganda", continent: "AF", prefixes: ["5X"] },
    196: { name: "Burkina Faso", continent: "AF", prefixes: ["XT"] },
    197: { name: "Zambia", continent: "AF", prefixes: ["9I", "9J"] },
    199: { name: "Zimbabwe", continent: "AF", prefixes: ["Z2"] },

    // ==================== AMERYKA PÓŁNOCNA (NA) ====================
    4: { name: "United States", continent: "NA", prefixes: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "K", "N", "W", "KA", "KB", "KC", "KD", "KE", "KF", "KG", "KI", "KJ", "KK", "KM", "KN", "KO", "KR", "KS", "KT", "KU", "KV", "KW", "KX", "KY", "KZ", "NA", "NB", "NC", "ND", "NE", "NF", "NG", "NI", "NJ", "NK", "NM", "NN", "NO", "NR", "NS", "NT", "NU", "NV", "NW", "NX", "NY", "NZ", "WA", "WB", "WC", "WD", "WE", "WF", "WG", "WI", "WJ", "WK", "WM", "WN", "WO", "WR", "WS", "WT", "WU", "WV", "WW", "WX", "WY", "WZ"] },
    10: { name: "Alaska", continent: "NA", prefixes: ["AL7", "KL", "KL7", "NL", "NL7", "WL", "WL7"] },
    13: { name: "Navassa Island", continent: "NA", prefixes: ["KP1"] },
    16: { name: "Bermuda", continent: "NA", prefixes: ["VP9"] },
    43: { name: "Guantanamo Bay", continent: "NA", prefixes: ["KG4"] },
    58: { name: "Mariana Islands", continent: "OC", prefixes: ["AH0", "KH0", "NH0", "WH0"] },
    59: { name: "Baker & Howland Islands", continent: "OC", prefixes: ["AH1", "KH1", "NH1", "WH1"] },
    71: { name: "Guam", continent: "OC", prefixes: ["AH2", "KH2", "KG6", "NH2", "WH2"] },
    73: { name: "Johnston Island", continent: "OC", prefixes: ["AH3", "KH3", "NH3", "WH3"] },
    77: { name: "Midway Island", continent: "OC", prefixes: ["AH4", "KH4", "NH4", "WH4"] },
    87: { name: "Palmyra & Jarvis Islands", continent: "OC", prefixes: ["AH5", "KH5", "NH5", "WH5"] },
    89: { name: "Hawaii", continent: "OC", prefixes: ["AH6", "AH7", "KH6", "KH7", "NH6", "NH7", "WH6", "WH7"] },
    92: { name: "Kure Island", continent: "OC", prefixes: ["AH7K", "KH7K"] },
    110: { name: "Mexico", continent: "NA", prefixes: ["4A", "4B", "4C", "6D", "6E", "6F", "6G", "6H", "6I", "6J", "XA", "XB", "XC", "XD", "XE", "XF", "XG", "XH", "XI"] },
    198: { name: "American Samoa", continent: "OC", prefixes: ["AH8", "KH8", "NH8", "WH8"] },
    200: { name: "Wake Island", continent: "OC", prefixes: ["AH9", "KH9", "NH9", "WH9"] },
    202: { name: "US Virgin Islands", continent: "NA", prefixes: ["KP2", "KV4", "NP2", "WP2"] },
    204: { name: "Puerto Rico", continent: "NA", prefixes: ["KP3", "KP4", "NP3", "NP4", "WP3", "WP4"] },
    206: { name: "Canada", continent: "NA", prefixes: ["CF", "CG", "CH", "CI", "CJ", "CK", "CY", "CZ", "VA", "VB", "VC", "VD", "VE", "VF", "VG", "VO", "VX", "VY", "XJ", "XK", "XL", "XM", "XN", "XO"] },
    208: { name: "Cuba", continent: "NA", prefixes: ["CL", "CM", "CO", "T4"] },
    210: { name: "Jamaica", continent: "NA", prefixes: ["6Y"] },
    212: { name: "Martinique", continent: "NA", prefixes: ["FM", "TO5"] },
    214: { name: "Costa Rica", continent: "NA", prefixes: ["TI", "TE"] },
    216: { name: "Honduras", continent: "NA", prefixes: ["HQ", "HR"] },
    218: { name: "Guatemala", continent: "NA", prefixes: ["TD", "TG"] },
    220: { name: "Panama", continent: "NA", prefixes: ["3E", "3F", "H3", "H8", "H9", "HO", "HP"] },
    222: { name: "Haiti", continent: "NA", prefixes: ["4V", "HH"] },
    224: { name: "Dominican Republic", continent: "NA", prefixes: ["HI"] },
    226: { name: "Bahamas", continent: "NA", prefixes: ["C6"] },
    228: { name: "Turks & Caicos Islands", continent: "NA", prefixes: ["VP5", "VQ5"] },
    230: { name: "Barbados", continent: "NA", prefixes: ["8P"] },
    232: { name: "Anguilla", continent: "NA", prefixes: ["VP2E"] },
    234: { name: "Antigua & Barbuda", continent: "NA", prefixes: ["V2"] },
    236: { name: "British Virgin Islands", continent: "NA", prefixes: ["VP2V"] },
    238: { name: "Dominica", continent: "NA", prefixes: ["J7"] },
    240: { name: "Grenada", continent: "NA", prefixes: ["J3"] },
    242: { name: "Guadeloupe", continent: "NA", prefixes: ["FG", "TO4"] },
    244: { name: "Montserrat", continent: "NA", prefixes: ["VP2M"] },
    246: { name: "St Kitts & Nevis", continent: "NA", prefixes: ["V4"] },
    248: { name: "St Lucia", continent: "NA", prefixes: ["J6"] },
    250: { name: "St Vincent", continent: "NA", prefixes: ["J8"] },
    254: { name: "Aruba", continent: "SA", prefixes: ["P4"] },
    256: { name: "Curacao", continent: "SA", prefixes: ["PJ2"] },
    258: { name: "Bonaire", continent: "SA", prefixes: ["PJ4"] },
    260: { name: "Saba & St Eustatius", continent: "NA", prefixes: ["PJ5", "PJ6"] },
    262: { name: "Sint Maarten", continent: "NA", prefixes: ["PJ7"] },
    264: { name: "St Martin", continent: "NA", prefixes: ["FS", "TO3"] },
    266: { name: "St Barthelemy", continent: "NA", prefixes: ["FJ", "TO1"] },
    268: { name: "Belize", continent: "NA", prefixes: ["V3"] },
    270: { name: "Greenland", continent: "NA", prefixes: ["OX", "XP"] },
    272: { name: "St Pierre & Miquelon", continent: "NA", prefixes: ["FP"] },
    274: { name: "Trinidad & Tobago", continent: "SA", prefixes: ["9Y", "9Z"] },
    276: { name: "Cayman Islands", continent: "NA", prefixes: ["ZF"] },
    278: { name: "Clipperton Island", continent: "NA", prefixes: ["FO0C", "TX0C"] },

    // ==================== AMERYKA POŁUDNIOWA (SA) ====================
    19: { name: "Argentina", continent: "SA", prefixes: ["AY", "AZ", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "LO", "LP", "LQ", "LR", "LS", "LT", "LU", "LV", "LW"] },
    36: { name: "Bolivia", continent: "SA", prefixes: ["CP"] },
    108: { name: "Brazil", continent: "SA", prefixes: ["PP", "PQ", "PR", "PS", "PT", "PU", "PV", "PW", "PX", "PY", "ZV", "ZW", "ZX", "ZY", "ZZ"] },
    112: { name: "Chile", continent: "SA", prefixes: ["3G", "CA", "CB", "CC", "CD", "CE", "XQ", "XR"] },
    116: { name: "Colombia", continent: "SA", prefixes: ["5J", "5K", "HJ", "HK"] },
    120: { name: "Ecuador", continent: "SA", prefixes: ["HC", "HD"] },
    132: { name: "Falkland Islands", continent: "SA", prefixes: ["VP8"] },
    136: { name: "French Guiana", continent: "SA", prefixes: ["FY", "TO2"] },
    140: { name: "Guyana", continent: "SA", prefixes: ["8R"] },
    144: { name: "Paraguay", continent: "SA", prefixes: ["ZP"] },
    148: { name: "Peru", continent: "SA", prefixes: ["4T", "OA", "OB", "OC"] },
    152: { name: "South Georgia Island", continent: "SA", prefixes: ["VP8SG"] },
    156: { name: "South Orkney Islands", continent: "SA", prefixes: ["VP8SO"] },
    160: { name: "South Sandwich Islands", continent: "SA", prefixes: ["VP8SS"] },
    164: { name: "South Shetland Islands", continent: "SA", prefixes: ["VP8SH"] },
    168: { name: "Suriname", continent: "SA", prefixes: ["PZ"] },
    172: { name: "Uruguay", continent: "SA", prefixes: ["CV", "CW", "CX"] },
    176: { name: "Venezuela", continent: "SA", prefixes: ["4M", "YV", "YW", "YX", "YY"] },
    180: { name: "Easter Island", continent: "SA", prefixes: ["3G0", "CE0Y", "XQ0Y", "XR0Y"] },
    184: { name: "San Felix & San Ambrosio", continent: "SA", prefixes: ["CE0X", "XQ0X", "XR0X"] },
    188: { name: "Juan Fernandez Islands", continent: "SA", prefixes: ["CE0I", "CE0Z", "XQ0Z", "XR0Z"] },

    // ==================== OCEANIA (OC) ====================
    280: { name: "Australia", continent: "OC", prefixes: ["AX", "VH", "VI", "VJ", "VK", "VL", "VM", "VN", "VZ"] },
    282: { name: "Cocos-Keeling Islands", continent: "OC", prefixes: ["VK9C"] },
    284: { name: "Christmas Island", continent: "OC", prefixes: ["VK9X"] },
    286: { name: "Lord Howe Island", continent: "OC", prefixes: ["VK9L"] },
    288: { name: "Macquarie Island", continent: "OC", prefixes: ["VK0M"] },
    290: { name: "Norfolk Island", continent: "OC", prefixes: ["VK9N"] },
    292: { name: "Heard Island", continent: "AF", prefixes: ["VK0H"] },
    294: { name: "Willis Island", continent: "OC", prefixes: ["VK9W"] },
    296: { name: "Mellish Reef", continent: "OC", prefixes: ["VK9M"] },
    298: { name: "Fiji", continent: "OC", prefixes: ["3D2"] },
    300: { name: "Conway Reef", continent: "OC", prefixes: ["3D2C"] },
    302: { name: "Rotuma Island", continent: "OC", prefixes: ["3D2R"] },
    304: { name: "French Polynesia", continent: "OC", prefixes: ["FO"] },
    308: { name: "Austral Islands", continent: "OC", prefixes: ["FO/A"] },
    310: { name: "Marquesas Islands", continent: "OC", prefixes: ["FO/M"] },
    312: { name: "Wallis & Futuna Islands", continent: "OC", prefixes: ["FW"] },
    314: { name: "New Caledonia", continent: "OC", prefixes: ["FK"] },
    318: { name: "Kiribati", continent: "OC", prefixes: ["T30", "T31", "T32", "T33"] },
    320: { name: "Tuvalu", continent: "OC", prefixes: ["T2"] },
    322: { name: "Nauru", continent: "OC", prefixes: ["C2"] },
    324: { name: "Marshall Islands", continent: "OC", prefixes: ["V7"] },
    326: { name: "Micronesia", continent: "OC", prefixes: ["V6"] },
    328: { name: "Palau", continent: "OC", prefixes: ["T8"] },
    332: { name: "New Zealand", continent: "OC", prefixes: ["ZK", "ZL", "ZM"] },
    334: { name: "Chatham Islands", continent: "OC", prefixes: ["ZL7"] },
    336: { name: "Kermadec Islands", continent: "OC", prefixes: ["ZL8"] },
    338: { name: "Auckland & Campbell Islands", continent: "OC", prefixes: ["ZL9"] },
    340: { name: "Papua New Guinea", continent: "OC", prefixes: ["P2"] },
    342: { name: "Temotu Province", continent: "OC", prefixes: ["H40"] },
    344: { name: "Solomon Islands", continent: "OC", prefixes: ["H4"] },
    346: { name: "Samoa", continent: "OC", prefixes: ["5W"] },
    348: { name: "Tokelau Islands", continent: "OC", prefixes: ["ZK3"] },
    350: { name: "Tonga", continent: "OC", prefixes: ["A3"] },
    352: { name: "Vanuatu", continent: "OC", prefixes: ["YJ"] },
    354: { name: "Pitcairn Island", continent: "OC", prefixes: ["VP6"] },
    356: { name: "Ducie Island", continent: "OC", prefixes: ["VP6D"] },
    358: { name: "Niue", continent: "OC", prefixes: ["E6", "ZK2"] },
    360: { name: "Cook Islands", continent: "OC", prefixes: ["E5", "ZK1"] },
    362: { name: "Pratas Island", continent: "AS", prefixes: ["BV9P"] },
    364: { name: "Scarborough Reef", continent: "AS", prefixes: ["BS7"] },

    // ==================== ANTARKTYKA (AN) ====================
    400: { name: "Antarctica", continent: "AN", prefixes: ["8J1", "CE9", "DP0", "DP1", "FT", "KC4", "RI1AN", "VP8", "ZL5", "ZS7"] },
    402: { name: "Peter I Island", continent: "AN", prefixes: ["3Y0P", "3Y/P"] },
    404: { name: "Bouvet Island", continent: "AF", prefixes: ["3Y0B", "3Y/B"] }
};

// Indeks prefiksów dla szybkiego wyszukiwania
// Budowany automatycznie z DXCC_DATABASE
let PREFIX_INDEX = null;

/**
 * Buduje indeks prefiksów dla szybkiego wyszukiwania
 * Sortuje prefiksy od najdłuższych do najkrótszych dla prawidłowego dopasowania
 */
function buildPrefixIndex() {
    PREFIX_INDEX = {};

    for (const [dxccId, data] of Object.entries(DXCC_DATABASE)) {
        for (const prefix of data.prefixes) {
            PREFIX_INDEX[prefix] = {
                dxcc: parseInt(dxccId),
                continent: data.continent,
                country: data.name
            };
        }
    }

    console.log(`Zbudowano indeks prefiksów: ${Object.keys(PREFIX_INDEX).length} prefiksów`);
}

/**
 * Znajdź informacje DXCC na podstawie callsigna
 * @param {string} callsign - Znak wywoławczy
 * @returns {Object|null} - Obiekt z dxcc, continent, country lub null
 */
function lookupCallsign(callsign) {
    if (!callsign) return null;

    // Zbuduj indeks jeśli nie istnieje
    if (!PREFIX_INDEX) {
        buildPrefixIndex();
    }

    callsign = callsign.toUpperCase().trim();

    // Obsłuż callsigny z ukośnikiem (np. SP3WKW/P, EA8/SP3WKW)
    const parts = callsign.split('/');
    let mainCall = parts[0];

    // Jeśli jest ukośnik, sprawdź czy pierwsza część to prefix kraju
    if (parts.length > 1) {
        // Typowe sufiksy do ignorowania
        const suffixes = ['P', 'M', 'MM', 'AM', 'QRP', 'A', 'B', 'LH', 'LGT'];

        // Sprawdź czy pierwsza część to prefix kraju (krótka, 1-4 znaki i nie jest sufiksem)
        if (parts[0].length <= 4 && !suffixes.includes(parts[0])) {
            // Format prefix/call (np. EA8/SP3WKW) - użyj prefiksu
            for (let len = Math.min(parts[0].length, 5); len >= 1; len--) {
                const prefix = parts[0].substring(0, len);
                if (PREFIX_INDEX[prefix]) {
                    return PREFIX_INDEX[prefix];
                }
            }
        }
    }

    // Sprawdź prefiksy od najdłuższego (5 znaków) do najkrótszego (1 znak)
    for (let len = Math.min(mainCall.length, 5); len >= 1; len--) {
        const prefix = mainCall.substring(0, len);
        if (PREFIX_INDEX[prefix]) {
            return PREFIX_INDEX[prefix];
        }
    }

    // Specjalne przypadki - callsigny zaczynające się od cyfry
    // np. 9A1A, 4O3A, 3Z0R
    if (mainCall.length >= 2 && /^\d/.test(mainCall)) {
        // Spróbuj 2-znakowy prefix (np. 9A, 4O, 3Z)
        const twoChar = mainCall.substring(0, 2);
        if (PREFIX_INDEX[twoChar]) {
            return PREFIX_INDEX[twoChar];
        }

        // Spróbuj 3-znakowy prefix z cyfrą na końcu (np. 3DA)
        if (mainCall.length >= 3) {
            const threeChar = mainCall.substring(0, 3);
            if (PREFIX_INDEX[threeChar]) {
                return PREFIX_INDEX[threeChar];
            }
        }
    }

    // Ostatnia próba - pierwszy znak jako prefix
    const firstChar = mainCall[0];
    if (PREFIX_INDEX[firstChar]) {
        return PREFIX_INDEX[firstChar];
    }

    console.warn(`Nie znaleziono DXCC dla callsigna: ${callsign}`);
    return null;
}

// Zbuduj indeks przy ładowaniu
buildPrefixIndex();

// Export do globalnego scope
window.DXCC_DATABASE = DXCC_DATABASE;
window.PREFIX_INDEX = PREFIX_INDEX;
window.lookupCallsign = lookupCallsign;
