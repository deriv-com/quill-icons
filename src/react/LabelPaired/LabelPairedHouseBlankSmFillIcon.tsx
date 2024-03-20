import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.848 10.75c0 .492-.41.875-.875.875h-.875L14.125 16c0 .984-.766 1.777-1.75 1.777h-8.75c-.984 0-1.75-.793-1.75-1.75v-4.402H1a.864.864 0 0 1-.875-.875c0-.246.082-.465.273-.656l7-6.125c.192-.192.41-.219.602-.219.191 0 .41.055.574.191l6.973 6.153c.219.191.328.41.3.656' />
    </g>
    <defs>
      <clipPath id='8a305647344d00dad263632f58fe09ac__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmFillIcon);
export default ForwardRef;
