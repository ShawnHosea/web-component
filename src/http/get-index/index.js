// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<body class="padding-32">
  <div class="max-width-320">
    <div class="margin-left-8">
      <div class="margin-bottom-16">
        <h1 class="margin-bottom-16">
          Hello from Node.js!
        </h1>
      
      </div>
    </div>
  </div>
</body>
</html>
`
  }
}