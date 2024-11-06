import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesDigitsOddIcon = (
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
    <path fill='#85ACB0' d='m10 17.167 4.667 7H5.334zm12 0 4.667 7h-9.333z' />
    <path fill='#FF444F' d='m11.334 14.833 4.666-7 4.667 7z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesDigitsOddIcon);
export default ForwardRef;
