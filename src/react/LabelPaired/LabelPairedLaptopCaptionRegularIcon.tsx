import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 5H3a.755.755 0 0 0-.75.75v6H1.5v-6c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v6h-.75v-6A.77.77 0 0 0 12 5M1.781 14h11.414c.47 0 .867-.305 1.008-.75H.773c.141.445.54.75 1.008.75M0 12.969c0-.258.188-.469.445-.469h14.086a.47.47 0 0 1 .469.469c0 .984-.82 1.781-1.805 1.781H1.781A1.78 1.78 0 0 1 0 12.969' />
    </g>
    <defs>
      <clipPath id='e6819edef752f3c5be17cfb6ec0b34b7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionRegularIcon);
export default ForwardRef;
