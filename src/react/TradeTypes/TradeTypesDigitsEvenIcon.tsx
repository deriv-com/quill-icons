import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesDigitsEvenIcon = (
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
    <path fill='#85ACB0' d='M13.334 18.667v8h-8v-8zM26.667 5.333v8h-8v-8z' />
    <path fill='#FF444F' d='M26.667 18.667v8h-8v-8zM13.334 5.333v8h-8v-8z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesDigitsEvenIcon);
export default ForwardRef;
