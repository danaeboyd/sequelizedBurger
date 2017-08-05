'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'Cheese Burger',
      devoured: true
    }, {
      burger_name: 'Double Cheese Burger',
      devoured: false
    }, {
      burger_name: 'Hawaiian Burger',
      devoured: true
    }, {
      burger_name: 'Angus Steak Burger',
      devoured: false
    }, {
      burger_name: 'Bacon Cheese Burger',
      devoured: false
    }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('burgers', null, {truncate:true});
  }
};