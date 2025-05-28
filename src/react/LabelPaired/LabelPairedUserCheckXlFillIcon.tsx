import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 12a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12M0 28.64c0-4.64 3.703-8.39 8.344-8.39h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64m29.297-14.343-6 6c-.469.469-1.172.469-1.594 0l-3-3a1.027 1.027 0 0 1 0-1.547c.422-.469 1.125-.469 1.594 0l2.203 2.203 5.203-5.25a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594z' />
    </g>
    <defs>
      <clipPath id='4124cfc1ef379646a152cc49a2c502d0__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckXlFillIcon);
export default ForwardRef;
