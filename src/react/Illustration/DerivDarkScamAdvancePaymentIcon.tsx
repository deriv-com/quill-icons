import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkScamAdvancePaymentIcon = (
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
    <g clipPath='url(#89db05e7c6c3f14743de6cb88fe5cf49__a)'>
      <mask
        id='89db05e7c6c3f14743de6cb88fe5cf49__b'
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
      <g mask='url(#89db05e7c6c3f14743de6cb88fe5cf49__b)'>
        <path fill='#414652' d='M96 0H16v45.71h80z' />
        <path fill='#5C616D' d='M88 14.21H8v45.71h80z' />
        <path fill='#9498A2' d='M80 28.41H0v45.71h80z' />
        <path
          fill='#B1B4BC'
          d='M49.14 56.14c0-3.95-2.08-6.19-7.63-7.74-3.97-1.12-4.85-1.85-4.85-3.47 0-1.14.68-2.55 3.06-2.55 2.84 0 3.32 1.67 3.59 2.7h5.27c-.28-2.89-1.92-5.74-6.53-6.44v-2.38h-4.41v2.42c-3.52.66-6.28 3-6.28 6.76 0 3.49 1.83 5.8 8.1 7.61 3.44.98 4.41 1.87 4.41 3.69 0 1.49-.88 2.8-3.62 2.8-2.22 0-3.69-1.21-4.12-3.12h-5.26c.29 3.59 2.75 6.2 7.04 6.86v2.98h4.45v-2.99c4.07-.61 6.78-2.94 6.78-7.13'
        />
        <path
          fill='#FF444F'
          d='M74.37 96C86.316 96 96 86.316 96 74.37s-9.684-21.63-21.63-21.63-21.63 9.684-21.63 21.63S62.424 96 74.37 96'
        />
        <path
          fill='#fff'
          d='M86.71 74.76c0-6.81-5.52-12.33-12.33-12.33s-12.33 5.52-12.33 12.33v5.4h4.47l-.62 6.17h3.47V84.4h1.54v1.93h2.7V84.4h1.54v1.93h2.7V84.4h1.54v1.93h3.47l-.62-6.17h4.47zM69.29 77.3c-2.04 0-3.7-1.66-3.7-3.7h7.4c0 2.04-1.66 3.7-3.7 3.7m2.72 3.24 2.36-3.48 2.36 3.48zm7.45-3.24c-2.04 0-3.7-1.66-3.7-3.7h7.4c0 2.04-1.66 3.7-3.7 3.7'
        />
      </g>
    </g>
    <defs>
      <clipPath id='89db05e7c6c3f14743de6cb88fe5cf49__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkScamAdvancePaymentIcon);
export default ForwardRef;
