import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldLgBoldIcon = (
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
        d='M2.75 23.625h9.648a7.845 7.845 0 0 0 1.524 1.563 2.19 2.19 0 0 1-1.172.312h-10c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797v2.03l-1.875.743V11.75H10.25c-.365 0-.664-.117-.898-.352C9.117 11.164 9 10.865 9 10.5V7.375H2.75c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625m14.023-9.297a.83.83 0 0 1 .704 0l4.687 1.875c.365.156.56.443.586.86.026.859-.117 1.822-.43 2.89-.286 1.068-.807 2.096-1.562 3.086-.781.99-1.875 1.784-3.281 2.383a.83.83 0 0 1-.704 0c-1.406-.6-2.5-1.393-3.28-2.383-.756-.99-1.277-2.018-1.563-3.086-.313-1.068-.456-2.031-.43-2.89.026-.417.221-.704.586-.86zm4.063 3.36-3.711-1.485v7.344c1.302-.703 2.24-1.602 2.813-2.695.546-1.068.846-2.123.898-3.165'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldLgBoldIcon);
export default ForwardRef;
