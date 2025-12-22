import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpXlRegularIcon = (
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
      <path d='M11.438 11.484c.28-.28.796-.28 1.078 0l9 9c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L12 13.079l-8.484 8.485c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079z' />
    </g>
    <defs>
      <clipPath id='1dccc2a548aba7523feb1e701a7a05d9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpXlRegularIcon);
export default ForwardRef;
