import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLeftSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m1.75-3.937a.65.65 0 0 0 .656-.657c0-.355-.3-.656-.656-.656H6.152l3.72-3.691a.644.644 0 0 0 0-.903c-.274-.273-.684-.273-.93 0L5.25 11.598V8.78c0-.355-.3-.656-.656-.656-.383 0-.657.3-.657.656v4.375c0 .383.274.656.657.656z' />
    </g>
    <defs>
      <clipPath id='c331a70cb32f3d4d387c44e42437888d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftSmFillIcon);
export default ForwardRef;
