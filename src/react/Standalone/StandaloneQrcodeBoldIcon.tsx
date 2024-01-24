import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneQrcodeBoldIcon = (
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
    <path d='M12.875 9.625h-3.75v3.75h3.75zM9.125 7.75h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.781.547-1.328.546-.508 1.328-.547m3.75 11.875h-3.75v3.75h3.75zm-3.75-1.875h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.78.547-1.328.546-.508 1.328-.547m10-8.125v3.75h3.75v-3.75zm-1.875 0q.039-.781.547-1.328.546-.508 1.328-.547h3.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm-7.187 1.563q.038-.587.624-.626h.626q.585.04.624.626v.624q-.038.587-.624.626h-.626q-.585-.04-.624-.626zm.624 9.375h.626q.585.039.624.625v.625q-.038.585-.624.625h-.626q-.585-.04-.624-.625v-.625q.038-.587.624-.625m9.376-9.375q.039-.587.625-.626h.625q.585.04.625.626v.624q-.04.587-.625.626h-.625q-.587-.04-.625-.626zm-2.813 7.187q.039-.585.625-.625h2.5q.585.039.625.625.039.585.625.625h1.25q.585-.039.625-.625.039-.585.625-.625.585.039.625.625v3.75q-.039.585-.625.625h-2.5q-.585-.039-.625-.625-.039-.585-.625-.625-.585.039-.625.625v2.5q-.039.585-.625.625h-1.25q-.585-.039-.625-.625zM21.625 24q.585.039.625.625-.039.585-.625.625-.585-.039-.625-.625.039-.585.625-.625m2.5 0q.585.039.625.625-.039.585-.625.625-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneQrcodeBoldIcon);
export default ForwardRef;
