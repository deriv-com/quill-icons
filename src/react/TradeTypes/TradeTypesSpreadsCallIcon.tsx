import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesSpreadsCallIcon = (
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
      d='M26.667 24v2.667H5.334V24zm-.37-9.333c.493.82.493 1.846 0 2.666a2.6 2.6 0 0 1-.412.552L21.173 22.6a2.652 2.652 0 0 1-.01-3.763l1.505-1.504h-6.115l2.667-2.666zM12 5.333V8H5.334V5.333z'
    />
    <path
      fill='#FF444F'
      d='M21.334 5.333h-6.667v.014A2.653 2.653 0 0 0 17.32 8h2.133l-6.666 6.667H5.333v2.666h8.552l7.449-7.448V12H24V8a2.667 2.667 0 0 0-2.666-2.667'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesSpreadsCallIcon);
export default ForwardRef;
