/**
* Created with meadowlark.
* User: dariuszDev
* Date: 2014-12-11
* Time: 11:08 AM
* To change this template use Tools | Templates.
*/
suite('"About" Page Tests',function(){
   test('page should contain link to contact page',function(){
     assert($('a[href="/contact"]').length);  
   });
});