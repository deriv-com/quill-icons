import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGrip1pxIcon = (
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
    <g>
      <circle cx={6} cy={4} r={1} />
      <circle cx={10} cy={4} r={1} />
      <circle cx={6} cy={8} r={1} />
      <circle cx={10} cy={8} r={1} />
      <circle cx={6} cy={12} r={1} />
      <circle cx={10} cy={12} r={1} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyGrip1pxIcon);
export default ForwardRef;
