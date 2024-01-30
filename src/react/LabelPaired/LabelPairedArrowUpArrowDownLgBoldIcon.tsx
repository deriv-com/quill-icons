import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m20.914 20.227-3.75 3.75q-.664.546-1.328 0l-3.75-3.75q-.548-.665 0-1.329.664-.546 1.328 0l2.149 2.149V7.687q.078-.859.937-.937.859.078.938.938v13.359l2.148-2.149q.664-.546 1.328 0 .547.665 0 1.329M7.164 7.023l3.75 3.75q.548.664 0 1.329-.664.546-1.328 0L7.437 9.953v13.36q-.078.858-.937.937-.86-.079-.937-.937V9.953l-2.149 2.149q-.664.546-1.328 0-.547-.664 0-1.329l3.75-3.75q.664-.546 1.328 0' />
    </g>
    <defs>
      <clipPath id='c455df33ab8781bb3325863a822db2a2__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgBoldIcon);
export default ForwardRef;
