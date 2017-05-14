/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var favorSaver = {
    //Create global array for food
    var foodArray = [
        {food: 'Apple', expirationDate: '5/13/2017', category: 'Fruit', quantity: 1},
        {food: 'Carrots', expirationDate: '12/13/2017', category: 'Vegetable', quantity: 3},
        {food: 'Steak', expirationDate: '5/30/2017', category: 'Protein', quantity: 1}
    ];

    //Sort the function by the date field
    function sortDate(foodSorted){
        
    }

    //Take the foodArray and populate the Calendar
    function displayFood(foodDisplay){
        
    }

    //Add new food item to the foodArray
    function addFood(foodItem) {
        foodArray.push(foodItem);
        sortDate(foodArray);
    //Push new foodItem to the foodArray
    }

    /*
    var myArray = [
    {food: 'id', operator: 'eq', value: 1}, 
    {food: 'cStatus', operator: 'eq', value: 2}, 
    {food: 'money', operator: 'eq', value: 3}
    ];

    console.log(myArray);
    myArray = myArray.filter(function( obj ) {
        return obj.food !== 'money';
    });
    console.log(myArray);
    */


    //Delete Food object from the foodArray
    //Needs functionality to search the foodArray for a matching id
    function deleteFood(foodName) {
        foodArray = foodArray.filter(function( obj ){
            return obj.food !== foodName;
        })
    }

    //Edit Food object from the foodArray
    //Needs functionality to search the foodArray for a matching id
    function editFood() {

    }




}

var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
