import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyBackward2pxIcon = (
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
      d='m13.293 1.293-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L9.414 8l5.293-5.293a1 1 0 0 0-1.414-1.414m-6 0-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L3.414 8l5.293-5.293a1 1 0 0 0-1.414-1.414'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyBackward2pxIcon);
export default ForwardRef;
