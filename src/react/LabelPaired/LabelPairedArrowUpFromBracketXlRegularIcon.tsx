import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketXlRegularIcon = (
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
      <path d='m11.016 6.234 6 6c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L11.25 8.578V21.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.578l-4.734 4.735c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l6-6c.28-.28.796-.28 1.078 0M1.5 21.75v4.5c0 1.266.984 2.25 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 2.11-1.687 3.75-3.75 3.75H3.75C1.64 30 0 28.36 0 26.25v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='b9b73ccb0fb2a5f84fdddb255ea65219__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketXlRegularIcon);
export default ForwardRef;
