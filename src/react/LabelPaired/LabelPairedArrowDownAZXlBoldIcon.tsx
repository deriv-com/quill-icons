import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZXlBoldIcon = (
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
      <path d='M2.203 23.672c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0l2.578 2.625V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v16.078l2.578-2.578a1.027 1.027 0 0 1 1.547 0 1.027 1.027 0 0 1 0 1.547l-4.5 4.5a1.027 1.027 0 0 1-1.547 0zM16.5 19.5h6c.422 0 .844.281.984.703.188.375.141.844-.187 1.172l-4.313 4.875H22.5c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 22.5 28.5h-6c-.469 0-.89-.234-1.031-.656a1.005 1.005 0 0 1 .187-1.172l4.313-4.922H16.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m3-12c.422 0 .797.281.984.656l3.75 7.5c.282.563.047 1.219-.515 1.5-.563.282-1.219.047-1.5-.515l-.657-1.266h-4.218l-.61 1.266c-.28.562-.937.797-1.5.515-.562-.281-.796-.937-.515-1.5l3.75-7.5A1.15 1.15 0 0 1 19.5 7.5m-1.031 5.625h2.015l-.984-1.969z' />
    </g>
    <defs>
      <clipPath id='fac29d33f078efc19f450b563e682dc1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlBoldIcon);
export default ForwardRef;
