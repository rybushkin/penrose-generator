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
      p.stroke(255,0,0);
      p.noLoop();
      drawLines(p, parent.data);
    };

    p.draw = function() {
    };

    // this is a new function we've added to p5
    // it runs only if the data changes
    p.dataChanged = function(data, oldData) {
      // console.log('data changed');
      // console.log('x: ', val.x, 'y: ', val.y);
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
            p.stroke(0, 255, 0);
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
      instance.background(0, 0, 0.2 * 255);
      instance.strokeWeight(1);
      instance.translate(instance.width / 2, instance.height / 2);
      instance.rotate(rotate);

      let selectedLines = parent.data.selectedLines;

      for (let line of grid) {

        if (selectedLines.filter(e => e.angle == line.angle && e.index == line.index).length > 0) {
          instance.stroke(0, 255, 0);
        } else {
          instance.stroke(255, 0, 0);
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
      instance.stroke(0, 191, 255);
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
