/**
 * Created with meadowlark.
 * User: dariuszDev
 * Date: 2014-12-10
 * Time: 02:53 PM
 * To change this template use Tools | Templates.
 */
var fortunes = ["Conquer your fears or they will conquer you.", "Rivers need springs.", "Do not fear what you don't know.", "You will have a pleasant surprise.", "Whenever possible, keep it simple.", ];
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};