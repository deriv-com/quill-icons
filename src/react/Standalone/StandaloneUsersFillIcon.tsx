import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUsersFillIcon = (
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
    <path d='M9.125 6.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C6.977 7.126 7.992 6.5 9.125 6.5m14.375 0c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126.586-.937 1.601-1.562 2.734-1.562m-20 11.68C3.5 15.875 5.336 14 7.64 14h1.68c.625 0 1.211.156 1.758.39-.078.274-.078.587-.078.86 0 1.523.625 2.852 1.68 3.75H4.32a.8.8 0 0 1-.82-.82m15.82.82h-.039c1.055-.898 1.68-2.227 1.68-3.75 0-.273 0-.586-.04-.86a4.1 4.1 0 0 1 1.72-.39h1.68a4.184 4.184 0 0 1 4.179 4.18c0 .468-.39.82-.86.82zm-7.07-3.75c0-1.328.703-2.54 1.875-3.242 1.133-.664 2.578-.664 3.75 0 1.133.703 1.875 1.914 1.875 3.242 0 1.367-.742 2.578-1.875 3.281-1.172.664-2.617.664-3.75 0-1.172-.703-1.875-1.914-1.875-3.281M8.5 25.484c0-2.89 2.305-5.234 5.195-5.234h4.57a5.235 5.235 0 0 1 5.235 5.234c0 .547-.469 1.016-1.055 1.016H9.515c-.546 0-1.015-.43-1.015-1.016' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUsersFillIcon);
export default ForwardRef;
