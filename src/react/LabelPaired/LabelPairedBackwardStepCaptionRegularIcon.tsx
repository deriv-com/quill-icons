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
      <path d='M1.75 5.375v3.188l4.172-3.399A.67.67 0 0 1 6.344 5 .67.67 0 0 1 7 5.656v7.711c0 .352-.305.633-.656.633a.66.66 0 0 1-.422-.14l-4.172-3.4v3.165c0 .21-.187.375-.375.375A.37.37 0 0 1 1 13.625v-8.25C1 5.188 1.164 5 1.375 5c.188 0 .375.188.375.375m4.5.492L1.773 9.5l4.477 3.656z' />
    </g>
    <defs>
      <clipPath id='ad72ced044ee631c178d4c7e6aad06c8__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionRegularIcon);
export default ForwardRef;
