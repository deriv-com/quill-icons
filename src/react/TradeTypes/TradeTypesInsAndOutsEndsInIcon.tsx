import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesInsAndOutsEndsInIcon = (
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
    <path fill='#85ACB0' d='M26.667 24v2.667H5.334V24zm0-18.667V8H5.334V5.333z' />
    <path
      fill='#FF444F'
      d='m25.886 14.115-4.391-4.391-.008.01a2.65 2.65 0 0 0 0 3.751l1.18 1.182h-9.333v2.666h9.333l-1.18 1.182a2.65 2.65 0 0 0 0 3.752l.008.009 4.39-4.39a2.667 2.667 0 0 0 0-3.771'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesInsAndOutsEndsInIcon);
export default ForwardRef;
