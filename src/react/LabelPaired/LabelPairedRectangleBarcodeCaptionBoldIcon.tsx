import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeCaptionBoldIcon = (
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
      <path d='M1.75 5.375a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375v-7.5a.4.4 0 0 0-.375-.375zm-1.5.375c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm2.813.75a.57.57 0 0 1 .562.563v4.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V7.062c0-.304.234-.562.563-.562m1.687 0c.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-5.25c0-.187.164-.375.375-.375m1.125.563c0-.305.234-.563.563-.563A.57.57 0 0 1 7 7.063v4.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562zM9.063 6.5a.57.57 0 0 1 .562.563v4.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V7.062c0-.304.234-.562.563-.562m1.687.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375z' />
    </g>
    <defs>
      <clipPath id='2ef1eaf9c3667ef8964a7a18f3ef5adc__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeCaptionBoldIcon);
export default ForwardRef;
