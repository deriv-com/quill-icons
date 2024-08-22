import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressCaptionBoldIcon = (
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
      <path d='M4 4.813v2.625A.555.555 0 0 1 3.438 8H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h2.062V4.813c0-.305.234-.563.563-.563A.57.57 0 0 1 4 4.813M.813 11h2.625a.57.57 0 0 1 .562.563v2.624a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-2.063H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m7.312-6.187v2.062h2.063a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H7.562A.54.54 0 0 1 7 7.438V4.813c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563M7.563 11h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H8.124v2.063a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-2.626c0-.304.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='6d27705b687c48a30c53cf14c56ca1e7__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionBoldIcon);
export default ForwardRef;
