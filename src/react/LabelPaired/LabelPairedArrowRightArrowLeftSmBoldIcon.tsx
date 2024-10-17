import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.191 17.34.566 14.715c-.273-.246-.273-.656 0-.93l2.625-2.597a.6.6 0 0 1 .903 0 .6.6 0 0 1 0 .902L2.59 13.594h9.379c.355 0 .656.3.656.656 0 .383-.3.656-.656.656l-9.38.028 1.505 1.504a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0m9.243-9.625L9.809 10.34c-.274.273-.684.273-.93 0-.274-.246-.274-.656 0-.93l1.504-1.504H1.03a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h9.352L8.879 5.09c-.274-.246-.274-.656 0-.93.246-.246.656-.246.93 0l2.625 2.653a.644.644 0 0 1 0 .902' />
    </g>
    <defs>
      <clipPath id='494a0115b31e5ead22f718ecba99cf78__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmBoldIcon);
export default ForwardRef;
