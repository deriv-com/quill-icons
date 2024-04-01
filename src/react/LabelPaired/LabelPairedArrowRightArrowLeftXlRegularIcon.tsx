import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftXlRegularIcon = (
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
      <path d='m20.766 12.563-4.5 4.5c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l3.234-3.234H.75A.74.74 0 0 1 0 12c0-.375.328-.75.75-.75h17.672l-3.235-3.187c-.28-.282-.28-.797 0-1.079.282-.28.797-.28 1.079 0l4.5 4.5c.28.282.28.797 0 1.079m-16.078 16.5-4.5-4.5c-.282-.282-.282-.797 0-1.079l4.5-4.5c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078L2.53 23.25H20.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H2.531l3.235 3.234c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0' />
    </g>
    <defs>
      <clipPath id='1699d6acdecd29837ab70dd1b583f2cb__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlRegularIcon);
export default ForwardRef;
