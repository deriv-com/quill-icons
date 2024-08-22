import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionRegularIcon = (
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
      <path d='M6.25 5.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3.164l-4.195 3.398a.66.66 0 0 1-.422.141.63.63 0 0 1-.633-.633v-7.71C1 5.304 1.281 5 1.633 5c.164 0 .305.07.422.164L6.25 8.563zm-4.5.492v7.29L6.203 9.5z' />
    </g>
    <defs>
      <clipPath id='558c81c00fd637df596e09668b5222bb__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionRegularIcon);
export default ForwardRef;
