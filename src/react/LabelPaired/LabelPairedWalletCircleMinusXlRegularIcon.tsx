import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCircleMinusXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 11.25C0 9.188 1.64 7.5 3.75 7.5h18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-18a2.25 2.25 0 0 0-2.25 2.25v13.5c0 1.266.984 2.25 2.25 2.25h12.14c.282.563.61 1.078.985 1.5H3.75C1.64 28.5 0 26.86 0 24.75zm4.5 0c0-.375.328-.75.75-.75h15A3.76 3.76 0 0 1 24 14.25v.797c-.281 0-.516-.047-.75-.047-.281 0-.516.047-.75.047v-.797c0-1.219-1.031-2.25-2.25-2.25h-15a.74.74 0 0 1-.75-.75m12 12c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m1.5 0c0-.375.328-.75.75-.75h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='77948439e46385e2de38804a9910da7a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusXlRegularIcon);
export default ForwardRef;
