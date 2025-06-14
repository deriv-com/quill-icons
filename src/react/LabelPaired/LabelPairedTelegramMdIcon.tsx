import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4.25c4.25 0 7.75 3.5 7.75 7.75 0 4.281-3.5 7.75-7.75 7.75A7.75 7.75 0 0 1 .25 12C.25 7.75 3.719 4.25 8 4.25m3.563 5.281a.53.53 0 0 0 0-.312c0-.063-.063-.156-.094-.188-.094-.094-.25-.094-.313-.094-.281 0-.75.157-2.906 1.063-.75.313-2.25.938-4.5 1.938-.375.156-.562.28-.594.437-.031.25.375.344.844.5.406.125.938.281 1.219.281.25 0 .531-.094.843-.312 2.094-1.438 3.188-2.156 3.25-2.156.063 0 .126-.032.157 0 .062.062.062.124.031.156-.031.156-2 1.969-2.125 2.094-.437.437-.937.718-.156 1.218.656.438 1.031.719 1.718 1.156.438.282.782.626 1.22.594.218-.031.437-.219.53-.812.282-1.344.782-4.344.876-5.563' />
    </g>
    <defs>
      <clipPath id='83e906b3e7bb8183997dee35e72f0ce8__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramMdIcon);
export default ForwardRef;
