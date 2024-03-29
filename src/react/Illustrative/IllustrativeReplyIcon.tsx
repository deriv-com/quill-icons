import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeReplyIcon = (
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
      <path d='M23.327 9.81c-.367 0-.667.3-.667.667s.3.667.667.667h2c.413 0 .8.127 1.12.347l-9.24 6.6c-.727.52-1.7.52-2.42 0l-9.24-6.6c.32-.22.707-.347 1.12-.347h2c.367 0 .667-.3.667-.667s-.3-.666-.667-.666h-2a3.335 3.335 0 0 0-3.333 3.333V24.31a3.335 3.335 0 0 0 3.333 3.333h18.667a3.334 3.334 0 0 0 3.333-3.333V13.144a3.334 3.334 0 0 0-3.334-3.333zm4 14.5c0 1.1-.9 2-2 2H6.66c-1.1 0-2-.9-2-2V13.145c0-.2.04-.393.093-.58l9.254 6.607a3.4 3.4 0 0 0 1.986.633c.7 0 1.394-.213 1.987-.633l9.253-6.607c.054.187.094.373.094.58z' />
      <path d='M15.994 15.81a5.34 5.34 0 0 0 5.333-5.333A5.33 5.33 0 0 0 17.7 5.431l.314-.22a.67.67 0 0 0 .166-.927.67.67 0 0 0-.927-.167l-1.64 1.147-.04.04c-.033.033-.066.06-.093.1a1 1 0 0 0-.066.1.7.7 0 0 0-.047.12 1 1 0 0 0-.027.133c0 .02-.013.034-.013.054 0 .026.013.046.013.066 0 .047.014.087.027.134a1 1 0 0 0 .053.126c.014.02.014.04.027.06l1.146 1.64a.665.665 0 1 0 1.094-.76l-.213-.3a4.01 4.01 0 0 1 2.52 3.714c0 2.206-1.794 4-4 4a4.003 4.003 0 0 1-2.86-6.8.664.664 0 1 0-.947-.934 5.3 5.3 0 0 0-1.527 3.734 5.34 5.34 0 0 0 5.333 5.333z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeReplyIcon);
export default ForwardRef;
