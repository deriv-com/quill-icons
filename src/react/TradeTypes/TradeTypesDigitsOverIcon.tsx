import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesDigitsOverIcon = (
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
      fill='#FF444F'
      d='m12.586 22.667-2.654 2.666H6.115l2.667-2.666zM24 6.667a2.667 2.667 0 0 1 2.667 2.666v8h-.013A2.653 2.653 0 0 1 24 14.68v-3.467l-8 8.027v-3.792l6.115-6.115h-3.461A2.653 2.653 0 0 1 16 6.68v-.013z'
    />
    <path fill='#85ACB0' d='M26.667 20H5.334v2.667h21.333z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesDigitsOverIcon);
export default ForwardRef;
