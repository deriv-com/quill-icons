import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEuroSignRegularIcon = (
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
    <path d='M11.078 15.25h-.703q-.585-.039-.625-.625.039-.585.625-.625h.977q.858-2.773 3.125-4.492 2.265-1.719 5.273-1.758h1.914q.585.039.625.625-.039.585-.625.625H19.75q-2.5.04-4.375 1.406Q13.5 11.774 12.68 14h7.695q.585.039.625.625-.039.585-.625.625h-8.008a6.8 6.8 0 0 0 0 2.5h8.008q.585.039.625.625-.039.585-.625.625H12.68q.82 2.226 2.695 3.594T19.75 24h1.914q.585.039.625.625-.039.585-.625.625H19.75q-3.008-.039-5.273-1.758T11.352 19h-.977q-.585-.039-.625-.625.039-.585.625-.625h.703a10 10 0 0 1 0-2.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignRegularIcon);
export default ForwardRef;
