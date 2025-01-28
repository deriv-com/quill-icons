import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.016 7.734 4.5 4.5c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L8.25 10.078V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V10.078l-3.234 3.235c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.5-4.5c.28-.28.796-.28 1.078 0m16.5 16.078-4.5 4.5c-.282.282-.797.282-1.078 0l-4.5-4.5c-.282-.28-.282-.796 0-1.078.28-.28.796-.28 1.078 0l3.234 3.235V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l3.188-3.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078' />
    </g>
    <defs>
      <clipPath id='a72391d4e1e023a701723ab60b425701__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlRegularIcon);
export default ForwardRef;
