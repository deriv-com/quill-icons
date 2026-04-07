import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyTusdIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#2b5f74a172afc7856c588e4a510e0323__a)'>
      <path
        fill='#1B5AFE'
        d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0m3 9a6 6 0 0 0-6 6v10h6V15h6V9zM7 9v6a6 6 0 0 0 6-6z'
      />
      <path fill='#fff' d='M13 15a6 6 0 0 1 6-6h6v6h-6v10h-6zM7 9h6a6 6 0 0 1-6 6z' />
    </g>
    <defs>
      <clipPath id='2b5f74a172afc7856c588e4a510e0323__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyTusdIcon);
export default ForwardRef;
