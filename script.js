const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn;
let color;
let hint;
const text = document.querySelector("#text");
const btn1 = document.querySelector("#opt");
const btn2 = document.querySelector("#r-opt");
const container = document.querySelector(".container");
const table = document.querySelector(".table");
let copy, format, way,ops;

const w3cNamedColors = {
    "aliceblue": "#F0F8FF",
    "antiquewhite": "#FAEBD7",
    "aqua": "#00FFFF",
    "aquamarine": "#7FFFD4",
    "azure": "#F0FFFF",
    "beige": "#F5F5DC",
    "bisque": "#FFE4C4",
    "black": "#000000",
    "blanchedalmond": "#FFEBCD",
    "blue": "#0000FF",
    "blueviolet": "#8A2BE2",
    "brown": "#A52A2A",
    "burlywood": "#DEB887",
    "cadetblue": "#5F9EA0",
    "chartreuse": "#7FFF00",
    "chocolate": "#D2691E",
    "coral": "#FF7F50",
    "cornflowerblue": "#6495ED",
    "cornsilk": "#FFF8DC",
    "crimson": "#DC143C",
    "cyan": "#00FFFF",
    "darkblue": "#00008B",
    "darkcyan": "#008B8B",
    "darkgoldenrod": "#B8860B",
    "darkgray": "#A9A9A9",
    "darkgreen": "#006400",
    "darkgrey": "#A9A9A9",
    "darkkhaki": "#BDB76B",
    "darkmagenta": "#8B008B",
    "darkolivegreen": "#556B2F",
    "darkorange": "#FF8C00",
    "darkorchid": "#9932CC",
    "darkred": "#8B0000",
    "darksalmon": "#E9967A",
    "darkseagreen": "#8FBC8F",
    "darkslateblue": "#483D8B",
    "darkslategray": "#2F4F4F",
    "darkslategrey": "#2F4F4F",
    "darkturquoise": "#00CED1",
    "darkviolet": "#9400D3",
    "deeppink": "#FF1493",
    "deepskyblue": "#00BFFF",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1E90FF",
    "firebrick": "#B22222",
    "floralwhite": "#FFFAF0",
    "forestgreen": "#228B22",
    "fuchsia": "#FF00FF",
    "gainsboro": "#DCDCDC",
    "ghostwhite": "#F8F8FF",
    "gold": "#FFD700",
    "goldenrod": "#DAA520",
    "gray": "#808080",
    "grey": "#808080",
    "green": "#008000",
    "greenyellow": "#ADFF2F",
    "honeydew": "#F0FFF0",
    "hotpink": "#FF69B4",
    "indianred": "#CD5C5C",
    "indigo": "#4B0082",
    "ivory": "#FFFFF0",
    "khaki": "#F0E68C",
    "lavender": "#E6E6FA",
    "lavenderblush": "#FFF0F5",
    "lawngreen": "#7CFC00",
    "lemonchiffon": "#FFFACD",
    "lightblue": "#ADD8E6",
    "lightcoral": "#F08080",
    "lightcyan": "#E0FFFF",
    "lightgoldenrodyellow": "#FAFAD2",
    "lightgray": "#D3D3D3",
    "lightgreen": "#90EE90",
    "lightgrey": "#D3D3D3",
    "lightpink": "#FFB6C1",
    "lightsalmon": "#FFA07A",
    "lightseagreen": "#20B2AA",
    "lightskyblue": "#87CEFA",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#B0C4DE",
    "lightyellow": "#FFFFE0",
    "lime": "#00FF00",
    "limegreen": "#32CD32",
    "linen": "#FAF0E6",
    "magenta": "#FF00FF",
    "maroon": "#800000",
    "mediumaquamarine": "#66CDAA",
    "mediumblue": "#0000CD",
    "mediumorchid": "#BA55D3",
    "mediumpurple": "#9370DB",
    "mediumseagreen": "#3CB371",
    "mediumslateblue": "#7B68EE",
    "mediumspringgreen": "#00FA9A",
    "mediumturquoise": "#48D1CC",
    "mediumvioletred": "#C71585",
    "midnightblue": "#191970",
    "mintcream": "#F5FFFA",
    "mistyrose": "#FFE4E1",
    "moccasin": "#FFE4B5",
    "navajowhite": "#FFDEAD",
    "navy": "#000080",
    "oldlace": "#FDF5E6",
    "olive": "#808000",
    "olivedrab": "#6B8E23",
    "orange": "#FFA500",
    "orangered": "#FF4500",
    "orchid": "#DA70D6",
    "palegoldenrod": "#EEE8AA",
    "palegreen": "#98FB98",
    "paleturquoise": "#AFEEEE",
    "palevioletred": "#DB7093",
    "papayawhip": "#FFEFD5",
    "peachpuff": "#FFDAB9",
    "peru": "#CD853F",
    "pink": "#FFC0CB",
    "plum": "#DDA0DD",
    "powderblue": "#B0E0E6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#FF0000",
    "rosybrown": "#BC8F8F",
    "royalblue": "#4169E1",
    "saddlebrown": "#8B4513",
    "salmon": "#FA8072",
    "sandybrown": "#F4A460",
    "seagreen": "#2E8B57",
    "seashell": "#FFF5EE",
    "sienna": "#A0522D",
    "silver": "#C0C0C0",
    "skyblue": "#87CEEB",
    "slateblue": "#6A5ACD",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#FFFAFA",
    "springgreen": "#00FF7F",
    "steelblue": "#4682B4",
    "tan": "#D2B48C",
    "teal": "#008080",
    "thistle": "#D8BFD8",
    "tomato": "#FF6347",
    "turquoise": "#40E0D0",
    "violet": "#EE82EE",
    "wheat": "#F5DEB3",
    "white": "#FFFFFF",
    "whitesmoke": "#F5F5F5",
    "yellow": "#FFFF00",
    "yellowgreen": "#9ACD32"
};

