import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderCaptionBoldIcon = (
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
      <path d='M2.313 4.25h.374a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562h-.376a.925.925 0 0 0-.937.938v.375a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-.375c0-1.125.914-2.063 2.063-2.063M.813 8a.57.57 0 0 1 .562.563v1.874A.555.555 0 0 1 .813 11a.54.54 0 0 1-.563-.562V8.562C.25 8.259.484 8 .813 8m9.375 0a.57.57 0 0 1 .562.563v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562V8.562c0-.304.234-.562.563-.562m0-.75a.54.54 0 0 1-.563-.562v-.375a.94.94 0 0 0-.937-.938h-.376a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h.374a2.08 2.08 0 0 1 2.063 2.063v.375a.555.555 0 0 1-.562.562m.562 5.063v.374a2.066 2.066 0 0 1-2.062 2.063h-.376a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h.374a.925.925 0 0 0 .938-.937v-.376c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563m-9.375 0v.374c0 .54.398.938.938.938h.374a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562h-.376A2.05 2.05 0 0 1 .25 12.688v-.376c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563m3.188 2.437A.54.54 0 0 1 4 14.188c0-.305.234-.563.563-.563h1.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562zM4 4.813c0-.305.234-.563.563-.563h1.875A.57.57 0 0 1 7 4.813a.555.555 0 0 1-.562.562H4.563A.54.54 0 0 1 4 4.813' />
    </g>
    <defs>
      <clipPath id='854b4488bd784288e4de04c513dc4967__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderCaptionBoldIcon);
export default ForwardRef;
