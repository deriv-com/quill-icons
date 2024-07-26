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
    <g clipPath='url(#f098a551c18d86019039d00d31af5897__a)'>
      <circle cx={8} cy={8} r={7} stroke='#999' strokeWidth={2} />
    </g>
    <rect width={14} height={14} x={1} y={1} stroke='#999' strokeWidth={2} rx={7} />
    <defs>
      <clipPath id='f098a551c18d86019039d00d31af5897__a'>
        <rect width={16} height={16} fill='#fff' rx={8} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRadioOffIcon);
export default ForwardRef;
