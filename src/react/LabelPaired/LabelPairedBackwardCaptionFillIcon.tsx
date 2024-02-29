import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionFillIcon = (
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
      <path d='M10.781 13.836 6.75 10.484V8.516l4.031-3.352q.352-.281.797-.094.399.21.422.68v7.5q-.024.47-.422.68-.445.187-.797-.094M6 11.75v1.5q-.024.47-.422.68-.445.187-.797-.094l-4.5-3.75A.73.73 0 0 1 0 9.5q0-.351.281-.586l4.5-3.75q.352-.281.797-.094.399.21.422.68v6' />
    </g>
    <defs>
      <clipPath id='a9a9953f4395630a73d3e798d56473a3__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionFillIcon);
export default ForwardRef;
