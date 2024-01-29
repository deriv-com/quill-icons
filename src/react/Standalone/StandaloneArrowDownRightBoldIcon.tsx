import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownRightBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M21.313 22.75h-9.375q-.86-.079-.938-.937.078-.86.938-.938h7.109l-9.024-9.023q-.546-.664 0-1.329.664-.546 1.329 0l9.023 9.024v-7.11q.078-.858.938-.937.858.078.937.938v9.375q-.079.858-.937.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightBoldIcon);
export default ForwardRef;
