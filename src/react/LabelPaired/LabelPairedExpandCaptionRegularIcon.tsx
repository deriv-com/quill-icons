import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 4.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1v2.625C1 7.835.813 8 .625 8a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375zM.25 11.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V14h2.625c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375zM10.375 4.25c.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375A.37.37 0 0 1 10 7.625V5H7.375A.37.37 0 0 1 7 4.625c0-.187.164-.375.375-.375zM10 11.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375h-3A.37.37 0 0 1 7 14.375c0-.187.164-.375.375-.375H10z' />
    </g>
    <defs>
      <clipPath id='41dcd05b170d23be27342219c8ad126c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionRegularIcon);
export default ForwardRef;
