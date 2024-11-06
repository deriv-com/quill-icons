import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 9.125H.813a.54.54 0 0 1-.563-.562C.25 8.258.484 8 .813 8h.773a5.25 5.25 0 0 1 5.039-3.75h.563a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.563A4.12 4.12 0 0 0 2.781 8h3.657A.57.57 0 0 1 7 8.563a.555.555 0 0 1-.562.562H2.5v.75h3.938a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.78a4.09 4.09 0 0 0 3.844 2.625h.563a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.563A5.224 5.224 0 0 1 1.585 11H.814a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h.562v-.75' />
    </g>
    <defs>
      <clipPath id='e4dc99bf269f8e8968840d89db60490b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionBoldIcon);
export default ForwardRef;
