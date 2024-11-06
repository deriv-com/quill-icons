import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesVanillaCallIcon = (
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
    <path fill='#85ACB0' d='M24 16h2.667v5.333H24zM12.667 24h14v2.667H10z' />
    <path
      fill='#FF444F'
      d='M22.115 8H20a2.667 2.667 0 0 1-2.667-2.667h9.334v8H24V9.886L7.22 26.666H5.333v-1.885z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesVanillaCallIcon);
export default ForwardRef;
