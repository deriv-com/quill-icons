import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLoader2Icon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 72 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <rect width={8} height={24} y={4} rx={4} />
      <rect width={8} height={16} x={16} y={8} rx={4} />
      <rect width={8} height={16} x={32} y={8} rx={4} />
      <rect width={8} height={16} x={48} y={8} rx={4} />
      <rect width={8} height={16} x={64} y={8} rx={4} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyLoader2Icon);
export default ForwardRef;
