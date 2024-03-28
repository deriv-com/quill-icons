import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.137 7.168c.328 1.148.328 3.61.328 3.61s0 2.433-.328 3.609a1.82 1.82 0 0 1-1.313 1.312C12.648 16 8 16 8 16s-4.676 0-5.852-.3a1.82 1.82 0 0 1-1.312-1.313c-.328-1.176-.328-3.61-.328-3.61s0-2.46.328-3.609a1.86 1.86 0 0 1 1.312-1.34C3.324 5.5 8 5.5 8 5.5s4.648 0 5.824.328a1.86 1.86 0 0 1 1.313 1.34m-8.668 5.824 3.883-2.215-3.883-2.214z' />
    </g>
    <defs>
      <clipPath id='c2ff1253f240529ebc99065b388b5c6c__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeSmIcon);
export default ForwardRef;
