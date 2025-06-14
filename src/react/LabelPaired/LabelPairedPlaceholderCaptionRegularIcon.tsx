import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderCaptionRegularIcon = (
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
      <path d='M2.313 4.25h.562c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.562C1.586 5 1 5.61 1 6.313v.562c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.562c0-1.125.914-2.063 2.063-2.063M.625 8C.813 8 1 8.188 1 8.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25C.25 8.188.414 8 .625 8m9.75 0c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375m0-.75A.37.37 0 0 1 10 6.875v-.562C10 5.609 9.39 5 8.688 5h-.563a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.563a2.08 2.08 0 0 1 2.062 2.063v.562c0 .21-.187.375-.375.375m.375 4.875v.563a2.066 2.066 0 0 1-2.062 2.062h-.563a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.563C9.39 14 10 13.414 10 12.688v-.563c0-.187.164-.375.375-.375.188 0 .375.188.375.375m-9.75 0v.563A1.31 1.31 0 0 0 2.313 14h.562c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.562A2.05 2.05 0 0 1 .25 12.688v-.563c0-.187.164-.375.375-.375.188 0 .375.188.375.375m3.375 2.625A.37.37 0 0 1 4 14.375c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375zM4 4.625c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 4 4.625' />
    </g>
    <defs>
      <clipPath id='1499e9d340e3f7d9a473a457221a868a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderCaptionRegularIcon);
export default ForwardRef;
