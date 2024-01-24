import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpToLineBoldIcon = (
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
    <path d='M9.438 7.75h13.125q.858.078.937.938-.079.858-.937.937H9.438q-.86-.079-.938-.937.078-.86.938-.938m7.265 5.313h-.039l5 5.312q.547.664-.039 1.29-.664.546-1.29-.04l-3.398-3.555v8.242q-.078.86-.937.938-.86-.079-.937-.937V16.07l-3.399 3.594q-.625.547-1.289.04-.585-.665-.04-1.329l5-5.312A.85.85 0 0 1 16 12.75q.39 0 .703.313' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpToLineBoldIcon);
export default ForwardRef;
