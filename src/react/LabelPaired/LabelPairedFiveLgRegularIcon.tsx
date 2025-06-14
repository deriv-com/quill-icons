import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 7.258c.078-.313.313-.508.625-.508h8.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.219l-1.563 6.25H7.75c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5H3.531c-1.289 0-2.5-.703-3.086-1.875l-.156-.312c-.156-.313 0-.704.274-.86a.64.64 0 0 1 .859.274l.156.351c.39.742 1.133 1.211 1.953 1.211H7.75a3.751 3.751 0 0 0 0-7.5H.875a.67.67 0 0 1-.508-.273c-.117-.157-.156-.352-.117-.508z' />
    </g>
    <defs>
      <clipPath id='ad579c5abd559f8644b14905befba11f__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgRegularIcon);
export default ForwardRef;
