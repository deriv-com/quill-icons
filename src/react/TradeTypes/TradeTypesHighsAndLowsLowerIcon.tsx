import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TradeTypesHighsAndLowsLowerIcon = (
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
    <path fill='#85ACB0' d='M5.334 16h21.333v-2.667H5.334z' />
    <path
      fill='#FF444F'
      d='M19.219 16 24 20.787v-2.134c.003-.464.128-.92.364-1.32h2.303v5.334A2.667 2.667 0 0 1 24 25.333h-6.666v-.013a2.653 2.653 0 0 1 2.648-2.653h2.133L15.448 16zM9.886 6.667 15.219 12h-3.77L9.333 9.885V12H6.667V6.667z'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeTypesHighsAndLowsLowerIcon);
export default ForwardRef;
