import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownCaptionFillIcon = (
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
      <path d='M0 5c0-.398.328-.75.75-.75h10.5c.398 0 .75.352.75.75v.75c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 5.75zm.75 2.25h10.5v.773a4.126 4.126 0 0 0-3.75 4.102c0 1.008.352 1.922.938 2.625H2.25a1.48 1.48 0 0 1-1.5-1.5zm3 1.875c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-3.75a.385.385 0 0 0-.375.375m4.5 3a3.32 3.32 0 0 1 1.688-2.906 3.34 3.34 0 0 1 3.374 0A3.37 3.37 0 0 1 15 12.125c0 1.219-.656 2.32-1.687 2.93a3.34 3.34 0 0 1-3.376 0 3.36 3.36 0 0 1-1.687-2.93m1.781-.07a.397.397 0 0 0 0 .539l1.313 1.312c.14.14.398.14.539 0l1.312-1.312a.397.397 0 0 0 0-.54.397.397 0 0 0-.539 0l-.656.68v-2.109a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v2.11l-.68-.68a.397.397 0 0 0-.539 0' />
    </g>
    <defs>
      <clipPath id='8edfb2f368ff551c2a3c9f8a3df6b8e3__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownCaptionFillIcon);
export default ForwardRef;
