import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepCaptionFillIcon = (
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
      <path d='m6.508 13.836-4.5-3.75-.258-.234v3.398c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-7.5C.25 5.352.578 5 1 5c.398 0 .75.352.75.75v3.398l.258-.21 4.5-3.75a.77.77 0 0 1 .797-.118c.258.14.445.399.445.68v7.5a.75.75 0 0 1-.445.68c-.258.14-.563.093-.797-.094' />
    </g>
    <defs>
      <clipPath id='0f28e03c8e66846fce6cff778d3eeb38__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionFillIcon);
export default ForwardRef;
