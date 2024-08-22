import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.75c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm2.25 4.5c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75m.75-3a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M2.5 12.5c.398 0 .75-.328.75-.75A.77.77 0 0 0 2.5 11a.755.755 0 0 0-.75.75c0 .422.328.75.75.75m2.25-5.812a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562zm0 2.25a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562zm0 2.25a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562z' />
    </g>
    <defs>
      <clipPath id='38f425001cf23e8217b550f4aae2d18a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListCaptionFillIcon);
export default ForwardRef;
