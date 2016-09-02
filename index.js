const jsesc = require('jsesc');

module.exports = function(content) {
  const wrappedContent = jsesc(content.toString(), {'wrap': true});
  return `module.exports = ${wrappedContent}`;
}
