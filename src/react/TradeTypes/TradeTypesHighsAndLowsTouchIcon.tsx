import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesHighsAndLowsTouchIcon = (
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
    <path fill='#85ACB0' d='M12.566 24 9.9 26.667H5.335V24zm14.1-18.667V8H5.335V5.333z' />
    <path
      fill='#FF444F'
      d='M26.654 18.667h.013v-8A2.667 2.667 0 0 0 24 8h-8v.013a2.653 2.653 0 0 0 2.654 2.654h3.466l-8.786 8.781v3.783L24 12.552v3.467a2.653 2.653 0 0 0 2.654 2.648'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesHighsAndLowsTouchIcon);
export default ForwardRef;
