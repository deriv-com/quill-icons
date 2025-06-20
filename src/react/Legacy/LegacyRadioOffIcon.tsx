import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRadioOffIcon = (
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
    <g clipPath='url(#6c3a55b2a6c1da6da97cf7b67511c0b4__a)'>
      <circle cx={8} cy={8} r={7} stroke='#999' strokeWidth={2} />
    </g>
    <rect width={14} height={14} x={1} y={1} stroke='#999' strokeWidth={2} rx={7} />
    <defs>
      <clipPath id='6c3a55b2a6c1da6da97cf7b67511c0b4__a'>
        <rect width={16} height={16} fill='#fff' rx={8} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRadioOffIcon);
export default ForwardRef;
