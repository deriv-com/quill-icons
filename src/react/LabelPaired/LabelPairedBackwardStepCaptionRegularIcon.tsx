import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepCaptionRegularIcon = (
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
      <path d='M1.75 5.375v3.188L5.945 5.14A.6.6 0 0 1 6.344 5q.28 0 .468.188A.64.64 0 0 1 7 5.656v7.688a.64.64 0 0 1-.187.469.64.64 0 0 1-.47.187.6.6 0 0 1-.398-.14L1.75 10.437v3.187q-.023.352-.375.375-.352-.023-.375-.375v-8.25q.023-.352.375-.375.352.023.375.375m4.5.492L1.773 9.5l4.477 3.633z' />
    </g>
    <defs>
      <clipPath id='f6139d8267569566c70a69142a6f7cbe__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionRegularIcon);
export default ForwardRef;
