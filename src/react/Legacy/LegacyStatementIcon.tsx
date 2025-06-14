import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyStatementIcon = (
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
      <path d='M14.5 0A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0zm0 1h-13a.5.5 0 0 0-.5.5V3h14v1H1v10.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5m-2 10a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm-9 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m9-4a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm-9 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1' />
    </g>
    <defs>
      <clipPath id='96ffb2c5a06b9e47d8f6b1ce1f1b2b0b__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyStatementIcon);
export default ForwardRef;
