import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftSmRegularIcon = (
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
      <path d='M0 4.188a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v13.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm4.375 4.375c0 .246.191.437.438.437h7.875a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438H4.812a.45.45 0 0 0-.437.438zM3.5 6.813c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 8.563zm.875 7.875c0 .246.191.437.438.437h4.375a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438H4.812a.45.45 0 0 0-.437.438zm-.875-1.75c0-.711.574-1.313 1.313-1.313h4.375c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 14.688z' />
    </g>
    <defs>
      <clipPath id='f0ff6f6d89400efd89ce1fe767f1a31e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftSmRegularIcon);
export default ForwardRef;
