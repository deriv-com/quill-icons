import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon = (
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
      <path d='M0 5c0-.398.328-.75.75-.75h10.5c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 6.5zm.75 0v1.5h10.5V5zm0 3h.75v5.25c0 .422.328.75.75.75h5.695c.14.281.305.54.492.75H2.25a1.48 1.48 0 0 1-1.5-1.5zm3 1.125c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3.75a.37.37 0 0 1-.375-.375m4.945 1.313a3.4 3.4 0 0 1 2.93-1.688c1.195 0 2.32.656 2.906 1.688a3.34 3.34 0 0 1 0 3.374 3.32 3.32 0 0 1-2.906 1.688 3.36 3.36 0 0 1-2.93-1.687 3.34 3.34 0 0 1 0-3.376m.657.374a2.626 2.626 0 0 0 4.546 2.626 2.63 2.63 0 0 0 0-2.626A2.66 2.66 0 0 0 11.625 9.5c-.937 0-1.805.516-2.273 1.313m.68.868 1.312-1.313c.14-.14.398-.14.539 0l1.312 1.313c.14.14.14.398 0 .539a.397.397 0 0 1-.539 0c-.21-.235-.445-.446-.656-.68v2.086c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.086c-.234.234-.469.445-.68.68a.397.397 0 0 1-.539 0 .397.397 0 0 1 0-.54M10.5 8h.75v.023c-.258.024-.516.07-.75.141z' />
    </g>
    <defs>
      <clipPath id='82eaa17fc463600fee3324f7cd85e97e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon);
export default ForwardRef;
