import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h7.5v6c0 .844.656 1.5 1.5 1.5h6v1.828c-3.469.985-6 4.172-6 7.922 0 2.813 1.36 5.25 3.422 6.75H3c-1.687 0-3-1.312-3-3zm18 3h-6V6zm2.25 4.5c2.39 0 4.594 1.313 5.813 3.375 1.218 2.11 1.218 4.688 0 6.75A6.7 6.7 0 0 1 20.25 30a6.71 6.71 0 0 1-5.86-3.375c-1.218-2.062-1.218-4.64 0-6.75 1.22-2.062 3.422-3.375 5.86-3.375m0 4.5a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125m-1.5 2.25c0 .422.328.75.75.75v2.25c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H21c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75v-3c0-.375-.375-.75-.75-.75h-.75c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='e09a8807730ea7ea4ef7870bbe730ee2__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoXlFillIcon);
export default ForwardRef;
