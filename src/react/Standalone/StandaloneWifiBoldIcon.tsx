import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneWifiBoldIcon = (
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
    <path d='M5.063 13.766q-.704.507-1.329-.079-.507-.702.079-1.328a18.4 18.4 0 0 1 5.546-3.398Q12.484 7.75 16 7.75q3.516 0 6.64 1.21a18.4 18.4 0 0 1 5.547 3.4q.586.624.079 1.328-.626.585-1.328.078a16.3 16.3 0 0 0-5-3.047Q19.163 9.625 16 9.625q-3.164 0-5.937 1.094a16.3 16.3 0 0 0-5 3.047M16 16.5q-3.867.078-6.562 2.54-.665.546-1.329-.04-.507-.704.079-1.328a11.2 11.2 0 0 1 3.554-2.227 11.1 11.1 0 0 1 4.258-.82q2.265 0 4.258.82a11.2 11.2 0 0 1 3.555 2.227q.585.625.078 1.328-.665.586-1.328.04Q19.867 16.577 16 16.5m2.188 6.563q-.04 1.25-1.094 1.875-1.095.624-2.188 0-1.055-.626-1.094-1.875.04-1.251 1.094-1.875 1.095-.626 2.188 0 1.054.624 1.093 1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWifiBoldIcon);
export default ForwardRef;
