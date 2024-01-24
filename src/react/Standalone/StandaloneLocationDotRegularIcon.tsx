import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneLocationDotRegularIcon = (
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
    <path d='M22.25 14q-.078-2.655-1.836-4.414T16 7.75q-2.655.078-4.414 1.836T9.75 14q0 .938.664 2.46a26 26 0 0 0 1.68 3.243 41 41 0 0 0 2.07 3.047q1.054 1.444 1.836 2.422a70 70 0 0 0 1.836-2.422 41 41 0 0 0 2.07-3.047 23 23 0 0 0 1.719-3.242q.625-1.524.625-2.461m1.25 0q-.078 1.758-1.25 4.063a39 39 0 0 1-2.734 4.453q-1.524 2.187-2.578 3.476-.39.47-.938.469-.547 0-.937-.469-1.056-1.29-2.579-3.476a39 39 0 0 1-2.734-4.453Q8.578 15.758 8.5 14q.078-3.203 2.188-5.312T16 6.5q3.203.078 5.313 2.188T23.5 14m-9.375 0q.038 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.937-.47-1.875 0-.9.585-.938 1.64M16 17.125q-1.758-.04-2.695-1.562-.86-1.563 0-3.126.937-1.523 2.695-1.562 1.758.039 2.695 1.563.86 1.562 0 3.124-.937 1.524-2.695 1.563' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationDotRegularIcon);
export default ForwardRef;
