import _ from 'lodash'
import $ from 'jquery'
import foo from './foo'
function component () {
  var element = $('<div></div>');

  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.html(_.join(['Huuu','webpack'], ' '))

  return element.get(0);
}
console.log(foo)
console.log(foo())
document.body.appendChild(component());