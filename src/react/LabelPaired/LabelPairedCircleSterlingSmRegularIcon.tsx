import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.082-3.062c-.547 0-.984.464-.984 1.011v1.176h1.34a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.34a3.8 3.8 0 0 1-.493 1.75H8.97a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.813a.48.48 0 0 1-.41-.219.56.56 0 0 1 .027-.465l.273-.355c.3-.465.492-1.012.52-1.586h-.41a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.41V8.699c-.028-1.039.82-1.886 1.859-1.886.3 0 .574.082.848.218l.574.274c.219.11.3.383.191.601a.45.45 0 0 1-.601.192l-.574-.301a1.1 1.1 0 0 0-.438-.082z' />
    </g>
    <defs>
      <clipPath id='e590d4e7dddd36cd9a34c3a3ecb788b1__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingSmRegularIcon);
export default ForwardRef;
