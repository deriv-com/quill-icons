import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeLowIcon = (
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
      <path d='M24 4.667H8A3.335 3.335 0 0 0 4.667 8v16A3.335 3.335 0 0 0 8 27.333h16A3.335 3.335 0 0 0 27.333 24V8A3.335 3.335 0 0 0 24 4.667M26 24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z' />
      <path d='M20.273 14.64 16 16.78l-4.273-2.14a.66.66 0 0 0-.894.3.66.66 0 0 0 .3.893l4.574 2.287a.7.7 0 0 0 .3.073.7.7 0 0 0 .3-.073l4.573-2.287a.674.674 0 0 0 .3-.893.674.674 0 0 0-.893-.3z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLowIcon);
export default ForwardRef;
