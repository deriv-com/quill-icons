import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const CurrencyPlaceholderIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill='#000' fillOpacity={0.08} />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPlaceholderIcon);
export default ForwardRef;
