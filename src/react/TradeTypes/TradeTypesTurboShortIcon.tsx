import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesTurboShortIcon = (
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
    <path
      fill='#FF444F'
      d='M26.667 18.666v8h-8v-1.333c0-.733.6-1.333 1.333-1.333h2.107l-7.44-7.454-4 4-5.333-5.333v-3.76l5.333 5.333 4-4L24 22.106V20c0-.734.6-1.334 1.334-1.334z'
    />
    <path fill='#85ACB0' d='M26.667 5.333v4h-5.334L20.44 8H5.334V6.667H20.44l.893-1.334z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesTurboShortIcon);
export default ForwardRef;
