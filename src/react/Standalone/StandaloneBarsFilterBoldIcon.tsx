import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBarsFilterBoldIcon = (
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
    <path d='M7.25 9.938q.078-.86.938-.938h15.625q.858.078.937.938-.079.858-.937.937H8.188q-.86-.079-.938-.937m2.5 6.25q.078-.86.938-.938h10.625q.858.078.937.938-.079.858-.937.937H10.688q-.86-.078-.938-.937m8.75 6.25q-.078.858-.937.937h-3.125q-.86-.079-.938-.937.078-.86.938-.938h3.124q.86.078.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsFilterBoldIcon);
export default ForwardRef;
