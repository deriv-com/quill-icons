import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesUpsAndDownsAsianDownIcon = (
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
      fill='#85ACB0'
      d='M16 21.333V24H5.334v-2.667zm10.667-8V16H5.334v-2.667zm0-8V8H5.334V5.333z'
    />
    <path
      fill='#FF444F'
      d='M17.886 16 24 22.12v-2.133a2.653 2.653 0 0 1 2.654-2.654h.013V24A2.667 2.667 0 0 1 24 26.667h-6.666v-.014A2.653 2.653 0 0 1 19.982 24h2.133l-8-8zm-8-8 4 4h-3.771l-4-4z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesUpsAndDownsAsianDownIcon);
export default ForwardRef;
