import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeDropEmailIcon = (
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
      <path d='M23.327 9.333c-.367 0-.667.3-.667.667s.3.667.667.667h2c.413 0 .8.126 1.12.346l-9.24 6.6c-.727.52-1.7.52-2.42 0l-9.24-6.6c.32-.22.707-.346 1.12-.346h2c.367 0 .667-.3.667-.667s-.3-.667-.667-.667h-2a3.335 3.335 0 0 0-3.333 3.334v11.166a3.335 3.335 0 0 0 3.333 3.334h18.667a3.334 3.334 0 0 0 3.333-3.334V12.667a3.335 3.335 0 0 0-3.334-3.334zm4 14.5c0 1.1-.9 2-2 2H6.66c-1.1 0-2-.9-2-2V12.667c0-.2.04-.394.093-.58l9.254 6.606a3.4 3.4 0 0 0 1.986.634c.7 0 1.394-.214 1.987-.634l9.253-6.606c.054.186.094.373.094.58z' />
      <path d='M14.66 12c.174 0 .34-.067.473-.193l1.527-1.527v.393c0 .367.3.667.667.667.366 0 .666-.3.666-.667V8.647a.6.6 0 0 0-.046-.234s-.007-.013-.014-.02a.5.5 0 0 0-.12-.173c-.013-.02-.033-.033-.053-.047a.5.5 0 0 0-.14-.093c-.02-.013-.04-.02-.067-.033A.7.7 0 0 0 17.32 8h-2c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.393l-1.526 1.527a.664.664 0 0 0 .473 1.133z' />
      <path d='M15.994 15.333A5.34 5.34 0 0 0 21.327 10a5.34 5.34 0 0 0-5.334-5.333A5.34 5.34 0 0 0 10.66 10a5.34 5.34 0 0 0 5.333 5.333m0-9.333c2.206 0 4 1.793 4 4s-1.794 4-4 4-4-1.793-4-4 1.793-4 4-4' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeDropEmailIcon);
export default ForwardRef;
