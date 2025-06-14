import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchCaptionRegularIcon = (
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
      <path d='M3.25 3.875c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5v1.523A4.86 4.86 0 0 1 8.852 7.11l.867-.867c.14-.14.398-.14.539 0 .14.14.14.375 0 .54l-.89.89a4.83 4.83 0 0 1 1.007 2.953c0 2.695-2.203 4.875-4.875 4.875a4.87 4.87 0 0 1-4.875-4.875 4.86 4.86 0 0 1 4.5-4.852V4.25h-1.5a.37.37 0 0 1-.375-.375m-1.875 6.75c0 1.477.773 2.836 2.063 3.586a4.18 4.18 0 0 0 4.124 0 4.18 4.18 0 0 0 2.063-3.586c0-1.453-.797-2.812-2.062-3.562a4.18 4.18 0 0 0-4.125 0 4.12 4.12 0 0 0-2.063 3.562m4.5-2.25V11c0 .21-.187.375-.375.375A.37.37 0 0 1 5.125 11V8.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='f7047d572b51d4ea71630bf842a39549__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionRegularIcon);
export default ForwardRef;
