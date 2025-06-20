import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v6.328c-3.469.985-6 4.172-6 7.922 0 2.813 1.36 5.25 3.422 6.75H3c-1.687 0-3-1.312-3-3zm3 3.75c0 .422.328.75.75.75h10.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H3.75c-.422 0-.75.375-.75.75m.75 3.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm0 4.5c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm9.75 2.25a6.7 6.7 0 0 1 3.375-5.812c2.063-1.22 4.64-1.22 6.75 0C25.688 18.656 27 20.859 27 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86m8.813-2.016-2.813 2.86-1.36-1.36c-.28-.28-.796-.28-1.078 0-.28.282-.28.797 0 1.078l1.875 1.875c.282.282.797.282 1.079 0l3.375-3.375c.28-.28.28-.796 0-1.078-.282-.28-.797-.28-1.078 0' />
    </g>
    <defs>
      <clipPath id='0fc0e17a9478c844561a312f490dfccf__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckXlFillIcon);
export default ForwardRef;
