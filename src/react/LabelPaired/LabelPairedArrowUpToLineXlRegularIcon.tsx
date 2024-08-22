import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 7.5h16.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 8.25c0-.375.328-.75.75-.75m8.766 4.734 6 6c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L9.75 14.579V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V14.578l-4.734 4.735c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l6-6c.28-.28.796-.28 1.078 0' />
    </g>
    <defs>
      <clipPath id='334b427fb04d4336253cc157a93573b2__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlRegularIcon);
export default ForwardRef;
