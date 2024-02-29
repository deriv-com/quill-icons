import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 14.375h5.79q.375.515.913.938a1.3 1.3 0 0 1-.703.187h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h3.89q.61 0 1.055.445l2.11 2.11q.445.445.445 1.078v1.219l-1.125.445V7.25H6.25a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.75q-.352.023-.375.375v9q.023.352.375.375m8.414-5.578a.5.5 0 0 1 .422 0l2.812 1.125q.329.14.352.515.024.774-.258 1.735-.258.96-.937 1.851-.704.89-1.97 1.43a.5.5 0 0 1-.42 0q-1.266-.54-1.97-1.43-.68-.89-.937-1.851-.282-.96-.258-1.735.024-.374.352-.515zm2.438 2.015-2.227-.89v4.406q1.172-.632 1.688-1.617.491-.96.539-1.899' />
    </g>
    <defs>
      <clipPath id='b4b2c7f487cc4bba8dd66fbc00136f0b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionBoldIcon);
export default ForwardRef;
