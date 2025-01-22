import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkFindAdIcon = (
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
    <g clipPath='url(#5dd8dfeddaed89b1562c6c46bb653e83__a)'>
      <mask
        id='5dd8dfeddaed89b1562c6c46bb653e83__b'
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
      <g mask='url(#5dd8dfeddaed89b1562c6c46bb653e83__b)'>
        <path
          fill='#9498A2'
          d='M59.73 21.7a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6V90a6 6 0 0 0 6 6h47.73a6 6 0 0 0 6-6z'
        />
        <path
          fill='#CED0D6'
          d='M58.8 0H24.12a6 6 0 0 0-6 6v68.23a6 6 0 0 0 6 6h47.76a6 6 0 0 0 6-6V19.08z'
        />
        <path fill='#5C616D' d='M58.8 19.08h19.08L58.8 0z' />
        <path
          fill='#F6F7F8'
          d='M66.41 48.02H29.59v4.38h36.82zM51.41 38.95H29.59v4.38h21.82zM66.41 57.09H29.59v4.38h36.82zM66.41 66.16H29.59v4.38h36.82zM37.03 18.68c-.6 0-.93-.48-.93-1.37h.01c0-.92.36-1.35.92-1.35s.94.41.94 1.35-.34 1.37-.94 1.37M43.94 22.83c-.6 0-.93-.48-.93-1.37h.01c0-.91.36-1.35.92-1.35s.94.41.94 1.35-.34 1.37-.94 1.37'
        />
        <path
          fill='#F6F7F8'
          fillRule='evenodd'
          d='M40.07 8.03h.89c5.788 0 10.48 4.692 10.48 10.48v.89c0 5.788-4.692 10.48-10.48 10.48h-.89c-5.788 0-10.48-4.692-10.48-10.48v-.89c0-5.788 4.692-10.48 10.48-10.48m-3.06 11.89c1.54 0 2.43-1.07 2.43-2.61l.01.01c0-1.7-1-2.58-2.42-2.58-1.58 0-2.44 1.13-2.44 2.58 0 1.71.96 2.6 2.42 2.6m5.51-5.04-5.53 9.01h1.43l5.54-9.01zm1.4 9.19c1.54 0 2.43-1.07 2.43-2.61l.01.01c0-1.7-1-2.58-2.42-2.58-1.58 0-2.44 1.13-2.44 2.58 0 1.7.96 2.6 2.42 2.6'
          clipRule='evenodd'
        />
        <path
          fill='#FF444F'
          d='M76 69.27c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20'
        />
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M74.509 38.804a9.32 9.32 0 1 0 0 18.64 9.28 9.28 0 0 0 5.677-1.929l4.22 4.22 2.405-2.403-4.348-4.348a9.32 9.32 0 0 0-7.954-14.18m-5.92 9.32a5.92 5.92 0 1 1 11.84 0 5.92 5.92 0 0 1-11.84 0'
          clipRule='evenodd'
        />
      </g>
    </g>
    <defs>
      <clipPath id='5dd8dfeddaed89b1562c6c46bb653e83__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkFindAdIcon);
export default ForwardRef;
