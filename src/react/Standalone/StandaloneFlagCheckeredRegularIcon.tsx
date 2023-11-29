import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFlagCheckeredRegularIcon = (
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
    <path
      fillOpacity={0.72}
      d='M8.5 7.125v1.68l3.828-1.055c1.667-.417 3.268-.26 4.805.469a5.209 5.209 0 0 0 2.578.586 5.624 5.624 0 0 0 2.578-.703l.586-.352c.443-.234.86-.234 1.25 0 .39.208.599.56.625 1.055v11.054c-.026.521-.273.899-.742 1.133l-1.211.508a7.3 7.3 0 0 1-3.047.586 6.888 6.888 0 0 1-3.008-.781c-1.38-.651-2.8-.795-4.258-.43L8.5 21.969v3.906c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625Zm0 2.969v2.422l3.75-.782V9.078L8.5 10.094Zm0 3.71v2.774l3.75-.781v-2.813l-3.75.82Zm5-1.093v2.773a5.75 5.75 0 0 1 2.656.157l2.344.664V13.57a1.518 1.518 0 0 0-.195-.078l-2.5-.703a4.307 4.307 0 0 0-2.149-.078H13.5Zm6.25 1.055v2.812a5.668 5.668 0 0 0 1.758-.117l1.992-.469V13.22l-1.68.39a7.02 7.02 0 0 1-2.07.157Zm-1.25 3.867a1.518 1.518 0 0 0-.195-.078l-2.5-.703a4.307 4.307 0 0 0-2.149-.079H13.5v2.696a7.084 7.084 0 0 1 3.79.742c.39.182.793.326 1.21.43v-3.008Zm1.25 3.203a5.924 5.924 0 0 0 2.578-.508l1.172-.469v-2.578l-1.68.39c-.703.157-1.393.21-2.07.157v3.008Zm0-8.32a5.668 5.668 0 0 0 1.758-.118l1.992-.468V8.844l-.625.312a6.46 6.46 0 0 1-3.125.899v2.46Zm-1.25-2.54a6.58 6.58 0 0 1-1.953-.624 5.595 5.595 0 0 0-3.047-.547v2.656a5.41 5.41 0 0 1 2.656.117l2.344.703V9.977Zm-10 7.891v2.813l3.633-.977a.3.3 0 0 1 .117-.039v-2.617l-3.75.82Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFlagCheckeredRegularIcon);
export default ForwardRef;