import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMonitorIcon = (
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
    <path
      fillRule='evenodd'
      d='M.833 4c0-1.013.821-1.833 1.834-1.833h10.666c1.013 0 1.834.82 1.834 1.833v6.667c0 1.012-.821 1.833-1.834 1.833H9.476l.5 1h1.357a.5.5 0 0 1 0 1H4.667a.5.5 0 0 1 0-1h1.357l.5-1H2.667a1.833 1.833 0 0 1-1.834-1.833zm12.5 7.5H2.667a.833.833 0 0 1-.834-.833V4c0-.46.373-.833.834-.833h10.666c.46 0 .834.373.834.833v6.667c0 .46-.373.833-.834.833'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyMonitorIcon);
export default ForwardRef;
