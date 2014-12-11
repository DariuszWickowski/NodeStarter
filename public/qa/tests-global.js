/**
* Created with meadowlark.
* User: dariuszDev
* Date: 2014-12-11
* Time: 10:40 AM
* To change this template use Tools | Templates.
*/
suite('Global Tests',function(){
   test('page has a valid title',function(){
      assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO'); 
   }); 
});