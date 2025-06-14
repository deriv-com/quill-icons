import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignCaptionBoldIcon = (
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
      <path d='M2.5 7.25v1.5h3.188a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.5v1.5c0 .586-.164 1.172-.445 1.71l-.305.54h5.438a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813c-.211 0-.399-.094-.493-.258-.093-.187-.117-.398-.023-.562l.773-1.383c.188-.375.305-.774.305-1.172v-1.5H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h.562v-1.5c0-1.664 1.336-3 2.977-3 .304 0 .632.07.937.164l1.875.633a.525.525 0 0 1 .352.703c-.094.305-.399.445-.703.352l-1.875-.61a1.7 1.7 0 0 0-.586-.117A1.86 1.86 0 0 0 2.5 7.25' />
    </g>
    <defs>
      <clipPath id='e47eba998dba5b1dc9d818e337d6fb64__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionBoldIcon);
export default ForwardRef;
