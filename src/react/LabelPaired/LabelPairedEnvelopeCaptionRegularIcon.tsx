import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.938l4.594 3.351q.656.446 1.312 0l4.594-3.351V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zM.75 8.375V12.5q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8.375l-4.148 3.023q-.493.375-1.102.375t-1.102-.375zM0 6.5q.024-.632.445-1.055Q.868 5.024 1.5 5h9q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 12.5z' />
    </g>
    <defs>
      <clipPath id='e9e2dea0fc71894805919faf9adbfb6f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionRegularIcon);
export default ForwardRef;
