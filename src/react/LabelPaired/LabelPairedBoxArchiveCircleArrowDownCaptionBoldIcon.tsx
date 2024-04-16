import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5c0-.398.328-.75.75-.75h10.5c.398 0 .75.352.75.75v1.875c0 .422-.352.75-.75.75H.75a.74.74 0 0 1-.75-.75zm.75 3.375h1.125v4.875c0 .21.164.375.375.375h5.531c.14.422.375.797.657 1.125H2.25a1.48 1.48 0 0 1-1.5-1.5zm.375-3V6.5h9.75V5.375zM3.75 9.313c0-.305.234-.563.563-.563h3.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H4.313a.54.54 0 0 1-.563-.562m4.5 2.812a3.32 3.32 0 0 1 1.688-2.906 3.34 3.34 0 0 1 3.374 0A3.37 3.37 0 0 1 15 12.125c0 1.219-.656 2.32-1.687 2.93a3.34 3.34 0 0 1-3.376 0 3.36 3.36 0 0 1-1.687-2.93m1.781-.07a.397.397 0 0 0 0 .539c.446.422.89.867 1.313 1.312.14.14.398.14.539 0 .445-.445.867-.89 1.312-1.312a.397.397 0 0 0 0-.54.397.397 0 0 0-.539 0c-.21.235-.445.446-.656.68v-2.109a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v2.11c-.234-.235-.469-.446-.68-.68a.397.397 0 0 0-.539 0' />
    </g>
    <defs>
      <clipPath id='6c5e99e31db617e3397dc0cef39a1286__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownCaptionBoldIcon);
export default ForwardRef;
