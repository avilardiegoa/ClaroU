function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xX2qqI8vhm":
        Script1();
        break;
      case "6UsEctvef1J":
        Script2();
        break;
      case "5i9e2d2x0qo":
        Script3();
        break;
      case "6HC4Vxx8XEE":
        Script4();
        break;
      case "6YMl5A1bHF2":
        Script5();
        break;
      case "5hSM5IGKjSU":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('67OHHtqD8Z1');
const duration = 750;
const easing = 'ease-out';
const id = '5uEim00jy94';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('67OHHtqD8Z1');
const duration = 750;
const easing = 'ease-out';
const id = '5uEim00jy94_reverse';
const shrinkAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6NEXEI0OChi');
const duration = 750;
const easing = 'ease-out';
const id = '6OHu5FdhjlK';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6NEXEI0OChi');
const duration = 750;
const easing = 'ease-out';
const id = '6OHu5FdhjlK_reverse';
const shrinkAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5yDq1nYoexm');
const duration = 750;
const easing = 'ease-out';
const id = '6hbSHQgWYXn';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5yDq1nYoexm');
const duration = 750;
const easing = 'ease-out';
const id = '6hbSHQgWYXn_reverse';
const shrinkAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
