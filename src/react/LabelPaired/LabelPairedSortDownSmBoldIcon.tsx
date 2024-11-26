import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.5 15.398 2.434-2.46H2.039zm-.629 1.23-3.5-3.5a.88.88 0 0 1-.191-.956.9.9 0 0 1 .82-.547h7c.355 0 .656.219.793.547a.88.88 0 0 1-.191.957l-3.5 3.5a.843.843 0 0 1-1.23 0' />
    </g>
    <defs>
      <clipPath id='595bca1f23930e4cfd852152b98301ea__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmBoldIcon);
export default ForwardRef;
