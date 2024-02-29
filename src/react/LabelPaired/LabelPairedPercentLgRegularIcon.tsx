import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352m0 3.75q-1.406-.04-2.148-1.25-.705-1.25 0-2.5Q1.093 8.04 2.5 8q1.407.04 2.148 1.25.705 1.25 0 2.5Q3.907 12.96 2.5 13m10 6.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352m0 3.75q-1.406-.04-2.148-1.25-.705-1.25 0-2.5.741-1.21 2.148-1.25 1.407.04 2.148 1.25.705 1.25 0 2.5-.741 1.21-2.148 1.25m2.305-13.945-13.75 13.75q-.43.39-.86 0-.39-.43 0-.86l13.75-13.75q.43-.39.86 0 .39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='490f9c21edd78b2d28d9e4a8844bb333__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentLgRegularIcon);
export default ForwardRef;
