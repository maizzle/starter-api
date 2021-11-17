const Maizzle = require('@maizzle/framework')

let template = `---
preheader: Using Maizzle on the server
image: https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80
---

<extends src="layout.html">
  <block name="template">
    <table class="w-600 sm:w-full my-64 mx-auto font-sans">
      <tr>
        <td class="bg-top bg-no-repeat bg-cover rounded text-left" style="background-image: url('{{ page.image }}');">
          <component src="component.html" locals='{"width": 600, "height": 400, "src": "{{ page.image }}"}'>
            <div class="leading-64 sm:h-32">&zwnj;</div>
            <table class="w-full">
              <tr>
                <td class="w-48 sm:w-16"></td>
                <td>
                  <h1 class="m-0 mb-16 text-4xl text-white sm:leading-40">Using Maizzle in Node.js</h1>
                  <p class="m-0 text-white text-lg leading-24">
                    Using Maizzle programmatically in Node.js, with Layouts, Components, and the \`render()\` method.
                  </p>
                  <div class="leading-64 sm:h-32">&zwnj;</div>
                  <div class="leading-full">
                    <a
                      href="https://maizzle.com/docs/nodejs/"
                      class="inline-block py-16 px-24 rounded text-base font-semibold text-center no-underline text-white bg-indigo-800 hover:bg-indigo-700"
                    >
                      <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%; mso-text-raise:30px;">&#8202;</i><![endif]-->
                      <span style="mso-text-raise: 16px;">Read more &rarr;</span>
                      <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%;">&#8202;</i><![endif]-->
                    </a>
                  </div>
                </td>
                <td class="w-48 sm:w-16"></td>
              </tr>
            </table>
            <div class="leading-64 sm:h-32">&zwnj;</div>
          </component>
        </td>
      </tr>
    </table>
  </block>
</extends>
`

Maizzle.render(
  template,
  {
    maizzle: {
      env: 'node',
      inlineCSS: {
        mergeLonghand: true,
      },
      prettify: {
        ocd: true,
      },
      removeUnusedCSS: true,
    },
    tailwind: {
      css: '@tailwind utilities;',
      config: import('./tailwind.config.js'),
    }
  }
)
  .then(({html}) => console.log(html))
