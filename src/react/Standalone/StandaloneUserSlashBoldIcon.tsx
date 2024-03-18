import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUserSlashBoldIcon = (
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
    <path d='m5.484 6.734 6.016 4.688a4.993 4.993 0 0 1 5-4.922c2.734 0 5 2.266 5 5 0 2.344-1.602 4.258-3.71 4.844l10.82 8.515c.43.313.507.899.156 1.29-.313.43-.899.507-1.29.156L4.353 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m9.844 7.696c.352.117.742.195 1.172.195a3.11 3.11 0 0 0 3.125-3.125A3.134 3.134 0 0 0 16.5 8.375a3.11 3.11 0 0 0-3.125 3.125c0 .703.195 1.328.547 1.836zm-1.015 3.984 2.343 1.836h-1.953c-2.578 0-4.687 1.914-5.039 4.375h12.578l2.266 1.797c-.156.078-.274.078-.43.078H8.883a1.134 1.134 0 0 1-1.133-1.133c0-3.71 2.89-6.758 6.563-6.953' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserSlashBoldIcon);
export default ForwardRef;
