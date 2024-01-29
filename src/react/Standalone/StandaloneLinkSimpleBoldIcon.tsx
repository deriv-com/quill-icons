import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLinkSimpleBoldIcon = (
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
    <path d='M4.75 16.5q.078-2.655 1.836-4.414T11 10.25h2.813q.858.078.937.938-.079.858-.937.937H11q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289h2.813q.858.078.937.938-.079.858-.937.937H11q-2.655-.078-4.414-1.836T4.75 16.5m22.5 0q-.078 2.656-1.836 4.414T21 22.75h-2.812q-.86-.079-.938-.937.078-.86.938-.938H21q1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289h-2.812q-.86-.079-.938-.937.078-.86.938-.938H21q2.656.078 4.414 1.836T27.25 16.5m-15.312-.937h8.124q.86.078.938.937-.078.859-.937.938h-8.125q-.86-.079-.938-.938.078-.86.938-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLinkSimpleBoldIcon);
export default ForwardRef;
