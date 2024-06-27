import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightXlRegularIcon = (
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
      <path d='M3.516 27.563c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L10.922 18 2.438 9.563c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0l9 9c.28.282.28.797 0 1.078zm9 0c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L19.922 18l-8.484-8.437c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0l9 9c.28.282.28.797 0 1.078z' />
    </g>
    <defs>
      <clipPath id='8e14c59612049b1b8f269acfe583499e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightXlRegularIcon);
export default ForwardRef;
