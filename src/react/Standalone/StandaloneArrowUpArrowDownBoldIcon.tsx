import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpArrowDownBoldIcon = (
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
    <path d='m25.414 21.227-3.75 3.75q-.664.546-1.328 0l-3.75-3.75q-.547-.665 0-1.329.664-.546 1.328 0l2.148 2.149V8.687q.079-.858.938-.937.859.078.938.938v13.359l2.148-2.149q.664-.546 1.328 0 .547.665 0 1.329M11.664 8.023l3.75 3.75q.548.664 0 1.329-.664.546-1.328 0l-2.149-2.149v13.36q-.078.858-.937.937-.86-.079-.937-.937v-13.36l-2.149 2.149q-.664.546-1.328 0-.548-.664 0-1.329l3.75-3.75q.664-.546 1.328 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpArrowDownBoldIcon);
export default ForwardRef;
