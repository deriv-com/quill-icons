import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 5.563c0-.305.234-.563.563-.563A.57.57 0 0 1 7 5.563v7.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-2.461l-4.148 2.906a.6.6 0 0 1-.399.117.69.69 0 0 1-.703-.703v-7.57A.71.71 0 0 1 1.328 5c.14 0 .281.047.399.14l4.148 2.907zm0 4.054v-.21L1.75 6.522V12.5z' />
    </g>
    <defs>
      <clipPath id='0d6ae6c633a73afdac6af7d65442354a__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionBoldIcon);
export default ForwardRef;
