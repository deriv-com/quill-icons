import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRestore1pxIcon = (
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
    <path d='M14.5 10a.5.5 0 0 1 0 1H11v3.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zm-9 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V11H1.5a.5.5 0 0 1 0-1zm0-9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1H5V1.5a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5V5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5' />
  </svg>
);
const ForwardRef = forwardRef(LegacyRestore1pxIcon);
export default ForwardRef;
