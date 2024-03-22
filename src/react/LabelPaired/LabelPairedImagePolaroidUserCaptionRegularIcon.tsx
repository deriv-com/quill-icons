import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserCaptionRegularIcon = (
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
      <path d='M8.125 12.5H1v.75c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75v-.75zm-.047-.75H10v-6A.77.77 0 0 0 9.25 5h-7.5a.755.755 0 0 0-.75.75v6h1.898a1.91 1.91 0 0 1 1.852-1.5h1.5c.89 0 1.664.656 1.828 1.5m-4.406 0h3.633C7.14 11.328 6.719 11 6.25 11h-1.5c-.492 0-.914.328-1.078.75m7.078-6v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5M6.25 8a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M5.5 6.5c.516 0 1.008.305 1.29.75a1.55 1.55 0 0 1 0 1.5c-.282.469-.774.75-1.29.75-.54 0-1.031-.281-1.312-.75a1.55 1.55 0 0 1 0-1.5c.28-.445.773-.75 1.312-.75' />
    </g>
    <defs>
      <clipPath id='4ec5d4a08958bbc4a9418f02f68f3c43__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionRegularIcon);
export default ForwardRef;
