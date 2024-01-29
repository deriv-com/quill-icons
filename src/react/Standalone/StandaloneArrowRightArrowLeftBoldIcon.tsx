import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightArrowLeftBoldIcon = (
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
    <path d='m11.273 25.914-3.75-3.75q-.546-.664 0-1.328l3.75-3.75q.664-.547 1.329 0 .546.664 0 1.328l-2.149 2.148h13.36q.858.079.937.938-.079.859-.937.938h-13.36l2.149 2.148q.546.664 0 1.328-.664.547-1.329 0m13.204-13.75-3.75 3.75q-.665.548-1.329 0-.546-.664 0-1.328l2.149-2.149H8.187q-.859-.078-.937-.937.078-.86.938-.937h13.359l-2.149-2.149q-.546-.664 0-1.328.665-.548 1.329 0l3.75 3.75q.546.664 0 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightArrowLeftBoldIcon);
export default ForwardRef;
