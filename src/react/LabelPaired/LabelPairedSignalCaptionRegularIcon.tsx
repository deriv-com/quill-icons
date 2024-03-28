import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalCaptionRegularIcon = (
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
      <path d='M13.875 3.875v11.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375M10.5 5.75c.188 0 .375.188.375.375v9c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-9c0-.187.164-.375.375-.375M7.875 8.375v6.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-6.75c0-.187.164-.375.375-.375.188 0 .375.188.375.375M4.5 10.25c.188 0 .375.188.375.375v4.5c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-4.5c0-.187.164-.375.375-.375m-3 2.25c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='e32f9d701af3bbbf7c4261b658e46683__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionRegularIcon);
export default ForwardRef;
