import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyEosIcon = (
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
    <path fill='#000' d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' />
    <path
      fill='#fff'
      d='m16 6-4.68 6.44-1.96 9.52L16 26l6.64-4.04-2-9.56zm-5.56 15.52 1.48-7.24 3.36 10.2zm1.96-8.88L16 7.68l3.6 4.96L16 23.52zm4.28 11.84 3.36-10.2 1.48 7.24z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEosIcon);
export default ForwardRef;
