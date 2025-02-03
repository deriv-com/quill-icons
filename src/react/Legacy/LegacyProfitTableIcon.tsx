import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyProfitTableIcon = (
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
      <path d='M14.5 0A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0zM1 4v10.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V4zm4.784 2.089.07.057 2 2a.5.5 0 0 1-.638.765l-.07-.057L6 7.707V12.5a.5.5 0 0 1-1 0V7.707L3.854 8.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07 2-2a.5.5 0 0 1 .638-.057M10.5 6a.5.5 0 0 1 .5.5l-.001 4.792 1.147-1.146a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.145 1.146L10 6.5a.5.5 0 0 1 .5-.5M1 3h14V1.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5z' />
    </g>
    <defs>
      <clipPath id='dd1164d01e062fc75346676e37340725__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyProfitTableIcon);
export default ForwardRef;
