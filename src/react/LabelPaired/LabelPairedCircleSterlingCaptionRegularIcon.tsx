import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.07-2.625c-.468 0-.843.398-.843.867V8.75h1.148c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H5.227a3.3 3.3 0 0 1-.422 1.5h2.883c.187 0 .375.188.375.375 0 .21-.188.375-.376.375H4.126a.41.41 0 0 1-.352-.187.48.48 0 0 1 .024-.399l.234-.305c.258-.398.422-.867.446-1.359h-.352a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.352V7.742A1.586 1.586 0 0 1 6.07 6.125c.258 0 .492.07.727.188l.492.234a.385.385 0 0 1 .164.516.385.385 0 0 1-.516.164l-.492-.258a1 1 0 0 0-.375-.07z' />
    </g>
    <defs>
      <clipPath id='899418d1c1afb67a6355eb12d6ee7847__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingCaptionRegularIcon);
export default ForwardRef;
