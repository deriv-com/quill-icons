import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesAccumulatorBreakOutIcon = (
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
      d='M20.583 21.333h6.084v-2.666h-7.608zM16.012 13.333h10.655v-2.666h-12.18zM9.854 10.667h-4.52v2.666h6.04zM5.334 21.333v-2.666h9.093l1.52 2.666z'
    />
    <path fill='#FF444F' d='M26.667 26.667H20.56L9.894 8h-4.56V5.333h6.106L22.107 24h4.56z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesAccumulatorBreakOutIcon);
export default ForwardRef;
