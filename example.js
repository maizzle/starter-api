const Maizzle = require('@maizzle/framework')

let template = `---
preheader: Using Maizzle on the server
image: https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80
---

<extends src="layout.html">
  <block name="template">
    <table class="w-[600px] sm:w-full my-16 mx-auto font-sans">
      <tr>
        <td class="bg-top bg-no-repeat bg-cover rounded text-left" style="background-image: url('{{ page.image }}');">
          <component
            src="v-image.html"
            width="600px"
            height="400px"
            image="{{ page.image }}"
          >
            <div class="leading-16 sm:h-8">&zwnj;</div>
            <table class="w-full">
              <tr>
                <td class="w-12 sm:w-4"></td>
                <td>
                  <h1 class="m-0 mb-4 text-4xl text-white sm:leading-10">Using Maizzle in Node.js</h1>
                  <p class="m-0 text-white text-lg leading-6">
                    Using Maizzle programmatically in Node.js, with Layouts, Components, and the \`render()\` method.
                  </p>
                  <div class="leading-16 sm:h-8">&zwnj;</div>
                  <div class="leading-full">
                    <a
                      href="https://maizzle.com/docs/nodejs/"
                      class="inline-block py-4 px-6 rounded text-base font-semibold text-center [text-decoration:none] text-white bg-indigo-800 hover:bg-indigo-700"
                    >
                      <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%; mso-text-raise:30px;">&#8202;</i><![endif]-->
                      <span style="mso-text-raise: 16px;">Read more &rarr;</span>
                      <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%;">&#8202;</i><![endif]-->
                    </a>
                  </div>
                </td>
                <td class="w-12 sm:w-4"></td>
              </tr>
            </table>
            <div class="leading-16 sm:h-8">&zwnj;</div>
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
      prettify: true,
      inlineCSS: true,
      removeUnusedCSS: true,
      shorthandInlineCSS: true,
    },
  }
)
  .then(({html}) => console.log(html))
