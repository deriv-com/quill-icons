import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 10.75c0 .629-.055 1.203-.11 1.75H4.458a18 18 0 0 1-.082-1.75c0-.602.027-1.176.082-1.75h5.059c.054.574.109 1.148.109 1.75M10.391 9h3.363A6.3 6.3 0 0 1 14 10.75c0 .629-.082 1.203-.246 1.75H10.39c.054-.547.109-1.148.109-1.75s-.055-1.176-.11-1.75m3.09-.875h-3.2c-.273-1.723-.82-3.2-1.504-4.129 2.133.574 3.883 2.106 4.704 4.129m-4.075 0h-4.84c.164-.984.438-1.86.739-2.57.3-.657.601-1.121.93-1.422.3-.274.546-.383.765-.383.191 0 .438.11.738.383.328.3.63.765.93 1.422.3.71.574 1.586.738 2.57m-5.715 0H.492c.82-2.023 2.57-3.555 4.703-4.129-.683.93-1.23 2.406-1.504 4.129M.22 9h3.363a18 18 0 0 0-.082 1.75c0 .602.027 1.203.082 1.75H.219C.055 11.953 0 11.379 0 10.75 0 10.148.055 9.574.219 9m5.086 6.973a11.4 11.4 0 0 1-.739-2.598h4.84a11.4 11.4 0 0 1-.738 2.598c-.3.656-.602 1.12-.93 1.422-.3.273-.547.355-.738.355-.219 0-.465-.082-.766-.355-.328-.301-.629-.766-.93-1.422M3.69 13.375c.274 1.75.82 3.227 1.504 4.156a7.02 7.02 0 0 1-4.703-4.156zm9.79 0a7.02 7.02 0 0 1-4.704 4.156c.711-.93 1.23-2.406 1.504-4.156z' />
    </g>
    <defs>
      <clipPath id='e0a061b17356a8fe48c0df07a4b39e35__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeSmFillIcon);
export default ForwardRef;
