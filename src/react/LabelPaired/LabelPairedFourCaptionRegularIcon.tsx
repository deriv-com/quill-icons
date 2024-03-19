import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourCaptionRegularIcon = (
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
      <path d='M4.078 4.813.961 11H6.75V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375V11h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.5v2.625c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.602H.352a.37.37 0 0 1-.305-.187.42.42 0 0 1-.024-.375l3.375-6.75a.385.385 0 0 1 .516-.164.385.385 0 0 1 .164.516' />
    </g>
    <defs>
      <clipPath id='3c07a3745b5df25dcca6d473fc0977e4__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionRegularIcon);
export default ForwardRef;
