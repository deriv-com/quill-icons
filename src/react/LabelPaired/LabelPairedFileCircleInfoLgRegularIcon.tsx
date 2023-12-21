import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleInfoLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 24.25h9.063c.39.469.833.872 1.328 1.21-.13.027-.26.04-.391.04h-10c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.094c.52 0 .963.182 1.328.547l4.531 4.531c.365.365.547.807.547 1.328v1.328c-.443.13-.86.3-1.25.508V13H9.625a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V6.75h-5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v15c0 .365.117.664.352.898.234.235.533.352.898.352M14 11.75a1.042 1.042 0 0 0-.195-.273L9.273 6.945A.58.58 0 0 0 9 6.79v4.336c.026.39.234.599.625.625zm7.5 8.125c0-.781-.195-1.51-.586-2.187a4.298 4.298 0 0 0-1.602-1.602 4.305 4.305 0 0 0-2.187-.586c-.781 0-1.51.195-2.187.586-.678.39-1.211.924-1.602 1.602a4.305 4.305 0 0 0-.586 2.187c0 .781.195 1.51.586 2.188.39.677.924 1.21 1.601 1.601.678.39 1.407.586 2.188.586.781 0 1.51-.195 2.188-.586a4.298 4.298 0 0 0 1.601-1.602c.39-.677.586-1.406.586-2.187m-10 0c0-1.016.247-1.953.742-2.812a5.638 5.638 0 0 1 2.07-2.07 5.68 5.68 0 0 1 2.813-.743c.99 0 1.927.247 2.813.742a5.638 5.638 0 0 1 2.07 2.07c.495.86.742 1.797.742 2.813a5.539 5.539 0 0 1-.742 2.813 5.638 5.638 0 0 1-2.07 2.07 5.68 5.68 0 0 1-2.813.742 5.68 5.68 0 0 1-2.812-.742 5.638 5.638 0 0 1-2.07-2.07 5.539 5.539 0 0 1-.743-2.813m5.625-1.25c-.573-.052-.885-.365-.937-.937.052-.573.364-.886.937-.938.573.052.885.365.938.938-.053.572-.365.885-.938.937m-1.25 3.75c.026-.39.234-.599.625-.625V20.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.625c.39.026.599.234.625.625v1.875c.39.026.599.234.625.625-.026.39-.234.599-.625.625H16.5c-.39-.026-.599-.234-.625-.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoLgRegularIcon);
export default ForwardRef;