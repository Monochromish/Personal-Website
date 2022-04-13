import * as React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Monochromish - Home</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Monochromish" />
      <meta name="twitter:title" content="Monochromish - Home" />
      <meta name="twitter:description" content="My personal website, nothing much nothing less." />
      <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/79590499?v=4" />
      <meta property="og:title" content="Monochromish - Home" />
      <meta property="og:url" content="https://monolul.me" />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/79590499?v=4" />
    </Helmet>
  );
}
