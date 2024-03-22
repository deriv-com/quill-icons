import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 12v3h11.25A3.76 3.76 0 0 1 21 18.75v7.5c0 2.11-1.687 3.75-3.75 3.75H3.75C1.64 30 0 28.36 0 26.25v-7.5C0 16.688 1.64 15 3.75 15h.75v-3c0-3.281 2.672-6 6-6a5.95 5.95 0 0 1 5.719 4.313c.14.374-.094.796-.516.937-.375.094-.797-.094-.89-.516C14.25 8.86 12.516 7.5 10.5 7.5A4.5 4.5 0 0 0 6 12m-4.5 6.75v7.5c0 1.266.984 2.25 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-7.5c0-1.219-1.031-2.25-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25' />
    </g>
    <defs>
      <clipPath id='c88a6f78457c78326979707abc6ba65a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlRegularIcon);
export default ForwardRef;
