import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeCaptionRegularIcon = (
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
      <path d='M1.75 5a.755.755 0 0 0-.75.75v7.5c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75v-7.5a.77.77 0 0 0-.75-.75zm-1.5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zM2.5 6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375zm6.75 0c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375zm1.875-.375c.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-5.25c0-.187.164-.375.375-.375M4 6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375A.37.37 0 0 1 4 12.125zM5.875 6.5c.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-5.25c0-.187.164-.375.375-.375m1.5.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375z' />
    </g>
    <defs>
      <clipPath id='4ce8d79dd8cbb7577c3b208d8b4dccfc__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeCaptionRegularIcon);
export default ForwardRef;
