import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.813 3.5h12.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563M1 5.375h1.125v5.063c0 .117.07.187.188.187h9.375c.093 0 .187-.07.187-.187V5.375H13v5.063c0 .726-.61 1.312-1.312 1.312H7.539v1.102l1.711 1.71a.513.513 0 0 1 0 .774c-.21.234-.562.234-.797 0l-1.476-1.477L5.5 15.336a.513.513 0 0 1-.773 0 .513.513 0 0 1 0-.774l1.71-1.71V11.75H2.314A1.31 1.31 0 0 1 1 10.438z' />
    </g>
    <defs>
      <clipPath id='131bfb54b3f5e8f28bfa8cd1c652db7d__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionBoldIcon);
export default ForwardRef;
