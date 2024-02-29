import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornXlBoldIcon = (
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
      <path d='m20.25 9.469-.516.515a15.3 15.3 0 0 1-4.593 3.094A14.9 14.9 0 0 1 9.75 14.25v6q2.86.094 5.39 1.172 2.579 1.125 4.594 3.094l.516.515zM7.5 12h1.922q2.484 0 4.734-.937a12.2 12.2 0 0 0 3.985-2.672l1.78-1.782q.798-.702 1.642-.328.844.328.937 1.36v6.797q.657.327 1.078 1.078.422.75.422 1.734t-.422 1.734-1.078 1.078v6.797q-.094 1.032-.937 1.36-.844.375-1.641-.328l-1.781-1.782a12.4 12.4 0 0 0-3.844-2.625A13.2 13.2 0 0 0 9.75 22.5v4.875Q9.703 28.5 9 29.25q-.75.704-1.875.75h-1.5q-1.125-.046-1.875-.75-.703-.75-.75-1.875V22.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11V15q.047-1.266.89-2.11.844-.843 2.11-.89zM5.25 22.5v4.875q.046.329.375.375h1.5q.329-.046.375-.375V22.5zM3 14.25q-.703.047-.75.75v4.5q.046.704.75.75h4.5v-6z' />
    </g>
    <defs>
      <clipPath id='95a0bed9baaa8226aa0bba9d23d83bdf__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlBoldIcon);
export default ForwardRef;
