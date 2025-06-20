import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCaptionRegularIcon = (
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
      <path d='M7.75 6.5c0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C3.672 4.977 3.25 5.703 3.25 6.5c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0C7.305 8.047 7.75 7.32 7.75 6.5m-5.25 0c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0c.914.539 1.5 1.523 1.5 2.578A3.03 3.03 0 0 1 7 9.102c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.5 6.5M1 14.75h9c-.047-1.852-1.57-3.375-3.445-3.375H4.422A3.43 3.43 0 0 0 1 14.75m-.75.07a4.17 4.17 0 0 1 4.172-4.195h2.133a4.19 4.19 0 0 1 4.195 4.195c0 .375-.328.68-.703.68H.93a.68.68 0 0 1-.68-.68' />
    </g>
    <defs>
      <clipPath id='cb58293c4f5be8b495cd7b5c601fa6cc__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionRegularIcon);
export default ForwardRef;