const colors = Object.keys(w3cNamedColors);
let sel = true;

function getcolor() {
    hexColor = "#";
    set();
    ops = document.querySelector(".ops");
    ops.classList.remove("hidden");
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color = document.querySelector(".color");
    hint = document.querySelector("#hint");
    color.textContent = "BackGround Color = " + hexColor;
    document.body.style.backgroundColor = hexColor;
}

let hexColor = "#";
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        getcolor();
    }
});



let tabl = [], temp = [];
for (let k = 0; k < colors.length; k++) {
    tabl.push(k);
}

btn1.addEventListener('click', () => {
    temp = [];
    let i = 0, j = 10;
    btn2.classList.remove("y");
    btn1.classList.add("y");
    container.style.height = "100%";
    container.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";

    container.innerHTML = `
    <h2 style="color: black;" class="heading">Color Names Table</h2>
    <div id="att">
    <input type="text" id="searchInput" placeholder="Search for color...">
    <div style="display : inline">
        <button class="page" id="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" color="black">
                <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
        </button>
        <button class="page" id="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" color="black">
                <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
        </button>
        </div>
    </div>
    <table id="colorTable">
        <thead>
            <tr>
                <th>S. no.</th>
                <th style="width:215px">Color Name</th>
                <th>Hex Code</th>
                <th>Preview</th>
            </tr>
        </thead>
        <tbody id="colorTableBody"></tbody>
    </table>`;
    container.style.width = "100%";
    generateTableRows(i, j, tabl);
    const search = document.getElementById('searchInput');
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    let table = tabl;
    prev.addEventListener('click', () => {
        if (i == 0) {
            return;
        }
        i = Math.max(0, i - 10);
        if (j == table.length - 1) j -= (table.length - 1) % 10;
        else j = Math.min(colors.length - 1, j - 10 - j % 10);
        colorTableBody.innerHTML = '';
        generateTableRows(i, j, table);
    });

    next.addEventListener('click', () => {
        if (j == colors.length - 1) {
            return;
        }
        i = Math.min(table.length - 1, i + 10);
        j = Math.min(table.length - 1, j + 10);
        colorTableBody.innerHTML = '';
        generateTableRows(i, j, table);
    });

    search.addEventListener('input', () => {
        let s = search.value;
        if (s == "") {
            i = 0;
            j = 10;
            colorTableBody.innerHTML = '';
            table = tabl;
            generateTableRows(i, j, table);
        }
        else {
            temp = [];
            for (let k = 0; k < colors.length; k++) {
                if (colors[k].toLowerCase().includes(s.toLowerCase()) || w3cNamedColors[colors[k]].toLowerCase().includes(s.toLowerCase())) {
                    temp.push(k);
                }
            }
            if (temp.length == 0) {
                colorTableBody.innerHTML = '';
            }
            else {
                i = 0;
                j = Math.min(temp.length - 1, 10);
                colorTableBody.innerHTML = '';
                generateTableRows(i, j, table = temp);
            }
        }
    });

})

