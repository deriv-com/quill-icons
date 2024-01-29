import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePercentBoldIcon = (
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
    <path d='m22.914 10.914-12.5 12.5q-.664.547-1.328 0-.547-.664 0-1.328l12.5-12.5q.664-.547 1.328 0 .547.664 0 1.328m-10.039.586q-.039 1.055-.937 1.64-.938.47-1.876 0-.898-.585-.937-1.64.04-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64m10 10q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.039-1.055.938-1.64.938-.47 1.875 0 .898.585.937 1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePercentBoldIcon);
export default ForwardRef;
