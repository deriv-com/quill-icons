import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRefresh1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g stroke='#333' strokeLinecap='round'>
      <path d='M13.5 8a5.5 5.5 0 0 0-9.63-3.633M2.5 8a5.5 5.5 0 0 0 9.633 3.629' />
      <path strokeLinejoin='round' d='M3.5 1.5v3h3M12.5 14.5v-3h-3' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyRefresh1pxIcon);
export default ForwardRef;
