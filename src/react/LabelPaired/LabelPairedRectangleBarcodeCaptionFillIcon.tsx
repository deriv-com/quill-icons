import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeCaptionFillIcon = (
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
      <path d='M1.75 4.25h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5M3.063 6.5a.555.555 0 0 0-.563.563v4.875c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562V7.062a.57.57 0 0 0-.562-.562m1.312.375v5.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-5.25A.4.4 0 0 0 4.75 6.5a.385.385 0 0 0-.375.375M6.438 6.5a.555.555 0 0 0-.563.563v4.875c0 .328.234.562.563.562A.555.555 0 0 0 7 11.938V7.062a.57.57 0 0 0-.562-.562m2.062.563v4.875c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562V7.062a.57.57 0 0 0-.562-.562.555.555 0 0 0-.563.563m2.625-.563a.385.385 0 0 0-.375.375v5.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-5.25a.4.4 0 0 0-.375-.375' />
    </g>
    <defs>
      <clipPath id='87dce342c7e6eb5bb6fbea1caeb95031__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeCaptionFillIcon);
export default ForwardRef;
