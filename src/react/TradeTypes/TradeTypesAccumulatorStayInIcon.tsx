import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesAccumulatorStayInIcon = (
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
    <path fill='#85ACB0' d='M26.667 24H5.334v2.667h21.333zM26.667 5.333H5.334V8h21.333z' />
    <path
      fill='#FF444F'
      d='m12.027 21.734-4.4-4.4H5.334v-2.667h3.4l3.013 3.013 5.56-7.413 4.4 4.4h4.96v2.667H20.6l-3.013-3.014z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesAccumulatorStayInIcon);
export default ForwardRef;
