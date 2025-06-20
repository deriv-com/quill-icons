import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageXlFillIcon = (
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
      <path d='M0 10.5c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm15.14 5.016a1.06 1.06 0 0 0-.89-.516c-.375 0-.75.188-.937.516l-4.079 6-1.265-1.594c-.188-.235-.516-.422-.844-.422a1.16 1.16 0 0 0-.89.422l-3 3.75c-.282.375-.329.844-.141 1.219.187.375.562.609 1.031.609h15.75c.375 0 .797-.187.984-.562.188-.375.141-.844-.093-1.172zM5.25 15c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C6.75 10.969 6.047 10.5 5.25 10.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C3.703 14.578 4.406 15 5.25 15' />
    </g>
    <defs>
      <clipPath id='0ca523ce7155bb917ec4bfded694e2f0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageXlFillIcon);
export default ForwardRef;
