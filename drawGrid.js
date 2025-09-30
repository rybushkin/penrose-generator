// this p5 sketch is written in instance mode
// read more here: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

function sketch(parent) { // we pass the sketch data from the parent
  return function( p ) { // p could be any variable name
    // p5 sketch goes here
    let canvas;
    let grid, spacing, multiplier, rotate;
    let recentHover = false;
    let recentlySelectedLines = [];
    let adding = true;
    let selectedAngle;

    let prevX = 0;
    let prevY = 0;

    p.setup = function() {

      let target = parent.$el.parentElement;
      let width = target.clientWidth;
      let height = target.clientHeight;

      canvas = p.createCanvas(width, height);
      canvas.parent(parent.$el);
      parent.$emit('update:resize-completed'); 
      parent.$emit('update:width', width); 
      parent.$emit('update:height', height); 

      p.pixelDensity(2);
      // Use dynamic color from colorHue with fallback
      let colorHue = (parent && parent.data && parent.data.colorHue !== undefined) ? parent.data.colorHue : 120;
      let colorRgb = hslToRgb(colorHue / 360, 1, 0.5);
      p.stroke(colorRgb[0], colorRgb[1], colorRgb[2]);
      p.noLoop();
      drawLines(p, parent.data);
    };


    // HSL to RGB conversion function
    function hslToRgb(h, s, l) {
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    p.draw = function() {
    };

    // this is a new function we've added to p5
    // it runs only if the data changes
    p.dataChanged = function(data, oldData) {
      // console.log('data changed');
      // console.log('x: ', val.x, 'y: ', val.y);
      
      // Redraw if only colorHue changed
      if (oldData && data.colorHue !== oldData.colorHue) {
        p.redraw();
        return;
      }
      
      if (data.display == 'none') {
        // measure parent without canvas
        let target = parent.$el.parentElement;
        let width = target.clientWidth;
        let height = target.clientHeight;

        // resize canvas
        p.resizeCanvas(width, height);
        parent.$emit('update:resize-completed'); 
        parent.$emit('update:width', width); 
        parent.$emit('update:height', height); 
      }

      if (data.download > oldData.download) {
        let target = parent.$el.parentElement;
        let width = target.clientWidth;
        let height = target.clientHeight;
        let q = p.createGraphics(width, height, p.SVG);
        q.clear();
        drawLines(q, parent.data);
        q.save('Grid Pattern.svg');
      }

      drawLines(p, data);
    };

    p.mouseMoved = function() {

      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {

        recentHover = true;
        drawLines(p, parent.data);
        
        let xprime = (p.mouseX - p.width/2) * Math.cos(-rotate) - (p.mouseY - p.height/2) * Math.sin(-rotate) + p.width/2;
        let yprime = (p.mouseX - p.width/2) * Math.sin(-rotate) + (p.mouseY - p.height/2) * Math.cos(-rotate) + p.height/2;
        let selectedLine = getNearestLine(xprime, yprime);

        if (JSON.stringify(selectedLine) !== JSON.stringify({})) {
          p.push();
            p.translate(p.width / 2, p.height / 2);
            // Use dynamic color and thicker stroke for hover
            let colorHue = (parent && parent.data && parent.data.colorHue !== undefined) ? parent.data.colorHue : 120;
            let colorRgb = hslToRgb(colorHue / 360, 1, 0.5);
            if (colorRgb && colorRgb.length === 3 && !isNaN(colorRgb[0]) && !isNaN(colorRgb[1]) && !isNaN(colorRgb[2])) {
              p.stroke(colorRgb[0], colorRgb[1], colorRgb[2]);
            } else {
              p.stroke(0, 255, 0); // Fallback to green
            }
            p.strokeWeight(2); // Double thickness for hover
            p.rotate(rotate);
            drawLine(p, multiplier * selectedLine.angle, spacing * selectedLine.index);
          p.pop();
        }

        prevX = p.mouseX;
        prevY = p.mouseY;

      } else if (recentHover) {
        recentHover = false;
        drawLines(p, parent.data);
      }

    };

    p.mousePressed = function() {
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {

        let xprime = (p.mouseX - p.width/2) * Math.cos(-rotate) - (p.mouseY - p.height/2) * Math.sin(-rotate) + p.width/2;
        let yprime = (p.mouseX - p.width/2) * Math.sin(-rotate) + (p.mouseY - p.height/2) * Math.cos(-rotate) + p.height/2;
        let selectedLine = getNearestLine(xprime, yprime);

        if (JSON.stringify(selectedLine) !== JSON.stringify({})) {

          let index = parent.data.selectedLines.findIndex(e => e.angle == selectedLine.angle && e.index == selectedLine.index);
          adding = index < 0;
          selectedAngle = selectedLine.angle;

          updateSelectedLines(selectedLine, adding);
          recentlySelectedLines.push(lineToString(selectedLine));

        }

        prevX = p.mouseX;
        prevY = p.mouseY;

      }
    };


    p.mouseDragged = function() {
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {

        let xprime = (p.mouseX - p.width/2) * Math.cos(-rotate) - (p.mouseY - p.height/2) * Math.sin(-rotate) + p.width/2;
        let yprime = (p.mouseX - p.width/2) * Math.sin(-rotate) + (p.mouseY - p.height/2) * Math.cos(-rotate) + p.height/2;
        let selectedLine = getNearestLine(xprime, yprime);
        let lineString = lineToString(selectedLine);

        if (lineString !== JSON.stringify({})) {
          if (!recentlySelectedLines.includes(lineString)) {
            if (adding) {
              if (selectedLine.angle == selectedAngle) {
                updateSelectedLines(selectedLine, adding);
                recentlySelectedLines.push(lineString);
              }
            } else {
              updateSelectedLines(selectedLine, adding);
              recentlySelectedLines.push(lineString);
            }
          }
        }

        let mouseDistance = p.dist(p.mouseX, p.mouseY, prevX, prevY);
        let stepSize = 1;

        if (mouseDistance > stepSize) {
          for (let i = 0; i <= mouseDistance; i++) {

            let cursorX = p.map(i, 0, mouseDistance, p.mouseX, prevX, true);
            let cursorY = p.map(i, 0, mouseDistance, p.mouseY, prevY, true);

            let xprime = (cursorX - p.width/2) * Math.cos(-rotate) - (cursorY - p.height/2) * Math.sin(-rotate) + p.width/2;
            let yprime = (cursorX - p.width/2) * Math.sin(-rotate) + (cursorY - p.height/2) * Math.cos(-rotate) + p.height/2;
            let intermediateLine = getNearestLine(xprime, yprime);

            if (JSON.stringify(intermediateLine) !== JSON.stringify({})) {
              let lineString = lineToString(intermediateLine);
              if (!recentlySelectedLines.includes(lineString)) {
                if (adding) {
                  if (intermediateLine.angle == selectedAngle) {
                    updateSelectedLines(intermediateLine, adding);
                    recentlySelectedLines.push(lineString);
                  }
                } else {
                  updateSelectedLines(intermediateLine, adding);
                  recentlySelectedLines.push(lineString);
                }
              }            
            }
          }
        }

        prevX = p.mouseX;
        prevY = p.mouseY;

      }
    };

    p.mouseReleased = function() {
      recentlySelectedLines = [];
    };


    // algorithm for identifying closest line
    // needs testing, could be optimized
    function getNearestLine(mouseX, mouseY) {

      let minDist = spacing;
      let minLine = {};

      for (let line of grid) {

        let angle = line.angle;
        let index = line.index;
        let dist = p.abs(getXVal(multiplier * angle, spacing * index, mouseY - p.height/2) - (mouseX - p.width/2));

        if (!isNaN(dist)) {
          if (dist < minDist) {
            minLine = {
              angle: angle, 
              index: index
            };
            minDist = dist;
          }
        } 

        dist = p.abs(getYVal(multiplier * angle, spacing * index, mouseX - p.width/2) - (mouseY - p.height/2));
        if (!isNaN(dist)) {
          if (dist < minDist) {
            minLine = {
              angle: angle, 
              index: index
            };
            minDist = dist;
          }
        }        
      }

      if (minDist < 10 && minDist < spacing) {
        return minLine;
      } else {
        return {};
      }
    }

    function updateSelectedLines(line, addMode) {

      if (addMode) {
        parent.$emit('update:add-line', line);
      } else {
        parent.$emit('update:remove-line', line); 
      }

    }

    function lineToString(line) {
      return JSON.stringify(line);
    }


    function drawLines(instance, data) {
      grid = data.grid;
      spacing = data.spacing;
      multiplier = data.multiplier;
      rotate = instance.radians(data.rotate);

      instance.push();
      instance.background(0, 0.07 * 255, 0);
      instance.strokeWeight(1);
      instance.translate(instance.width / 2, instance.height / 2);
      instance.rotate(rotate);

      let selectedLines = parent.data.selectedLines;

      for (let line of grid) {

        // Use dynamic color from colorHue with fallback
        let colorHue = (parent && parent.data && parent.data.colorHue !== undefined) ? parent.data.colorHue : 120;
        let colorRgb = hslToRgb(colorHue / 360, 1, 0.5);
        // Fallback to green if colorRgb is invalid
        if (colorRgb && colorRgb.length === 3 && !isNaN(colorRgb[0]) && !isNaN(colorRgb[1]) && !isNaN(colorRgb[2])) {
          instance.stroke(colorRgb[0], colorRgb[1], colorRgb[2]);
        } else {
          instance.stroke(0, 255, 0); // Fallback to green
        }
        drawLine(instance, multiplier * line.angle, spacing * line.index);
      }


      if (data.showIntersections) {
        instance.noStroke();
        instance.fill(255);
        for (let pt of Object.values(data.intersectionPoints)) {
          instance.ellipse(pt.x * spacing, pt.y * spacing, 4);
        }
      }

      // intersections corresponding to selected tiles
      instance.strokeWeight(2);
      let colorHue = (parent && parent.data && parent.data.colorHue !== undefined) ? parent.data.colorHue : 120;
      let colorRgb = hslToRgb(colorHue / 360, 1, 0.5);
      // Fallback to green if colorRgb is invalid
      if (colorRgb && colorRgb.length === 3 && !isNaN(colorRgb[0]) && !isNaN(colorRgb[1]) && !isNaN(colorRgb[2])) {
        instance.stroke(colorRgb[0], colorRgb[1], colorRgb[2]);
      } else {
        instance.stroke(0, 255, 0); // Fallback to green
      }
      instance.noFill();
      for (let tile of data.selectedTiles) {
        instance.ellipse(tile.x * spacing, tile.y * spacing, 10);
      }
      
      instance.pop();
    }

    // angle, index
    function drawLine(instance, angle, index) {
      let x0 = getXVal(angle, index, -instance.height);
      let x1 = getXVal(angle, index, instance.height);
      //console.log(x0);
      if (!isNaN(x0) && !isNaN(x1) && Math.abs(x0) < 1000000 && Math.abs(x1) < 1000000) {
        instance.line(x0, -instance.height, x1, instance.height);
      } else {
        let y0 = getYVal(angle, index, -instance.width);
        let y1 = getYVal(angle, index, instance.width);
        instance.line(-instance.width, y0, instance.width, y1);
      }
    }

    // angle, index
    function getXVal(angle, index, y) {
      return (index - y * p.sin(angle))/p.cos(angle);
    }

    // angle, index
    function getYVal(angle, index, x) {
      return (index - x * p.cos(angle))/p.sin(angle);
    }

  };
}
