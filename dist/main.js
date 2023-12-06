(()=>{"use strict";class t{constructor(){this.array=[[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "]],this.shipArray=[],this.attackArray=[],this.sunkArray=[],this.allShipsSank=!1}placeShip(t,r,a){const e=t[0],s=t[1];if(!(r.length+e>10&&"Y"===a||r.length+s>10&&"X"===a)){if("X"===a){for(let t=s;t<s+r.length;t++)if(!1===this.checkPlacement(e,t))return;for(let t=s;t<s+r.length;t++)this.array[e][t]=r.ID}else if("Y"===a){for(let t=e;t<e+r.length;t++)if(!1===this.checkPlacement(t,s))return;for(let t=e;t<e+r.length;t++)this.array[t][s]=r.ID}return!0}}checkPlacement(t,r){for(let a=t-1;a<t+2&&(void 0!==this.array[a]||(a++,void 0!==this.array[a]));a++)for(let t=r-1;t<r+2&&(void 0!==this.array[a][t]||(t++,void 0!==this.array[a][t]));t++)if(" "!==this.array[a][t])return!1;return!0}receiveAttack(t){for(let r=0;r<this.attackArray.length;r++)if(this.attackArray[r][0]===t[0]&&this.attackArray[r][1]===t[1])return;this.attackArray.push(t);const r=t[0],a=t[1];if(" "!==this.array[r][a]){const t=this.array[r][a];this.shipArray.forEach((r=>{if(r.ID===t&&r.hit(),!0===r.sunk){for(let t=0;t<this.sunkArray.length;t++)if(this.sunkArray[t]===r)return;this.sunkArray.push(r),this.sunkArray.length===this.shipArray.length&&(this.allShipsSank=!0)}}))}else this.array[r][a]="X"}}class r{constructor(r){this.name=r,this.gameBoard=new t,this.attackArray=[]}attack(){const t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());for(let a=0;a<this.attackArray.length;a++)if(this.attackArray[a][0]===t&&this.attackArray[a][1]===r)return void this.attack();this.attackArray.push([t,r])}}class a{constructor(t,r){this.ID=r,this.length=t,this.hits=0,this.sunk=!1}hit(){this.hits<this.length&&(this.hits+=1),this.hits===this.length&&this.isSunk()}isSunk(){this.sunk=!0}}const e=new r,s=new r;e.gameBoard.shipArray.push(new a(5,"C")),e.gameBoard.shipArray.push(new a(4,"B")),e.gameBoard.shipArray.push(new a(3,"D")),e.gameBoard.shipArray.push(new a(3,"S")),e.gameBoard.shipArray.push(new a(2,"P")),s.gameBoard.shipArray.push(new a(5,"C")),s.gameBoard.shipArray.push(new a(4,"B")),s.gameBoard.shipArray.push(new a(3,"D")),s.gameBoard.shipArray.push(new a(3,"S")),s.gameBoard.shipArray.push(new a(2,"P"));let i=0;for(;i<5;){const t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());let a=Math.floor(2*Math.random());a=a<1?"X":"Y",!0===s.gameBoard.placeShip([t,r],s.gameBoard.shipArray[i],a)&&i++}function o(){return!0===s.gameBoard.allShipsSank?1:!0===e.gameBoard.allShipsSank?2:void 0}function h(){const t=[];document.querySelectorAll(".your-board > div").forEach((r=>{r.querySelectorAll("div").forEach((r=>{t.push(r.id)}))}));for(let r=0;r<e.gameBoard.array.length;r++)for(let a=0;a<e.gameBoard.array[r].length;a++)if(" "!==e.gameBoard.array[r][a]){let e=Number(r.toString()+a.toString());e=t[e],document.querySelector(`#${e}`).classList.add("ship")}}const n=[],l=document.querySelector("dialog"),c=document.querySelector(".result");h(),document.querySelectorAll(".enemy-board > div").forEach((t=>{t.querySelectorAll("div").forEach((t=>{t.addEventListener("click",(()=>{const r=t.id.slice(3,4),a=t.id.slice(5);for(let t=0;t<n.length;t++)if(n[t][0]===r&&n[t][1]===a)return;n.push([r,a]);const i=function(t,r){s.gameBoard.receiveAttack([t,r]),s.attack();const a=s.attackArray[s.attackArray.length-1];return e.gameBoard.receiveAttack(a),a}(r,a);"X"!==s.gameBoard.array[r][a]?t.classList.add("hit"):t.classList.add("miss"),function(t){const r=t[0],a=t[1],s=`P1Y${r}X${a}`,i=document.querySelector(`#${s}`);"X"!==e.gameBoard.array[r][a]?i.classList.add("hit"):i.classList.add("miss")}(i),1===o()?(l.showModal(),c.textContent="YOU WON!"):2===o()&&(l.showModal(),c.textContent="YOU LOST!")}))}))})),function(){const t=document.querySelector(".rotate"),r=document.querySelectorAll(".ships");r[0].style.display="grid";let a=0,s=0,i="X";const o=[];r.forEach((t=>{t.addEventListener("dragstart",(r=>{"X"===i?s=Math.floor(r.offsetX/52.5):"Y"===i&&(s=Math.floor(r.offsetY/52.5)),s<0&&(s=0),o.push(t)}))})),document.querySelectorAll(".your-board > div").forEach((t=>{t.querySelectorAll("div").forEach((t=>{t.addEventListener("dragover",(t=>{t.preventDefault()})),t.addEventListener("drop",(()=>{let n=Number(t.id.slice(3,4)),l=Number(t.id.slice(5));"X"===i?l-=s:"Y"===i&&(n-=s);const c=o[o.length-1].classList[1];e.gameBoard.shipArray.forEach((t=>{if(t.ID===c){let s=0;"X"===i?s=e.gameBoard.placeShip([n,l],t,"X"):"Y"===i&&(s=e.gameBoard.placeShip([n,l],t,"Y")),!0===s&&(r[a].style.display="none",a<4?r[++a].style.display="grid":(document.querySelector(".setup").style.display="none",document.querySelector(".enemy").removeAttribute("hidden"))),h()}}))}))}))})),t.addEventListener("click",(()=>{r.forEach((t=>{"axis-x"===t.classList[2]?t.classList.replace("axis-x","axis-y"):t.classList.replace("axis-y","axis-x")})),i="X"===i?"Y":"X"}))}()})();