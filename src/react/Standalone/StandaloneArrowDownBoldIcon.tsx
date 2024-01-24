import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowDownBoldIcon = (
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
    <path d='m15.336 24.977-6.563-6.875q-.546-.704.04-1.329.663-.546 1.289 0l4.96 5.196V8.687q.079-.858.938-.937.859.078.938.938v13.28l4.96-5.155q.626-.586 1.329-.04.546.626 0 1.329l-6.563 6.875a.9.9 0 0 1-.664.273.9.9 0 0 1-.664-.273' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownBoldIcon);
export default ForwardRef;
