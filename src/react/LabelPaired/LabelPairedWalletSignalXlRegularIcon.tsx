import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalXlRegularIcon = (
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
      <path d='M0 11.25C0 9.188 1.64 7.5 3.75 7.5h18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-18a2.25 2.25 0 0 0-2.25 2.25v13.5c0 1.266.984 2.25 2.25 2.25H16.5v1.5H3.75C1.64 28.5 0 26.86 0 24.75zm4.5 0c0-.375.328-.75.75-.75h15A3.76 3.76 0 0 1 24 14.25v3.281c-.516-.234-.984-.375-1.5-.562v-2.672a2.25 2.25 0 0 0-2.25-2.25h-15c-.422 0-.75-.375-.75-.75zm13.5 7.5c0-.375.328-.75.75-.75C24.938 18 30 23.063 30 29.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-5.344-4.406-9.75-9.75-9.75a.74.74 0 0 1-.75-.75m0 4.5c0-.375.328-.75.75-.75 3.703 0 6.75 3.047 6.75 6.75 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-2.86-2.39-5.25-5.25-5.25a.74.74 0 0 1-.75-.75m0 5.25c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='ffe0fd5c3e7f304b3e88561a3cd1e3bf__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalXlRegularIcon);
export default ForwardRef;
