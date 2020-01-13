
var shipments = [
    [ { outForDelivery: 0}, { inTransit: 0}, { pickedUp: 1}],
    [ { outForDelivery: 0}, { inTransit: 1}, { pickedUp: 1}],
    [ { outForDelivery: 1}, { inTransit: 1}, { pickedUp: 1}],
  ]

function calculateSummayPercent(pallets) {
  var calculatedStatus = [
    {outForDelivery: 0},
    {inTransit: 0 },
    {pickedUp: 0}
  ]
  pallets.forEach( pallet => {
    calculatedStatus[2].pickedUp += pallet[2].pickedUp;
    calculatedStatus[1].inTransit += pallet[1].inTransit;
    calculatedStatus[0].outForDelivery += pallet[0].outForDelivery;
  });

  var length = pallets.length;
  return [
    { outForDelivery: calculatedStatus[0].outForDelivery/length },
    { inTransit: calculatedStatus[1].inTransit/length },
    { pickedUp: calculatedStatus[2].pickedUp/length }
  ]
}

function calculateSummaryStatus(pallets) {
  var totalPercentStatus = calculateSummayPercent(pallets);
  console.log(totalPercentStatus);
  for ( var i=0; i<3; i++) {
    var key = Object.keys(totalPercentStatus[i])[0]
    var percent = totalPercentStatus[i][key]
    if (percent == 1) {
      return key;
    }
  }
  return "Created";
}

console.log(calculateSummaryStatus(shipments))
