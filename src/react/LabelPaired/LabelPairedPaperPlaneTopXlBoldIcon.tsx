import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={36}
    viewBox='0 0 25 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.734 16.875h11.72L3.546 10.5zm0 2.25-3.187 6.422 14.906-6.422zM2.563 7.641l21 9c.562.234.937.797.937 1.406 0 .562-.375 1.125-.937 1.36l-21 9a1.52 1.52 0 0 1-1.688-.376c-.422-.422-.516-1.125-.234-1.687L4.813 18 .64 9.703A1.57 1.57 0 0 1 .875 7.97a1.59 1.59 0 0 1 1.688-.328' />
    </g>
    <defs>
      <clipPath id='8539c48538bd1cbf7cecc7b0d5e25af4__a'>
        <path d='M0 0h25v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopXlBoldIcon);
export default ForwardRef;
