import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneAppStoreIosIcon = (
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
    <path d='M22.875 7.75q.78.039 1.328.547.508.546.547 1.328v13.75q-.039.78-.547 1.328-.546.508-1.328.547H9.125a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V9.625q.039-.781.547-1.328.546-.508 1.328-.547zM12.211 21.54l.742-1.33q-.585-.741-1.523-.429l-.586.977q-.273.624.312 1.055.625.272 1.055-.274m5.43-2.11a1.16 1.16 0 0 0-.04-1.055q-.234-.469-.859-.508H14.32l3.36-5.82q.312-.664-.274-1.055-.663-.312-1.093.274l-.352.586-.313-.586q-.429-.586-1.093-.274-.585.39-.274 1.055l.781 1.367-2.539 4.453h-1.992q-.703.04-.781.781.079.704.781.782zm3.828 0q.703-.078.781-.782-.078-.742-.781-.78h-2.032a924 924 0 0 1-1.992-3.438 5 5 0 0 0-.312-.547q-.39.313-.547 1.015-.196.743.273 1.602.547.938 1.368 2.383.663 1.171 1.523 2.656.43.547 1.055.273.585-.43.312-1.054l-.781-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAppStoreIosIcon);
export default ForwardRef;
