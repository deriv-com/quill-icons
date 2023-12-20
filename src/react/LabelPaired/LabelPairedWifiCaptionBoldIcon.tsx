import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWifiCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.938 7.86c-.282.202-.547.187-.797-.048-.203-.28-.188-.546.047-.796a11.039 11.039 0 0 1 3.328-2.04A10.93 10.93 0 0 1 7.5 4.25c1.406 0 2.734.242 3.984.727a11.038 11.038 0 0 1 3.329 2.039c.234.25.25.515.046.797-.25.234-.515.25-.796.046a9.79 9.79 0 0 0-3-1.828A9.622 9.622 0 0 0 7.5 5.375a9.622 9.622 0 0 0-3.562.656 9.79 9.79 0 0 0-3 1.828M7.5 9.5c-1.547.031-2.86.54-3.937 1.523-.266.22-.532.211-.797-.023-.203-.281-.188-.547.046-.797a6.733 6.733 0 0 1 2.133-1.336A6.643 6.643 0 0 1 7.5 8.375c.906 0 1.758.164 2.555.492a6.733 6.733 0 0 1 2.133 1.336c.234.25.25.516.046.797-.265.234-.53.242-.796.023C10.359 10.04 9.047 9.531 7.5 9.5m1.313 3.938c-.016.5-.235.874-.657 1.124-.437.25-.875.25-1.312 0-.422-.25-.64-.624-.657-1.124.016-.5.235-.876.657-1.126.437-.25.875-.25 1.312 0 .422.25.64.626.656 1.126'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionBoldIcon);
export default ForwardRef;
