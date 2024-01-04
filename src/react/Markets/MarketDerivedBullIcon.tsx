import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketDerivedBullIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path fill='#414652' d='M32 24a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z' />
      <path
        fill='#fff'
        d='M27.972 19.555s1.198 2.568-1.312 2.74l-.172-.4c-.17-.342-.57-.57-.912-.456l-1.541.399h-.057l-1.484-.342c-.4-.114-.799.114-.97.456l-.17.342c-2.512-.17-1.313-2.739-1.313-2.739-3.31 2.91.4 4.223.4 4.223l.456-.513-.685 1.54 1.141.343.685 1.883c.114.399.171.798.114 1.198l-.057.456 1.255 1.142h1.37l1.255-1.142-.057-.513c-.057-.4 0-.8.114-1.199l.628-1.825 1.14-.343-.74-1.54.456.513s3.766-1.312.456-4.223Z'
      />
      <path fill='#0AA0B0' d='M32 0h-8v2h4.586L19 11.586l-5-5-14 14v2.828l14-14 5 5 11-11V8h2V0Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedBullIcon);
export default ForwardRef;
