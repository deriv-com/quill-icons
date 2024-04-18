import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckLgRegularIcon = (
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
      <path d='M7.422 8.313a.634.634 0 0 1-.742.312 2.87 2.87 0 0 0-2.89.703 2.87 2.87 0 0 0-.704 2.89.634.634 0 0 1-.313.743c-.937.469-1.523 1.445-1.523 2.539 0 1.133.586 2.07 1.523 2.578.274.156.391.43.313.742a2.87 2.87 0 0 0 .703 2.89 2.87 2.87 0 0 0 2.89.704c.313-.078.626.04.743.313.508.937 1.445 1.523 2.578 1.523 1.094 0 2.07-.586 2.54-1.523a.654.654 0 0 1 .741-.313c.977.313 2.11.078 2.89-.703a2.87 2.87 0 0 0 .704-2.89c-.078-.313.04-.626.313-.743.937-.508 1.562-1.445 1.562-2.578 0-1.094-.625-2.07-1.562-2.54a.654.654 0 0 1-.313-.741 2.87 2.87 0 0 0-.703-2.89 2.87 2.87 0 0 0-2.89-.704.634.634 0 0 1-.743-.312A2.84 2.84 0 0 0 10 6.75c-1.133 0-2.07.625-2.578 1.563M10 5.5c1.406 0 2.656.742 3.398 1.797A4.2 4.2 0 0 1 17.07 8.43a4.2 4.2 0 0 1 1.133 3.672C19.258 12.844 20 14.094 20 15.5c0 1.445-.742 2.656-1.797 3.438a4.1 4.1 0 0 1-1.133 3.632c-1.015 1.016-2.383 1.407-3.672 1.172A4.16 4.16 0 0 1 10 25.5c-1.445 0-2.656-.703-3.437-1.758A4.02 4.02 0 0 1 2.93 22.57a4.02 4.02 0 0 1-1.172-3.633C.703 18.158 0 16.946 0 15.5a4.16 4.16 0 0 1 1.758-3.398c-.235-1.29.156-2.657 1.172-3.672a4.1 4.1 0 0 1 3.633-1.133C7.343 6.242 8.555 5.5 10 5.5m4.18 7.969-5 5a.66.66 0 0 1-.899 0l-2.5-2.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.07 2.07 4.531-4.57a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='5affc762681287921c258249e76bf620__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckLgRegularIcon);
export default ForwardRef;
