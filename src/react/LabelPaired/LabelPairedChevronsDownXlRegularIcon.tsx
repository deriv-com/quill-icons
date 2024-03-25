import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlRegularIcon = (
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
      <path d='M2.438 9.563c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L12 16.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079l-9 9c-.282.28-.797.28-1.078 0zm0 9c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L12 25.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-9 9c-.282.282-.797.282-1.078 0z' />
    </g>
    <defs>
      <clipPath id='dd7abf32482b4374b0ca70b9e7593af2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlRegularIcon);
export default ForwardRef;
