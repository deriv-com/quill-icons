import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLanguageBoldIcon = (
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
      d='M6 9h20c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H6c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10c.026-.703.273-1.29.742-1.758C4.711 9.273 5.297 9.026 6 9m20 1.875H16v11.25h10c.39-.026.599-.234.625-.625v-10c-.026-.39-.234-.599-.625-.625m-15.547 2.5c-.13-.287-.364-.443-.703-.469-.339.026-.573.182-.703.469L6.547 19c-.156.443-.026.781.39 1.016.443.156.782.026 1.016-.391l.352-.781h2.89l.352.781c.234.417.573.547 1.015.39.417-.234.547-.572.391-1.015zm.04 3.906H9.007l.742-1.68zm10.82-4.375c.468.052.729.313.78.781v.157H24.439c.468.052.729.312.78.781-.051.469-.312.73-.78.781h-.079l-.078.196a7.68 7.68 0 0 1-1.523 2.539l.039.039c.026 0 .039.013.039.039l.742.43c.39.286.482.637.274 1.054-.287.39-.639.482-1.055.274l-.742-.43a3.516 3.516 0 0 1-.508-.352c-.417.313-.86.573-1.328.782l-.157.039c-.442.156-.78.026-1.015-.391-.156-.443-.026-.781.39-1.016l.157-.078c.234-.104.468-.234.703-.39l-.469-.47c-.312-.364-.312-.728 0-1.093.365-.312.73-.312 1.094 0l.586.586a6.106 6.106 0 0 0 1.172-1.758H18.5c-.469-.052-.73-.312-.781-.781.052-.469.312-.73.781-.781h2.031v-.156c.052-.47.313-.73.782-.782'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLanguageBoldIcon);
export default ForwardRef;
