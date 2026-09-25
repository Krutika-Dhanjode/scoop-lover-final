const fs = require('fs');
let appJsx = fs.readFileSync('src/App.jsx', 'utf8');

// Replace dark blue #1A237E with #1D2D82 (Scoop Lovers Deep Blue)
appJsx = appJsx.replace(/#1A237E/gi, '#1D2D82');
// Replace sidebar gradient
appJsx = appJsx.replace(/linear-gradient\(180deg,#0A1648 0%,#1A237E 50%,#283593 100%\)/g, 'linear-gradient(180deg, #1D2D82 0%, #D83178 100%)');
// Change primary button gradient
appJsx = appJsx.replace(/linear-gradient\(135deg,#1D2D82,#7B1FA2\)/gi, 'linear-gradient(135deg, #1D2D82, #D83178)');
// Make some stats cards use the pink/magenta theme
appJsx = appJsx.replace(/#4FC3F7/gi, '#D83178');

fs.writeFileSync('src/App.jsx', appJsx);

let appCss = fs.readFileSync('src/App.css', 'utf8');
appCss = appCss.replace(/#1A237E/gi, '#1D2D82');
appCss = appCss.replace(/linear-gradient\(180deg, #0A1648 0%, #1A237E 50%, #283593 100%\)/g, 'linear-gradient(180deg, #1D2D82 0%, #D83178 100%)');
appCss = appCss.replace(/#F8F9FD/gi, '#FFF0F5'); // Soft pinkish white background for app

fs.writeFileSync('src/App.css', appCss);
console.log('Theme applied successfully!');
