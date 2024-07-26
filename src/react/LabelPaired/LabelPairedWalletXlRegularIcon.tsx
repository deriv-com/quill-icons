import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 7.5h18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-18a2.25 2.25 0 0 0-2.25 2.25v13.5c0 1.266.984 2.25 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-10.5c0-1.219-1.031-2.25-2.25-2.25h-15a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h15A3.76 3.76 0 0 1 24 14.25v10.5c0 2.11-1.687 3.75-3.75 3.75H3.75C1.64 28.5 0 26.86 0 24.75v-13.5C0 9.188 1.64 7.5 3.75 7.5M18 20.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 18 20.625' />
    </g>
    <defs>
      <clipPath id='a549c82b850726ac0fad81fa8459d01b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlRegularIcon);
export default ForwardRef;
