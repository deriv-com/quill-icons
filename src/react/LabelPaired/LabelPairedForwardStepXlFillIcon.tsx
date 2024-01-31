import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.484 26.672q-.75.562-1.64.187Q.047 26.44 0 25.5v-15q.047-.937.844-1.36.89-.375 1.64.188l9 7.5.516.469V10.5q0-.656.422-1.078Q12.843 9 13.5 9t1.078.422Q15 9.843 15 10.5v15q0 .657-.422 1.078Q14.157 27 13.5 27q-.656 0-1.078-.422Q12 26.157 12 25.5v-6.797l-.516.469z' />
    </g>
    <defs>
      <clipPath id='feb281f326970d14__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlFillIcon);
export default ForwardRef;
