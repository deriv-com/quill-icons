import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 8h-3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.016A4.5 4.5 0 0 0 6 5a4.501 4.501 0 0 0 0 9c1.57 0 2.977-.82 3.773-2.04.07-.116.211-.21.352-.21.281 0 .469.305.305.563C9.516 13.789 7.852 14.75 6 14.75A5.24 5.24 0 0 1 .75 9.5 5.256 5.256 0 0 1 6 4.25c1.898 0 3.563 1.031 4.5 2.555v-2.18c0-.187.164-.375.375-.375.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375' />
    </g>
    <defs>
      <clipPath id='1b67912849bbb204390d608f59f6786f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightCaptionRegularIcon);
export default ForwardRef;
