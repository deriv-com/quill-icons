import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeHighIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M24 4.667H8A3.335 3.335 0 0 0 4.667 8v16A3.335 3.335 0 0 0 8 27.333h16A3.335 3.335 0 0 0 27.333 24V8A3.335 3.335 0 0 0 24 4.667ZM26 24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16Z' />
      <path d='m20.867 16.927-4.574-2.287a.664.664 0 0 0-.593 0l-4.573 2.287a.674.674 0 0 0-.3.893c.166.327.566.46.893.3l4.273-2.14 4.274 2.14a.671.671 0 0 0 .9-.293.662.662 0 0 0-.3-.894v-.006Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeHighIcon);
export default ForwardRef;
