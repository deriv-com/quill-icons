import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesLookbacksHighLowIcon = (
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
      d='M26.667 24v2.667H5.334V24zM25.333 9.333v13.334h-2.666V9.333zm1.334-4V8H5.334V5.333z'
    />
    <path
      fill='#FF444F'
      d='m11.23 20-1.331 1.333-4.565 1.334V20zm6.104-10.667A2.667 2.667 0 0 1 20 12l-.013 6.667A2.667 2.667 0 0 1 17.334 16v-2.115L12 19.228v-3.78L15.448 12h-2.114a2.675 2.675 0 0 1-2.667-2.667z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesLookbacksHighLowIcon);
export default ForwardRef;
