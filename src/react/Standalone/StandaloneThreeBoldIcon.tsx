import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneThreeBoldIcon = (
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
    <path d='M9.75 8.688q.078-.86.938-.938h10q.624.039.859.586.234.586-.195 1.016l-5.82 5.586h1.562q2.187.038 3.633 1.523 1.484 1.445 1.523 3.633-.04 2.187-1.523 3.633-1.446 1.484-3.633 1.523h-3.555a3.7 3.7 0 0 1-2.11-.625 4.1 4.1 0 0 1-1.523-1.602l-.039-.156q-.312-.82.39-1.25.822-.312 1.25.39l.079.157q.664 1.172 1.953 1.211h3.555q1.406-.04 2.304-.977.938-.898.977-2.304-.04-1.407-.977-2.305-.899-.937-2.304-.977h-3.907q-.624-.038-.859-.585-.234-.587.195-1.016l5.82-5.586h-7.655q-.86-.079-.938-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThreeBoldIcon);
export default ForwardRef;
