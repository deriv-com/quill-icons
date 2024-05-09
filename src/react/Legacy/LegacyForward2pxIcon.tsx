import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyForward2pxIcon = (
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
    <path d='m2.707 1.293 6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 1.414-1.414m6 0 6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L12.586 8 7.293 2.707a1 1 0 0 1 1.414-1.414' />
  </svg>
);
const ForwardRef = forwardRef(LegacyForward2pxIcon);
export default ForwardRef;
