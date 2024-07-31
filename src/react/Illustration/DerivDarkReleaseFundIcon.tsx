import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkReleaseFundIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#69877c78a023c5121cfdc13344baab21__a)'>
      <mask
        id='69877c78a023c5121cfdc13344baab21__b'
        width={96}
        height={96}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M96 0H0v96h96z' />
      </mask>
      <g mask='url(#69877c78a023c5121cfdc13344baab21__b)'>
        <path fill='#9498A2' d='M72.14 0H0v46h72.14z' />
        <path fill='#CED0D6' d='M84.07 10.5H11.93v46h72.14z' />
        <path fill='#EBECEF' d='M96 21H23.86v46H96z' />
        <path
          fill='#B1B4BC'
          d='M67.99 48.3c0-3.49-1.84-5.46-6.73-6.83-3.5-.99-4.28-1.63-4.28-3.06 0-1.01.6-2.25 2.7-2.25 2.5 0 2.93 1.47 3.16 2.38h4.65c-.24-2.55-1.69-5.07-5.76-5.68v-2.1h-3.89v2.13c-3.11.59-5.54 2.65-5.54 5.97 0 3.08 1.61 5.12 7.14 6.71 3.04.87 3.89 1.65 3.89 3.26 0 1.31-.77 2.47-3.19 2.47-1.96 0-3.26-1.07-3.64-2.75h-4.64c.25 3.16 2.43 5.47 6.21 6.05v2.63h3.92v-2.64c3.59-.54 6-2.6 6-6.3z'
        />
        <path
          fill='#FF444F'
          d='M75.77 96c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20'
        />
        <path
          fill='#fff'
          d='m79.465 74.3-5.098-5.098 2.404-2.404L85.973 76l-9.202 9.202-2.404-2.404 5.098-5.098H65.568v-3.4z'
        />
      </g>
    </g>
    <defs>
      <clipPath id='69877c78a023c5121cfdc13344baab21__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkReleaseFundIcon);
export default ForwardRef;
