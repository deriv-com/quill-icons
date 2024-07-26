import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareCaptionRegularIcon = (
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
      <path d='M7.875 3.5h3.75c.188 0 .375.188.375.375v3.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V4.789l-5.742 5.742a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l5.743-5.742H7.875a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M1.5 4.25h3.375c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1.5a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75h8.25c.398 0 .75-.328.75-.75v-3.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V5.75c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='a84b7672ba8d67bbb7254502dc45ef8f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionRegularIcon);
export default ForwardRef;
