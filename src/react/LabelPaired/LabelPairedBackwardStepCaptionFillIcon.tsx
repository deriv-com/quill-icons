import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepCaptionFillIcon = (
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
      <path d='m6.531 13.836-4.5-3.75-.281-.234v3.398a.73.73 0 0 1-.21.54A.73.73 0 0 1 1 14a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54v-7.5a.73.73 0 0 1 .21-.54A.73.73 0 0 1 1 5a.73.73 0 0 1 .54.21q.21.212.21.54v3.398l.281-.234 4.5-3.75q.352-.281.797-.094.399.21.422.68v7.5q-.024.47-.422.68-.445.187-.797-.094' />
    </g>
    <defs>
      <clipPath id='b11b80e237992cfe__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionFillIcon);
export default ForwardRef;
