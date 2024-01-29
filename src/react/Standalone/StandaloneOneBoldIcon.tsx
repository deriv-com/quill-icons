import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneOneBoldIcon = (
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
    <path d='M16.938 8.688v14.687h3.125q.858.078.937.938-.078.858-.937.937h-8.125q-.86-.079-.938-.937.078-.86.938-.938h3.124V10.367l-2.656 1.602q-.742.39-1.289-.274-.351-.78.313-1.289l4.062-2.5q.469-.273.977-.039a.89.89 0 0 1 .468.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneOneBoldIcon);
export default ForwardRef;
