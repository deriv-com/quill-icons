import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4.625c2.188 0 3.965 1.012 5.25 2.215 1.285 1.176 2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683c-.41.957-1.258 2.38-2.543 3.582-1.285 1.204-3.062 2.188-5.25 2.188-2.215 0-3.992-.984-5.277-2.187C1.438 13.484.59 12.062.18 11.105a.98.98 0 0 1 0-.683c.41-.985 1.257-2.406 2.543-3.582C4.008 5.637 5.785 4.625 8 4.625M4.063 10.75c0 1.422.738 2.707 1.968 3.418 1.203.71 2.707.71 3.938 0a3.97 3.97 0 0 0 1.969-3.418c0-1.395-.766-2.68-1.97-3.39a3.9 3.9 0 0 0-3.937 0 3.9 3.9 0 0 0-1.968 3.39M8 9c0-.191-.055-.355-.11-.547-.054-.137.055-.328.22-.328a2.64 2.64 0 0 1 2.406 1.969c.382 1.394-.438 2.816-1.86 3.199a2.603 2.603 0 0 1-3.199-1.86 2 2 0 0 1-.082-.546c-.027-.164.164-.274.3-.219.192.055.356.082.575.082C7.207 10.75 8 9.984 8 9' />
    </g>
    <defs>
      <clipPath id='9c09cd922eb42dc8e754b1e1723afd05__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSmFillIcon);
export default ForwardRef;