btn2.addEventListener('click', () => {
    btn1.classList.remove("y");
    btn2.classList.add("y");
    call();
});
function set(){
        copy = document.querySelector("#copy");
        form = document.querySelector("#format");
    
        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(color.innerHTML.substring(18));
            let mod = document.createElement("div");
            mod.classList.add("modal");
            document.body.appendChild(mod);
            mod.innerHTML = "Copied to clipboard";
            setTimeout(() => {
                mod.remove();
            }, 5000);
        });
    
        form.addEventListener('click', () => {
            let colorVal = color.textContent.substring();
            const { r, g, b } = hexToRgb(hexColor);
            const { h, s, l } = rgbToHsl(r, g, b);
            way = (way + 1) % 3;
            if (way == 0) {
                color.textContent = "BackGround Color = " + hexColor;
            } else if (way == 1) {
                color.textContent = "BackGround Color = " + `RGB(${r}, ${g}, ${b})`;
            } else {
                color.textContent = "BackGround Color = " + `HSL(${h}, ${s}%, ${l}%)`;
            }
    
        });
    
}
function call() {

    container.style.height = "60%";
    container.style.width = "50%";
    container.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
    container.innerHTML = `
    <h2>
        <p id="hint">To Generate Random BackGround Color Hit Space or <br> <button class="btn btn-hero" id="btn">Click Here!</button></p><span class="color"></span>
    </h2>
    <div class="ops hidden">
        <svg id="copy" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="10" x2="10" y2="30" stroke="grey" stroke-width="2" />
            <line x1="10" y1="10" x2="30" y2="10" stroke="grey" stroke-width="2" />
            <line x1="10" y1="30" x2="30" y2="30" stroke="grey" stroke-width="2" />
            <line x1="30" y1="10" x2="30" y2="30" stroke="grey" stroke-width="2" />
            <line x1="35" y1="5" x2="35" y2="25" stroke="grey" stroke-width="2" />
            <line x1="15" y1="5" x2="35" y2="5" stroke="grey" stroke-width="2" />
        </svg>
        <svg id="format" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 45" width="40" height="40">
            <circle cx="20" cy="20" r="15" fill="none" stroke="grey" stroke-width="2" />
            <path d="M 20 6 a 2 2 1 1 1 1 28 Z" fill="grey" />
        </svg>

    </div>
    `;
    btn = document.getElementById('btn');
    btn.addEventListener('click', () => { getcolor(); });
    way = 0;
   
}
call();
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return { h, s, l };
}





// Function to generate table rows based on search input
function generateTableRows(s, e, tab) {
    const colorTableBody = document.getElementById('colorTableBody');
    colorTableBody.innerHTML = '';
    for (let i = s; i < e; i++) {
        const colorName = colors[tab[i]];
        const hexCode = w3cNamedColors[colorName];
        const row = `
          <tr>
            <td>${i + 1}</td>
            <td>${colorName}</td>
            <td>${hexCode}</td>
            <td><div class="color-preview" style="background-color: ${hexCode}; width: 100%;"></div></td>
          </tr>
        `;
        colorTableBody.innerHTML += row;
    }
}



