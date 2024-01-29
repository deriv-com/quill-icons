import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpRightBoldIcon = (
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
    <path d='M21.313 10.25q.858.078.937.938v9.375q-.079.858-.937.937-.86-.079-.938-.937v-7.11l-9.023 9.024q-.664.546-1.329 0-.546-.665 0-1.329l9.024-9.023h-7.11q-.858-.079-.937-.937.078-.86.938-.938z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightBoldIcon);
export default ForwardRef;
