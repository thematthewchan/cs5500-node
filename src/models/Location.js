/**
 * @file Declares Location data type representing location of a user,
 * as in user has a location
 */
/**
 * @typedef Follow Represents location type
 * @property {number} latitude Latitude of location
 * @property {number} longitude Longitude of location
 */
export default class Location {
    constructor() {
        this.latitude = 0.0;
        this.longitude = 0.0;
    }
}
