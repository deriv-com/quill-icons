import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandCaptionBoldIcon = (
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
      <path d='M3.438 4.25A.57.57 0 0 1 4 4.813a.555.555 0 0 1-.562.562H1.374v2.063A.555.555 0 0 1 .813 8a.54.54 0 0 1-.563-.562V4.813c0-.305.234-.563.563-.563zM.25 11.563c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v2.062h2.063a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562zm9.938-7.313a.57.57 0 0 1 .562.563v2.625a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V5.374H7.563A.54.54 0 0 1 7 4.813c0-.305.234-.563.563-.563zm-.563 7.313c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v2.624a.555.555 0 0 1-.562.563H7.562A.54.54 0 0 1 7 14.188c0-.305.234-.563.563-.563h2.062z' />
    </g>
    <defs>
      <clipPath id='ace0d02c8ae7d34197e900682c47ddab__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionBoldIcon);
export default ForwardRef;
