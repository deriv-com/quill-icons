import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHighestLowestIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#333'
      fillRule='evenodd'
      d='M10.959 8.5a3 3 0 0 1-5.918 0H0v-1h5.041a3 3 0 0 1 5.918 0H16v1z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyHighestLowestIcon);
export default ForwardRef;
