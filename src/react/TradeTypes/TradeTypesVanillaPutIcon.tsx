import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesVanillaPutIcon = (
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
    <path fill='#85ACB0' d='M24 16h2.667v-5.333H24zM12.667 8h14V5.333H10z' />
    <path
      fill='#FF444F'
      d='M22.115 24H20a2.667 2.667 0 0 0-2.667 2.667h9.334v-8H24v3.447L7.22 5.334H5.333v1.885z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesVanillaPutIcon);
export default ForwardRef;
