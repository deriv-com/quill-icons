import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokXlIcon = (
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
      <path d='M21 15.844q-3.187 0-5.766-1.828v8.343q0 2.437-1.359 4.36-1.312 1.921-3.562 2.812-2.297.798-4.547.235-2.25-.562-3.891-2.391a7.76 7.76 0 0 1-1.828-4.172q-.234-2.296.89-4.453 1.173-2.11 3.235-3.187 2.109-1.032 4.5-.75v4.218q-1.125-.327-2.156.047-1.032.328-1.735 1.266a3.5 3.5 0 0 0-.656 2.062q0 1.079.656 2.063a3.53 3.53 0 0 0 1.782 1.218q1.03.375 2.156 0a3.55 3.55 0 0 0 1.734-1.265q.657-.89.656-2.063V6h4.125q0 .516.094 1.031.516 2.391 2.531 3.75a6 6 0 0 0 3.141.985z' />
    </g>
    <defs>
      <clipPath id='375b7d5c5c5e8578bbc66161b5bb8f2d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokXlIcon);
export default ForwardRef;
