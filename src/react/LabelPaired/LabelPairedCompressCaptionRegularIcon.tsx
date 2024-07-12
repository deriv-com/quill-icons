import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressCaptionRegularIcon = (
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
      <path d='M4 4.625v3c0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H3.25V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M.625 11h3c.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11.75H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M7.75 4.625V7.25h2.625c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3A.37.37 0 0 1 7 7.625v-3c0-.187.164-.375.375-.375.188 0 .375.188.375.375M7.375 11h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.75v2.625c0 .21-.187.375-.375.375A.37.37 0 0 1 7 14.375v-3c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='5f2bc676b41b7064ddc9d45e6b1179cc__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionRegularIcon);
export default ForwardRef;
