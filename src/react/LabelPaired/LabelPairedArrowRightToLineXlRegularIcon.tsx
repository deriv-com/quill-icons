import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineXlRegularIcon = (
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
      <path d='M21 9.75v16.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75m-4.734 8.813-6 6c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.734-4.734H.75A.74.74 0 0 1 0 18c0-.375.328-.75.75-.75h13.172l-4.735-4.687c-.28-.282-.28-.797 0-1.079.282-.28.797-.28 1.079 0l6 6c.28.282.28.797 0 1.078' />
    </g>
    <defs>
      <clipPath id='6ee3c01357bbf639bd6730f485c173f8__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlRegularIcon);
export default ForwardRef;
