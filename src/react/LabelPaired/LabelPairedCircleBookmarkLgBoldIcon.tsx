import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleBookmarkLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 7.375c-1.484 0-2.839.365-4.063 1.094-1.223.703-2.213 1.693-2.968 2.969A8.062 8.062 0 0 0 1.875 15.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094 1.484 0 2.838-.365 4.063-1.094 1.223-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.063c-.755-1.275-1.744-2.265-2.968-2.968-1.225-.73-2.579-1.094-4.063-1.094ZM10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.412 1.328-5C2.266 8.937 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328ZM6.25 12.375c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v7.5c0 .26-.117.443-.352.547a.67.67 0 0 1-.664-.04L10 18.196l-2.734 2.188a.67.67 0 0 1-.664.039.553.553 0 0 1-.352-.547v-7.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkLgBoldIcon);
export default ForwardRef;
