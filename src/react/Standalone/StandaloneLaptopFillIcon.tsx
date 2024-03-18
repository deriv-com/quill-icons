import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLaptopFillIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M8.5 7.75h15c1.367 0 2.5 1.133 2.5 2.5v10h-2.5v-10h-15v10H6v-10c0-1.367 1.094-2.5 2.5-2.5M4.242 21.5H27.72c.43 0 .781.352.781.781 0 1.64-1.367 2.969-3.008 2.969H6.47A2.967 2.967 0 0 1 3.5 22.281c0-.43.313-.781.742-.781' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopFillIcon);
export default ForwardRef;
