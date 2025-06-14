import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.828 29.297-4.5-4.5c-.469-.422-.469-1.125 0-1.594l4.5-4.453a1.026 1.026 0 0 1 1.547 0 1.027 1.027 0 0 1 0 1.547l-2.578 2.578h16.078c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125l-16.078.047 2.578 2.578a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0m15.844-16.5-4.5 4.5c-.469.469-1.172.469-1.594 0-.469-.422-.469-1.125 0-1.594l2.578-2.578H1.125C.469 13.125 0 12.656 0 12c0-.61.469-1.125 1.125-1.125h16.031l-2.578-2.578c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0l4.5 4.547a1.103 1.103 0 0 1 0 1.547' />
    </g>
    <defs>
      <clipPath id='eada8a545dbd63d96a0c5026517c6a9c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlBoldIcon);
export default ForwardRef;
