import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 4.188 5.75 7.75c.938-.906 2.125-1.531 3.5-1.687V4.75A.74.74 0 0 1 10 4a.76.76 0 0 1 .75.75v1.313a6.034 6.034 0 0 1 5.188 5.187h1.312A.76.76 0 0 1 18 12a.74.74 0 0 1-.75.75h-1.312a5.5 5.5 0 0 1-.813 2.344l4.563 3.594c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125m5.78 4.5 1.188.937A3.1 3.1 0 0 1 10 9a3 3 0 0 1 3 3c0 .438-.094.844-.25 1.219l1.188.937A4.5 4.5 0 0 0 14.5 12c0-2.469-2.031-4.5-4.5-4.5-1.187 0-2.25.469-3.031 1.188m4.5 3.53V12a1.5 1.5 0 0 0-1.5-1.5c-.187 0-.374.063-.53.125zm.188 3.97 1.281 1.03a5.4 5.4 0 0 1-2.187.75v1.282A.74.74 0 0 1 10 20a.72.72 0 0 1-.75-.75v-1.281c-2.719-.344-4.875-2.5-5.219-5.188H2.75a.74.74 0 0 1-.75-.75c0-.437.313-.75.75-.75h1.281a4.5 4.5 0 0 1 .188-.937l1.312 1.031c-.031.219-.031.438-.031.625 0 2.5 2 4.5 4.5 4.5.563 0 1.125-.094 1.656-.312' />
    </g>
    <defs>
      <clipPath id='1cca1ce3bcfbd6f3da4b08162587901d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashMdBoldIcon);
export default ForwardRef;
