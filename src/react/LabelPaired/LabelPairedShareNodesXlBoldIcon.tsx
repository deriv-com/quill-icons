import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesXlBoldIcon = (
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
      <path d='M21 12c0 2.484-2.016 4.5-4.5 4.5-1.36 0-2.578-.562-3.422-1.547l-4.219 2.11c.094.328.141.656.141.937q0 .492-.14.984l4.218 2.063c.844-.938 2.063-1.547 3.422-1.547a4.501 4.501 0 0 1 0 9A4.5 4.5 0 0 1 12 24c0-.281 0-.61.094-.937l-4.219-2.11A4.42 4.42 0 0 1 4.5 22.5a4.501 4.501 0 0 1 0-9c1.313 0 2.531.61 3.375 1.547l4.219-2.063C12 12.656 12 12.328 12 12a4.501 4.501 0 0 1 9 0M4.5 20.25c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C6 16.219 5.297 15.75 4.5 15.75c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125M18.75 12c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0-.703.422-1.125 1.125-1.125 1.922 0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969M16.5 26.25c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25-.422-.656-1.125-1.125-1.922-1.125-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125' />
    </g>
    <defs>
      <clipPath id='2d276a0845bfae47c8cc80e80e00077f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesXlBoldIcon);
export default ForwardRef;
