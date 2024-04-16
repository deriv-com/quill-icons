import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGrip2pxIcon = (
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
    <g fill='#333'>
      <circle cx={5.5} cy={3} r={1.5} />
      <circle cx={10.5} cy={3} r={1.5} />
      <circle cx={5.5} cy={8} r={1.5} />
      <circle cx={10.5} cy={8} r={1.5} />
      <circle cx={5.5} cy={13} r={1.5} />
      <circle cx={10.5} cy={13} r={1.5} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyGrip2pxIcon);
export default ForwardRef;
