import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.25 6.375c0-.957-.793-1.75-1.75-1.75-.984 0-1.75.793-1.75 1.75v4.375c0 .984.766 1.75 1.75 1.75.957 0 1.75-.766 1.75-1.75zm-4.375 0a2.626 2.626 0 0 1 5.25 0v4.375a2.626 2.626 0 0 1-5.25 0zM2 9.438v1.312a3.49 3.49 0 0 0 3.5 3.5c1.914 0 3.5-1.559 3.5-3.5V9.438A.45.45 0 0 1 9.438 9a.47.47 0 0 1 .437.438v1.312c0 2.27-1.75 4.156-3.937 4.375v1.75h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H3.313a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.75v-1.75c-2.215-.219-3.938-2.105-3.938-4.375V9.438A.45.45 0 0 1 1.563 9 .47.47 0 0 1 2 9.438' />
    </g>
    <defs>
      <clipPath id='b46ed0adb585f2d53c49d6a69db9f778__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneSmRegularIcon);
export default ForwardRef;
