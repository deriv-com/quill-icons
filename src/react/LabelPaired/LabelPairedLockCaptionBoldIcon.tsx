import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 6.5V8h3.75V6.5q-.023-.797-.54-1.336-.538-.516-1.335-.539-.797.023-1.336.54-.515.538-.539 1.335M2.5 8V6.5q.024-1.266.867-2.133.868-.843 2.133-.867 1.266.024 2.133.867.843.868.867 2.133V8h.75q.633.024 1.055.445.421.422.445 1.055V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V9.5q.024-.633.445-1.055Q1.117 8.024 1.75 8zM1.375 9.5V14q.023.352.375.375h7.5q.352-.023.375-.375V9.5q-.023-.352-.375-.375h-7.5q-.352.023-.375.375' />
    </g>
    <defs>
      <clipPath id='b829628ec41b2c41a46c36b61e0b565b__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockCaptionBoldIcon);
export default ForwardRef;
