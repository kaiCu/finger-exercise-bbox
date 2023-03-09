import bboxFromFeatureCollection from "../src/bbox.js";
import featureCollection from "./assets/featureCollection.js";

describe("bbox from feature collection", () => {

    it("should have bboxFromFeatureCollection function", () => {
        expect(bboxFromFeatureCollection).toBeDefined();
    });

    it("should calculate bbox from given feature collection", () => {
        expect(bboxFromFeatureCollection(featureCollection)).toEqual(
            [
              8.359434154899049,
              52.69635118112626,
              8.52699358126776,
              52.82111018932363
            ]
        )
    })
})