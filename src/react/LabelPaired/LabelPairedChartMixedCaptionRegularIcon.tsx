import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.883 4.39c.14.141.14.376-.024.516l-4.125 3.75a.37.37 0 0 1-.515 0L4.453 5.867.586 8.68a.35.35 0 0 1-.516-.07c-.14-.165-.093-.4.07-.54l4.126-3c.14-.093.351-.07.492.047L7.5 7.86l3.867-3.492c.14-.14.375-.14.516.024M1.875 13.626v-1.5a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v1.5c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375M1.5 11c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-1.5C.375 11.515.867 11 1.5 11m3.375-1.125A.4.4 0 0 0 4.5 9.5a.385.385 0 0 0-.375.375v3.75c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375zm-1.5 0c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125zm4.5 3.75v-2.25A.4.4 0 0 0 7.5 11a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375M7.5 10.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-2.25c0-.61.492-1.125 1.125-1.125m3.375-.375A.4.4 0 0 0 10.5 9.5a.385.385 0 0 0-.375.375v3.75c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375zm-1.5 0c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='0837171cecd3da744883eecc3fdc8c7e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedCaptionRegularIcon);
export default ForwardRef;
