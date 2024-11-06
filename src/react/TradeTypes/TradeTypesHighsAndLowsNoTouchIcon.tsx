import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesHighsAndLowsNoTouchIcon = (
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
    <path fill='#85ACB0' d='m9.886 24-2.667 2.667H5.333V24zm16.78-18.667V8H5.335V5.333z' />
    <path
      fill='#FF444F'
      d='M26.654 14.667A2.653 2.653 0 0 0 24 17.32v2.133l-4.781-4.786a2.667 2.667 0 0 0-3.77 0l-4.782 4.78v3.771l6.667-6.666 4.78 4.781h-2.133a2.653 2.653 0 0 0-2.648 2.654V24H24a2.667 2.667 0 0 0 2.667-2.667v-6.666z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesHighsAndLowsNoTouchIcon);
export default ForwardRef;
