import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesLookbacksHighCloseIcon = (
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
    <path fill='#85ACB0' d='M25.334 9.333v17.334h-2.667V9.333zm1.333-4V8H5.334V5.333z' />
    <path
      fill='#FF444F'
      d='m12 12.772 5.334 5.343V16a2.667 2.667 0 0 1 2.653-2.667L20 20a2.667 2.667 0 0 1-2.666 2.667h-6.667A2.675 2.675 0 0 1 13.334 20h2.114L12 16.552zM5.334 9.333l4.565 1.334L11.229 12H5.335z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesLookbacksHighCloseIcon);
export default ForwardRef;
