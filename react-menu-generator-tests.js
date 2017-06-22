// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by react-menu-generator.js.
import { name as packageName } from "meteor/nodexpert:react-menu-generator";

// Write your tests here!
// Here is an example.
Tinytest.add('react-menu-generator - example', function (test) {
  test.equal(packageName, "react-menu-generator");
});
