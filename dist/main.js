(()=>{"use strict";class a{constructor(){this.array=[[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "]],this.shipArray=[],this.attackArray=[],this.sunkArray=[],this.allShipsSank=!1}placeShip(a,r,t){const e=a[0],s=a[1];if(!(r.length+e>10&&"Y"===t||r.length+s>10&&"X"===t))if("X"===t){for(let a=s;a<s+r.length;a++)if(!1===this.checkPlacement(e,a))return;for(let a=s;a<s+r.length;a++)this.array[e][a]=r.ID}else if("Y"===t){for(let a=e;a<e+r.length;a++)if(!1===this.checkPlacement(a,s))return;for(let a=e;a<e+r.length;a++)this.array[a][s]=r.ID}}checkPlacement(a,r){for(let t=a-1;t<a+2&&(void 0!==this.array[t]||(t++,void 0!==this.array[t]));t++)for(let a=r-1;a<r+2&&(void 0!==this.array[t][a]||(a++,void 0!==this.array[t][a]));a++)if(" "!==this.array[t][a])return!1;return!0}receiveAttack(a){for(let r=0;r<this.attackArray.length;r++)if(this.attackArray[r][0]===a[0]&&this.attackArray[r][1]===a[1])return;this.attackArray.push(a);const r=a[0],t=a[1];if(" "!==this.array[r][t]){const a=this.array[r][t];this.shipArray.forEach((r=>{if(r.ID===a&&r.hit(),!0===r.sunk){for(let a=0;a<this.sunkArray.length;a++)if(this.sunkArray[a]===r)return;this.sunkArray.push(r),this.sunkArray.length===this.shipArray.length&&(this.allShipsSank=!0)}}))}else this.array[r][t]="X"}}class r{constructor(r){this.name=r,this.gameBoard=new a,this.attackArray=[]}attack(){const a=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());for(let t=0;t<this.attackArray.length;t++)if(this.attackArray[t][0]===a&&this.attackArray[t][1]===r)return void this.attack();this.attackArray.push([a,r])}}class t{constructor(a,r){this.ID=r,this.length=a,this.hits=0,this.sunk=!1}hit(){this.hits<this.length&&(this.hits+=1),this.hits===this.length&&this.isSunk()}isSunk(){this.sunk=!0}}const e=new r,s=new r;function i(){const a=[];document.querySelectorAll(".your-board > div").forEach((r=>{r.querySelectorAll("div").forEach((r=>{a.push(r.id)}))}));for(let r=0;r<e.gameBoard.array.length;r++)for(let t=0;t<e.gameBoard.array[r].length;t++)if(" "!==e.gameBoard.array[r][t]){let e=Number(r.toString()+t.toString());e=a[e],document.querySelector(`#${e}`).classList.add("ship")}}e.gameBoard.shipArray.push(new t(5,"C")),e.gameBoard.shipArray.push(new t(4,"B")),e.gameBoard.shipArray.push(new t(3,"D")),e.gameBoard.shipArray.push(new t(3,"S")),e.gameBoard.shipArray.push(new t(2,"P")),s.gameBoard.shipArray.push(new t(5,"C")),s.gameBoard.shipArray.push(new t(4,"B")),s.gameBoard.shipArray.push(new t(3,"D")),s.gameBoard.shipArray.push(new t(3,"S")),s.gameBoard.shipArray.push(new t(2,"P")),e.gameBoard.placeShip([6,5],e.gameBoard.shipArray[0],"X"),e.gameBoard.placeShip([1,3],e.gameBoard.shipArray[1],"Y"),e.gameBoard.placeShip([7,2],e.gameBoard.shipArray[2],"Y"),e.gameBoard.placeShip([2,5],e.gameBoard.shipArray[3],"X"),e.gameBoard.placeShip([0,1],e.gameBoard.shipArray[4],"Y"),s.gameBoard.placeShip([0,6],s.gameBoard.shipArray[0],"Y"),s.gameBoard.placeShip([6,8],s.gameBoard.shipArray[1],"Y"),s.gameBoard.placeShip([3,0],s.gameBoard.shipArray[2],"X"),s.gameBoard.placeShip([6,2],s.gameBoard.shipArray[3],"X"),s.gameBoard.placeShip([0,1],s.gameBoard.shipArray[4],"Y");const h=[];i(),document.querySelectorAll(".enemy-board > div").forEach((a=>{a.querySelectorAll("div").forEach((a=>{a.addEventListener("click",(()=>{const r=a.id.slice(3,4),t=a.id.slice(5);for(let a=0;a<h.length;a++)if(h[a][0]===r&&h[a][1]===t)return;h.push([r,t]);const i=function(a,r){s.gameBoard.receiveAttack([a,r]),s.attack();const t=s.attackArray[s.attackArray.length-1];return e.gameBoard.receiveAttack(t),t}(r,t);"X"!==s.gameBoard.array[r][t]?a.classList.add("hit"):a.classList.add("miss"),function(a){const r=a[0],t=a[1],s=`P1Y${r}X${t}`,i=document.querySelector(`#${s}`);"X"!==e.gameBoard.array[r][t]?i.classList.add("hit"):i.classList.add("miss")}(i),!0!==e.gameBoard.allShipsSank&&!0!==s.gameBoard.allShipsSank||console.log("Game Over!")}))}))})),function(){const a=document.querySelectorAll(".ships");let r=0;const t=[];a.forEach((a=>{a.addEventListener("dragstart",(e=>{r=Math.floor(e.offsetX/52.5),r<0&&(r=0),t.push(a)}))})),document.querySelectorAll(".your-board > div").forEach((a=>{a.querySelectorAll("div").forEach((a=>{a.addEventListener("dragover",(a=>{a.preventDefault()})),a.addEventListener("drop",(()=>{const s=Number(a.id.slice(3,4));let h=Number(a.id.slice(5));h-=r;const o=t[t.length-1].classList[1];e.gameBoard.shipArray.forEach((a=>{a.ID===o&&(e.gameBoard.placeShip([s,h],a,"X"),i())}))}))}))}))}()})();