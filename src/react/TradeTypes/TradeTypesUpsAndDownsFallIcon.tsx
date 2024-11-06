import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesUpsAndDownsFallIcon = (
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
      d='M26.654 17.333A2.653 2.653 0 0 0 24 19.987v2.133L10.667 8.787v3.765L22.115 24h-2.133a2.653 2.653 0 0 0-2.648 2.653v.014H24A2.667 2.667 0 0 0 26.667 24v-6.667z'
    />
    <path fill='#85ACB0' d='M5.334 8V5.333h1.885L9.886 8z' />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesUpsAndDownsFallIcon);
export default ForwardRef;
