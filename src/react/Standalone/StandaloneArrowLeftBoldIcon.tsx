import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowLeftBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M7.523 17.203c-.195-.195-.273-.43-.273-.703 0-.234.078-.469.273-.664l6.875-6.563c.391-.351.977-.351 1.329.04a.93.93 0 0 1-.04 1.328l-5.195 4.922h13.32a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938h-13.32l5.195 4.96c.39.352.39.938.039 1.329-.352.39-.938.39-1.329.039z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftBoldIcon);
export default ForwardRef;
