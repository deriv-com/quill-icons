import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.5c0-.187.164-.375.375-.375H2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 9.5m4.125 0c0-.187.164-.375.375-.375h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.5a.37.37 0 0 1-.375-.375m4.125 0c0-.187.164-.375.375-.375H10.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H8.625A.37.37 0 0 1 8.25 9.5m4.125 0c0-.187.164-.375.375-.375h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H12.75a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='41f9620a96f8f79b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedCaptionRegularIcon);
export default ForwardRef;
