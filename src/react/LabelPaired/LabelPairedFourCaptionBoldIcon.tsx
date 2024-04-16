import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.43 5.094-2.953 5.531h4.898V7.063c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v3.562h.938a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H7.5v2.438a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V11.75H.563c-.211 0-.399-.094-.493-.258a.6.6 0 0 1-.023-.562l3.375-6.375c.164-.258.492-.375.773-.235.258.14.375.492.235.774' />
    </g>
    <defs>
      <clipPath id='64d45bb497c0d74b57d659024275a7d2__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionBoldIcon);
export default ForwardRef;
