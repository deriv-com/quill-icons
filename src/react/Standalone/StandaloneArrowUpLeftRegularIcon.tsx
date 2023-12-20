import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpLeftRegularIcon = (
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
      d='M10.375 10.25h8.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-7.227l10.157 10.195c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L11 12.398v7.227c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-8.75c.026-.39.234-.599.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpLeftRegularIcon);
export default ForwardRef;
