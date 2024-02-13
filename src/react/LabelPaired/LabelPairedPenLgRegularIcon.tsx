import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLgRegularIcon = (
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
      <path d='M15.469 7.063 13.32 9.172l3.008 3.008 2.11-2.149q.546-.663 0-1.328l-1.641-1.64q-.665-.547-1.328 0m-3.047 3.007-9.18 9.18a2.86 2.86 0 0 0-.625 1.094l-1.054 3.593 3.593-1.054q.626-.196 1.094-.625l9.18-9.18zm5.234-3.906 1.68 1.68q.625.663.625 1.523 0 .9-.625 1.563L7.109 23.117a3.54 3.54 0 0 1-1.562.977L.82 25.46q-.39.117-.625-.156-.273-.235-.156-.586l1.367-4.727a3.7 3.7 0 0 1 .938-1.601L14.57 6.164a2.2 2.2 0 0 1 1.563-.625q.859 0 1.523.625' />
    </g>
    <defs>
      <clipPath id='998b14c44b724bb255a2d8e4b1450916__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLgRegularIcon);
export default ForwardRef;
