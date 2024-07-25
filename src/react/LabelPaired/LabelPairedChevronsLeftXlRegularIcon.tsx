import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftXlRegularIcon = (
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
      <path d='m2.438 17.484 9-9c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L4.03 18l8.485 8.484c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0l-9-9c-.282-.28-.282-.796 0-1.078m18-9c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L13.03 18l8.485 8.484c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0l-9-9c-.282-.28-.282-.796 0-1.078z' />
    </g>
    <defs>
      <clipPath id='8b17f430557b6b9a8423d8f3b404e931__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlRegularIcon);
export default ForwardRef;
