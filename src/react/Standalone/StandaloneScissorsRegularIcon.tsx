import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneScissorsRegularIcon = (
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
    <path d='M25.844 23.766q-.39.429-.86.078l-5.937-5.04q-.43-.429-.078-.898.39-.39.86-.039l5.937 5.04q.429.39.078.859M17.21 15.68l7.773-6.524q.47-.351.86.078.351.47-.078.86l-11.602 9.804q.586.977.586 2.227-.039 1.875-1.29 3.086-1.21 1.25-3.085 1.289-1.875-.039-3.086-1.29Q6.04 24 6 22.126q.039-1.875 1.29-3.086 1.21-1.25 3.085-1.289 1.758.04 2.969 1.172l2.89-2.422-2.89-2.422q-1.21 1.133-2.969 1.172-1.875-.039-3.086-1.29Q6.04 12.75 6 10.876 6.039 9 7.29 7.789 8.5 6.54 10.374 6.5q1.875.039 3.086 1.29Q14.71 9 14.75 10.874q0 1.25-.586 2.227zM10.375 14q1.758-.04 2.695-1.562.86-1.563 0-3.126-.937-1.523-2.695-1.562-1.758.039-2.695 1.563-.86 1.562 0 3.124.937 1.524 2.695 1.563m0 5q-1.758.039-2.695 1.563-.86 1.562 0 3.125.937 1.523 2.695 1.562 1.758-.04 2.695-1.562.86-1.563 0-3.125-.937-1.524-2.695-1.563' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneScissorsRegularIcon);
export default ForwardRef;
