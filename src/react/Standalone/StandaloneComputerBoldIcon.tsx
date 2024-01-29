import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneComputerBoldIcon = (
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
    <path d='M18.5 9.625H6q-.585.039-.625.625V19q.039.585.625.625h12.5q.585-.039.625-.625v-8.75q-.039-.585-.625-.625M6 21.5q-1.055-.039-1.758-.742Q3.54 20.054 3.5 19v-8.75q.039-1.055.742-1.758Q4.946 7.79 6 7.75h12.5q1.055.039 1.758.742T21 10.25V19q-.039 1.055-.742 1.758-.704.703-1.758.742h-3.398l.625 1.875h1.835q.86.078.938.938-.078.858-.937.937H6.938q-.86-.079-.938-.937.078-.86.938-.938h1.835l.625-1.875zm4.727 1.875h3.046l-.625-1.875h-1.796zm13.398-13.75v1.25h2.5v-1.25zm0 3.125V14h2.5v-1.25zm2.5 3.125h-2.5v7.5h2.5zm-4.375-6.25q.039-.781.547-1.328.546-.508 1.328-.547h2.5q.78.039 1.328.547.508.546.547 1.328v13.75q-.039.78-.547 1.328-.546.508-1.328.547h-2.5a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm3.125 10.938q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerBoldIcon);
export default ForwardRef;
