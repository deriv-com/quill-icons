import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.227 6.79c1.015.233 1.68 1.21 1.484 2.226l-.117.43c-.196 1.054-.586 2.03-1.094 2.929h5.625c1.016 0 1.875.86 1.875 1.875a1.91 1.91 0 0 1-1.016 1.68c.43.351.703.86.703 1.445 0 .938-.664 1.68-1.523 1.875.156.273.273.586.273.938 0 .859-.546 1.562-1.328 1.796.04.118.078.274.078.391 0 1.055-.859 1.875-1.875 1.875h-3.828a3.6 3.6 0 0 1-2.07-.625l-1.523-.977a3.82 3.82 0 0 1-1.641-3.125v-4.335c0-1.172.508-2.227 1.406-2.93l.274-.235c1.015-.859 1.758-1.992 1.992-3.32l.078-.43c.234-1.015 1.21-1.68 2.227-1.484M1.25 13h2.5c.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25h-2.5C.547 24.25 0 23.703 0 23v-8.75C0 13.586.547 13 1.25 13' />
    </g>
    <defs>
      <clipPath id='dd8c62b054e21c55a074cea321f6e6f6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpLgFillIcon);
export default ForwardRef;
