module.exports = function(templateParams) {
return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${templateParams.htmlWebpackPlugin.options.title}</title>
  </head>
  <body ng-app="app" ng-controller="Main">
    <div ui-view></div>
  </body>
</html>
`;	
}