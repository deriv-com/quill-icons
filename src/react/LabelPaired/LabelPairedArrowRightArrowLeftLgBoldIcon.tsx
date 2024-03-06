import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.273 24.914-3.75-3.75q-.546-.664 0-1.328l3.75-3.75q.664-.548 1.329 0 .546.664 0 1.328l-2.149 2.148h13.36q.858.079.937.938-.078.859-.937.938H3.453l2.149 2.148q.546.664 0 1.328-.664.547-1.329 0m13.204-13.75-3.75 3.75q-.664.548-1.329 0-.546-.664 0-1.328l2.149-2.149H1.187Q.33 11.36.25 10.5q.078-.86.938-.937h13.359l-2.149-2.149q-.546-.664 0-1.328.664-.548 1.329 0l3.75 3.75q.546.664 0 1.328' />
    </g>
    <defs>
      <clipPath id='94864567871122f9bb716a99003ad18c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgBoldIcon);
export default ForwardRef;
