import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesInsAndOutsGoesOutIcon = (
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
    <path fill='#85ACB0' d='M26.667 24v2.667H5.334V24zm0-10.667V16H5.334v-2.667z' />
    <path
      fill='#FF444F'
      d='m16.552 17.333-4 4H5.334v-2.666h6.114l1.333-1.334zm7.448-12A2.667 2.667 0 0 1 26.667 8v4H24V9.885l-3.442 3.448h-3.771L22.12 8h-2.133a2.653 2.653 0 0 1-2.653-2.653v-.014z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesInsAndOutsGoesOutIcon);
export default ForwardRef;
