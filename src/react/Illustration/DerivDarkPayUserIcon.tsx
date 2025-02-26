import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkPayUserIcon = (
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
    <g clipPath='url(#95ac14fc8b7d604c8fc8f21255f1e1db__a)'>
      <mask
        id='95ac14fc8b7d604c8fc8f21255f1e1db__b'
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
      <g mask='url(#95ac14fc8b7d604c8fc8f21255f1e1db__b)'>
        <path
          fill='#EBECEF'
          d='M66.34 82.68H29.66c-9.02 0-16.35-7.33-16.35-16.35V29.66c0-9.02 7.33-16.35 16.35-16.35h36.67c9.02 0 16.35 7.33 16.35 16.35v36.67c0 9.02-7.33 16.35-16.35 16.35zM29.66 19.31c-5.71 0-10.35 4.64-10.35 10.35v36.67c0 5.71 4.64 10.35 10.35 10.35h36.67c5.71 0 10.35-4.64 10.35-10.35V29.66c0-5.71-4.64-10.35-10.35-10.35z'
        />
        <path
          fill='#FF444F'
          d='M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20'
        />
        <path
          fill='#fff'
          d='M26.86 23.66c0-2.97-1.56-4.64-5.72-5.8-2.98-.84-3.64-1.38-3.64-2.6 0-.86.51-1.91 2.3-1.91 2.13 0 2.49 1.25 2.69 2.02h3.95c-.21-2.17-1.44-4.31-4.9-4.83V8.75h-3.31v1.81c-2.64.5-4.71 2.25-4.71 5.07 0 2.62 1.37 4.35 6.07 5.7 2.58.74 3.3 1.4 3.3 2.77 0 1.11-.66 2.1-2.72 2.1-1.66 0-2.77-.91-3.09-2.34h-3.95c.22 2.69 2.06 4.65 5.28 5.14v2.24h3.33V29c3.05-.46 5.12-2.2 5.12-5.34'
        />
        <path
          fill='#CED0D6'
          d='M88 51.01H56.52a8 8 0 0 0-8 8V88a8 8 0 0 0 8 8H88a8 8 0 0 0 8-8V59.01a8 8 0 0 0-8-8'
        />
        <path
          fill='#5C616D'
          d='M80.05 66.63a7.947 7.947 0 0 1-9.34 9.33c-3.12-.59-5.64-3.11-6.23-6.23a7.947 7.947 0 0 1 9.34-9.33c3.12.59 5.64 3.11 6.23 6.23M64.77 78.31h14.97c3.71 0 6.71 3 6.71 6.71V96H58.06V85.02c0-3.71 3-6.71 6.71-6.71'
        />
      </g>
    </g>
    <defs>
      <clipPath id='95ac14fc8b7d604c8fc8f21255f1e1db__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkPayUserIcon);
export default ForwardRef;
