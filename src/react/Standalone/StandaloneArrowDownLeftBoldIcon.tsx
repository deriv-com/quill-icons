import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownLeftBoldIcon = (
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
    <path d='M10.688 22.75c-.573-.052-.886-.365-.938-.937v-9.375c.052-.573.365-.886.938-.938.572.052.885.365.937.938v7.109l9.023-9.024c.443-.364.886-.364 1.329 0 .364.443.364.886 0 1.329l-9.024 9.023h7.11c.572.052.885.365.937.938-.052.572-.365.885-.937.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownLeftBoldIcon);
export default ForwardRef;
