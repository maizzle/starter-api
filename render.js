import { render } from '@maizzle/framework'

let template = `---
preheader: "Using Maizzle on the server"
---

<x-layout>
  <a href="https://maizzle.com">
    <img src="logo.png" src-production="images/logo.png" width="70" alt="Maizzle">
  </a>

  <x-spacer height="24px" />

  <h1 class="m-0 mb-6 text-2xl/8 text-slate-900 font-semibold">
    Hello there!
  </h1>

  <p class="m-0 mb-6 text-base/6 text-slate-600">
    We're happy to have you on board! Please verify your email address in order to activate your account:
  </p>

  <x-button
    href="https://maizzle.com"
    class="bg-slate-950 hover:bg-slate-800"
  >
    Verify email
  </x-button>

  <x-spacer height="24px" />

  <p class="m-0 text-base/6 text-slate-600">
    Thanks,
    <br>
    <span class="font-semibold">Maizzle</span>
  </p>

  <x-divider />

  <p class="m-0 text-xs/5 text-slate-600 mso-break-all">
    If you're having trouble clicking the "Verify email" button, copy and paste the following URL into your web browser:
    <a href="https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0" class="text-slate-800 underline">https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0</a>
  </p>
</x-layout>`

/** @type {import('@maizzle/framework').Config} */
render(
  template,
  {
    css: {
      inline: true,
      purge: true,
      shorthand: true,
    },
    prettify: true,
  }
).then(({html}) => console.log(html))
