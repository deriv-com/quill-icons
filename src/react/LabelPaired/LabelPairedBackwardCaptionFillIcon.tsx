import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.758 13.836 6.75 10.484V8.54l4.008-3.352a.77.77 0 0 1 .797-.118c.258.14.445.399.445.68v7.5a.75.75 0 0 1-.445.68c-.258.14-.563.093-.797-.094M6 11.75v1.5a.75.75 0 0 1-.445.68c-.258.14-.563.093-.797-.094l-4.5-3.75A.76.76 0 0 1 0 9.5c0-.21.094-.422.258-.562l4.5-3.75a.77.77 0 0 1 .797-.118c.258.14.445.399.445.68v6' />
    </g>
    <defs>
      <clipPath id='55e3233bbcdac2da105ce414c5754b68__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionFillIcon);
export default ForwardRef;
