import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionFillIcon = (
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
      <path d='M1.492 13.836q-.375.281-.82.094-.398-.21-.422-.68v-7.5q.024-.469.422-.68.445-.187.82.094l4.5 3.75.258.234V5.75a.73.73 0 0 1 .21-.54A.73.73 0 0 1 7 5a.73.73 0 0 1 .54.21q.21.212.21.54v7.5a.73.73 0 0 1-.21.54A.73.73 0 0 1 7 14a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.852l-.258.234z' />
    </g>
    <defs>
      <clipPath id='5c7c9956bd1baf73b122e49cee719f74__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionFillIcon);
export default ForwardRef;
