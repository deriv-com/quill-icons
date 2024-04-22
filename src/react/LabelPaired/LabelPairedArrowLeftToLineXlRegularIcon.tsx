import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineXlRegularIcon = (
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
      <path d='M0 26.25V9.75C0 9.375.328 9 .75 9c.375 0 .75.375.75.75v16.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75m4.688-8.766 6-6c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L7.03 17.25H20.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H7.031l4.735 4.734c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0l-6-6c-.282-.28-.282-.796 0-1.078' />
    </g>
    <defs>
      <clipPath id='fdf73f635e958e055dfd1d705e3ea15c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlRegularIcon);
export default ForwardRef;
