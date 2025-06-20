import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardCaptionBoldIcon = (
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
      <path d='M12.25 5.375H1.75a.385.385 0 0 0-.375.375v.75h11.25v-.75a.4.4 0 0 0-.375-.375m.375 3.375H1.375v4.5c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375zM1.75 4.25h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5m1.313 7.125h1.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m3 0h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='45506783525e92778f23d420bddf8ede__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardCaptionBoldIcon);
export default ForwardRef;
