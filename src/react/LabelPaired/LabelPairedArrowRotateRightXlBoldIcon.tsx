import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.125 16.5h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h4.219l-1.266-1.5c-1.547-1.828-3.797-3-6.328-3A8.23 8.23 0 0 0 3.75 18 8.203 8.203 0 0 0 12 26.25c1.828 0 3.563-.61 4.922-1.64.515-.376 1.219-.282 1.594.234.375.515.28 1.218-.235 1.593C16.547 27.75 14.344 28.5 12 28.5 6.188 28.5 1.5 23.813 1.5 18 1.5 12.234 6.188 7.5 12 7.5c3.234 0 6.14 1.5 8.063 3.797L21 12.422V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v6.75a1.11 1.11 0 0 1-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='7ef891aeb48ebdcab8cd405a036f5769__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightXlBoldIcon);
export default ForwardRef;
