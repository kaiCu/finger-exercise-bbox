export default function bboxFromFeatureCollection(featureCollection) {
  var minX = Number.MAX_VALUE;
  var minY = Number.MAX_VALUE;

  var maxX = Number.MIN_VALUE;
  var maxY = Number.MIN_VALUE;;
  
  featureCollection.features.forEach(feature => {
    const coordinates = feature.geometry.coordinates;
    const x = coordinates[0];
    const y = coordinates[1];

    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });

  return [minX, minY, maxX, maxY];    
}
