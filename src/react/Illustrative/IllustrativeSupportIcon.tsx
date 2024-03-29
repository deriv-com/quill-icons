import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeSupportIcon = (
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
    <g>
      <path d='M24 16.667h-.667V16c0-4.413-3.586-8-8-8H12c-4.413 0-8 3.587-8 8v.667h-.667c-1.1 0-2 .9-2 2V22c0 1.1.9 2 2 2H4a3.335 3.335 0 0 0 3.333 3.333h7.334c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H7.333c-1.1 0-2-.9-2-2v-8c0-3.673 2.994-6.667 6.667-6.667h3.333C19.007 9.333 22 12.327 22 16v7.333c0 .367.3.667.667.667H24c1.1 0 2-.9 2-2v-3.333c0-1.1-.9-2-2-2m-20.667 6A.67.67 0 0 1 2.667 22v-3.333c0-.367.3-.667.666-.667H4v4.667zM24.667 22c0 .367-.3.667-.667.667h-.667V18H24c.367 0 .667.3.667.667zM26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.346 3 3-1.346 3-3 3' />
      <path d='m26.86 4.86-.86.86-.193-.193a.664.664 0 1 0-.94.94l.666.666c.134.134.3.194.474.194.173 0 .34-.067.473-.194L27.813 5.8a.664.664 0 1 0-.94-.94zM15.333 10.667H12a5.34 5.34 0 0 0-5.333 5.3v8.026c0 .367.3.667.666.667s.667-.3.667-.667V17.02c3.247 1.4 6.6 2.18 9.973 2.307q.508.02 1.027.02h.333v5.32a4.67 4.67 0 0 1-4.666 4.666h-2a4.6 4.6 0 0 1-2.334-.626.67.67 0 0 0-.913.24.67.67 0 0 0 .24.913 6 6 0 0 0 3 .807h2c3.307 0 6-2.694 6-6V16a5.34 5.34 0 0 0-5.333-5.333zm4 7.333c-.44 0-.873.013-1.306 0-3.387-.133-6.747-.953-10-2.427a4.01 4.01 0 0 1 3.98-3.58h3.333c2.207 0 4 1.794 4 4v2z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSupportIcon);
export default ForwardRef;
