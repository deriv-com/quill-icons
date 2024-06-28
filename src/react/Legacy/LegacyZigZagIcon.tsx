import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyZigZagIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#FF444F' d='m5.064 2.649-3 8a1 1 0 0 0 1.872.702l3-8a1 1 0 0 0-1.872-.702' />
    <path fill='#85ACB0' d='m18.832 20.445-12-18a1 1 0 0 0-1.664 1.11l12 18a1 1 0 0 0 1.664-1.11' />
    <path fill='#FF444F' d='m20.143 15.486-3 5a1 1 0 0 0 1.715 1.029l3-5a1 1 0 0 0-1.716-1.03' />
  </svg>
);
const ForwardRef = forwardRef(LegacyZigZagIcon);
export default ForwardRef;
